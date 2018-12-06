import { connect } from "dva";
import React, { Component } from "react";
import styles from "./Index.less";
import { Card } from "antd";
import list, { IListItem } from "./list";

class InnerSystem extends Component<any, { list: Array<IListItem> }> {
  constructor(props) {
    super(props);
    this.state = {
      list: list
    };
  }
  cardTitle = (item: IListItem) => {
    return (
      <div>
        <span className="mr5">{item.title}</span>
        <a href={item.gitUrl} target="_blank" className="fs16">
          ({item.gitName})
        </a>
      </div>
    );
  };
  render() {
    const { list } = this.state;
    console.log(list);
    return (
      <div className={styles.innerSystem}>
        {list.map((item, item_index) => {
          return (
            <Card
              title={this.cardTitle(item)}
              key={item_index}
              className="mb10"
            >
              {item.environmentList.map((environment, environment_index) => {
                return (
                  <div key={environment_index} className="mb20">
                    <div className="mb10 fs18 bold">{environment.title}: </div>
                    {environment.info.map((info, info_index) => {
                      return (
                        <div className="ml15 mb5" key={info_index}>
                          <span className="mr20">
                            {info.name}：
                            <a
                              title={info.name}
                              href={info.url}
                              target="_blank"
                            >
                              {info.url}
                            </a>
                          </span>
                          <span>
                            {info.backName}：
                            <span title={info.backName}>{info.backUrl}</span>
                          </span>
                        </div>
                      );
                    })}
                  </div>
                );
              })}
            </Card>
          );
        })}
      </div>
    );
  }
}
export default connect()(InnerSystem);
