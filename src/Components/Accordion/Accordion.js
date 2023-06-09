import { useState } from "react";
import "./Accordion.css";
import upchevron from "../../Assets/upchevron.svg";
import downchevron from "../../Assets/downchevron.svg";

function Accordion({ header, text, className }) {
  const [isActive, setIsActive] = useState(false);

  return (
    <div className={className}>
      <div className="accordion__header" onClick={() => setIsActive(!isActive)}>
        <div>{header}</div>
        <div>
          {isActive ? (
            <img src={upchevron} alt="Chevron vers le haut" />
          ) : (
            <img src={downchevron} alt="Chevron vers le bas" />
          )}
        </div>
      </div>
      {isActive && <div className="accordion__text">{text}</div>}
    </div>
  );
}
export default Accordion;
