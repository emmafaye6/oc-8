import annonces from "../../Data/annonces.json";
import { useParams } from "react-router-dom";
import "../../Styles/Card/CardHeader.css";

function CardHeader() {
  const { id } = useParams();

  const infos = annonces.find((f) => f.id === id);
  const { title, location, tags, host } = infos;

  return (
    <div className="cardheader">
      <section className="cardheader__titletagcontainer">
        <h1 className="cardheader__title">{title}</h1>
        <h2 className="cardheader__location">{location}</h2>
        <ul className="cardheader__tagscontainer">
          {tags.map(function (tag) {
            return (
              <li className="cardheader__tag" key={tag}>
                {tag}
              </li>
            );
          })}
        </ul>
      </section>
      <div className="cardheader__hostcontainer">
        <section className="cardheader__hostname">{host.name}</section>
        <img src={host.picture} alt="" className="cardheader__hostpicture" />
      </div>
    </div>
  );
}
export default CardHeader;
