import React from 'react';

function Packages() {
  const primaryStyle = { color: 'var(--primary)' };

  return (
    <div>
      <div className="container-fluid bg-primary py-5 mb-5 hero-header">
        <div className="container py-5">
          <div className="row justify-content-center py-5">
            <div className="col-lg-10 pt-lg-5 mt-lg-5 text-center">
              <h1 className="display-3 text-white animated slideInDown">
                Packages
              </h1>
            </div>
          </div>
        </div>
      </div>

      {/* Package Start */}
      <div className="container-xxl py-5">
        <div className="container">
          <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
            <h6 className="section-title bg-white text-center px-3" style={primaryStyle}>
              Packages
            </h6>
            <h1 className="mb-5">Awesome Packages</h1>
          </div>
          <div className="row g-4 justify-content-center">
            {[{
              img: 'assets/img/package-1.jpg',
              location: 'Thailand',
              price: '$149.00',
              delay: '0.1s'
            }, {
              img: 'assets/img/package-2.jpg',
              location: 'Indonesia',
              price: '$139.00',
              delay: '0.3s'
            }, {
              img: 'assets/img/package-3.jpg',
              location: 'Malaysia',
              price: '$189.00',
              delay: '0.5s'
            }].map((pkg, i) => (
              <div key={i} className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay={pkg.delay}>
                <div className="package-item">
                  <div className="overflow-hidden">
                    <img className="img-fluid" src={pkg.img} alt="" />
                  </div>
                  <div className="d-flex border-bottom">
                    <small className="flex-fill text-center border-end py-2">
                      <i className="fa fa-map-marker-alt me-2" style={primaryStyle} />
                      {pkg.location}
                    </small>
                    <small className="flex-fill text-center border-end py-2">
                      <i className="fa fa-calendar-alt me-2" style={primaryStyle} />3 days
                    </small>
                    <small className="flex-fill text-center py-2">
                      <i className="fa fa-user me-2" style={primaryStyle} />2 Person
                    </small>
                  </div>
                  <div className="text-center p-4">
                    <h3 className="mb-0">{pkg.price}</h3>
                    <div className="mb-3">
                      {[...Array(5)].map((_, j) => (
                        <small key={j} className="fa fa-star" style={primaryStyle} />
                      ))}
                    </div>
                    <p>
                      Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit diam amet diam eos
                    </p>
                    <div className="d-flex justify-content-center mb-2">
                      <a href="#" className="btn btn-sm btn-primary px-3 border-end" style={{ borderRadius: "30px 0 0 30px" }}>
                        Read More
                      </a>
                      <a href="#" className="btn btn-sm btn-primary px-3" style={{ borderRadius: "0 30px 30px 0" }}>
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

      {/* Booking Section */}
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
                        <input type="text" className="form-control bg-transparent" id="name" placeholder="Your Name" />
                        <label htmlFor="name">Your Name</label>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-floating">
                        <input type="email" className="form-control bg-transparent" id="email" placeholder="Your Email" />
                        <label htmlFor="email">Your Email</label>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-floating date" id="date3" data-target-input="nearest">
                        <input type="text" className="form-control bg-transparent datetimepicker-input" id="datetime" placeholder="Date & Time" data-target="#date3" data-toggle="datetimepicker" />
                        <label htmlFor="datetime">Date &amp; Time</label>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-floating">
                        <select className="form-select bg-transparent" id="select1">
                          <option value={1}>Destination 1</option>
                          <option value={2}>Destination 2</option>
                          <option value={3}>Destination 3</option>
                        </select>
                        <label htmlFor="select1">Destination</label>
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="form-floating">
                        <textarea className="form-control bg-transparent" placeholder="Special Request" id="message" style={{ height: 100 }} defaultValue={""} />
                        <label htmlFor="message">Special Request</label>
                      </div>
                    </div>
                    <div className="col-12">
                      <button className="btn btn-outline-light w-100 py-3" type="submit">
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
    </div>
  );
}

export default Packages;
