import React from "react";
import { useStyles } from "./style";
import { Typography } from "antd";
import CartColumns from "../../components/CartColumns";
import CartList from "../CartList";
import CartTotal from "../CartTotal";

const { Title } = Typography;

const CartPage: React.FC = (): JSX.Element => {
  const classes = useStyles();

  const phonesInCart: any = [
    {
      id: 1,
      title: "Google Pixel - Black",
      img: "./pic/product-1.png",
      price: 10,
      company: "Google",
      info:
        "Lorem ipsum dolor amet offal butcher quinoa sustainable gastropub, echo park actually green juice sriracha paleo. Brooklyn sriracha semiotics, DIY coloring book mixtape craft beer sartorial hella blue bottle.",
      inCart: false,
      count: 0,
      total: 0,
    },
    {
      id: 1,
      title: "Google Pixel - Black",
      img: "./pic/product-1.png",
      price: 10,
      company: "Google",
      info:
        "Lorem ipsum dolor amet offal butcher quinoa sustainable gastropub, echo park actually green juice sriracha paleo. Brooklyn sriracha semiotics, DIY coloring book mixtape craft beer sartorial hella blue bottle.",
      inCart: false,
      count: 0,
      total: 0,
    },
  ];

  return (
    <div className={classes.container}>
      <div className={classes.innerContainer}>
        <Title level={1}>Your cart</Title>
        <CartColumns />
        <CartList />
        <CartTotal/>
      </div>
    </div>
  );
};

export default CartPage;