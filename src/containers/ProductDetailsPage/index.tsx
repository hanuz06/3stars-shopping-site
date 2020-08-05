import React, { useEffect, useState, memo } from "react";
import { Typography, Card, Button, Spin } from "antd";
import { useStyles } from "./style";
import { NavLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useFirestoreConnect } from "react-redux-firebase";
import { LoadingOutlined } from "@ant-design/icons";

import pic from "../../data/pic/product-1.png";

const antIcon = <LoadingOutlined style={{ fontSize: 28 }} spin />;

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
  const [selectedProduct, setSelectedProduct] = useState<any>({});
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

  // Get product id from props that get id from url
  const id: string = props.match.params.id;

  useEffect(() => {
    if (selectedPhone) {
      setSelectedProduct(selectedPhone[0]);
    } else if (selectedHeadset) {
      setSelectedProduct(selectedHeadset[0]);
    } else {
      setSelectedProduct({});
    }
  }, [selectedPhone, selectedHeadset]);

  useEffect(() => {
    setSelectedProduct({});
  }, []);

  if (selectedProduct) {
    return (
      <section className={classes.container}>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ textAlign: "center" }}>
            <Title level={3}>{selectedProduct.title}</Title>
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
                <Title level={4}>{selectedProduct.title}</Title>
                <br />
                <Text strong>Manufacturer:</Text>
                <p>{selectedProduct.company}</p>
                <Text strong>Price</Text>
                <p>${selectedProduct.price}</p>
                <Text strong>Description:</Text>
                <p>{selectedProduct.info}</p>
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
        <Spin indicator={antIcon} />
      </div>
    );
  }
};

export default memo(ProductDetailsPage);
