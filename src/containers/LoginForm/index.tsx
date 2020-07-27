import React from "react";
import { Form, Input, Button, Checkbox, Typography } from "antd";
import {
  UserOutlined,
  LockOutlined,
  EyeInvisibleOutlined,
  EyeTwoTone,
} from "@ant-design/icons";

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

const LoginForm: React.FC = (): JSX.Element => {
  const [form] = Form.useForm();

  const validateMessages = {
    required: "${label} is required!",
    types: {
      email: "${label} is not valid!",
      password: "${label} is not valid!",
    },
  };

  const onFinish = (values: any) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };

  const onReset = () => {
    form.resetFields();
  };

  return (
    <Form
      {...layout}
      name="basic"
      form={form}
      initialValues={{ remember: true }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      validateMessages={validateMessages}
    >
      <Form.Item
        name={["user", "email"]}
        label="Email"
        rules={[{ required: true, type: "email" }]}
      >
        <Input placeholder="username@example.com" />
      </Form.Item>

      <Form.Item
        label="Password"
        name="password"
        rules={[{ required: true, message: "Please input your password!" }]}
      >
        <Input.Password
          placeholder="input password"
          iconRender={(visible) =>
            visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
          }
        />
      </Form.Item>

      <Form.Item {...tailLayout} name="remember" valuePropName="checked">
        <Checkbox>Remember me</Checkbox>
      </Form.Item>

      <Form.Item {...tailLayout}>
        <Button type="primary" htmlType="submit">
          Login
        </Button>
        <Button htmlType="button" onClick={onReset} style={{ marginLeft: 10 }}>
          Reset
        </Button>
      </Form.Item>
    </Form>
  );
};

export default LoginForm;
