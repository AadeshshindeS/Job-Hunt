import React from "react";
import "../Testnomial/Testnomial.css";
import "../Home/Home.css";

const Testnomial = () => {
  return (
    <div className="test-main">
      <div className="container w-50">
        <div className="align-items-center justify-content-center">
          <h1 style={{ marginTop: "30px" }}>REVIEW</h1>
          <h3 className="text-center fw-light fs-4 ">
            Trusted and Loved by the world's best Developers
          </h3>
          <div className="test-child mt-5 d-flex justify-content-center align-items-center ">
            <div
              id="carouselExampleSlidesOnly"
              className="carousel slide"
              data-bs-ride="carousel"
            >
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <img
                    src="https://images.unsplash.com/photo-1541855492-581f618f69a0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8bWFsZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
                    className="d-block w-50 mb-3 rounded-3"
                    alt="..."
                  />
                  <h4 className="text-center mt-3">Aadesh Shinde</h4>
                  <h5 className="text-center ">
                    Yeahhh ! that is good, and not expensive to create proper
                    wesite
                  </h5>
                  <p className="text-center">⭐⭐⭐⭐⭐</p>
                </div>
                <div className="carousel-item">
                  <img
                    src="https://images.unsplash.com/photo-1480455624313-e29b44bbfde1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fG1hbGV8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
                    className="d-block w-50 mb-3 rounded-3"
                    alt="..."
                  />
                  <h4 className="text-center mt-3">Hitesh Yadav</h4>
                  <h5 className=" text-center ">
                    Yeahhh ! that is good, and too much expensive to create
                    proper wesite
                  </h5>
                  <p className="text-center">⭐⭐⭐</p>
                </div>
                <div className="carousel-item">
                  <img
                    src="https://images.unsplash.com/photo-1564564321837-a57b7070ac4f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fG1hbGV8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
                    className="d-block w-50 mb-3 rounded-3"
                    alt="..."
                  />
                  <h4 className="text-center mt-3">Sanket Kondhalkar</h4>
                  <h5 className="text-center">
                    Yeahhh ! that is not good, and too much expensive to create
                    proper wesite
                  </h5>
                  <p className="text-center">⭐⭐⭐⭐</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testnomial;
