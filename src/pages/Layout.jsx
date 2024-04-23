import React from "react";
import { AppBar } from "./AppBar";
import { useSelector } from "react-redux";
import Navigation from "./Navigation/Navigation";
import AuthNav from "./AuthNav/AuthNav";

const Layout = ({ children }) => {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);

  return (
    <div>
      <AppBar>
        <Navigation />
        {isLoggedIn ? <UserMenu /> : <AuthNav />}
      </AppBar>
      {isLoggedIn ? <div>{children}</div> : <div>Please login or register</div>}
    </div>
  );
};

export default Layout;
