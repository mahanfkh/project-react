import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Header from "../components/Header/Header.jsx";
import Slider from "../components/Slider/Slider.jsx";
import Sale from "../components/Sale/Sale.jsx";
import Category from "../components/Category/Category.jsx";
import Info from "../components/Info/Into.jsx";
import New from "../components/New/New.jsx";
import BestBrands from "../components/BestBrands/BestBrands.jsx";
import Article from "../components/Article/Article.jsx";
import Footer from "../components/Footer/Footer.jsx";
import MostSale from "../components/MostSale/MostSale.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Header />
    <Slider />
    <Sale />
    <Category />
    <New />
    <Info />
    <MostSale />
    <BestBrands />
    <Article />
    <Footer />
  </StrictMode>
);
