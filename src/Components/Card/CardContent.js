import "./CardContent.css";
import "../Card/CardHeader.css";
import "./Slider.css";
import Accordion from "../Accordion/Accordion";
import "../../Components/Accordion/Accordion.css";
import { useState } from "react";
import chevrongauche from "../../Assets/chevrongauche.svg";
import chevrondroit from "../../Assets/chevrondroit.svg";
import Stars from "./Stars";

function CardContent({ infos }) {
  const [slide, setSlide] = useState(0);

  const next = () => {
    setSlide(slide === infos.pictures.length - 1 ? 0 : slide + 1);
  };
  const previous = () => {
    setSlide(slide === 0 ? infos.pictures.length - 1 : slide - 1);
  };

  return (
    <>
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
      <div className="cardheader">
        <section className="cardheader__titletagcontainer">
          <h1 className="cardheader__title">{infos.title}</h1>
          <h2 className="cardheader__location">{infos.location}</h2>
          <ul className="cardheader__tagscontainer">
            {infos.tags.map((tag) => {
              return (
                <li className="cardheader__tag" key={tag}>
                  {tag}
                </li>
              );
            })}
          </ul>
        </section>
        <div className="cardheader__starshostcontainer">
          <div className="cardheader__hostcontainer">
            <section className="cardheader__hostname">
              {infos.host.name}
            </section>
            <img
              src={infos.host.picture}
              alt=""
              className="cardheader__hostpicture"
            />
          </div>
          <Stars infos={infos} />
        </div>
      </div>
      <div className="cardcontent">
        <Accordion
          header="Description"
          text={infos.description}
          key={infos.description}
          className="smallaccordion"
        />
        <Accordion
          className="smallaccordion"
          header="Équipements"
          text={infos.equipments.map((equipment) => {
            return (
              <ul className="equipmentlist" key={equipment}>
                <li key={equipment}>{equipment}</li>
              </ul>
            );
          })}
          key={infos.equipments}
        />
      </div>
    </>
  );
}
export default CardContent;
