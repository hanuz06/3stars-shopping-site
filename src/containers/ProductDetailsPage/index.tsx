import React, { useEffect, useState, memo } from "react";
import { Typography, Card, Button } from "antd";
import { useStyles } from "./style";
import { NavLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useFirestoreConnect } from "react-redux-firebase";
import { ProductDetails } from "../../utils/types";

import pic from "../../data/pic/product-1.png";

const { Title, Text } = Typography;

// const product = {
//   id: 1,
//   title: "Google Pixel - Black",
//   img: "./pic/product-1.png",
//   price: 10,
//   company: "GOOGLE",
//   info:
//     "Lorem ipsum dolor amet offal butcher quinoa sustainable gastropub, echo park actually green juice sriracha paleo. Brooklyn sriracha semiotics, DIY coloring book mixtape craft beer sartorial hella blue bottle.",
//   inCart: false,
//   count: 0,
//   total: 0,
// }

const ProductDetailsPage: React.FC = (props: any): JSX.Element => {
  const classes = useStyles();

  // // Connect to Firestore and get a single product by id
  useFirestoreConnect([
    { collection: "phones", doc: props.match.params.id },
    { collection: "headsets", doc: props.match.params.id },
  ]);

  const dispatch = useDispatch();

  // Get a phone from Firestore
  const selectedPhone = useSelector<any, any>(
    (state) => state.firestore.ordered.phones
  );

  // Get a headset from Firestore
  const selectedHeadset = useSelector<any, any>(
    (state) => state.firestore.ordered.headsets
  );
  const id: string = props.match.params.id;

  let product: ProductDetails<string> | null = null;
  // Get product id from props that get id from url
  if (selectedPhone) {
    product = selectedPhone[0];
  } else if (selectedHeadset) {
    product = selectedHeadset[0];
  } else {
    product = null;
  }

  if (product) {
    return (
      <section className={classes.container}>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ textAlign: "center" }}>
            <Title level={3}>{product.title}</Title>
          </div>
          <div className={classes.wrapperContainer}>
            <div className={classes.innerContainer}>
              <img src={pic} alt="product picture" className={classes.image} />
            </div>
            <div className={classes.innerContainer}>
              <Card
                bordered={false}
                style={{ maxWidth: 300, backgroundColor: "#F0F2F5" }}
              >
                <Title level={4}>{product.title}</Title>
                <br />
                <Text strong>Manufacturer:</Text>
                <p>{product.company}</p>
                <Text strong>Price</Text>
                <p>${product.price}</p>
                <Text strong>Description:</Text>
                <p>{product.info}</p>
              </Card>
              <div className={classes.buttonContainer}>
                <NavLink exact to="/">
                  <Button
                    size="large"
                    type="primary"
                    className={classes.backToProductsButton}
                  >
                    Back to products
                  </Button>
                </NavLink>
                <NavLink to="/cart">
                  <Button
                    size="large"
                    type="default"
                    className={classes.addToCartButton}
                  >
                    Add to cart
                  </Button>
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  } else {
    return (
      <div
        style={{
          width: "100%",
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#fff",
        }}
      >
        {/* <p>Loading...</p> */}
      </div>
    );
  }
};

export default memo(ProductDetailsPage);
