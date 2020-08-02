import React, { useState, useEffect } from "react";
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
import { RiYoutubeLine, RiInstagramLine } from "react-icons/ri";
import { NavLink } from "react-router-dom";
import { Badge, Tooltip } from "antd";
import { LoginOutlined, LogoutOutlined } from "@ant-design/icons";
import { useSelector, useDispatch } from "react-redux";
import { signOut } from "../../store/actions/authActions";
import { isLoaded } from "react-redux-firebase";

const { Text, Link } = Typography;
const { Header } = Layout;

const UpperNavbar: React.FC = (): JSX.Element => {
  const [token, setToken] = useState<string | null>(null);
  const classes = useStyles();

  const dispatch = useDispatch();

  const isLoggedIn = useSelector((state: any) => state.auth.isLoggedIn);
  const loggedInUser = useSelector((state: any) => state.auth.loggedInUser);
  const auth = useSelector((state: any) => state.firebase.auth);
  const fireStoreData = useSelector((state: any) => state.firestore);

  // console.log("FIRESTORE DATA ", auth);

  const logOut = () => {
    dispatch(signOut());
  };

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
              <Tooltip placement="bottom" title="Facebook" color="#808080">
                <FaFacebookF color="white" className={classes.iconStyle} />
              </Tooltip>
            </Link>
            <Link href="https://twitter.com" target="_blank">
              <Tooltip placement="bottom" title="Twitter" color="#808080">
                <FaTwitter color="white" className={classes.iconStyle} />
              </Tooltip>
            </Link>
            <Link href="https://youtube.com" target="_blank">
              <Tooltip placement="bottom" title="Youtube" color="#808080">
                <RiYoutubeLine color="white" className={classes.iconStyle} />
              </Tooltip>
            </Link>
            <Link href="https://instagram.com" target="_blank">
              <Tooltip placement="bottom" title="Instagram" color="#808080">
                <RiInstagramLine color="white" className={classes.iconStyle} />
              </Tooltip>
            </Link>
          </div>
          {auth.apiKey ? (
            <div onClick={logOut} className={classes.loginSignupLink}>
              <LogoutOutlined style={{ color: "white" }} />
              <NavLink exact to="/">
                <Text className={classes.textStyle}>
                  Hello, {loggedInUser.firstName}
                </Text>
                <Text className={classes.textStyle}>Logout</Text>
              </NavLink>
            </div>
          ) : (
            <div className={classes.loginSignupLink}>
              <LoginOutlined style={{ color: "white" }} />
              <NavLink exact to="/authentication">
                <Text className={classes.textStyle}>Login / Register</Text>
              </NavLink>
            </div>
          )}
          <Badge
            count={2}
            offset={[6, -2]}
            style={{
              backgroundColor: "transparent",
              borderColor: "transparent",
            }}
          >
            <Tooltip
              placement="bottom"
              title="Your items in cart"
              color="#808080"
            >
              <NavLink exact to="/cart">
                <FaShoppingCart color="white" />
              </NavLink>
            </Tooltip>
          </Badge>
        </div>
      </div>
    </Header>
  );
};

export default UpperNavbar;
