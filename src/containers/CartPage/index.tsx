import React from "react";
import { useStyles } from "./style";
import { Descriptions } from "antd";
import CartList from "../CartList";

const CartPage: React.FC = (): JSX.Element => {
  const classes = useStyles();

  const phonesInCart = [
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
    <section className={classes.container}>      
      <CartList/>
      {/* <table style={{ width: 200 }}>
        <tr>
          <th>Firstname</th>
          <th>Lastname</th>
          <th>Age</th>
        </tr>
        <tr>
          <td>Jill</td>
          <td>Smith</td>
          <td>50</td>
        </tr>
        <tr>
          <td>Eve</td>
          <td>Jackson</td>
          <td>94</td>
        </tr>
      </table> */}
    </section>
  );
};

export default CartPage;
