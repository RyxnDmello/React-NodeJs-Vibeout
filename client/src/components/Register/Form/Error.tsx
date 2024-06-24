import { forwardRef } from "react";

import Icon from "../../../images/register/error.svg";

import styles from "./Error.module.scss";

interface ErrorProps {
  error?: string;
}

const Error = forwardRef<HTMLDivElement, ErrorProps>(({ error }, ref) => {
  return (
    <div ref={ref} className={styles.error}>
      <img src={Icon} />
      <p>{error}</p>
    </div>
  );
});

export default Error;
