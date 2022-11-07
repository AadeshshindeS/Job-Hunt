import React from "react";
import { Link } from "react-router-dom";
import "../Home/Home.css";

const Home = () => {
  return (
    <div className="home-main">
      <div className="container">
        <div className="row mt-5 homepagerow">
          <div className="col text-center">
            <div
              id="carouselExampleSlidesOnly"
              className="carousel slide"
              data-bs-ride="carousel"
            >
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <img
                    src="https://cdn-static.talent.com/img/home-page/img-home-1.png"
                    className="d-block w-100"
                    alt="..."
                    height="400px"
                    style={{ objectFit: "cover" }}
                  />
                </div>
                <div className="carousel-item">
                  <img
                    src="https://www.jobcloud.ch/wp-content/uploads/2020/04/14_Bnefits_Collaboration-3.svg"
                    className="d-block w-100"
                    alt="..."
                    height="400px"
                    style={{ objectFit: "cover" }}
                  />
                </div>
                <div className="carousel-item">
                  <img
                    src="https://www.engdict.com/data/dict/media/images_public/job-00035179637376138922602356_normal.png"
                    className="d-block w-100"
                    alt="..."
                    height="400px"
                    style={{ objectFit: "contain" }}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="col homepagecol2">
            <h1
              style={{
                textAlign: "start",
                display: "block",
                width: "100%",
              }}
            >
              Job Hunt is <b style={{ color: "red" }}> Over Now! </b>
            </h1>
            <p className="para" style={{ display: "block", fontWeight: "500" }}>
              Choose a job you love, and you will never have to work a day in
              your life.
            </p>
            <p style={{ display: "block", fontWeight: "500" }}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis
              deleniti rerum laborum commodi amet ratione corporis? Eaque ex
              beatae perferendis in natus consequatur aliquid eligendi.
            </p>
            <div className="enquiry-btn text-center">
              <Link to="/services">
                <button type="button" className="btn btn-outline-danger mt-4">
                  Enquiry Now
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
