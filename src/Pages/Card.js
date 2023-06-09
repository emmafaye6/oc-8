import Layout from "../Components/Layout/Layout";
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
      <CardContent infos={infos} />
    </Layout>
  );
}
export default Card;
