import classNames from "classnames";
import styles from "./index.less";
import { connect } from "dva";
import React, { Component } from "react";
import queryString from "query-string";
import { Card, Icon, Button, Modal, Form, Input, Select, Tooltip } from "antd";
import { FormComponentProps } from "antd/lib/form";
import { validateLink } from "UTILS/utils";
import { IdepartmentContent, Idepartment } from "INTERFACE/department";

interface IProps extends FormComponentProps {
  dispatch?: any;
  departmentList: Array<Idepartment>;
  departmentContentList: Array<IdepartmentContent>;
  contentObj: IdepartmentContent;
}
interface IState {
  addVisible: boolean;
  title: string;
}
const FormItem = Form.Item;
const Option = Select.Option;

class JumpLink extends Component<IProps, IState> {
  constructor(props) {
    super(props);
    this.state = {
      addVisible: false,
      title: "新增应用"
    };
  }
  //确定
  handleOk = e => {
    this.props.form.validateFields({ force: true }, (err, values) => {
      if (!err) {
        this.props
          .dispatch({
            type: values._id ? "content/updateContent" : "content/addContent",
            payload: values
          })
          .then(success => {
            if (success) {
              this.switchAddVisible(false);
            }
          });
      }
    });
  };

  //弹框关闭开启
  switchAddVisible(value) {
    this.setState({
      addVisible: value
    });
    if (!value) {
      this.props.form.resetFields();
    }
  }
  //验证地址
  validatePath = (rule, value, callback) => {
    if (value && !validateLink(value)) {
      callback("必须以http(s)://开头");
    }
    callback();
  };

  //编辑
  itemEdit(link) {
    this.props.dispatch({
      type: "content/saveContentObj",
      payload: link
    });
    this.setState({
      title: "编辑应用"
    });
    this.switchAddVisible(true);
  }
  //cardTitle渲染
  cardTitle = link => {
    return (
      <div>
        <span>{link.name}</span>
        <Icon
          type="edit"
          className="pull-right pointer hover-primary"
          onClick={() => {
            this.itemEdit(link);
          }}
        />
      </div>
    );
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
                  title={this.cardTitle(link)}
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
          </div>
        )}
        <Tooltip placement="left" title="新增应用">
          <Button
            type="primary"
            shape="circle"
            icon="plus"
            size="large"
            className={styles.addContent}
            onClick={() => {
              this.switchAddVisible(true);
              this.setState({
                title: "新增应用"
              });
            }}
          />
        </Tooltip>
        <Modal
          title={this.state.title}
          cancelText="取消"
          centered={true}
          onCancel={() => {
            this.switchAddVisible(false);
          }}
          visible={this.state.addVisible}
          maskClosable={false}
          footer={[
            <Button
              key="back"
              onClick={() => {
                this.switchAddVisible(false);
              }}
            >
              取消
            </Button>,
            <Button key="submit" type="primary" onClick={this.handleOk}>
              确定
            </Button>
          ]}
        >
          <Form>
            <FormItem label="应用名称" {...formItemLayout} className="none">
              {getFieldDecorator("_id", {})(<span />)}
            </FormItem>
            <FormItem label="应用名称" {...formItemLayout}>
              {getFieldDecorator("name", {
                rules: [
                  {
                    required: true,
                    message: "请输入应用名称"
                  },
                  {
                    max: 10,
                    message: "不能超过10个字"
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
                  placeholder="请选择所属部门"
                >
                  {this.props.departmentList.map(item => {
                    return (
                      item._id != "0" && (
                        <Option value={item.code} key={item.code}>
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
    departmentList: state.global.departmentList,
    contentObj: state.content.contentObj
  };
}
export default connect(mapStateToProps)(
  Form.create<IProps>({
    mapPropsToFields(props) {
      const { contentObj } = props;
      let obj = {};
      for (let i in contentObj) {
        obj[i] = Form.createFormField({
          value: contentObj[i]
        });
      }
      return obj;
    }
  })(JumpLink)
);
