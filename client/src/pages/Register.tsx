import { FormType } from "../hooks/auth/useRegister";

import Carousel from "../components/Register/Carousel";
import Form from "../components/Register/Form";

import "../styles/register.scss";

interface RegisterProps {
  type?: FormType;
}

export default function Register({ type = "REGISTER" }: RegisterProps) {
  return (
    <main>
      <Carousel />
      <Form type={type} />
    </main>
  );
}
