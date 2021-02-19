import Hamburger from "./hamburger.js";
import NavButton from "./navButton.js";
import BrandName from "./brandName.js";
import { Link } from "react-router-dom";
import "./navLeft.css";

const NavLeft = () => {
  return (
    <nav className="nav-left">
      <ul className="navbar-links-left">
        <li>
          <NavButton btnName="Home" />
        </li>
        <Link to="/shift">
          <li>
            <NavButton btnName="Shifts" />
          </li>
        </Link>
        <Link to="/employeedept">
          <li>
            <NavButton btnName="Employee Department" />
          </li>
        </Link>
      </ul>
    </nav>
  );
};

export default NavLeft;
