import React from "react";

function Booking() {
  return (
    <div>
      <div className="container-fluid bg-primary py-5 mb-5 hero-header">
        <div className="container py-5">
          <div className="row justify-content-center py-5">
            <div className="col-lg-10 pt-lg-5 mt-lg-5 text-center">
              <h1 className="display-3 text-white animated slideInDown">
                Booking
              </h1>
            </div>
          </div>
        </div>
      </div>
      {/* Process Start */}
      <div className="container-xxl py-5">
        <div className="container">
          <div className="text-center pb-4 wow fadeInUp" data-wow-delay="0.1s">
            <h6
              className="section-title bg-white text-center px-3"
              style={{ color: "var(--primary)" }}
            >
              Process
            </h6>
            <h1 className="mb-5">3 Easy Steps</h1>
          </div>
          <div className="row gy-5 gx-4 justify-content-center">
            {[
              {
                icon: "globe",
                title: "Choose A Destination",
                delay: "0.1s",
              },
              {
                icon: "dollar-sign",
                title: "Pay Online",
                delay: "0.3s",
              },
              {
                icon: "plane",
                title: "Fly Today",
                delay: "0.5s",
              },
            ].map((step, i) => (
              <div
                className="col-lg-4 col-sm-6 text-center pt-4 wow fadeInUp"
                data-wow-delay={step.delay}
                key={i}
              >
                <div
                  className="position-relative pt-5 pb-4 px-4"
                  style={{ border: "1px solid var(--primary)" }}
                >
                  <div
                    className="d-inline-flex align-items-center justify-content-center rounded-circle position-absolute top-0 start-50 translate-middle shadow"
                    style={{
                      width: 100,
                      height: 100,
                      backgroundColor: "var(--primary)",
                    }}
                  >
                    <i className={`fa fa-${step.icon} fa-3x text-white`} />
                  </div>
                  <h5 className="mt-4">{step.title}</h5>
                  <hr
                    className="w-25 mx-auto mb-1"
                    style={{ backgroundColor: "var(--primary)" }}
                  />
                  <hr
                    className="w-50 mx-auto mt-0"
                    style={{ backgroundColor: "var(--primary)" }}
                  />
                  <p className="mb-0">
                    Tempor erat elitr rebum clita dolor diam ipsum sit diam amet
                    diam eos erat ipsum et lorem et sit sed stet lorem sit
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* Process End */}

      {/* Booking Start */}
      <div className="container-xxl py-5 wow fadeInUp" data-wow-delay="0.1s">
        <div className="container">
          <div className="booking p-5">
            <div className="row g-5 align-items-center">
              <div className="col-md-6 text-white">
                <h6 className="text-white text-uppercase">Booking</h6>
                <h1 className="text-white mb-4">Online Booking</h1>
                <p className="mb-4">
                  Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit.
                  Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit.
                </p>
                <p className="mb-4">
                  Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit.
                  Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit,
                  sed stet lorem sit clita duo justo magna dolore erat amet
                </p>
                <a className="btn btn-outline-light py-3 px-5 mt-2" href="">
                  Read More
                </a>
              </div>
              <div className="col-md-6">
                <h1 className="text-white mb-4">Book A Tour</h1>
                <form>
                  <div className="row g-3">
                    <div className="col-md-6">
                      <div className="form-floating">
                        <input
                          type="text"
                          className="form-control bg-transparent"
                          id="name"
                          placeholder="Your Name"
                        />
                        <label htmlFor="name">Your Name</label>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-floating">
                        <input
                          type="email"
                          className="form-control bg-transparent"
                          id="email"
                          placeholder="Your Email"
                        />
                        <label htmlFor="email">Your Email</label>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div
                        className="form-floating date"
                        id="date"
                        data-target-input="nearest"
                      >
                        <input
                          type="text"
                          className="form-control bg-transparent"
                          id="datetime"
                          placeholder="Date"
                        />
                        <label htmlFor="datetime">Date </label>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-floating">
                        <input
                          type="text"
                          className="form-control bg-transparent"
                          id="destination"
                          placeholder="Your Destination"
                        />
                        <label htmlFor="select1">Destination</label>
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="form-floating">
                        <textarea
                          className="form-control bg-transparent"
                          placeholder="Special Request"
                          id="message"
                          style={{ height: 100 }}
                          defaultValue={""}
                        />
                        <label htmlFor="message">Special Request</label>
                      </div>
                    </div>
                    <div className="col-12">
                      <button
                        className="btn btn-outline-light w-100 py-3"
                        type="submit"
                      >
                        Book Now
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Booking end */}
    </div>
  );
}

export default Booking;
