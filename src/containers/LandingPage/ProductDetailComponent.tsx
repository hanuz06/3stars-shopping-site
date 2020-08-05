import React from "react";
import { useStyles } from "./style";
import { Modal, Spin } from "antd";

const ProductDetailComponent: React.FC<any> = (props): JSX.Element => {
  const classes = useStyles();

  return (
    <Modal
      title="Please wait..."
      visible={props.visible}
      // okButtonProps={{ disabled: true }}
      // cancelButtonProps={{ disabled: true }}
      okText=''
    >
      <Spin size="large" style={{marginLeft:'45%'}} />
    </Modal>
  );
};

export default ProductDetailComponent;
