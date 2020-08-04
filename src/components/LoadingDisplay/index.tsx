import React from "react";
import { useStyles } from "./style";
import { Modal, Spin } from "antd";

const LoadingDisplay: React.FC<any> = (props): JSX.Element => {
  const classes = useStyles();

  return (
    <Modal
      title="Please wait..."
      visible={props.loading}
      okButtonProps={{ disabled: true }}
      cancelButtonProps={{ disabled: true }}      
    >
      <Spin size="large" style={{marginLeft:'45%'}} />
    </Modal>
  );
};

export default LoadingDisplay;
