import "../../Styles/Home/Cards.css";
import annonces from "../../Data/annonces.json";

function Cards() {
  return (
    <div className="cardscontainer">
      {annonces.map(function (annonce) {
        return (
          <div key={annonce.id} className="card">
            <img
              src={annonce.cover}
              alt="Image de l'annonce"
              className="card__image"
            />
            <p className="card__text">{annonce.title}</p>
          </div>
        );
      })}
    </div>
  );
}
export default Cards;
