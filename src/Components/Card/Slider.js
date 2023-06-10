import { useState } from "react";
import chevrongauche from "../../Assets/chevrongauche.svg";
import chevrondroit from "../../Assets/chevrondroit.svg";
import "./Slider.css";

function Slider({ infos }) {
  const [slide, setSlide] = useState(0);

  const next = () => {
    setSlide(slide === infos.pictures.length - 1 ? 0 : slide + 1);
  };

  const previous = () => {
    setSlide(slide === 0 ? infos.pictures.length - 1 : slide - 1);
  };

  return (
    <div className="slider">
      {infos.pictures.length > 1 && (
        <img
          src={chevrongauche}
          onClick={previous}
          alt="chevron gauche"
          className="slider__chevron slider__chevrongauche"
        />
      )}
      {infos.pictures.length > 1 && (
        <img
          src={chevrondroit}
          onClick={next}
          alt="chevron droit"
          className="slider__chevron slider__chevrondroit"
        />
      )}

      {infos.pictures.map((picture, index) => {
        return (
          <div key={index}>
            {index === slide && (
              <img
                src={picture}
                alt={infos.pictures.description}
                className="slider__image"
              />
            )}
            {index === slide && (
              <span className="slider__counter">
                {slide + 1}/{infos.pictures.length}
              </span>
            )}
          </div>
        );
      })}
    </div>
  );
}

export default Slider;
