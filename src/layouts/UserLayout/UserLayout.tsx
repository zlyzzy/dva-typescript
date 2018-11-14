import { Icon } from "antd";
import { Link, Route } from "dva/router";
import React from "react";
// import { getRouteData } from "UTILS/utils";
import styles from "./UserLayout.less";

class UserLayout extends React.PureComponent {
  public render() {
    // console.log(getRouteData("UserLayout"))
    return (
      <div className={styles.container}>
        <div>
          <p className={styles.title}>灵犀金融内部导航系统</p>
          {this.props.children}
        </div>
      </div>
    );
  }
}

export default UserLayout;
