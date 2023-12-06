import { Link } from "react-router-dom";
import styles from "./NavBar.module.css";

export default function NavBar(props) {
  return (
    <nav className={styles.navBar}>
      <Link to="/">Home</Link>

      <Link to="/blog">Blog</Link>

      <Link to="/exercise-guides">Exercise Guides</Link>

      <Link to="/about">About us</Link>

      <Link to="/contact">Contact us</Link>
    </nav>
  );
}
