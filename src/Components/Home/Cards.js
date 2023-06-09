import "./Cards.css";
import annonces from "../../Data/annonces.json";
import { Link } from "react-router-dom";

function Cards() {
  return (
    <div className="cardscontainer">
      {annonces.map((annonce) => {
        return (
          <div key={annonce.id} className="card">
            <Link to={`/annonces/${annonce.id}`}>
              <img src={annonce.cover} alt="Annonce" className="card__image" />
              <p className="card__text">{annonce.title}</p>
            </Link>
          </div>
        );
      })}
    </div>
  );
}

export default Cards;
