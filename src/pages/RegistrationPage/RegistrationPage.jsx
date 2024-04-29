// RegistrationPage.jsx
import React from "react";
import RegistrationForm from "../../components/Form/RegisterFrom"; // Переконайтеся, що правильний шлях до компонента
import {} from "../../redux/auth/operations";

const RegistrationPage = () => {
  return (
    <div>
      <h1>Registration Page</h1>
      <RegistrationForm onSubmit={handleSubmit} />
    </div>
  );
};

export default RegistrationPage;
