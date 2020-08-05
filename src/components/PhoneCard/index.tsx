import React, { FC } from "react";
import { useStyles } from "./style";
import { Card, Avatar, Typography, Space } from "antd";
import { ShoppingCartOutlined } from "@ant-design/icons";
import { FcViewDetails } from "react-icons/fc";
import { NavLink } from "react-router-dom";
import pic from "../../data/pic/product-1.png";

const { Meta } = Card;
const { Text, Link } = Typography;

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
  const classes = useStyles();

  return (
    <NavLink to={`/details/${id}`}>
      <Card
        className={classes.cardContainer}
        cover={
          <img
            alt="phone"
            src={pic}
            style={{ width: 150, height: 170, margin: "auto" }}
          />
        }
        actions={[
          <ShoppingCartOutlined key="cart" style={{ fontSize: "25px" }} />,
          <FcViewDetails style={{ fontSize: "25px" }} />,
        ]}
        bordered={false}
        hoverable
        loading={false}
        size="small"      
      >
        <Meta
          title={title}
          description="Lorem ipsum dolor amet offal butcher quinoa sustainable gastropub, echo park"
        />
        <div className={classes.textContainer}>
          <Text className={classes.textStyle}>Company: </Text>
          <Text className={classes.textStyle}> {company}</Text>
        </div>
        <Text>Price: </Text>
        <Text>{price}</Text>
      </Card>
    </NavLink>
  );
};

export default PhoneCard;
