// LoginPage.jsx
import React from "react";
import LoginForm from "../../components/Form/LoginForm";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../redux/auth/operations";

const LoginPage = () => {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);

  const handleSubmit = (formData) => {
    dispatch(login(formData));
  };

  return (
    <div>
      {isLoggedIn ? (
        <div>You are already logged in. Proceed to contacts.</div>
      ) : (
        <LoginForm onSubmit={handleSubmit} />
      )}
    </div>
  );
};

export default LoginPage;
