import "./Header.css";
import logo from "../../Assets/LOGO.svg";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="header">
      <Link to="/" className="header__logo--link">
        <img src={logo} alt="Kasa Logo" className="header__logo" />
      </Link>
      <div className="header__links">
        <Link to="/">Accueil</Link>
        <Link to="/about">À propos</Link>
      </div>
    </div>
  );
}

export default Header;
