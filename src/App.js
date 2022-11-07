import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import All from "./All";
import Footer from "./Footer/Footer";
import Gallery from "./Gallery/Gallery";
import Home from "./Home/Home";
import Navbar from "./Navbar/Navbar";
import Services from "./Servicess/Services";
import Testnomial from "./Testnomial/Testnomial";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<All />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/services" element={<Services />} />
        <Route path="/testnomial" element={<Testnomial />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;

{
  /* <Gallery />
      <Services />
      <Testnomial />
      <Footer /> */
}
