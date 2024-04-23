import React from "react";
import { Route, Navigate } from "react-router-dom";

const RestrictedRoute = ({ isLoggedIn, component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      element={isLoggedIn ? <Component {...rest} /> : <Navigate to="/login" />}
    />
  );
};

export default RestrictedRoute;
