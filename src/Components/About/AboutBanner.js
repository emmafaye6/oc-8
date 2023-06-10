import AboutBannerImage from "../../Assets/AboutBannerImage.svg";

function AboutBanner() {
  return (
    <div className="banner">
      <img src={AboutBannerImage} alt="" className="banner__image" />
    </div>
  );
}
export default AboutBanner;
