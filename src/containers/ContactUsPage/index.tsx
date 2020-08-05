import React from "react";
import { useStyles } from "./style";
import { Descriptions, Typography, Form, Input, Button } from "antd";
import GoogleMaps from "../../components/GoogleMap";

const { Title, Text } = Typography;

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};

const tailLayout = {
  wrapperCol: {
    xs: {
      span: 24,
      offset: 0,
    },
    sm: {
      span: 16,
      offset: 8,
    },
  },
};

const validateMessages = {
  required: "${label} is required!",
  types: {
    email: "${label} is not validate email!",
    number: "${label} is not a validate number!",
  },
  number: {
    range: "${label} must be between ${min} and ${max}",
  },
};

const ContactUsPage: React.FC = (): JSX.Element => {
  const classes = useStyles();

  const onFinish = (values: any) => {
    console.log(values);
  };

  return (
    <section className={classes.container}>
      <GoogleMaps latitude={51.045038} longitude={-114.064458} />
      <div className={classes.innerContainer}>
        <div className={classes.leftContainer}>
          <Descriptions title="CONTACT US" layout="vertical">
            <Descriptions.Item label="Telephone">
              514-447-7655
            </Descriptions.Item>
            <Descriptions.Item label="Email">info@3stars.com</Descriptions.Item>
            <Descriptions.Item label="Address">
              150 9 Ave SW, Calgary, AB Canada T2P 3H9
            </Descriptions.Item>
          </Descriptions>
        </div>
        <div className={classes.formContainer}>
          <Form
            {...layout}
            name="nest-messages"
            onFinish={onFinish}
            validateMessages={validateMessages}
            size="large"            
          >
            <Form.Item
              name={["user", "name"]}
              label="Name"
              rules={[{ required: true }]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              name={["user", "email"]}
              label="Email"
              rules={[{ type: "email", required: true }]}
            >
              <Input />
            </Form.Item>

            <Form.Item name={["user", "subject"]} label="Subject">
              <Input />
            </Form.Item>
            <Form.Item name={["user", "introduction"]} label="Introduction">
              <Input.TextArea />
            </Form.Item>
            <Form.Item {...tailLayout}>
              <Button type="primary" htmlType="submit">
                Submit
              </Button>
            </Form.Item>
          </Form>{" "}
        </div>
      </div>
    </section>
  );
};

export default ContactUsPage;
