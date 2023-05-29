import "../Styles/Card.css";
import Slider from "../Components/Card/Slider";
import Layout from "../Components/Layout";
import CardHeader from "../Components/Card/CardHeader";
import CardContent from "../Components/Card/CardContent";
import annonces from "../Data/annonces.json";
import { useParams } from "react-router-dom";

function Card() {
  const { id } = useParams();

  const infos = annonces.find((f) => f.id === id);
  const { title, location, tags, host, description, equipments } = infos;

  return (
    <Layout>
      <Slider />
      <CardHeader infos={infos} />
      <CardContent infos={infos} />
    </Layout>
  );
}
export default Card;
