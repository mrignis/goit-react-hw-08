import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { refreshUser } from "./redux/auth/operations";
import { selectIsLoggedIn } from "./redux/auth/selectors";
import HomePage from "./pages/HomePage/HomePage";
import LoginPage from "./pages/LoginPage/LoginPage";
import RegistrationPage from "./pages/RegistrationPage/RegistrationPage";
import ContactsPage from "./pages/ContactsPage/ContactsPage";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import RestrictedRoute from "./components/RestrictedRoute/RestrictedRoute";

function App() {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(selectIsLoggedIn);

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route
          path="/register"
          element={
            <RestrictedRoute
              isLoggedIn={isLoggedIn}
              component={RegistrationPage}
            />
          }
        />
        <Route
          path="/login"
          element={
            <RestrictedRoute isLoggedIn={isLoggedIn} component={LoginPage} />
          }
        />
        <Route
          path="/contacts"
          element={
            <PrivateRoute isLoggedIn={isLoggedIn} component={ContactsPage} />
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
