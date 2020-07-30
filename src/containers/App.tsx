import React, { FC } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
} from "react-router-dom";
import "./App.less";
import LandingPage from "./LandingPage";
import LoginRegistrationPage from "./LoginRegistrationPage";
import CheckoutPage from "./CheckoutPage";

import { Layout } from "antd";
import HeaderContainer from "./HeaderContainer";
import CartPage from "./CartPage";
import ContactUsPage from "./ContactUsPage";
import ProductDetailsPage from "./ProductDetailsPage";

const { Header, Content, Footer } = Layout;

const App: FC = () => {
  return (
    <Router>
      <div className="App">
        <Layout style={{ position: "relative" }}>
          {/* <Header> */}
          <HeaderContainer />
          {/* </Header> */}
          <Content>
            <Switch>
              <Route exact path="/" component={LandingPage} />
              <Route path="/login" component={LoginRegistrationPage} />
              <Route path="/cart" component={CartPage} />
              <Route path="/contact" component={ContactUsPage} />
              <Route path="/checkout" component={CheckoutPage} />
              <Route path="/details" component={ProductDetailsPage} />
            </Switch>
          </Content>
          <Footer
            style={{
              textAlign: "center",
              width: "100vw",
              padding: 10,
            }}
          >
            3stars Corp., 2020
          </Footer>
        </Layout>
      </div>
    </Router>
  );
};
export default App;
