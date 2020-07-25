import React from "react";
import { useStyles } from "./style";
import { Layout, Menu, Breadcrumb } from "antd";
import UpperNavbar from "../../components/UpperNavbar";
import LowerNavbar from "../../components/LowerNavbar";

const { Header, Content, Footer } = Layout;

const HeaderContainer = () => {
  const classes = useStyles();
  return (
    <Layout>
      <Header className={classes.upperContainer}>
        <UpperNavbar />
      </Header>
      <Header className={classes.lowerContainer}>
        <LowerNavbar />
      </Header>
    </Layout>
  );
};

export default HeaderContainer;
