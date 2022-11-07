import React from "react";
import "../Gallery/Gallery.css";
import data from "../gallery.js";
import { useState } from "react";

const Gallery = () => {
  const [galleryData, setFalleryData] = useState(data);
  return (
    <div className="containergallery">
      <div className="container">
        <div className="row">
          <div className="col text-center">
            <h1 className="pt-4 mb-2">GALLERY</h1>
            {galleryData.map((item) => {
              return (
                <img
                  src={item.image}
                  className="img-thumbnail mt-5"
                  alt="..."
                  style={{ height: "200px", width: "300px" }}
                  key={item.id}
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
