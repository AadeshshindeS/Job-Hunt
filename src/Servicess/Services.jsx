import React from "react";
import { useState } from "react";
import data from "../Services.js";
import "../Servicess/Services.css";
import ChildServices from "./ChildServices.jsx";
import "../Home/Home.css";

const Services = () => {
  const [servicesData, setServicesData] = useState(data);

  return (
    <div className="container servicesmainpage" style={{ height: "auto" }}>
      <div className="text-center">
        <h1 className="pt-4 mb-2">SERVICES</h1>
        <div className="row mb-5 servicespage">
          {servicesData.map((item) => {
            return <ChildServices value={item} key={item.id} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Services;
