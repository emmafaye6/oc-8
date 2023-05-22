import "../../Styles/Home/Cards.css";
import annonces from "../../Data/annonces.json";

function Cards() {
  return (
    <div className="cardscontainer">
      {annonces.map(function (annonce) {
        return (
          <div key={annonce.id} className="card">
            {annonce.title}
          </div>
        );
      })}
    </div>
  );
}
export default Cards;
