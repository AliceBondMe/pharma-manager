import { FC } from "react";

import { AuthMotto } from "../../components";
import RegistrationForm from '../../components/AuthForms/RegistrationForm';

const RegisterPage: FC = () => {
  return (
    <>
      <AuthMotto />
      <RegistrationForm/>
    </>
  );
};
export default RegisterPage;
