import annonces from "../../Data/annonces.json";
import { useParams } from "react-router-dom";
import FullStar from "../../Assets/FullStar.svg";
import EmptyStar from "../../Assets/EmptyStar.svg";

function Stars() {
  const { id } = useParams();
  const infos = annonces.find((f) => f.id === id);
  const { rating } = infos;
  const starNumber = [1, 2, 3, 4, 5];

  return (
    <div className="stars__container">
      {starNumber.map((stars) =>
        rating >= stars ? (
          <img src={FullStar} alt="" key={stars} className="star" />
        ) : (
          <img src={EmptyStar} alt="" key={stars} className="star" />
        )
      )}
    </div>
  );
}

export default Stars;
