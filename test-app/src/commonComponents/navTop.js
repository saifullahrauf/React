import Hamburger from "./hamburger.js";
import NavButton from "./navButton.js";
import BrandName from "./brandName.js";
import "./navTop.css";

const NavTop = () => {
  return (
    <nav className="nav">
      <BrandName name="Cresent" />
      <Hamburger />
      <div className="navbar-links">
        <li>
          <NavButton btnName="Notifications" />
        </li>
        <li>
          <NavButton btnName="Account" />
        </li>
      </div>
    </nav>
  );
};

export default NavTop;
