import "./PageNotFound.css";
import Layout from "../Components/Layout/Layout.js";
import { Link } from "react-router-dom";

function PageNotFound() {
  return (
    <Layout>
      <div className="error">
        <h1 className="error__h1">404</h1>
        <h2 className="error__h2">
          Oups! La page que vous demandez n'existe pas.
        </h2>
        <Link to="/" className="error__link">
          Retourner sur la page d’accueil
        </Link>
      </div>
    </Layout>
  );
}

export default PageNotFound;
