import React from "react";
import { useStyles } from "./style";
import { Typography } from "antd";
import LoginForm from "../LoginForm";
import RegistrationForm from "../RegistrationForm";
import LoadingDisplay from "../../components/LoadingDisplay";
import { useSelector, useDispatch } from "react-redux";

const { Title } = Typography;

const LoginRegistrationPage: React.FC = (): JSX.Element => {
  const classes = useStyles();

  const loading: boolean = useSelector((state: any) => state.auth.loading);

  return (
    <section className={classes.container}>
      <LoadingDisplay loading={loading} />
      <div className={classes.headerStyle}>
        <Title level={2}>My account</Title>
      </div>

      <div className={classes.wrapContainer}>
        <div className={classes.innerContainer}>
          <Title level={4}>Login</Title>
          <LoginForm />
        </div>
        <div className={classes.innerContainer}>
          <Title level={4}>Register</Title>
          <RegistrationForm />
        </div>
      </div>
    </section>
  );
};

export default LoginRegistrationPage;
