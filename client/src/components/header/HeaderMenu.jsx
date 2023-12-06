import React from "react";
import { Button, Flex, Segmented } from "antd";

import NavBar from "./nav-bar/NavBar";
import LoginBar from "./login-bar/LoginBar";
import SiteTitle from "./site-title/SiteTitle";
import styles from "./HeaderMenu.module.css"

export default function HeaderMenu() {
  return (
    <Flex className={styles.header} component="header" gap="middle" align="start" vertical>
      <Flex className={styles.boxStyle} justify="space-between" align="center">
        <NavBar />
        <SiteTitle />
        <LoginBar />
      </Flex>
    </Flex>
  );
}
