import React from 'react';
import { Form, Input, Button, Checkbox, Row, Col } from 'antd';
import { LoginFormType } from '../../helper/LoginTypes';
import './index.scss';

const allLayout = {
  wrapperCol: { span: 16 },
  labelCol: { span: 5 }
};

const tailLayout = {
  wrapperCol: { offset: 5, span: 20 }
};

type LoginFormProp = {
  finishForm: (params: LoginFormType) => void;
};

const LoginForm: React.FC<LoginFormProp> = ({ finishForm }) => {
  const [form] = Form.useForm();

  const handleResetForm = () => {
    form.resetFields();
  };

  return (
    <div className="loginForm">
      <Form onFinish={finishForm} {...allLayout} initialValues={{ remember: true }}>
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
        <Row>
          <Col offset={5}>
            <Form.Item name="remember" valuePropName="checked" noStyle>
              {' '}
              <Checkbox>Remember me</Checkbox>
            </Form.Item>
          </Col>
          <Col>
            <a className="login-form-forgot" href="">
              Forgot password
            </a>
          </Col>
        </Row>

        <Form.Item {...tailLayout}>
          <Button
            type="primary"
            htmlType="submit"
            size="large"
            className="myAppBtnNormalStyle loginFormSubmitBtn"
          >
            Submit
          </Button>
          <Button onClick={handleResetForm} size="large" className="myAppBtnNormalStyle">
            Reset
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default LoginForm;
