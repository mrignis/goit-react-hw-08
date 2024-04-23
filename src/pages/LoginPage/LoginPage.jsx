import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { LoginForm } from "../../components/Form/LoginForm";
import { selectIsLoggedIn } from "../../redux/auth/selectors";

axios.defaults.baseURL = "https://connections-api.herokuapp.com";

function LoginPage() {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(selectIsLoggedIn);

  useEffect(() => {
    if (isLoggedIn) {
      redirectToHome();
    }
  }, [isLoggedIn]);

  const redirectToHome = () => {
    // Заменяем использование useHistory на window.location.href
    window.location.href = "/";
  };

  return (
    <div>
      <h2>Login Page</h2>
      <LoginForm />
    </div>
  );
}

export default LoginPage;
