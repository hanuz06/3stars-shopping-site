import React from "react";
// import { useStyles } from "./style";
import { Layout, Menu, Breadcrumb } from "antd";
import UpperNavbar from "../../components/UpperNavbar";
import LowerNavbar from "../../components/LowerNavbar";

const { Header, Content, Footer } = Layout;

const HeaderContainer = () => {
  return (
    <>
      <UpperNavbar />
      <LowerNavbar />
    </>
  );
};

export default HeaderContainer;
