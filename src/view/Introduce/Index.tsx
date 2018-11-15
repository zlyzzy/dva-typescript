import { connect } from "dva";
import { Button } from "antd";
import React, { Component } from "react";
import styles from "./Index.less";
import { routerRedux } from "dva/router";

interface IProps {
  dispatch?: any;
}

class Introduce extends Component<IProps, any> {
  constructor(props) {
    super(props);
  }

  render() {
    return <div>公司介绍页面</div>;
  }
}

export default connect()(Introduce);
