import React, { useEffect, lazy, Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { refreshUser, register, logIn, logOut } from "./redux/auth/operations";
import { selectIsLoggedIn } from "./redux/auth/selectors";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import RestrictedRoute from "./components/RestrictedRoute/RestrictedRoute";

// Замінюємо прямі імпорти на ліниві
const HomePage = lazy(() => import("./pages/HomePage/HomePage"));
const LoginPage = lazy(() => import("./pages/LoginPage/LoginPage"));
const RegistrationPage = lazy(() =>
  import("./pages/RegistrationPage/RegistrationPage")
);
const ContactsPage = lazy(() => import("./pages/ContactsPage/ContactsPage"));

function App() {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(selectIsLoggedIn);

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  const handleRegister = (credentials) => {
    dispatch(register(credentials));
  };

  const handleLogin = (credentials) => {
    dispatch(logIn(credentials));
  };

  const handleLogout = () => {
    dispatch(logOut());
  };

  return (
    <Router>
      <Routes>
        <Route
          exact
          path="/"
          element={
            <Suspense fallback={<div>Loading...</div>}>
              <HomePage />
            </Suspense>
          }
        />
        <Route
          path="/register"
          element={
            <Suspense fallback={<div>Loading...</div>}>
              <RestrictedRoute
                isLoggedIn={isLoggedIn}
                component={<RegistrationPage onSubmit={handleRegister} />}
              />
            </Suspense>
          }
        />
        <Route
          path="/login"
          element={
            <Suspense fallback={<div>Loading...</div>}>
              <RestrictedRoute
                isLoggedIn={isLoggedIn}
                component={<LoginPage onSubmit={handleLogin} />}
              />
            </Suspense>
          }
        />
        <Route
          path="/contacts"
          element={
            <Suspense fallback={<div>Loading...</div>}>
              <PrivateRoute
                isLoggedIn={isLoggedIn}
                component={<ContactsPage onLogout={handleLogout} />}
              />
            </Suspense>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
