import "./CardContent.css";
import Accordion from "../About/Accordion";
import "../../Components/About/Accordion.css";

function CardContent({ infos }) {
  return (
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
  );
}
export default CardContent;
