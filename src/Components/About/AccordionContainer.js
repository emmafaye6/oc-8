import Accordion from "./Accordion.js";
import { accordionData } from "../../Data/accordionData.js";

function AccordionContainer() {
  return (
    <div>
      <div className="accordion">
        {accordionData.map(({ header, text }) => (
          <Accordion header={header} text={text} key={header} />
        ))}
      </div>
    </div>
  );
}

export default AccordionContainer;
