import React from "react";
import { useStyles } from "./style";
import { Typography } from "antd";

const { Title } = Typography;

const CartColumns: React.FC = (): JSX.Element => {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <div className={classes.columnStyle}>
        <Title level={4}>PRODUCTS</Title>
      </div>
      <div className={classes.columnStyle}>
        <Title level={4}>MODEL</Title>
      </div>
      <div className={classes.columnStyle}>
        <Title level={4}>PRICE</Title>
      </div>
      <div className={classes.columnStyle}>
        <Title level={4}>QUANTITY</Title>
      </div>
      <div className={classes.columnStyle}>
        <Title level={4}>REMOVE</Title>
      </div>
      <div className={classes.columnStyle}>
        <Title level={4}>TOTAL</Title>
      </div>
    </div>
  );
};

export default CartColumns;
