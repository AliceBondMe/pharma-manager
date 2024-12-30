import { FC } from "react";

import { AuthMotto, LoginForm } from "../../components";

import { loginContainerStyle } from './LoginPage.styles';

const LoginPage: FC = () => {
  return (
    <div css={loginContainerStyle}>
      <AuthMotto />
      <LoginForm />
    </div>
  );
};
export default LoginPage;
