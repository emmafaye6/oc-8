import { useParams } from "react-router-dom";
import "../Styles/Card.css";
import annonces from "../Data/annonces.json";
import Slider from "../Components/Card/Slider";
import Layout from "../Components/Layout";

function Card() {
  const { id } = useParams();
  const listing = annonces.find((f) => f.id === id);

  return (
    <Layout>
      <Slider />
    </Layout>
  );
}
export default Card;
