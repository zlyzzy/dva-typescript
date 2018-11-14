import { Button,Form,Icon,Input } from "antd";
import { connect } from "dva";
import { FormComponentProps } from "antd/lib/form";
import { routerRedux } from "dva/router";
import React, { Component } from "react";
import styles from "./Login.less";

const FormItem = Form.Item;
interface IProps {
  dispatch?: any;
  loading?: any
  user: {
    loginData: {
      username: any;
      password: any;
    };
  };
}

class Login extends Component<IProps & FormComponentProps, any> {

  constructor(props) {
    super(props);
  }

  handleSubmit = e => {
    e.preventDefault();

    this.props.form.validateFields({ force: true }, (err, values) => {
      if (!err) {
        this.props.dispatch({
          type: "user/login",
          payload: values
        });
      }
    });
  };

  render() {
    const { form, loading ,dispatch} = this.props;
    const { getFieldDecorator } = form;

    return (
      <div className={styles.main}>
        <Form onSubmit={this.handleSubmit}>
          <FormItem>
            {getFieldDecorator("username", {
              rules: [
                {
                  required: true,
                  message: "请输入账户名！"
                }
              ]
            })(
              <Input
                size="large"
                prefix={<Icon type="user" className={styles.prefixIcon} />}
                placeholder="用户名"
              />
            )}
          </FormItem>
          <FormItem>
            {getFieldDecorator("password", {
              rules: [
                {
                  required: true,
                  message: "请输入密码！"
                }
              ]
            })(
              <Input
                size="large"
                prefix={<Icon type="lock" className={styles.prefixIcon} />}
                type="password"
                placeholder="密码"
              />
            )}
          </FormItem>

          <FormItem className={styles.additional}>
            <span className="pull-right color-primary pointer" onClick={()=>{dispatch(routerRedux.push("/user/register"))}}>
              没有账号？注册
            </span>
            <Button
              size="large"
              loading={loading['user/login']}
              className={styles.submit}
              type="primary"
              htmlType="submit"
            >
              登录
            </Button>
          </FormItem>
        </Form>
      </div>
    );
  }
}

const WrappedNormalLoginForm = Form.create()(Login);
export default connect(state => ({
  user: state.user,
  loading: state.loading.effects
}))(WrappedNormalLoginForm);

