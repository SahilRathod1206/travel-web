import React from "react";

export default function Home() {
  return (
    <div>
      <div className="container-fluid bg-primary py-5 mb-5 hero-header">
        <div className="container py-5">
          <div className="row justify-content-center py-5">
            <div className="col-lg-10 pt-lg-5 mt-lg-5 text-center">
              <h1 className="display-3 mb-3 animated slideInDown">
                Enjoy Your Vacation With Us
              </h1>
              <p className="fs-4 mb-4 animated slideInDown">
                Tempor erat elitr rebum at clita diam amet diam et eos erat
                ipsum lorem sit
              </p>
              <div className="position-relative w-75 mx-auto animated slideInDown">
                <input
                  className="form-control border-0 rounded-pill w-100 py-3 ps-4 pe-5"
                  type="text"
                  placeholder="Eg: Thailand"
                />
                <button
                  type="button"
                  className="btn btn-primary rounded-pill py-2 px-4 position-absolute top-0 end-0 me-2"
                  style={{ marginTop: 7 }}
                >
                  Search
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* About Start */}
      <div className="container-xxl py-5">
        <div className="container">
          <div className="row g-5">
            <div
              className="col-lg-6 wow fadeInUp"
              data-wow-delay="0.1s"
              style={{ minHeight: 400 }}
            >
              <div className="position-relative h-100">
                <img
                  className="img-fluid position-absolute w-100 h-100"
                  src="assets/img/about.jpg"
                  alt=""
                  style={{ objectFit: "cover" }}
                />
              </div>
            </div>
            <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.3s">
              <h6
                className="section-title bg-white text-start pe-3"
                style={{ color: "var(--primary)" }}
              >
                About Us
              </h6>
              <h1 className="mb-4">
                Welcome to{" "}
                <span style={{ color: "var(--primary)" }}>Tourist</span>
              </h1>
              <p className="mb-4">
                Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit.
                Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit.
              </p>
              <p className="mb-4">
                Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit.
                Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit,
                sed stet lorem sit clita duo justo magna dolore erat amet
              </p>
              <div className="row gy-2 gx-4 mb-4">
                <div className="col-sm-6">
                  <p className="mb-0">
                    <i
                      className="fa fa-arrow-right me-2"
                      style={{ color: "var(--primary)" }}
                    />
                    First Class Flights
                  </p>
                </div>
                <div className="col-sm-6">
                  <p className="mb-0">
                    <i
                      className="fa fa-arrow-right me-2"
                      style={{ color: "var(--primary)" }}
                    />
                    Handpicked Hotels
                  </p>
                </div>
                <div className="col-sm-6">
                  <p className="mb-0">
                    <i
                      className="fa fa-arrow-right me-2"
                      style={{ color: "var(--primary)" }}
                    />
                    5 Star Accommodations
                  </p>
                </div>
                <div className="col-sm-6">
                  <p className="mb-0">
                    <i
                      className="fa fa-arrow-right me-2"
                      style={{ color: "var(--primary)" }}
                    />
                    Latest Model Vehicles
                  </p>
                </div>
                <div className="col-sm-6">
                  <p className="mb-0">
                    <i
                      className="fa fa-arrow-right me-2"
                      style={{ color: "var(--primary)" }}
                    />
                    150 Premium City Tours
                  </p>
                </div>
                <div className="col-sm-6">
                  <p className="mb-0">
                    <i
                      className="fa fa-arrow-right me-2"
                      style={{ color: "var(--primary)" }}
                    />
                    24/7 Service
                  </p>
                </div>
              </div>
              <a className="btn btn-primary py-3 px-5 mt-2" href="">
                Read More
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* About End */}

      {/* Service Start */}
      <div className="container-xxl py-5">
        <div className="container">
          <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
            <h6
              className="section-title bg-white text-center px-3"
              style={{ color: "var(--primary)" }}
            >
              Services
            </h6>
            <h1 className="mb-5">Our Services</h1>
          </div>
          <div className="row g-4">
            {[
              {
                icon: "fa-globe",
                title: "WorldWide Tours",
                delay: "0.1s",
              },
              {
                icon: "fa-hotel",
                title: "Hotel Reservation",
                delay: "0.3s",
              },
              {
                icon: "fa-user",
                title: "Travel Guides",
                delay: "0.5s",
              },
              {
                icon: "fa-cog",
                title: "Event Management",
                delay: "0.7s",
              },
              {
                icon: "fa-globe",
                title: "WorldWide Tours",
                delay: "0.1s",
              },
              {
                icon: "fa-hotel",
                title: "Hotel Reservation",
                delay: "0.3s",
              },
              {
                icon: "fa-user",
                title: "Travel Guides",
                delay: "0.5s",
              },
              {
                icon: "fa-cog",
                title: "Event Management",
                delay: "0.7s",
              },
            ].map((service, idx) => (
              <div
                key={idx}
                className="col-lg-3 col-sm-6 wow fadeInUp"
                data-wow-delay={service.delay}
              >
                <div className="service-item rounded pt-3">
                  <div className="p-4">
                    <i
                      className={`fa fa-3x ${service.icon} mb-4`}
                      style={{ color: "var(--primary)" }}
                    />
                    <h5>{service.title}</h5>
                    <p>
                      Diam elitr kasd sed at elitr sed ipsum justo dolor sed
                      clita amet diam
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Service End */}

      {/* Destination Start */}
      <div className="container-xxl py-5 destination">
        <div className="container">
          <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
            <h6
              className="section-title bg-white text-center px-3"
              style={{ color: "var(--primary)" }}
            >
              Destination
            </h6>
            <h1 className="mb-5">Popular Destination</h1>
          </div>
          <div className="row g-3">
            <div className="col-lg-7 col-md-6">
              <div className="row g-3">
                <div
                  className="col-lg-12 col-md-12 wow zoomIn"
                  data-wow-delay="0.1s"
                >
                  <a
                    className="position-relative d-block overflow-hidden"
                    href=""
                  >
                    <img
                      className="img-fluid"
                      src="assets/img/destination-1.jpg"
                      alt=""
                    />
                    <div className="bg-white text-danger fw-bold position-absolute top-0 start-0 m-3 py-1 px-2">
                      30% OFF
                    </div>
                    <div
                      className="bg-white fw-bold position-absolute bottom-0 end-0 m-3 py-1 px-2"
                      style={{ color: "var(--primary)" }}
                    >
                      Thailand
                    </div>
                  </a>
                </div>
                <div
                  className="col-lg-6 col-md-12 wow zoomIn"
                  data-wow-delay="0.3s"
                >
                  <a
                    className="position-relative d-block overflow-hidden"
                    href=""
                  >
                    <img
                      className="img-fluid"
                      src="assets/img/destination-2.jpg"
                      alt=""
                    />
                    <div className="bg-white text-danger fw-bold position-absolute top-0 start-0 m-3 py-1 px-2">
                      25% OFF
                    </div>
                    <div
                      className="bg-white fw-bold position-absolute bottom-0 end-0 m-3 py-1 px-2"
                      style={{ color: "var(--primary)" }}
                    >
                      Malaysia
                    </div>
                  </a>
                </div>
                <div
                  className="col-lg-6 col-md-12 wow zoomIn"
                  data-wow-delay="0.5s"
                >
                  <a
                    className="position-relative d-block overflow-hidden"
                    href=""
                  >
                    <img
                      className="img-fluid"
                      src="assets/img/destination-3.jpg"
                      alt=""
                    />
                    <div className="bg-white text-danger fw-bold position-absolute top-0 start-0 m-3 py-1 px-2">
                      35% OFF
                    </div>
                    <div
                      className="bg-white fw-bold position-absolute bottom-0 end-0 m-3 py-1 px-2"
                      style={{ color: "var(--primary)" }}
                    >
                      Australia
                    </div>
                  </a>
                </div>
              </div>
            </div>
            <div
              className="col-lg-5 col-md-6 wow zoomIn"
              data-wow-delay="0.7s"
              style={{ minHeight: 350 }}
            >
              <a
                className="position-relative d-block h-100 overflow-hidden"
                href=""
              >
                <img
                  className="img-fluid position-absolute w-100 h-100"
                  src="assets/img/destination-4.jpg"
                  alt=""
                  style={{ objectFit: "cover" }}
                />
                <div className="bg-white text-danger fw-bold position-absolute top-0 start-0 m-3 py-1 px-2">
                  20% OFF
                </div>
                <div
                  className="bg-white fw-bold position-absolute bottom-0 end-0 m-3 py-1 px-2"
                  style={{ color: "var(--primary)" }}
                >
                  Indonesia
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* Destination end */}

      {/* Package Start */}
      <div className="container-xxl py-5">
        <div className="container">
          <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
            <h6
              className="section-title bg-white text-center px-3"
              style={{ color: "var(--primary)" }}
            >
              Packages
            </h6>
            <h1 className="mb-5">Awesome Packages</h1>
          </div>
          <div className="row g-4 justify-content-center">
            {[
              {
                image: "package-1.jpg",
                country: "Thailand",
                price: "$149.00",
                delay: "0.1s",
              },
              {
                image: "package-2.jpg",
                country: "Indonesia",
                price: "$139.00",
                delay: "0.3s",
              },
              {
                image: "package-3.jpg",
                country: "Malaysia",
                price: "$189.00",
                delay: "0.5s",
              },
            ].map((pkg, i) => (
              <div
                className="col-lg-4 col-md-6 wow fadeInUp"
                data-wow-delay={pkg.delay}
                key={i}
              >
                <div className="package-item">
                  <div className="overflow-hidden">
                    <img
                      className="img-fluid"
                      src={`assets/img/${pkg.image}`}
                      alt=""
                    />
                  </div>
                  <div className="d-flex border-bottom">
                    <small className="flex-fill text-center border-end py-2">
                      <i
                        className="fa fa-map-marker-alt me-2"
                        style={{ color: "var(--primary)" }}
                      />
                      {pkg.country}
                    </small>
                    <small className="flex-fill text-center border-end py-2">
                      <i
                        className="fa fa-calendar-alt me-2"
                        style={{ color: "var(--primary)" }}
                      />
                      3 days
                    </small>
                    <small className="flex-fill text-center py-2">
                      <i
                        className="fa fa-user me-2"
                        style={{ color: "var(--primary)" }}
                      />
                      2 Person
                    </small>
                  </div>
                  <div className="text-center p-4">
                    <h3 className="mb-0">{pkg.price}</h3>
                    <div className="mb-3">
                      {[...Array(5)].map((_, s) => (
                        <small
                          className="fa fa-star"
                          key={s}
                          style={{ color: "var(--primary)" }}
                        />
                      ))}
                    </div>
                    <p>
                      Tempor erat elitr rebum at clita. Diam dolor diam ipsum
                      sit diam amet diam eos
                    </p>
                    <div className="d-flex justify-content-center mb-2">
                      <a
                        href="#"
                        className="btn btn-sm btn-primary px-3 border-end"
                        style={{ borderRadius: "30px 0 0 30px" }}
                      >
                        Read More
                      </a>
                      <a
                        href="#"
                        className="btn btn-sm btn-primary px-3"
                        style={{ borderRadius: "0 30px 30px 0" }}
                      >
                        Book Now
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* Package End */}

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
                        id="date3"
                        data-target-input="nearest"
                      >
                        <input
                          type="text"
                          className="form-control bg-transparent datetimepicker-input"
                          id="datetime"
                          placeholder="Date & Time"
                          data-target="#date3"
                          data-toggle="datetimepicker"
                        />
                        <label htmlFor="datetime">Date &amp; Time</label>
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

      {/* Team Start */}
      <div className="container-xxl py-5">
        <div className="container">
          <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
            <h6
              className="section-title bg-white text-center px-3"
              style={{ color: "var(--primary)" }}
            >
              Travel Guide
            </h6>
            <h1 className="mb-5">Meet Our Guide</h1>
          </div>
          <div className="row g-4">
            {[1, 2, 3, 4].map((num, i) => (
              <div
                className="col-lg-3 col-md-6 wow fadeInUp"
                data-wow-delay={`${0.1 + i * 0.2}s`}
                key={i}
              >
                <div className="team-item">
                  <div className="overflow-hidden">
                    <img
                      className="img-fluid"
                      src={`assets/img/team-${num}.jpg`}
                      alt={`Guide ${num}`}
                    />
                  </div>
                  <div
                    className="position-relative d-flex justify-content-center"
                    style={{ marginTop: "-19px" }}
                  >
                    <a
                      className="btn btn-square mx-1"
                      href="#"
                      style={{
                        backgroundColor: "var(--primary)",
                        color: "#fff",
                      }}
                    >
                      <i className="fab fa-facebook-f" />
                    </a>
                    <a
                      className="btn btn-square mx-1"
                      href="#"
                      style={{
                        backgroundColor: "var(--primary)",
                        color: "#fff",
                      }}
                    >
                      <i className="fab fa-twitter" />
                    </a>
                    <a
                      className="btn btn-square mx-1"
                      href="#"
                      style={{
                        backgroundColor: "var(--primary)",
                        color: "#fff",
                      }}
                    >
                      <i className="fab fa-instagram" />
                    </a>
                  </div>
                  <div className="text-center p-4">
                    <h5 className="mb-0">Full Name</h5>
                    <small>Designation</small>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* Team End */}

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
