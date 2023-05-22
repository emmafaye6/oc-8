import "../../Styles/Home/Banner.css";
import BannerImage from "../../Assets/BannerImage.svg";

function Banner() {
  return (
    <div className="banner">
      <img src={BannerImage} alt="" className="banner__image" />
      <h1 className="banner__text">Chez vous, partout et ailleurs</h1>
    </div>
  );
}

export default Banner;
