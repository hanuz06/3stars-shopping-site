import React, { FC } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
} from "react-router-dom";
import { Button } from "antd";
import "./App.less";
import LandingPage from "./LandingPage";
import LoginPage from "./LoginPage";
import SignupPage from "./SignupPage";
import CheckoutPage from "./CheckoutPage";

const App: FC = () => (
  <Router>
    <div className="App">
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route path="/login" component={LoginPage} />
        <Route path="/signup" component={SignupPage} />
        <Route path="/checkout" component={CheckoutPage} />
      </Switch>
    </div>
  </Router>
);

export default App;
