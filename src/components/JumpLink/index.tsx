import classNames from "classnames";
import styles from "./index.less";
import { connect } from "dva";
import React, { Component } from "react";
import queryString from "query-string";
import { Card } from "antd";
interface IdepartmentContentList {
  _id: string; //唯一id
  name: string; //名称
  path: string; //地址
  image: string; //图片
  guidePath?: string; //注册使用指导链接
  describtion?: string; //描述
}
interface IProps {
  dispatch?: any;
  departmentContentList: Array<IdepartmentContentList>;
  currentDepartmentId: string;
}
interface IState {}
class JumpLink extends Component<IProps, IState> {
  constructor(props) {
    super(props);
    this.props.dispatch({
      type: "content/getDepartmentContent",
      payload: {
        _id: this.props.currentDepartmentId
      }
    });
  }
  render() {
    return (
      <div>
        {this.props.departmentContentList && (
          <div className="clearfloat">
            {this.props.departmentContentList.map(link => {
              let imagePath = link.image ? link.image : "empty.png";
              return (
                <Card
                  title={link.name}
                  bordered={false}
                  className={styles.links}
                  key={link._id}
                >
                  <a
                    target="_blank"
                    href={link.path}
                    className="block mb10 text-center"
                    title={`前往${link.name}`}
                  >
                    <img
                      src={require("ASSETS/images/" + imagePath)}
                      className={styles.image}
                    />
                  </a>
                  {link.guidePath && (
                    <div>
                      {" "}
                      <a href={link.guidePath} target="_blank">
                        注册使用指导
                      </a>
                    </div>
                  )}
                  {link.describtion && <div>说明：{link.describtion}</div>}
                </Card>
              );
            })}
          </div>
        )}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    departmentContentList: state.content.departmentContentList,
    currentDepartmentId: state.global.currentDepartmentId
  };
}

export default connect(mapStateToProps)(JumpLink);
