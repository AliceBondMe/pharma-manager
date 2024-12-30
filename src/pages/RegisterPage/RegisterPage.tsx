import { FC } from "react";

import { AuthMotto, RegistrationForm } from "../../components";

import { containerStyle } from './RegisterPage.styles';

const RegisterPage: FC = () => {
  return (
    <div css={containerStyle}>
      <AuthMotto />
      <RegistrationForm />
    </div>
  );
};
export default RegisterPage;
