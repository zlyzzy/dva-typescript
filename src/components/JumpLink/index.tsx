import classNames from "classnames";
import styles from "./index.less";
import { connect } from "dva";
import React, { Component } from "react";
import queryString from "query-string";
import { Card, Icon, Button, Modal, Form, Input, Select } from "antd";
import { FormComponentProps } from "antd/lib/form";
import { validateLink } from "UTILS/utils";
import { IdepartmentContentList, IdepartmentList } from "INTERFACE/department";

interface IProps extends FormComponentProps {
  dispatch?: any;
  departmentList: Array<IdepartmentList>;
  departmentContentList: Array<IdepartmentContentList>;
}
interface IState {
  addVisible: boolean;
}
const FormItem = Form.Item;
const Option = Select.Option;

class JumpLink extends Component<IProps, IState> {
  constructor(props) {
    super(props);
    this.state = {
      addVisible: false
    };
    //获取内容
    this.props.dispatch({
      type: "content/getDepartmentContent",
      payload: {}
    });
  }
  showModal = () => {
    this.setState({
      addVisible: true
    });
  };
  handleOk = e => {
    this.props.form.validateFields({ force: true }, (err, values) => {
      if (!err) {
        this.props
          .dispatch({
            type: "content/addContent",
            payload: values
          })
          .then(success => {
            if (success) {
              this.setState({
                addVisible: false
              });
              this.props.form.resetFields();
            }
          });
      }
    });
  };
  handleCancel = e => {
    this.setState({
      addVisible: false
    });
  };
  validatePath = (rule, value, callback) => {
    if (value && !validateLink(value)) {
      callback("必须以http(s)://开头");
    }
    callback();
  };

  render() {
    const { getFieldDecorator } = this.props.form;
    const formItemLayout = {
      labelCol: {
        span: 6
      },
      wrapperCol: {
        span: 18
      }
    };
    return (
      <div>
        {this.props.departmentContentList && (
          <div className="clearfloat">
            {this.props.departmentContentList.map(link => {
              return (
                <Card
                  title={link.name}
                  bordered={false}
                  className={styles.links}
                  key={link._id}
                >
                  <a
                    target="_blank"
                    href={link.path}
                    className="mb15 block"
                    title={`前往${link.name}`}
                  >
                    <Button type="primary">
                      {link.name}
                      <Icon type="right" />
                    </Button>
                  </a>
                  {link.guidePath && (
                    <div>
                      <span className="bold">指导：</span>
                      <a href={link.guidePath} target="_blank">
                        注册使用指导
                        <Icon type="arrow-right" />
                      </a>
                    </div>
                  )}
                  {link.describtion && (
                    <div>
                      <span className="bold">说明：</span>
                      {link.describtion}
                    </div>
                  )}
                </Card>
              );
            })}
            <Card title="新增" bordered={false} className={styles.links}>
              <div className="text-center">
                <Button
                  type="primary"
                  shape="circle"
                  icon="plus"
                  onClick={this.showModal}
                />
              </div>
            </Card>
          </div>
        )}

        <Modal
          title="新增应用链接"
          cancelText="取消"
          centered={true}
          visible={this.state.addVisible}
          footer={[
            <Button key="back" onClick={this.handleCancel}>
              取消
            </Button>,
            <Button key="submit" type="primary" onClick={this.handleOk}>
              确定
            </Button>
          ]}
        >
          <Form>
            <FormItem label="应用名称" {...formItemLayout}>
              {getFieldDecorator("name", {
                rules: [
                  {
                    required: true,
                    message: "请输入应用名称"
                  }
                ]
              })(<Input type="text" placeholder="应用名称" />)}
            </FormItem>
            <FormItem label="应用地址" {...formItemLayout}>
              {getFieldDecorator("path", {
                rules: [
                  {
                    required: true,
                    message: "请输入应用地址"
                  },
                  {
                    validator: this.validatePath
                  }
                ]
              })(
                <Input type="text" placeholder="应用地址（以http(s)://开头）" />
              )}
            </FormItem>
            <FormItem label="指导地址" {...formItemLayout}>
              {getFieldDecorator("guidePath", {
                rules: [
                  {
                    validator: this.validatePath
                  }
                ]
              })(
                <Input type="text" placeholder="指导地址（以http(s)://开头）" />
              )}
            </FormItem>
            <FormItem label="应用描述" {...formItemLayout}>
              {getFieldDecorator("describtion", {
                rules: [
                  {
                    max: 20,
                    message: "不能超过20个字"
                  }
                ]
              })(<Input type="text" placeholder="应用描述，不能超过20个字" />)}
            </FormItem>
            <FormItem label="所属部门" {...formItemLayout}>
              {getFieldDecorator("department", {
                rules: [
                  {
                    required: true,
                    message: "请选择所属部门"
                  }
                ]
              })(
                <Select
                  mode="multiple"
                  style={{ width: "100%" }}
                  placeholder="Please select"
                >
                  {this.props.departmentList.map(item => {
                    return (
                      item._id != "0" && (
                        <Option value={item._id} key={item._id}>
                          {item.name}
                        </Option>
                      )
                    );
                  })}
                </Select>
              )}
            </FormItem>
          </Form>
        </Modal>
      </div>
    );
  }
}
function mapStateToProps(state) {
  return {
    departmentContentList: state.content.departmentContentList,
    departmentList: state.global.departmentList
  };
}
export default connect(mapStateToProps)(Form.create()(JumpLink));
