import annonces from "../../Data/annonces.json";
import { useState } from "react";
import { useParams } from "react-router-dom";
import chevrongauche from "../../Assets/chevrongauche.svg";
import chevrondroit from "../../Assets/chevrondroit.svg";
import "../../Styles/Card/Slider.css";

function Slider() {
  const { id } = useParams();
  const { pictures } = annonces.find((f) => f.id === id);

  const [slide, setSlide] = useState(0);

  const next = () => {
    setSlide(slide === pictures.length - 1 ? 0 : slide + 1);
  };

  const previous = () => {
    setSlide(slide === 0 ? pictures.length - 1 : slide - 1);
  };

  return (
    <div className="slider">
      {pictures.length > 1 && (
        <img
          src={chevrongauche}
          onClick={previous}
          alt="chevron gauche"
          className="slider__chevron slider__chevrongauche"
        />
      )}
      {pictures.length > 1 && (
        <img
          src={chevrondroit}
          onClick={next}
          alt="chevron droit"
          className="slider__chevron slider__chevrondroit"
        />
      )}

      {pictures.map((picture, index) => {
        return (
          <div key={index}>
            {index === slide && (
              <img
                src={picture}
                alt={pictures.description}
                className="slider__image"
              />
            )}
            {index === slide && (
              <span className="slider__counter">
                {slide + 1}/{pictures.length}
              </span>
            )}
          </div>
        );
      })}
    </div>
  );
}

export default Slider;
