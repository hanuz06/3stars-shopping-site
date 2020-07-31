import React, { useRef } from "react";
import { useStyles } from "./style";
import { Layout, BackTop } from "antd";
import UpperNavbar from "../../components/UpperNavbar";
import LowerNavbar from "../../components/LowerNavbar";
import "./stickyHeader.css";
import classes from "*.module.css";
import useStickyNavBar from "../../hooks/useStickyNavBar";

const { Header, Content, Footer } = Layout;

const HeaderContainer = () => {
  const ref: any = useRef(null);
  const classes = useStyles();

  const isSticky: boolean = useStickyNavBar(ref);

  return (
    <header>
      <UpperNavbar />
      <div className={`sticky-wrapper ${isSticky ? " sticky" : ""}`} ref={ref}>
        <LowerNavbar />
        <BackTop>
          <div className={classes.backToTopButton}>UP</div>
        </BackTop>
      </div>
    </header>
  );
};

export default HeaderContainer;
