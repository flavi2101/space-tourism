import { Link } from "react-router-dom";

export default function Nav() {return(
    <nav>
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