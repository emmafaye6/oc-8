import Slider from "../Components/Card/Slider";
import Layout from "../Components/Layout/Layout";
import CardHeader from "../Components/Card/CardHeader";
import CardContent from "../Components/Card/CardContent";
import annonces from "../Data/annonces.json";
import { useParams, Navigate } from "react-router-dom";

function Card() {
  const { id } = useParams();
  const infos = annonces.find((f) => f.id === id);

  if (!infos) {
    return <Navigate to="/404" />;
  }

  return (
    <Layout>
      <Slider infos={infos} />
      <CardHeader infos={infos} />
      <CardContent infos={infos} />
    </Layout>
  );
}
export default Card;
