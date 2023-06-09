import { Route, Routes, Navigate } from "react-router-dom";
import Card from "./Pages/Card.js";
import About from "./Pages/About.js";
import PageNotFound from "./Pages/PageNotFound.js";
import Home from "./Pages/Home.js";

function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="annonces/:id" element={<Card />} />
      <Route path="/about" element={<About />} />
      <Route path="/404" element={<PageNotFound />} />
      <Route path="*" element={<Navigate to="/404" />} />
    </Routes>
  );
}

export default Router;
