import { Link } from "react-router-dom";

import styles from "./LoginBar.module.css";

export default function LoginBar(props) {
  return (
    <div className={styles.loginBar}>
      <Link className={styles.sign} to="/login">Sign in</Link>
      <Link className={styles.register} to="/register">Become a Member</Link>
    </div>
  );
}
