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
import LoginPage from "./LoginPage";
import SignupPage from "./SignupPage";
import CheckoutPage from "./CheckoutPage";
import UpperNavbar from "../components/UpperNavbar";

import { Layout, Menu, Breadcrumb } from "antd";
import HeaderContainer from "./HeaderContainer";

const { Header, Content, Footer } = Layout;

const App: FC = () => (
  <Router>
    <div className="App">
      <Layout>
        <HeaderContainer />
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route path="/login" component={LoginPage} />
          <Route path="/signup" component={SignupPage} />
          <Route path="/checkout" component={CheckoutPage} />
        </Switch>
      </Layout>
    </div>
  </Router>
);

export default App;
