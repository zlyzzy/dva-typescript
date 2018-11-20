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
}
interface IProps {
  dispatch?: any;
  location?: any;
  departmentContentList: Array<IdepartmentContentList>;
}
interface IState {}
class JumpLink extends Component<IProps, IState> {
  constructor(props) {
    super(props);
    this.props.dispatch({
      type: "content/getDepartmentContent",
      payload: {
        _id: queryString.parse(this.props.location.search).id
      }
    });
  }
  render() {
    return (
      <div>
        {this.props.departmentContentList && (
          <div className="clearfloat">
            {this.props.departmentContentList.map(link => (
              <Card
                title={link.name}
                bordered={false}
                className={styles.links}
                key={link._id}
              >
                <a
                  target="_blank"
                  href={link.path}
                  className="block"
                  title={`前往${link.name}`}
                >
                  <img
                    src={require("ASSETS/images/" + link.image)}
                    className={styles.image}
                  />
                </a>
                {link.guidePath && (
                  <a
                    className="block mt10"
                    href={link.guidePath}
                    target="_blank"
                  >
                    注册使用指导
                  </a>
                )}
              </Card>
            ))}
          </div>
        )}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    departmentContentList: state.content.departmentContentList
  };
}

export default connect(mapStateToProps)(JumpLink);
