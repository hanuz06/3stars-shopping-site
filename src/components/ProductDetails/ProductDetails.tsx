import React, { FC, useState } from "react";
import { useStyles } from "./style";
import { Modal, Button } from "antd";

interface Props<T> {
  id: number;
  title: T;
  image: T;
  price: number;
  company: T;
  info: T;
}

const PhoneCard: React.FC<Props<string>> = ({
  id,
  title,
  image,
  price,
  company,
  info,
}): JSX.Element => {
  const [visible, setVisible] = useState<boolean>(false);
  const classes = useStyles();

  const showModal = () => {
    setVisible(true);
  };

  const handleOk = (e:any) => {
    console.log(e);
    setVisible(false);
  };

  const handleCancel = (e:any) => {
    console.log(e);
    setVisible(false);
  };

  return (
    <>
      <Button type="primary" onClick={showModal}>
        Open Modal
      </Button>
      <Modal
        title="Basic Modal"
        visible={visible}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Modal>
    </>
  );
};

export default PhoneCard;
