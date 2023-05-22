import "../Styles/Footer.css";
import Footerlogo from "../Assets/Footerlogo.svg";

function Footer() {
  return (
    <div className="footer">
      <img src={Footerlogo} alt="" className="footer__logo" />
      <p className="footer__text">© 2020 Kasa. All rights reserved</p>
    </div>
  );
}

export default Footer;
