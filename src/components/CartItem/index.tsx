import React, { useState } from "react";
import { useStyles } from "./style";
import { Button, Typography } from "antd";
import pic from "../../data/pic/product-1.png";
import { FaTrash, FaMinus, FaPlus } from "react-icons/fa";

const { Title, Text } = Typography;

const CartItem: React.FC = (props: any): JSX.Element => {
  const [count, setCount] = useState(0);
  const classes = useStyles();

  const phonesInCart1 = {
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
    <div className={classes.container}>
      <div className={classes.infoContainer}>
        <img src={pic} className={classes.imageStyle} alt="product" />
      </div>
      <div className={classes.infoContainer}>
        <span className={classes.hide}>
          <Text strong style={{ fontSize: "1rem" }}>
            Product :
          </Text>
        </span>
        <Text strong style={{ fontSize: "1rem" }}>
          {props.title}
        </Text>
      </div>
      <div className={classes.infoContainer}>
        <span className={classes.hide}>
          <Text strong style={{ fontSize: "1rem" }}>
            Price :{" "}
          </Text>
        </span>
        <Text strong style={{ fontSize: "1rem" }}>
          ${props.price}
        </Text>
      </div>
      <div className={classes.infoContainer}>
        <span className={classes.hide}>
          <Text strong style={{ fontSize: "1rem" }}>
            Quantity :{" "}
          </Text>
        </span>{" "}
        <div className={classes.counterContainer}>
          <Button
            type="default"
            onClick={() => count && setCount(count - 1)}
            size="small"
            className={classes.buttonStyle}
          >
            <FaMinus style={{ color: "black" }} />
          </Button>
          <Text strong style={{ fontSize: "1rem" }}>
            {count}
          </Text>
          <Button
            type="default"
            onClick={() => setCount(count + 1)}
            size="small"
            className={classes.buttonStyle}
          >
            <FaPlus style={{ color: "black" }} />
          </Button>
        </div>
      </div>
      {/* */}
      <div className={classes.infoContainer}>
        <span className={classes.hide}>
          <Text strong style={{ fontSize: "1rem" }}>
            Remove :{" "}
          </Text>
        </span>
        <div className={classes.trashBinIconStyle} onClick={() => {}}>
          <FaTrash size={20} />
        </div>
      </div>
      <div className={classes.infoContainer}>
        <Text strong className={classes.hide}>
          <Text strong style={{ fontSize: "1rem" }}>
            Item Total :
          </Text>
        </Text>
        <Text strong style={{ fontSize: "1rem" }}>
          {props.total}
        </Text>
      </div>
    </div>
  );
};

export default CartItem;
