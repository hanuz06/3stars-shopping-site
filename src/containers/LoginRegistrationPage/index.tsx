import React from "react";
import { useStyles } from "./style";
import { Typography } from "antd";
import LoginForm from "../LoginForm";
import RegistrationForm from "../RegistrationForm";

const { Title } = Typography;

const LoginRegistrationPage: React.FC = (): JSX.Element => {
  const classes = useStyles();

  return (
    <section className={classes.container}>
      <div className={classes.wrapContainer}>
        <div className={classes.innerContainer}>
          <Title level={4}>Login to account</Title>
          <LoginForm />
        </div>
        <div className={classes.innerContainer}>
          <Title level={4}>Register account</Title>
          <RegistrationForm />
        </div>
      </div>
    </section>
  );
};

export default LoginRegistrationPage;
