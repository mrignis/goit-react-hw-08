import React from "react";

const RegistrationPage = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Ваша логіка обробки поданої форми реєстрації тут
  };

  return (
    <div>
      <h1>Registration Page</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Ім'я:
          <input type="text" />
        </label>
        <label>
          Email:
          <input type="email" />
        </label>
        <label>
          Пароль:
          <input type="password" />
        </label>
        <button type="submit">Зареєструватися</button>
      </form>
    </div>
  );
};

export default RegistrationPage;
