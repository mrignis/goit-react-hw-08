import React from "react";
import { Link } from "react-router-dom";

const SectionHome = () => {
  return (
    <section className="section-home">
      <h2>Welcome to our website!</h2>
      <p>
        This is the home section where you can introduce your website or
        application.
      </p>
      <div>
        <Link to="/register">
          <button>Register</button>
        </Link>
        <Link to="/login">
          <button>Login</button>
        </Link>
      </div>
    </section>
  );
};

export default SectionHome;
