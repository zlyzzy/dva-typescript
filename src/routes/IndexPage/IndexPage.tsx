import { connect } from "dva";
import React from "react";
import styles from "./IndexPage.less";

function IndexPage() {
  return (
    <div className={styles.normal}>
      <h1 className={styles.title}>ideacome-guide</h1>
    </div>
  );
}

export default connect()(IndexPage);
