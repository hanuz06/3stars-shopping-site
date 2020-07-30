import React from "react";
import { useStyles } from "./style";
import { Button, Typography } from "antd";
import { FaCcPaypal } from "react-icons/fa";

const { Title, Text } = Typography;

const CartTotal: React.FC = (phones: any): JSX.Element => {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <div className={classes.innerContainer}>
        <Button type="default" size="large">
          <Title level={4} style={{ color: "#F36161" }}>
            CLEAR CART
          </Title>
        </Button>
        <div className={classes.totalContainerStyle}>
          <div className={classes.totalStyle}>
            <Title level={4}>
              <span>SUBTOTAL:</span> <strong>$80</strong>
            </Title>
          </div>
          <div className={classes.totalStyle}>
            <Title level={4}>
              <span>TAX:</span> <strong>$8</strong>
            </Title>
          </div>
          <div className={classes.totalStyle}>
            <Title level={4}>
              <span>TOTAL:</span> <strong>$88</strong>
            </Title>
          </div>
          <Button
            type="default"
            size="large"
            shape="round"
            className={classes.paypalButtonStyle}
          >
            <FaCcPaypal size="1.2em" /> <Text strong>Checkout</Text>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CartTotal;
