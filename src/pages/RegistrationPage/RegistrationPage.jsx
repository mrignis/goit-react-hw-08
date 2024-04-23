// RegistrationPage.jsx
import React from "react";
import RegistrationForm from "../../components/Form/RegisterFrom";
import { useDispatch, useSelector } from "react-redux";
import { register } from "../../redux/auth/operations";

const RegistrationPage = () => {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);

  const handleSubmit = (formData) => {
    dispatch(register(formData));
  };

  return (
    <div>
      {isLoggedIn ? (
        <div>You are already logged in. Proceed to contacts.</div>
      ) : (
        <RegistrationForm onSubmit={handleSubmit} />
      )}
    </div>
  );
};

export default RegistrationPage;
