"use client";
import ContactForm from "../components/main/servicerequestform";
import Header from "../components/main/header";

const Contact = () => {
  return (
    <>
      <Header>
        <div className="container">
          <div className="row">
            <h3 className="text-center mb-2 mt-4">Service Request Form</h3>
            <p className="lead text-center">
              Get in touch with us for inquiries, support, or feedback. We are
              here to assist you!
            </p>
          </div>
          <div className="row">
            <div className="col-sm-6 d-flex flex-column align-items-start mt-5">
              <div className="d-flex mt-4">
                <span className="contact-icon p-4 pb-4 bg-success text-white rounded-circle">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={48}
                    height={48}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="icon icon-tabler icons-tabler-outline icon-tabler-phone"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2" />
                  </svg>
                </span>
                <div className="ms-3">
                  <h5>Phone Number</h5>
                  <p className="lead fs-2">(051) 9257807</p>
                </div>
              </div>
              <br></br>
              <div className="d-flex mt-4">
                <span className="contact-icon p-4 pb-4 bg-success text-white rounded-circle">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="48"
                    height="48"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="icon icon-tabler icons-tabler-outline icon-tabler-map-pin"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M9 11a3 3 0 1 0 6 0a3 3 0 0 0 -6 0" />
                    <path d="M17.657 16.657l-4.243 4.243a2 2 0 0 1 -2.827 0l-4.244 -4.243a8 8 0 1 1 11.314 0z" />
                  </svg>
                </span>
                <div className="ms-3">
                  <h5>Address</h5>
                  <p className="lead fs-2">
                    H 11/4 H-11, opposite to police lines, Islamabad Capital
                    Territory, Pakistan
                  </p>
                </div>
              </div>
              <br></br>
              <div className="d-flex mt-4">
                <span className="contact-icon p-4 pb-4 bg-success text-white rounded-circle">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={48}
                    height={48}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="icon icon-tabler icons-tabler-outline icon-tabler-mail"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M3 7a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-10z" />
                    <path d="M3 7l9 6l9 -6" />
                  </svg>
                </span>
                <div className="ms-3">
                  <h5>Email</h5>
                  <p className="lead fs-2">info@nfa.gov.pk</p>
                </div>
              </div>
            </div>
            <div className="col-sm-6">
              <ContactForm></ContactForm>
            </div>
          </div>
        </div>
        <div className="container-fluid">
          <div className="row">
            <div className="col-sm-12">
              <div className="mapouter">
                <div className="gmap_canvas">
                  <iframe
                    className="gmap_iframe"
                    width="100%"
                    height="400px"
                    frameBorder="0"
                    scrolling="no"
                    marginHeight="0"
                    marginWidth="0"
                    src="https://maps.google.com/maps?width=600&amp;height=400&amp;hl=en&amp;q=H 11/4 H-11, opposite to police lines, Islamabad Capital Territory, Pakistan&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
                  ></iframe>
                  <a href="https://sprunkiplay.com">Sprunki</a>
                </div>
                <style jsx>{`
                  .mapouter {
                    position: relative;
                    text-align: right;
                    width: 100%;
                    height: 400px;
                  }
                  .gmap_canvas {
                    overflow: hidden;
                    background: none !important;
                    width: 100%;
                    height: 400px;
                  }
                  .gmap_iframe {
                    height: 600px !important;
                  }
                `}</style>
              </div>
            </div>
          </div>
        </div>
      </Header>
    </>
  );
};

export default Contact;
