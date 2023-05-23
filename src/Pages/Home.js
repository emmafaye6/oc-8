import Layout from "../Components/Layout.js";
import Banner from "../Components/Home/Banner.js";
import Cards from "../Components/Home/Cards.js";
import { useEffect } from "react";

function Home() {
  useEffect(() => {
    document.title = "Kasa - Accueil";
  }, []);

  return (
    <Layout>
      <Banner />
      <Cards />
    </Layout>
  );
}
export default Home;
