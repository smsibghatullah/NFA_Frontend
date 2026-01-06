
import Image from "next/image";

export default function About() {
  return (
    <>
      <AboutUs />
    </>
  );
}

const AboutUs = () => {
  return (
    <div style={{ marginTop: "80px" }}>
      <div className="container">
        {/* <div className="row">
          <div className="col-12">
            {/* <span
              style={{
                padding: "5px 20px",
                borderRadius: "30px",
                borderStyle: "solid",
                borderColor: "rgb(142,142,142)",
                color: "rgb(53,67,59)",
                fontSize: "12px",
              }}
            >
              <strong>About Us</strong>
            </span>
            <h2
              data-aos="zoom-in-right"
              style={{ fontSize: "2em", marginTop: "15px", marginBottom: "15px" }}
            >
              <strong>About Us</strong>
              <br />
            </h2>
          </div>
        </div> */}
        <div
          className="row justify-content-lg-around"
          style={{ marginTop: "20px" }}
        >
          <div className="col-md-5">
            <Image
              data-aos="zoom-in-right"
              src={"/assets/img/NFA-about-section.svg"}
              width={100}
              height={100}
              alt="About Us"
              layout="responsive"
            />
          </div>
          <div
            data-aos="zoom-in-left"
            className="col-sm-6 d-xl-flex flex-column justify-content-xl-center"
          >
            <h2
              data-aos="zoom-in-right"
              style={{
                fontSize: "2em",
                marginTop: "15px",
                marginBottom: "15px",
              }}
            >
              <strong>About Us</strong>
              <br />
            </h2>
            <p className="lead">
              <br />
              Our national-level forensics team specializes in providing
              comprehensive investigative solutions, upholding the highest
              standards of integrity and accuracy. With a relentless commitment
              to justice, we utilize state-of-the-art technology and proven
              methodologies to uncover the truth in criminal, civil, and
              corporate cases.
              <br />
            </p>
            <p className="lead">
              Our professionals are dedicated to supporting law enforcement
              agencies, legal professionals, and private entities with
              precision-driven results.
            </p>
            <div className="row">
                <div className="col-6">
                <i
                  className="fa fa-check"
                  style={{ color: "rgb(0,124,0)" }}
                ></i> &nbsp;Rapid Response
                </div>
                <div className="col-6">
                <i
                  className="fa fa-check"
                  style={{ color: "rgb(0,124,0)" }}
                ></i> &nbsp;Court-Ready Reports
                </div>
            </div>
            <div className="row mt-2">
                <div className="col-6">
                <i
                  className="fa fa-check"
                  style={{ color: "rgb(0,124,0)" }}
                ></i> &nbsp;Expert Team
                </div>
                <div className="col-6">
                <i
                  className="fa fa-check"
                  style={{ color: "rgb(0,124,0)" }}
                ></i> &nbsp;High Accuracy
                </div>
            </div>
            <div className="row mt-2">
                <div className="col-6">
                <i
                  className="fa fa-check"
                  style={{ color: "rgb(0,124,0)" }}
                ></i> &nbsp;Advanced Technology
                </div>
                <div className="col-6">
                <i
                  className="fa fa-check"
                  style={{ color: "rgb(0,124,0)" }}
                ></i> &nbsp;Confidential & Secure
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
