import React from "react";
import styles from "./Test.module.css";
import Typography from "../../component/base/Typography/Typography";

const TestView = (props) => {
  const {} = props;

  return (
    <div className={[`${styles.container}`]}>
      <div>
        <Typography variant="title">Title</Typography>
        <Typography variant="title" color="gray">
          Title
        </Typography>
        <Typography variant="title" color="lightgray">
          Title
        </Typography>
        <Typography variant="title" color="error">
          Title
        </Typography>

        <Typography variant="subtitle">Subtitle</Typography>
        <Typography variant="subtitle" color="gray">
          Subtitle
        </Typography>
        <Typography variant="subtitle" color="lightgray">
          Subtitle
        </Typography>
        <Typography variant="subtitle" color="error">
          Subtitle
        </Typography>
        <Typography>Body</Typography>
        <Typography color="gray">Body</Typography>
        <Typography color="lightgray">Body</Typography>
        <Typography color="error">Body</Typography>
      </div>
    </div>
  );
};

export default TestView;
