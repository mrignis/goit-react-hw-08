// LoginPage.jsx
import React from "react";

import LoginForm from "../../components/Form/LoginForm";

const LoginPage = () => {
  return (
    <div>
      <h2>Login Page</h2>
      <LoginForm onSubmit={handleSubmit} />
    </div>
  );
};

export default LoginPage;
