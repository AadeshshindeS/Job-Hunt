import React from "react";
import { useState } from "react";
import "../Servicess/Services.css";

const ChildServices = (props) => {
  const { id, name, image, info, price } = props.value;

  const [showData, setShowData] = useState(false);
  const onClickSeeMore = () => {
    setShowData(!showData);
  };

  return (
    <div className="col-4 child-main mt-5 ">
      <div className="card child-card rounded-5">
        <img src={image} className="card-img-top" alt="..." />
        <div className="card-body">
          <div className="name-price d-flex justify-content-between mt-2">
            <h5 className="card-title">{name}</h5>
            <h5>
              <b>₹</b>
              {price}
            </h5>
          </div>
          <p className="card-text mt-2">
            {info.slice(0, 90)}
            {showData ? info.slice(90) : ""}
            <button
              onClick={onClickSeeMore}
              style={{
                border: "none",
                color: "blue",
                backgroundColor: "white",
              }}
            >
              {showData ? "seeless" : "seemore"}
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ChildServices;
