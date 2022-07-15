import { Link } from "react-router-dom";
import style from "./Nav.module.css";
import logo from "../assets/shared/logo.svg";
import hamburguer from "../assets/shared/icon-hamburger.svg";
import close from "../assets/shared/icon-close.svg";
import { useState } from "react";

export default function Nav() {
  const [handlermenu, sethandlermenu] = useState(false);

  return (
    <nav className={style.nav}>
      <img src={logo} className={style.logo} alt="logo-stars" />

      {handlermenu && (
        <ul className={style.itens}>
          <img
            src={close}
            alt="close-icon"
            className={style.close}
            onClick={() => sethandlermenu(false)}
          />
          <li>
            <Link to="/" onClick={() => sethandlermenu(false)}>
              <span>00 </span>Home
            </Link>
          </li>
          <li>
            <Link to="/destination" onClick={() => sethandlermenu(false)}>
              <span>01 </span>Destination
            </Link>
          </li>
          <li>
            <Link to="/crew" onClick={() => sethandlermenu(false)}>
              <span>02 </span>Crew
            </Link>
          </li>
          <li>
            <Link to="/technology" onClick={() => sethandlermenu(false)}>
              <span>03 </span>Tecnnology
            </Link>
          </li>
        </ul>
      )}
      <img
        onClick={() => sethandlermenu(true)}
        src={hamburguer}
        className={style["burguer-icon"]}
        alt="hamburgue-menu"
      />
    </nav>
  );
}
