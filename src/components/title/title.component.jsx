import React from "react";
import styles from "./title.module.css";

const Title = ({ titleName }) => {
  return (
    <div className={styles.header}>
      <h1 className={styles.title}>{titleName}</h1>
      <hr className={styles.line} />
    </div>
  );
};

export default Title;
