import React from "react";
import { Typography, Layout } from "antd";
import { useStyles } from "./style";
import { GoLocation } from "react-icons/go";
import {
  FaPhoneAlt,
  FaFacebookF,
  FaTwitter,
  FaShoppingCart,
} from "react-icons/fa";
import { MdMailOutline } from "react-icons/md";
import { RiYoutubeLine, RiInstagramLine, RiLoginBoxLine } from "react-icons/ri";
import { NavLink } from "react-router-dom";

const { Text, Link } = Typography;
const { Header } = Layout;

const UpperNavbar = () => {
  const classes = useStyles();

  return (
    <Header className={classes.upperContainer}>
      <div className={classes.container}>
        <div className={classes.topLeft}>
          <div className={classes.contactInfo}>
            <GoLocation color="white" />
            <Text className={classes.textStyle}>Calgary, AB</Text>
          </div>
          <div className={classes.contactInfo}>
            <FaPhoneAlt color="white" />
            <Text className={classes.textStyle}>+1-555-555-5555</Text>
          </div>
          <div className={classes.contactInfo}>
            <MdMailOutline color="white" />
            <Text className={classes.textStyle}>info@3stars.com</Text>
          </div>
        </div>

        <div className={classes.topRight}>
          <div className={classes.snsLinks}>
            <Link href="https://facebook.com" target="_blank">
              <FaFacebookF color="white" />
            </Link>
            <Link href="https://twitter.com" target="_blank">
              <FaTwitter color="white" />
            </Link>
            <Link href="https://youtube.com" target="_blank">
              <RiYoutubeLine color="white" />
            </Link>
            <Link href="https://instagram.com" target="_blank">
              <RiInstagramLine color="white" />
            </Link>
          </div>

          <div className={classes.loginSignupLink}>
            <RiLoginBoxLine color="white" />
            <NavLink exact to="/login">
              <Text className={classes.textStyle}>Login / Register</Text>
            </NavLink>
          </div>
          <FaShoppingCart color="white" />
        </div>
      </div>
    </Header>
  );
};

export default UpperNavbar;
