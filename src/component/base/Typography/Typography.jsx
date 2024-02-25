import React from "react";
import styles from "./Typography.module.css";

const Typography = (props) => {
  const { children, variant, color = "black" } = props;
  return (
    <div className={`${styles[variant]} ${styles[color]}`} {...props}>
      {children}
    </div>
  );
};

export default React.memo(Typography);
