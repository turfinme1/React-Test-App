import { Flex } from "antd";
import { GithubFilled} from "@ant-design/icons";
import { Link } from "react-router-dom";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <Flex className={styles.footer} component="footer" justify="center">
      <Flex className={styles.aboutUs} justify="center">
        <div className={styles.info}>
          <h4>Find us</h4>
          <span>1010 Avenue, sw 54321, Temp temp</span>
        </div>
        <div className={styles.info}>
          <h4>Call us</h4>
          <span>+000 123 456</span>
        </div>
        <div className={styles.info}>
          <h4>Mail us</h4>
          <span>bro-split@info.com</span>
        </div>
      </Flex>
      <Flex className={styles.copyNav} justify="space-between">
        <div className={styles.copyrightText}>
          <p>
            Copyright &copy; 2023, All Right Reserved
          </p>
        </div>
        <div className={styles.repo}>
          <GithubFilled />
            <a href="https://github.com/turfinme1/React-Test-App">Source</a>
        </div>
        <div className={styles.footerMenu}>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/blog">Blog</Link>
            </li>
            <li>
              <Link to="/exercise-guides">Exercise Guides</Link>
            </li>
            <li>
              <Link to="/about">About us</Link>
            </li>
            <li>
              <Link to="/contact">Contact us</Link>
            </li>
          </ul>
        </div>
      </Flex>
    </Flex>
  );
}
