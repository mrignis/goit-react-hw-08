import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../redux/auth/operations";
import { selectUser } from "../../redux/auth/selectors";

import clsx from "clsx";
import style from "./UserMenu.module.css";

export const UserMenu = () => {
  const dispatch = useDispatch();
  const nameUser = useSelector(selectUser);
  return (
    <div className={clsx(style.userContainer)}>
      <p className={clsx(style.userText)}>Hi, {nameUser.name}</p>
      <button
        className={clsx(style.logoutBtn)}
        type="button"
        onClick={() => dispatch(logout())}
      >
        Logout
      </button>
    </div>
  );
};
