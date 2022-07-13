import { Link } from "react-router-dom";
import style from './Nav.module.css'
import logo from '../assets/shared/logo.svg'
import hamburguer from '../assets/shared/icon-hamburger.svg'
import close from '../assets/shared/icon-close.svg'


export default function Nav() {return(
    <nav className={style.nav}>
    <img src={logo} className={style.logo} alt="logo-stars" />
    
    <ul className={style.itens}>
    <img src={close} alt="close-icon" className={style.close} />
      <li>
        <Link to="/">
          <span></span>Home
        </Link>
      </li>
      <li>
        <Link to="/destination">
          <span></span>Destination
        </Link>
      </li>
      <li>
        <Link to="/crew">
          <span></span>Crew
        </Link>
      </li>
      <li>
        <Link to="/technology">
          <span></span>Tecnnology
        </Link>
      </li>
    </ul>
    <img src={hamburguer} className={style['burguer-icon']} alt="hamburgue-menu" />
  </nav>
)}