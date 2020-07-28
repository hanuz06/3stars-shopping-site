import React from "react";
import { useStyles } from "./style";
import { Descriptions } from "antd";

import pic from "../../data/pic/product-1.png";

const CartItem: React.FC = (props:any): JSX.Element => {
  const classes = useStyles();

  const phonesInCart = {
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
  };

  return (
    <div
      className="row my-1 text-capitalize text-center"
      style={{ marginLeft: 600, marginTop: 50 }}
    >
      <div className="col-10 mx-auto col-lg-2">
        <img
          src={pic}
          style={{ width: "5rem", height: "5rem" }}
          className="img-fluid"
          alt="product"
        />
      </div>
      <div className="col-10 mx-auto col-lg-2">
        <span className="d-lg-none">product : </span>
        {props.title}
      </div>
      <div className="col-10 mx-auto col-lg-2">
        <span className="d-lg-none">price : </span>
        {props.price}
      </div>
      <div className="col-10 mx-auto col-lg-2 my-2 my-lg-0">
        <div className="d-flex justify-content-center">
          <div>
            <span
              className="btn btn-black mx-1"
              onClick={() => {}}
              style={{
                background: "transparent",
                textTransform: "capitalize",
                fontSize: "0.8rem",
                borderRadius: 0,
              }}
            >
              -
            </span>
            <span className="btn btn-black mx-1">{props.count}</span>
            <span
              className="btn btn-black mx-1"
              onClick={() => {}}
              style={{
                background: "transparent",
                textTransform: "capitalize",
                fontSize: "0.8rem !important",
                borderRadius: 0,
              }}
            >
              +
            </span>
          </div>
        </div>
      </div>
      {/* */}
      <div className="col-10 mx-auto col-lg-2">
        <div className="cart-icon" onClick={()=>{}}>
          {/* //Here place trash icon */}
        </div>
      </div>
      <div className="col-10 mx-auto col-lg-2">
        <strong>item total :$ {props.total} </strong>
      </div>
    </div>
  );
};

export default CartItem;
