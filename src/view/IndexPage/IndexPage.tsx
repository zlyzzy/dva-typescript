import { connect } from "dva";
import { Button, Checkbox } from "antd";

import React, { Component } from "react";
import styles from "./IndexPage.less";
import { Idepartment } from "INTERFACE/department";
import { getStorage } from "UTILS/utils";

const CheckboxGroup = Checkbox.Group;

interface IProps {
  dispatch?: any;
  location?: any;
  allDepartmentList: Array<Idepartment>; //所有部门列表
}
@connect(state => ({
  allDepartmentList: state.global.allDepartmentList
}))
class IndexPage extends Component<IProps, any> {
  constructor(props) {
    super(props);
    this.state = {
      plainOptions: [],
      plainOptionsValue: [],
      checkedList: [],
      indeterminate: false,
      checkAll: false
    };
  }
  componentWillMount() {
    this.getList();
  }

  //获取所有部门列表
  getList() {
    let plainOptions = [];
    let plainOptionsValue = [];
    this.props
      .dispatch({
        type: "global/getAllDepartmentList",
        payload: {}
      })
      .then(success => {
        if (success) {
          this.props.allDepartmentList.forEach(item => {
            plainOptions.push({
              ...item,
              label: item.name,
              value: item.code
            });
            plainOptionsValue.push(item.code);
          });
          this.setState(
            {
              plainOptions: plainOptions,
              plainOptionsValue: plainOptionsValue
            },
            this.getCheckedList
          );
        }
      });
  }

  getCheckedList() {
    let list = JSON.parse(getStorage("departmentList"));
    let checkedList = [];
    list.forEach(item => {
      checkedList.push(item.code);
    });
    this.onChange(checkedList);
  }

  onChange = checkedList => {
    this.setState({
      checkedList,
      indeterminate:
        !!checkedList.length &&
        checkedList.length < this.state.plainOptions.length,
      checkAll: checkedList.length === this.state.plainOptions.length
    });
  };

  onCheckAllChange = e => {
    this.setState({
      checkedList: e.target.checked ? this.state.plainOptionsValue : [],
      indeterminate: false,
      checkAll: e.target.checked
    });
  };

  onSave = e => {
    let checkedList = this.state.plainOptions.filter(info => {
      if (this.state.checkedList.includes(info.code)) {
        return info;
      }
    });
    this.props.dispatch({
      type: "global/saveDepartmentList",
      payload: checkedList
    });
    this.props.dispatch({
      type: "global/saveDepartmentMap"
    });
  };
  render() {
    return (
      <div className={styles.indexPage}>
        <p className="bold fs18 mb20">订阅侧栏菜单：</p>
        <div>
          <div className={styles.selectAll}>
            <Checkbox
              indeterminate={this.state.indeterminate}
              onChange={this.onCheckAllChange}
              checked={this.state.checkAll}
            >
              全选
            </Checkbox>
          </div>
          <br />
          <CheckboxGroup
            className={styles.checkboxGroup}
            options={this.state.plainOptions}
            value={this.state.checkedList}
            onChange={this.onChange}
          />
        </div>
        <div className={styles.footer}>
          <Button type="primary" onClick={this.onSave}>
            保 存
          </Button>
        </div>
      </div>
    );
  }
}

export default connect()(IndexPage);
