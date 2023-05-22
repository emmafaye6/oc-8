import "../Styles/Header.css";
import logo from "../Assets/LOGO.svg";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="header">
      <img src={logo} alt="Kasa Logo" className="header__logo" />
      <div className="header__links">
        <Link to="/">Accueil</Link>
        <Link to="/about">À propos</Link>
      </div>
    </div>
  );
}

export default Header;
