import React, { useState } from "react";
import { useStyles } from "./style";
import { searchQuery } from "../../store/actions/productsActions";
import { useDispatch } from "react-redux";

import { Layout, Menu, Typography, Input } from "antd";
import { NavLink } from "react-router-dom";
import logo from "../../images/3stars.png";
import { AppstoreOutlined, UserOutlined } from "@ant-design/icons";

const { Header } = Layout;
const { SubMenu } = Menu;
const { Text } = Typography;
const { Search } = Input;

const LowerNavbar = () => {
  const [current, setCurrent] = useState("");
  const [searchWord, setSearchWord] = useState("");

  const classes = useStyles();
  const dispatch = useDispatch();

  const handleClick = (e: any) => setCurrent(e.key);
  const setKey = () => setCurrent("1");

  const handleSearch = (query: string) => {
    setSearchWord(query);
    dispatch(searchQuery(query));
  };

  return (
    <span className="sticky-inner">
      <Header className={classes.lowerContainer}>
        <div className={classes.container}>
          <NavLink exact to="/" onClick={setKey}>
            <img src={logo} alt="logo" className={classes.imageStyle} />
          </NavLink>
          <Search
            placeholder="input search text"
            // onSearch={(value: string) => console.log(value)}
            enterButton
            size="large"
            allowClear
            onChange={(e) => handleSearch(e.target.value)}
            value={searchWord}
            maxLength={30}
            className={classes.searchWindow}
          />
          <Menu
            onClick={handleClick}
            selectedKeys={[current]}
            defaultSelectedKeys={["1"]}
            mode="horizontal"
            triggerSubMenuAction="hover"
            className={classes.menuContainer}
          >
            <Menu.Item key="1">
              <NavLink exact to="/">
                <Text>HOME</Text>
              </NavLink>
            </Menu.Item>
            <SubMenu key="sub1" icon={<AppstoreOutlined />} title="SHOP">
              <Menu.Item key="2">
                <NavLink exact to="/">
                  PHONES{" "}
                </NavLink>
              </Menu.Item>
              <Menu.Item key="3">HEADSETS</Menu.Item>
            </SubMenu>
            <SubMenu key="sub2" icon={<UserOutlined />} title="MY ACCOUNT">
              <Menu.Item key="4">
                <NavLink to="/cart">CART</NavLink>
              </Menu.Item>
              <Menu.Item key="5">CHECKOUT</Menu.Item>
            </SubMenu>
            <Menu.Item key="6">
              <NavLink to="/contact">
                <Text>CONTACT US</Text>
              </NavLink>
            </Menu.Item>
          </Menu>
        </div>{" "}
      </Header>
    </span>
  );
};

export default LowerNavbar;
