import clsx from "clsx";
import { NavLink } from "react-router-dom";

import css from "../../App.module.css";
import { useSelector } from "react-redux";
import { selectIsSignedIn } from "../../redux/auth/selectors";

const getNavLinkClassName = ({ isActive }) =>
  clsx(css.navLink, {
    [css.active]: isActive,
  });

const Layout = ({ children }) => {
  const isSignedIn = useSelector(selectIsSignedIn);

  return (
    <div>
      <header>
        {" "}
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/register">Register</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to="/contacts">Contacts</Link>
            </li>
          </ul>
        </nav>
        {isSignedIn && <UserMenu />};
      </header>
      <main>{children}</main>
    </div>
  );
};

export default Layout;
