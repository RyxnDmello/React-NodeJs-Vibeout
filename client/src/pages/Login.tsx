import useLogin from "../hooks/auth/useLogin";

import { login as inputs } from "../models/Register";

import Carousel from "../components/Register/Carousel";
import Form from "../components/Register/Form";

import "../styles/register.scss";

export default function Login() {
  const login = useLogin();

  return (
    <main>
      <Carousel />
      <Form type="LOGIN" {...login} inputs={inputs} />;
    </main>
  );
}
