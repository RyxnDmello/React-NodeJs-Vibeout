import { Navigate } from "react-router-dom";

import useAuthContext from "../hooks/auth/useAuthContext";
import useLogin from "../hooks/auth/useLogin";

import { login as inputs } from "../models/Register";

import Carousel from "../components/Register/Carousel";
import Form from "../components/Register/Form";

import "../styles/register.scss";

export default function Login() {
  const { account } = useAuthContext();
  const login = useLogin();

  if (account !== null) {
    return <Navigate to={"/chats"} replace />;
  }

  return (
    <main>
      <Carousel />
      <Form type="LOGIN" {...login} inputs={inputs} />;
    </main>
  );
}
