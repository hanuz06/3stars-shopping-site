import React from "react";
import { Typography, Card, Button } from "antd";
import { useStyles } from "./style";
import { NavLink } from "react-router-dom";
import pic from "../../data/pic/product-1.png";

const { Title, Text } = Typography;

const phone = {
  id: 1,
  title: "Google Pixel - Black",
  img: "./pic/product-1.png",
  price: 10,
  company: "GOOGLE",
  info:
    "Lorem ipsum dolor amet offal butcher quinoa sustainable gastropub, echo park actually green juice sriracha paleo. Brooklyn sriracha semiotics, DIY coloring book mixtape craft beer sartorial hella blue bottle.",
  inCart: false,
  count: 0,
  total: 0,
};

const ProductDetailsPage: React.FC = (props: any): JSX.Element => {
  const classes = useStyles();
  return (
    <section className={classes.container}>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <div style={{ textAlign: "center" }}>
          <Title level={3}>{phone.title}</Title>
        </div>
        <div className={classes.wrapperContainer}>
          <div className={classes.innerContainer}>
            <img src={pic} alt="phone" className={classes.image} />
          </div>
          <div className={classes.innerContainer}>
            <Card
              bordered={false}
              style={{ maxWidth: 300, backgroundColor: "#F0F2F5" }}
            >
              <Title level={4}>{phone.title}</Title>
              <br />
              <Text strong>Manufacturer:</Text>
              <p>{phone.company}</p>
              <Text strong>Price</Text>
              <p>${phone.price}</p>
              <Text strong>Description:</Text>
              <p>{phone.info}</p>
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
              <NavLink exact to="/cart">
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
};

export default ProductDetailsPage;
