import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "../components/App/App";
import Header from "../components/Header/Header";
import Slider from "../components/Slider/Slider";
import Sale from "../components/Sale/Sale";
import Category from "../components/Category/Category";
import Info from "../components/Info/Into";
import New from "../components/New/New";
import MostSale from "../components/mostSale/mostSale";
import BestBrands from "../components/BestBrands/BestBrands";
import Article from "../components/Article/Article";
import Footer from "../components/Footer/Footer";

<link
  rel="stylesheet"
  href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0&icon_names=shopping_cart"
/>;

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Header/>
    <Slider/>
    <Sale/>
    <Category/>
    <New/>
    <Info/>
    <MostSale/>
    {/* <BestBrands/>
    <Article/> */}
    <Footer/>
  </StrictMode>
);
