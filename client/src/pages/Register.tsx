import { Navigate } from "react-router-dom";

import Avatar from "../images/register/avatar.png";

import useAuthContext from "../hooks/auth/useAuthContext";
import useRegister from "../hooks/auth/useRegister";

import { register as inputs } from "../models/Register";

import Carousel from "../components/Register/Carousel";
import Form from "../components/Register/Form";

import "../styles/register.scss";

export default function Register() {
  const { account } = useAuthContext();
  const register = useRegister(Avatar);

  if (account !== null) {
    return <Navigate to={"/chats"} replace />;
  }

  return (
    <main>
      <Carousel />
      <Form type="REGISTER" {...register} inputs={inputs} />;
    </main>
  );
}
