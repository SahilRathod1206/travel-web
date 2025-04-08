import React from "react";

function Testimonial() {
  return (
    <div>
      <div className="container-fluid bg-primary py-5 mb-5 hero-header">
        <div className="container py-5">
          <div className="row justify-content-center py-5">
            <div className="col-lg-10 pt-lg-5 mt-lg-5 text-center">
              <h1 className="display-3 text-white animated slideInDown">
                Testimonial
              </h1>
            </div>
          </div>
        </div>
      </div>
      {/* Testimonial Start */}
      <div className="container-xxl py-5 wow fadeInUp" data-wow-delay="0.1s">
        <div className="container">
          <div className="text-center">
            <h6
              className="section-title bg-white text-center px-3"
              style={{ color: "var(--primary)" }}
            >
              Testimonial
            </h6>
            <h1 className="mb-5">Our Clients Say!!!</h1>
          </div>
          <div className="owl-carousel testimonial-carousel position-relative">
            {[1, 2, 3, 4].map((num, i) => (
              <div
                className="testimonial-item bg-white text-center border p-4"
                key={i}
              >
                <img
                  className="bg-white rounded-circle shadow p-1 mx-auto mb-3"
                  src={`assets/img/testimonial-${num}.jpg`}
                  style={{ width: 80, height: 80 }}
                  alt={`Client ${num}`}
                />
                <h5 className="mb-0">John Doe</h5>
                <p>New York, USA</p>
                <p className="mb-0">
                  Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit
                  diam amet diam et eos. Clita erat ipsum et lorem et sit.
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* Testimonial End */}
    </div>
  );
}

export default Testimonial;
