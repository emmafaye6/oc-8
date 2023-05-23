import { useParams } from "react-router-dom";
import "../Styles/Card.css";
import annonces from "../Data/annonces.json";

function Card() {
  const { id } = useParams();
  const listing = annonces.find((f) => f.id === id);

  return (
    <div>
      <h1>{listing.title}</h1>
    </div>
  );
}
export default Card;
