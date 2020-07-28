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
// import ProductDetailsPage from "./ProductDetailsPage";
// import CartPage from "./CartPage";
import CartItem from "./CartItem";
import CartList from "./CartList";
import CartPage from "./CartPage";

const { Header, Content, Footer } = Layout;

const App: FC = () => {
  return (
    <Router>
      <div className="App">
        <Layout style={{position:"relative"}}>
          {/* <Header> */}
            <HeaderContainer />
          {/* </Header> */}
          <Content>
            <Switch>
              <Route exact path="/" component={LandingPage} />
              <Route path="/login" component={LoginRegistrationPage} />
              <Route path="/cart" component={CartPage} />
              <Route path="/checkout" component={CheckoutPage} />
            </Switch>
          </Content>

          {/* <Footer
            style={{
              // position: "fixed",
              textAlign: "center",
              width: "100%",
              // left: "auto",
              // right: "auto",
              bottom: 0,
            }}
          >
            3stars Corp., 2020
          </Footer> */}
        </Layout>
      </div>
    </Router>
  );
};
export default App;
