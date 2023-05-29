import "../../Styles/Card/CardContent.css";
import annonces from "../../Data/annonces.json";
import { useParams } from "react-router-dom";
import SmallAccordion from "../Card/SmallAccordion";

function CardContent({ infos }) {
  return (
    <div className="cardcontent">
      <SmallAccordion
        header="Description"
        text={infos.description}
        key={infos.description}
      />
      <SmallAccordion
        header="Équipements"
        text={infos.equipments.map(function (equipment) {
          return (
            <ul className="equipmentlist" key={equipment}>
              <li key={equipment}>{equipment}</li>
            </ul>
          );
        })}
        key={infos.equipments}
      />
    </div>
  );
}
export default CardContent;
