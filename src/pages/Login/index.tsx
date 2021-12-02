import React from 'react';
import LoginForm from './components/LoginForm/index';
import './index.scss';

const LoginPage: React.FC = () => {
  return (
    <div className="loginPageLayout">
      <LoginForm />
    </div>
  );
};

export default LoginPage;
