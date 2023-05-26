import { useState } from "react";
import "../../Styles/Card/SmallAccordion.css";
import upchevron from "../../Assets/upchevron.svg";
import downchevron from "../../Assets/downchevron.svg";

function SmallAccordion({ header, text }) {
  const [isActive, setIsActive] = useState(false);
  return (
    <div className="smallaccordion">
      <div
        className="smallaccordion__header"
        onClick={() => setIsActive(!isActive)}
      >
        <div>{header}</div>
        <div>
          {isActive ? (
            <img src={upchevron} alt="Chevron vers le haut" />
          ) : (
            <img src={downchevron} alt="Chevron vers le bas" />
          )}
        </div>
      </div>
      {isActive && <div className="smallaccordion__text">{text}</div>}
    </div>
  );
}
export default SmallAccordion;
