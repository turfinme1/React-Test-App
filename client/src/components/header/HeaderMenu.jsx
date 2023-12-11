import React from "react";
import { Button, Flex, Segmented } from "antd";

import NavBar from "./nav-bar/NavBar";
import LoginBar from "./login-bar/LoginBar";
import SiteTitle from "./site-title/SiteTitle";
import styles from "./HeaderMenu.module.css";
import useUserAuth from "../store/useUserAuth";
import ProfileBar from "./profile-bar/ProfileBar";

export default function HeaderMenu() {
  const { isAuthenticated } = useUserAuth((state) => ({
    isAuthenticated: state.isAuthenticated,
  }));

  return (
    <Flex
      className={styles.header}
      component="header"
      gap="middle"
      align="start"
      vertical
    >
      <Flex className={styles.boxStyle} justify="space-between" align="center">
        <NavBar />
        <SiteTitle />
        {isAuthenticated && <ProfileBar />}
        {!isAuthenticated && <LoginBar />}
      </Flex>
    </Flex>
  );
}
