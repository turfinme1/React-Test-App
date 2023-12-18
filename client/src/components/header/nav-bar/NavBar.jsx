import { Link } from "react-router-dom";

import styles from "./NavBar.module.css";

export default function NavBar(props) {
  return (
    <nav className={styles.navBar}>
      <Link to="/">Home</Link>

      <Link to="/blog">Blog</Link>

      <Link to="/about">About us</Link>
    </nav>
  );
}
