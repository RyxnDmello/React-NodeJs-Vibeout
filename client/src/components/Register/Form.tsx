import Input from "./Form/Input";
import Button from "./Form/Button";

import Username from "../../images/register/username.svg";
import Email from "../../images/register/email.svg";
import Number from "../../images/register/number.svg";
import Password from "../../images/register/password.svg";

export default function Form() {
  const className = "form";

  return (
    <form className={className}>
      <div className={`${className}-wrapper`}>
        <div className={`${className}-header`}>
          <h2 className={`${className}-title`}>Create Account</h2>

          <p className={`${className}-headline`}>
            Realtime Collaborative Development
          </p>
        </div>

        <div className={`${className}-inputs`}>
          <Input
            onChange={() => {}}
            icon={Username}
            label="Username"
            name="username"
            type="text"
          />

          <Input
            onChange={() => {}}
            icon={Email}
            label="Email"
            name="email"
            type="email"
          />

          <Input
            onChange={() => {}}
            required={false}
            icon={Number}
            label="Number"
            name="number"
            type="number"
          />

          <Input
            onChange={() => {}}
            icon={Password}
            label="Password"
            name="password"
            type="password"
          />

          <Input
            onChange={() => {}}
            icon={Password}
            label="Retype Password"
            name="retypePassword"
            type="password"
          />
        </div>

        <div className={`${className}-buttons`}>
          <Button label="Create Account" />
        </div>
      </div>
    </form>
  );
}
