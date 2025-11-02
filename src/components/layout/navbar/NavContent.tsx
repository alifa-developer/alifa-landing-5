"use server";

import React from "react";
import Navbar from "./Navbar";
import AuthManager from "@/services/AuthManager";

const NavContent = async () => {
  let userData = null;
  // return null;
  const isLoggedIn = await AuthManager.isLoggedIn();

  if (isLoggedIn) {
    try {
      userData = await AuthManager.getLoggedUser();
    } catch (error) {
      await AuthManager.logout();
    }
  }

  return <Navbar userData={userData} />;
};

export default NavContent;
