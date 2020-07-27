import React from "react";
import { useStyles } from "./style";
import { Typography } from "antd";
import LoginForm from "../LoginForm";
import RegistrationForm from "../RegistrationForm";

const { Title } = Typography;

const LoginRegistrationPage: React.FC = (): JSX.Element => {
  const classes = useStyles();

  return (
    <div className={classes.container}>
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
    </div>
  );
};

export default LoginRegistrationPage;
