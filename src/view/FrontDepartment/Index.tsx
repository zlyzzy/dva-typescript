import { connect } from "dva";
import { Button } from "antd";
import React, { Component } from "react";
import styles from "./Index.less";
import JumpLink from "COMPONENTS/JumpLink";
// 前端部门
interface IProps {
  dispatch?: any;
  location?: any;
}
interface IState {}
class Front extends Component<IProps, IState> {
  constructor(props) {
    super(props);
    document.title = "前端技术部";
  }
  render() {
    return (
      <div>
        <JumpLink />
      </div>
    );
  }
}
export default connect()(Front);
