import Footer from "./Footer.js";
import Header from "./Header.js";

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
