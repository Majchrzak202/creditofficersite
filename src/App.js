import "./App.css";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import HomePage from "./pages/HomePage";
import SocialNavbar from "./components/social-navbar/SocialNavbar";
import Copyrigth from "./components/footer/Copyrigth";
import ProductPage from "./pages/product-page/ProductPage";
import { Routes } from "react-router";
import { Route } from "react-router";
import AboutMe from "./components/screens/about/AboutMe";
import ContactPage from "./components/screens/contact/ContactPage";
import ScrollToTop from "./components/scroll-to-top/ScrollToTop";

function App() {
  return (
    <div className="App">
      <Navbar />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/kredyty/:id" element={<ProductPage />} />
        <Route path="/omnie" element={<AboutMe />}></Route>
        <Route path="/kontakt" element={<ContactPage />}></Route>
      </Routes>
      <Footer />
      <Copyrigth />
    </div>
  );
}

export default App;
