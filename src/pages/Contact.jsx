import React from 'react';

function Contact() {
  const primaryStyle = { color: 'var(--primary)' };

  return (
    <div>
      <div className="container-fluid bg-primary py-5 mb-5 hero-header">
        <div className="container py-5">
          <div className="row justify-content-center py-5">
            <div className="col-lg-10 pt-lg-5 mt-lg-5 text-center">
              <h1 className="display-3 text-white animated slideInDown">
                Contact Us
              </h1>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Start */}
      <div className="container-xxl py-5">
        <div className="container">
          <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
            <h6 className="section-title bg-white text-center px-3" style={primaryStyle}>
              Contact Us
            </h6>
            <h1 className="mb-5">Contact For Any Query</h1>
          </div>
          <div className="row g-4">
            {/* Contact Info */}
            <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
              <h5>Get In Touch</h5>
              <p className="mb-4">
                Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos
              </p>

              {/* Office */}
              <div className="d-flex align-items-center mb-4">
                <div className="d-flex align-items-center justify-content-center flex-shrink-0 bg-light rounded-circle" style={{ width: 50, height: 50 }}>
                  <i className="fa fa-map-marker-alt" />
                </div>
                <div className="ms-3">
                  <h5 style={primaryStyle}>Office</h5>
                  <p className="mb-0">123 Street, Mumbai, India</p>
                </div>
              </div>

              {/* Mobile */}
              <div className="d-flex align-items-center mb-4">
                <div className="d-flex align-items-center justify-content-center flex-shrink-0 bg-light rounded-circle" style={{ width: 50, height: 50 }}>
                  <i className="fa fa-phone-alt" />
                </div>
                <div className="ms-3">
                  <h5 style={primaryStyle}>Mobile</h5>
                  <p className="mb-0">+91 98765 43210</p>
                </div>
              </div>

              {/* Email */}
              <div className="d-flex align-items-center">
                <div className="d-flex align-items-center justify-content-center flex-shrink-0 bg-light rounded-circle" style={{ width: 50, height: 50 }}>
                  <i className="fa fa-envelope-open" />
                </div>
                <div className="ms-3">
                  <h5 style={primaryStyle}>Email</h5>
                  <p className="mb-0">info@example.com</p>
                </div>
              </div>
            </div>

            {/* Google Map - Mumbai */}
            <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
              <iframe
                className="position-relative rounded w-100 h-100"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d120639.3143081006!2d72.76319370829592!3d19.08219783927839!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b63b7251e421%3A0x4f83a6446c6d5b1e!2sMumbai%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1712491234567!5m2!1sen!2sin"
                frameBorder={0}
                style={{ minHeight: 300, border: 0 }}
                allowFullScreen=""
                aria-hidden="false"
                tabIndex={0}
                title="Mumbai Location"
              />
            </div>

            {/* Contact Form */}
            <div className="col-lg-4 col-md-12 wow fadeInUp" data-wow-delay="0.5s">
              <form>
                <div className="row g-3">
                  <div className="col-md-6">
                    <div className="form-floating">
                      <input type="text" className="form-control" id="name" placeholder="Your Name" />
                      <label htmlFor="name">Your Name</label>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-floating">
                      <input type="email" className="form-control" id="email" placeholder="Your Email" />
                      <label htmlFor="email">Your Email</label>
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="form-floating">
                      <input type="text" className="form-control" id="subject" placeholder="Subject" />
                      <label htmlFor="subject">Subject</label>
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="form-floating">
                      <textarea className="form-control" placeholder="Leave a message here" id="message" style={{ height: 100 }} defaultValue={""} />
                      <label htmlFor="message">Message</label>
                    </div>
                  </div>
                  <div className="col-12">
                    <button className="btn btn-primary w-100 py-3" type="submit">
                      Send Message
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      {/* Contact End */}
    </div>
  );
}

export default Contact;
