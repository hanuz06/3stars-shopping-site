import React, { FC, Suspense, lazy } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
} from "react-router-dom";
import "./App.less";
import CheckoutPage from "./CheckoutPage";
import { Layout } from "antd";
import HeaderContainer from "./HeaderContainer";
import { Spin } from "antd";
import { LoadingOutlined } from "@ant-design/icons";

const antIcon = <LoadingOutlined style={{ fontSize: 48 }} spin />;

const { Header, Content, Footer } = Layout;

const LandingPage = lazy(() => import("./LandingPage"));
const ContactUsPage = lazy(() => import("./ContactUsPage"));
const CartPage = lazy(() => import("./CartPage"));
const LoginRegistrationPage = lazy(() => import("./LoginRegistrationPage"));
const ProductDetailsPage = lazy(() => import("./ProductDetailsPage"));

const App: FC = () => {
  return (
    <Suspense
      fallback={
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
            minHeight: "75vh",
          }}
        >
          <Spin indicator={antIcon} />
        </div>
      }
    >
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
    </Suspense>
  );
};
export default App;
