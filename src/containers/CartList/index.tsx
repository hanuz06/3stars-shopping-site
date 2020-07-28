import React from "react";
import { useStyles } from "./style";
import CartItem from "../CartItem";

const CartList: React.FC = (phones:any): JSX.Element => {
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
      id: 2,
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
    <>
      {phonesInCart.map((phone: any) => (
        <CartItem key={phone.id} {...phone} />
      ))}
    </>
  );
};

export default CartList;
