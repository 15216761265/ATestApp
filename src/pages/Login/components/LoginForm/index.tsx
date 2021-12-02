import React from 'react';
import { Form, Input, Button, Checkbox } from 'antd';
import { LoginFormType } from '../../helper/LoginTypes';
import './index.scss';

const allLayout = {
  wrapperCol: { span: 16 },
  labelCol: { span: 8 }
};
const tailLayout = {
  wrapperCol: { offset: 8, span: 16 }
};

const LoginForm: React.FC = () => {
  const [form] = Form.useForm();

  const handleFinishForm = (values: LoginFormType) => {
    console.log(111111, values);
  };

  const handleResetForm = () => {
    form.resetFields();
  };

  return (
    <div className="loginForm">
      <Form onFinish={handleFinishForm} {...allLayout} initialValues={{ remember: true }}>
        <Form.Item
          label="Username"
          name="userName"
          rules={[{ required: true, message: 'Please input your username!' }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Password"
          name="password"
          rules={[{ required: true, message: 'Please input your passowrd!' }]}
        >
          <Input />
        </Form.Item>
        <Form.Item name="remember" valuePropName="checked" wrapperCol={{ offset: 8, span: 16 }}>
          <Checkbox>Remember me</Checkbox>
        </Form.Item>
        <Form.Item {...tailLayout}>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
          <Button onClick={handleResetForm}>Reset</Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default LoginForm;
