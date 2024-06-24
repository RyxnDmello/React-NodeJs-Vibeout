import Avatar from "../images/register/avatar.png";
import useRegister from "../hooks/auth/useRegister";

import { register as inputs } from "../models/Register";

import Carousel from "../components/Register/Carousel";
import Form from "../components/Register/Form";

import "../styles/register.scss";

export default function Register() {
  const register = useRegister(Avatar);

  return (
    <main>
      <Carousel />
      <Form type="REGISTER" {...register} inputs={inputs} />;
    </main>
  );
}
