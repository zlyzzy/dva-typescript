import { Divider, Icon, Layout, Menu, Button } from "antd";
import classNames from "classnames";
import { connect } from "dva";
import { Link, routerRedux } from "dva/router";
import React from "react";
import { ContainerQuery } from "react-container-query";
import styles from "./BasicLayout.less";
import { getStorage } from "UTILS/utils";

const { Header, Sider, Content } = Layout;
const { SubMenu } = Menu;

const query = {
  "screen-xs": {
    maxWidth: 575
  },
  "screen-sm": {
    maxWidth: 767,
    minWidth: 576
  },
  "screen-md": {
    maxWidth: 991,
    minWidth: 768
  },
  "screen-lg": {
    maxWidth: 1199,
    minWidth: 992
  },
  "screen-xl": {
    minWidth: 1200
  }
};

interface IProps {
  location?: any;
  dispatch?: any;
  collapsed?: any;
  path?: any;
  navList: Array<Object>;
}
interface IState {
  openKeys?: any;
  selectedKeys?: any;
}
@connect(state => ({
  collapsed: state.global.collapsed,
  navList: state.global.navList
}))
export default class BasicLayout extends React.PureComponent<IProps, IState> {
  constructor(props) {
    super(props);
    console.log("basiclayout渲染");
    this.props.dispatch({
      type: "global/saveNavList",
      payload: JSON.parse(getStorage("navList"))
    });
    this.state = {
      selectedKeys: this.setSelectedKeys()
    };
  }
  //设置选中的菜单
  setSelectedKeys(): Array<string> {
    let { location } = this.props;
    return [location.pathname];
  }
  //设置默认展开项
  getDefaultOpenKeys(): Array<string> {
    let { path } = this.props;
    return [path];
  }
  //点击链接的item
  clickItem({ keyPath }) {
    this.setState({
      selectedKeys: keyPath
    });
  }
  // 响应式触发折叠
  onCollapse(collapsed) {
    this.props.dispatch({
      type: "global/changeLayoutCollapsed",
      payload: collapsed
    });
  }

  //点击折叠函数
  switchCollapsed() {
    const { collapsed } = this.props;
    this.props.dispatch({
      type: "global/changeLayoutCollapsed",
      payload: !collapsed
    });
  }

  //获取侧栏菜单
  getNavMenuItems(navList) {
    return navList.map(item => {
      if (item.children) {
        return (
          <SubMenu
            key={item.path}
            title={
              <span>
                <Icon type={item.icon} />
                <span>{item.name}</span>
              </span>
            }
          >
            {this.getNavMenuItems(item.children)}
          </SubMenu>
        );
      } else {
        return (
          <Menu.Item key={item.path}>
            {/^https?:\/\//.test(item.path) ? (
              <a href={item.path} target={item.target}>
                <Icon type={item.icon} />
                <span>{item.name}</span>
              </a>
            ) : (
              <Link
                to={item.path}
                target={item.target}
                replace={item.path === location.pathname}
              >
                <Icon type={item.icon} />
                <span>{item.name}</span>
              </Link>
            )}
          </Menu.Item>
        );
      }
    });
  }

  render() {
    const { collapsed } = this.props;
    const layout = (
      <Layout>
        <Sider
          trigger={null}
          collapsible={true}
          collapsed={collapsed}
          breakpoint="md"
          width={256}
          onCollapse={this.onCollapse.bind(this)}
          className={styles.sider}
        >
          <div className={styles.logo}>
            <img src={require("ASSETS/images/logo.png")} alt="logo" />
            <h1>导航系统</h1>
          </div>
          <Menu
            theme={"dark"}
            mode={"inline"}
            onClick={this.clickItem.bind(this)}
            defaultOpenKeys={this.getDefaultOpenKeys()}
            selectedKeys={this.state.selectedKeys}
          >
            {this.getNavMenuItems(this.props.navList)}
          </Menu>
        </Sider>
        <Layout
          className={classNames({
            [styles.ml256]: !collapsed,
            ml80: collapsed
          })}
        >
          <Header
            className={classNames({
              [styles.ml256]: !collapsed,
              ml80: collapsed,
              [styles.header]: true
            })}
          >
            <Icon
              className={styles.trigger}
              type={collapsed ? "menu-unfold" : "menu-fold"}
              onClick={this.switchCollapsed.bind(this)}
            />
            <Button
              className="pull-right mt15"
              onClick={() => {
                this.props.dispatch(
                  routerRedux.push({
                    pathname: "/user/login",
                    search: ""
                  })
                );
              }}
            >
              退出
            </Button>
          </Header>
          <Content
            style={{
              margin: "24px 24px 0",
              overflow: "initial",
              marginTop: "64px"
            }}
          >
            {this.props.children}
          </Content>
        </Layout>
      </Layout>
    );

    return (
      <ContainerQuery query={query}>
        {params => <div className={classNames(params)}>{layout}</div>}
      </ContainerQuery>
    );
  }
}
