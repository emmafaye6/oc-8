import Footer from "./Footer";
import Header from "./Header";
import "../Styles/Layout.css";

function Layout({ children }) {
  return (
    <div className="layout">
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
}

export default Layout;
