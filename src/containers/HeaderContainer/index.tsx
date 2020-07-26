import React, { Fragment, useEffect, useRef, useState } from "react";
// import { useStyles } from "./style";
import { Layout, Menu, Breadcrumb } from "antd";
import UpperNavbar from "../../components/UpperNavbar";
import LowerNavbar from "../../components/LowerNavbar";
import "./stickyHeader.css";

const { Header, Content, Footer } = Layout;

const HeaderContainer = () => {
  const [isSticky, setSticky] = useState(false);
  const ref: any = useRef(null);
  const handleScroll = () => {
    if (ref.current) {
      setSticky(ref.current.getBoundingClientRect().top <= 0);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", () => handleScroll);
    };
  }, []);

  return (
    <div>
      <UpperNavbar />
      <div className={`sticky-wrapper ${isSticky ? " sticky" : ""}`} ref={ref}>
        <LowerNavbar />
      </div>
    </div>
  );
};

export default HeaderContainer;
