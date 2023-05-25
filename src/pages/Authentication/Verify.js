import React from "react";
import { Progress } from "antd";
import { withRouter } from "react-router-dom";

const EmailVerified = (props) => {
  return (
    <>
      <div
        style={{
          maxWidth: "768px",
          marginLeft: "auto",
          marginRight: "auto",
          marginTop: "200px",
        }}
      >
        <h1 style={{ textAlign: "center" }}>
          Almost done. Please check your inbox!
        </h1>
        <Progress
          percent={99.9}
          strokeColor={{ "0%": "#108ee9", "100%": "#87d068" }}
        />
      </div>
    </>
  );
};

export default withRouter(EmailVerified);
