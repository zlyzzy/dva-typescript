import { Button, Form, Icon, Input, Select } from "antd";
import { connect } from "dva";
import { routerRedux } from "dva/router";

import React, { Component } from "react";
import styles from "./Register.less";
import { FormComponentProps } from "antd/lib/form";

const FormItem = Form.Item;
const Option = Select.Option;

interface IProps extends FormComponentProps {
  dispatch?: any;
  location?: any;
  user: {
    loading?: boolean;
    departmentList: Array<{ id: number; name: string }>;
  };
}
class Register extends Component<IProps, any> {
  constructor(props) {
    super(props);
  }
  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        this.props.dispatch({
          type: "user/register",
          playload: values
        });
      }
    });
  };
  public render() {
    const { getFieldDecorator } = this.props.form;
    const { departmentList } = this.props.user;
    const { dispatch } = this.props;
    return (
      <div className={styles.main}>
        <Form onSubmit={this.handleSubmit} className="login-form">
          <FormItem>
            {getFieldDecorator("username", {
              rules: [{ required: true, message: "请输入用户名!" }]
            })(
              <Input
                prefix={<Icon type="user" className={styles.prefixIcon} />}
                placeholder="用户名"
              />
            )}
          </FormItem>
          <FormItem>
            {getFieldDecorator("password", {
              rules: [{ required: true, message: "请输入密码!" }]
            })(
              <Input
                prefix={<Icon type="lock" className={styles.prefixIcon} />}
                type="password"
                placeholder="密码"
              />
            )}
          </FormItem>
          <FormItem>
            {getFieldDecorator("departmentId", {
              rules: [{ required: true, message: "请选择部门" }]
            })(
              <Select showSearch placeholder="请选择部门">
                {departmentList.map(item => {
                  return (
                    <Option value={item.id} key={item.name}>
                      {item.name}
                    </Option>
                  );
                })}
              </Select>
            )}
          </FormItem>
          <FormItem>
            <span
              className="pull-right color-primary pointer"
              onClick={() => {
                dispatch(routerRedux.push("/user/login"));
              }}
            >
              已有账号？登录
            </span>
            <Button
              type="primary"
              htmlType="submit"
              size="large"
              className="wp100"
            >
              注册
            </Button>
          </FormItem>
        </Form>
      </div>
    );
  }
}

const WrappedNormalRegisterForm = Form.create()(Register);
export default connect(state => ({
  user: state.user
}))(WrappedNormalRegisterForm);
