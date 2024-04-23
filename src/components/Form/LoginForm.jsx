// LoginForm.jsx
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../redux/auth/operations";

export const LoginForm = () => {
  const dispatch = useDispatch();
  const errorLogin = useSelector((state) => state.error);

  const handleSubmit = (evt) => {
    evt.preventDefault();
    const form = evt.currentTarget;

    dispatch(
      login({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );

    form.reset();
  };

  return (
    <>
      {errorLogin && <div>Error login</div>}
      <form autoComplete="off" onSubmit={handleSubmit}>
        <label>
          Email
          <input type="email" name="email" required />
        </label>
        <label>
          Password
          <input type="password" name="password" required />
        </label>
        <button type="submit">Log In</button>
      </form>
    </>
  );
};
