import React from 'react'

function About() {
  return (
    <div>
      <div className="container-fluid bg-primary py-5 mb-5 hero-header">
        <div className="container py-5">
          <div className="row justify-content-center py-5">
            <div className="col-lg-10 pt-lg-5 mt-lg-5 text-center">
              <h1 className="display-3 text-white animated slideInDown">
                About Us
              </h1>
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
              <h6 className="section-title bg-white text-start pe-3" style={{ color: 'var(--primary)' }}>
                About Us
              </h6>
              <h1 className="mb-4">
                Welcome to <span style={{ color: 'var(--primary)' }}>Tourist</span>
              </h1>
              <p className="mb-4">
                Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu
                diam amet diam et eos. Clita erat ipsum et lorem et sit.
              </p>
              <p className="mb-4">
                Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu
                diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet
                lorem sit clita duo justo magna dolore erat amet
              </p>
              <div className="row gy-2 gx-4 mb-4">
                {[
                  "First Class Flights",
                  "Handpicked Hotels",
                  "5 Star Accommodations",
                  "Latest Model Vehicles",
                  "150 Premium City Tours",
                  "24/7 Service",
                ].map((text, i) => (
                  <div className="col-sm-6" key={i}>
                    <p className="mb-0">
                      <i className="fa fa-arrow-right me-2" style={{ color: 'var(--primary)' }} />
                      {text}
                    </p>
                  </div>
                ))}
              </div>
              <a className="btn btn-primary py-3 px-5 mt-2" href="">
                Read More
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* About End */}

      {/* Team Start */}
      <div className="container-xxl py-5">
        <div className="container">
          <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
            <h6 className="section-title bg-white text-center px-3" style={{ color: 'var(--primary)' }}>
              Travel Guide
            </h6>
            <h1 className="mb-5">Meet Our Guide</h1>
          </div>
          <div className="row g-4">
            {[1, 2, 3, 4].map((i, index) => (
              <div
                className="col-lg-3 col-md-6 wow fadeInUp"
                data-wow-delay={`${0.1 + index * 0.2}s`}
                key={i}
              >
                <div className="team-item">
                  <div className="overflow-hidden">
                    <img className="img-fluid" src={`assets/img/team-${i}.jpg`} alt="" />
                  </div>
                  <div
                    className="position-relative d-flex justify-content-center"
                    style={{ marginTop: "-19px" }}
                  >
                    <a className="btn btn-square mx-1" href="">
                      <i className="fab fa-facebook-f" />
                    </a>
                    <a className="btn btn-square mx-1" href="">
                      <i className="fab fa-twitter" />
                    </a>
                    <a className="btn btn-square mx-1" href="">
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
    </div>
  )
}

export default About
