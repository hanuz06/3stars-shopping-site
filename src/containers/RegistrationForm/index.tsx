import React, { useState } from "react";
import {
  Form,
  Input,
  Tooltip,
  Cascader,
  Select,
  Row,
  Col,
  Checkbox,
  Button,
  AutoComplete,
  Alert,
} from "antd";
import { useSelector, useDispatch } from "react-redux";
import { signUp } from "../../store/actions/authActions";

const formItemLayout = {
  labelCol: {
    xs: { span: 26 },
    sm: { span: 10 },
  },
  wrapperCol: {
    xs: { span: 24 },
    sm: { span: 16 },
  },
};
const tailFormItemLayout = {
  wrapperCol: {
    xs: {
      span: 24,
      offset: 0,
    },
    sm: {
      span: 16,
      offset: 10,
    },
  },
};

const RegistrationForm: React.FC = (): JSX.Element => {
  const [form] = Form.useForm();

  const signupError: boolean = useSelector((state: any) => state.auth.signupError);
  const loading: boolean = useSelector((state: any) => state.auth.loading);

  const dispatch = useDispatch();

  const onFinish = (values: any) => {
    // console.log("Received values of form: ", values);
    dispatch(signUp(values));
  };

  const onReset = () => {
    form.resetFields();
  };

  return (
    <>
      {signupError && (
        <Alert
          message={signupError}
          type="info"
          style={{ marginTop: 5, marginBottom: 10 }}
          closable
        />
      )}
      <Form
        {...formItemLayout}
        form={form}
        name="register"
        onFinish={onFinish}
        scrollToFirstError
      >
        <Form.Item
          name={["user", "firstName"]}
          label="First Name"
          rules={[{ required: true, message: "Please input your first name" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          name={["user", "lastName"]}
          label="Last Name"
          rules={[{ required: true, message: "Please input your last name" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          name="email"
          label="E-mail"
          rules={[
            {
              type: "email",
              message: "Email is not valid",
            },
            {
              required: true,
              message: "Please input your Email",
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          name="password"
          label="Password"
          rules={[
            {
              required: true,
              message: "Please input your password!",
            },
          ]}
          hasFeedback
        >
          <Input.Password />
        </Form.Item>

        <Form.Item
          name="confirm"
          label="Confirm Password"
          dependencies={["password"]}
          hasFeedback
          rules={[
            {
              required: true,
              message: "Please confirm your password!",
            },
            ({ getFieldValue }) => ({
              validator(rule, value) {
                if (!value || getFieldValue("password") === value) {
                  return Promise.resolve();
                }
                return Promise.reject(
                  "The two passwords that you entered do not match!"
                );
              },
            }),
          ]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item
          name="agreement"
          valuePropName="checked"
          rules={[
            {
              validator: (_, value) =>
                value
                  ? Promise.resolve()
                  : Promise.reject("Should accept agreement"),
            },
          ]}
          {...tailFormItemLayout}
        >
          <Checkbox>
            I have read the <a href="">agreement</a>
          </Checkbox>
        </Form.Item>

        <Form.Item {...tailFormItemLayout}>
          <Button type="primary" htmlType="submit">
            Register
          </Button>
          <Button
            htmlType="button"
            onClick={onReset}
            style={{ marginLeft: 10 }}
          >
            Reset
          </Button>
        </Form.Item>
      </Form>
    </>
  );
};

export default RegistrationForm;
