import React from 'react';
import LoginForm from './components/LoginForm/index';
import './index.scss';
import { LoginFormType } from './helper/LoginTypes';

const LoginPage: React.FC = () => {
  const finishForm = (values: LoginFormType) => {
    console.log('finishForm', values);
  };

  return (
    <div className="loginPageLayout">
      <LoginForm finishForm={finishForm} />
    </div>
  );
};

export default LoginPage;
