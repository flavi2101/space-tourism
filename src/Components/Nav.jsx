import { Link } from "react-router-dom";
import logo from '../assets/shared/logo.svg'

export default function Nav() {return(
    <nav>
    <img src={logo} alt="logo-stars" />
    <ul>
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
  </nav>
)}