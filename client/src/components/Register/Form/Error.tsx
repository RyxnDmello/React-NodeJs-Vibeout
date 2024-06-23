import { forwardRef } from "react";

import Icon from "../../../images/register/error.svg";

import styles from "./Error.module.scss";

interface ErrorProps {
  message?: string;
}

const Error = forwardRef<HTMLDivElement, ErrorProps>(({ message }, ref) => {
  return (
    <div ref={ref} className={styles.error}>
      <img src={Icon} />
      <p>{message}</p>
    </div>
  );
});

export default Error;
