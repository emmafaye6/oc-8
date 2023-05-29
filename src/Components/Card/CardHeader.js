import "../../Styles/Card/CardHeader.css";
import Stars from "./Stars";

function CardHeader({ infos }) {
  return (
    <div className="cardheader">
      <section className="cardheader__titletagcontainer">
        <h1 className="cardheader__title">{infos.title}</h1>
        <h2 className="cardheader__location">{infos.location}</h2>
        <ul className="cardheader__tagscontainer">
          {infos.tags.map(function (tag) {
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
          <section className="cardheader__hostname">{infos.host.name}</section>
          <img
            src={infos.host.picture}
            alt=""
            className="cardheader__hostpicture"
          />
        </div>
        <Stars />
      </div>
    </div>
  );
}
export default CardHeader;
