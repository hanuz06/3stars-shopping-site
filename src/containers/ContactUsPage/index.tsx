import React from "react";
import { useStyles } from "./style";
import { Button, Typography } from "antd";
import { FaCcPaypal } from "react-icons/fa";

const { Title, Text } = Typography;

const ContactUsPage: React.FC = (): JSX.Element => {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      CONTACT US
    </div>
  );
};

export default ContactUsPage;
