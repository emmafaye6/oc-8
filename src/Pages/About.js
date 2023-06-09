import Layout from "../Components/Layout/Layout";
import AboutContainer from "../Components/About/AboutContainer";
import { useEffect } from "react";

function About() {
  useEffect(() => {
    document.title = "Kasa - À propos";
  }, []);

  return (
    <Layout>
      <AboutContainer />
    </Layout>
  );
}

export default About;
