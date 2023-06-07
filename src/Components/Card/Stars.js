import FullStar from "../../Assets/FullStar.svg";
import EmptyStar from "../../Assets/EmptyStar.svg";
import "./CardHeader.css";

function Stars({ infos }) {
  const starNumber = [1, 2, 3, 4, 5];

  return (
    <div className="stars__container">
      {starNumber.map((stars) =>
        infos.rating >= stars ? (
          <img
            src={FullStar}
            alt="etoile pleine"
            key={stars}
            className="star"
          />
        ) : (
          <img src={EmptyStar} alt="etoile vide" key={stars} className="star" />
        )
      )}
    </div>
  );
}

export default Stars;
