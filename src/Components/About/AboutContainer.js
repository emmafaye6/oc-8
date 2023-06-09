import Accordion from "../Accordion/Accordion.js";
import AboutBannerImage from "../../Assets/AboutBannerImage.svg";
import "../Accordion/Accordion.css";
import { accordionData } from "../../Data/accordionData.js";

function AboutContainer() {
  return (
    <>
      <div className="banner">
        <img src={AboutBannerImage} alt="" className="banner__image" />
      </div>
      <div className="accordion">
        {accordionData.map(({ header, text, textclass }) => (
          <Accordion
            header={header}
            text={text}
            key={header}
            textclass={textclass}
          />
        ))}
      </div>
    </>
  );
}

export default AboutContainer;
