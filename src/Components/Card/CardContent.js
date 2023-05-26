import "../../Styles/Card/CardContent.css";
import annonces from "../../Data/annonces.json";
import { useParams } from "react-router-dom";
import SmallAccordion from "../Card/SmallAccordion";

function CardContent() {
  const { id } = useParams();
  const listingData = annonces.find((f) => f.id === id);
  const { description, equipments } = listingData;

  return (
    <div className="cardcontent">
      <SmallAccordion
        header="Description"
        text={description}
        key={description}
      />
      <SmallAccordion
        header="Équipements"
        text={equipments.map(function (equipment) {
          return (
            <ul className="equipmentlist" key={equipment}>
              <li key={equipment}>{equipment}</li>
            </ul>
          );
        })}
        key={equipments}
      />
    </div>
  );
}
export default CardContent;
