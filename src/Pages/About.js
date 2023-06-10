import Layout from "../Components/Layout/Layout";
import AboutBanner from "../Components/About/AboutBanner";
import AccordionContainer from "../Components/About/AccordionContainer";
import { useEffect } from "react";

function About() {
  useEffect(() => {
    document.title = "Kasa - À propos";
  }, []);

  return (
    <Layout>
      <AboutBanner />
      <AccordionContainer />
    </Layout>
  );
}

export default About;
