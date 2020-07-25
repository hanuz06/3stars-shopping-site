import React, { useState } from "react";
import { useStyles } from "./style";
import { Layout, Menu, Typography, Avatar } from "antd";
import { NavLink } from "react-router-dom";
import logo from "../../images/3stars.png";
import { AppstoreOutlined, UserOutlined } from '@ant-design/icons';

const { Header } = Layout;
const { SubMenu } = Menu;
const { Text } = Typography;

const LowerNavbar = () => {
  const [current, setCurrent] = useState("");

  const classes = useStyles();

  const handleClick = (e: any) => {
    setCurrent(e.key);
  };  

  return (
    <Header className={classes.upperContainer}>
      <div className={classes.container}>
        <NavLink exact to="/">
          <img
            src={logo}
            alt="logo"
            style={{ width: "60px", height: "auto" }}
          />
        </NavLink>

        <Menu
          onClick={handleClick}
          // selectedKeys={[current]}
          defaultSelectedKeys={["1"]}
          mode="horizontal"
          triggerSubMenuAction="hover"
          style={{ backgroundColor: "#fff", width:500, maxWidth:'100%'}}
        >
          <Menu.Item key="1">
            <NavLink exact to="/">
              <Text>HOME</Text>
            </NavLink>
          </Menu.Item>

          <SubMenu key="sub1" icon={<AppstoreOutlined />} title="SHOP">
            <Menu.Item key="2">GADGETS</Menu.Item>
            <Menu.Item key="3">ACCESSORIES</Menu.Item>
          </SubMenu>

          <SubMenu key="sub2" icon={<UserOutlined />} title="MY ACCOUNT">
            <Menu.Item key="4">CART</Menu.Item>
            <Menu.Item key="5">CHECKOUT</Menu.Item>
          </SubMenu>

          <Menu.Item key="6">
            <NavLink to="#">
              <Text>CONTACT US</Text>
            </NavLink>
          </Menu.Item>
        </Menu>
      </div>
    </Header>
  );
};

export default LowerNavbar;
