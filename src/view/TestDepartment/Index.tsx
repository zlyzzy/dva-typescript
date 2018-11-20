import { connect } from "dva";
import { Button } from "antd";
import React, { Component } from "react";
import styles from "./Index.less";
import JumpLink from "COMPONENTS/JumpLink";

interface IProps {
  dispatch?: any;
  location?: any;
}
interface IState {}
class Front extends Component<IProps, IState> {
  constructor(props) {
    super(props);
  }
  render() {
    let { location } = this.props;
    return (
      <div>
        <JumpLink location={location} />
      </div>
    );
  }
}
export default connect()(Front);
