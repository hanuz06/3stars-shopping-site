import React from "react";
import { useStyles } from "./style";
import { Button, Typography } from "antd";
import { FaCcPaypal } from "react-icons/fa";
import GoogleMaps from "../../components/GoogleMap";

const { Title, Text } = Typography;

const ContactUsPage: React.FC = (): JSX.Element => {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <GoogleMaps latitude={51.045038} longitude={-114.064458} />
    </div>
  );
};

export default ContactUsPage;

// 150 9 Ave SW, Calgary, AB T2P 3H9
