import Accordion from "./Accordion.js";
import "./Accordion.css";
import { accordionData } from "../../Data/accordionData.js";

function AccordionContainer() {
  return (
    <div className="accordion">
      {accordionData.map(({ header, text, textclass }) => (
        <Accordion
          header={header}
          text={text}
          key={header}
          textclass={textclass}
        />
      ))}
    </div>
  );
}

export default AccordionContainer;
