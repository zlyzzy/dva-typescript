import { connect } from "dva";
import {Button} from 'antd';
 import React ,{Component}from "react";
import styles from "./IndexPage.less";
import { routerRedux } from "dva/router";


interface IProps {
  dispatch?: any
}

class IndexPage extends Component<IProps,any> {
  constructor(props) {
    super(props);
  }
  goList(){
   this.props.dispatch(routerRedux.push("/list/table-list"))
  }
  render(){
    return (
      <div className={styles.normal}>
        <h1 className={styles.title}>ideacome-guide</h1>
        <Button type="primary" onClick={this.goList.bind(this)}>跳转mock列表</Button>
      </div>
    )
  }
}


export default connect()(IndexPage);
