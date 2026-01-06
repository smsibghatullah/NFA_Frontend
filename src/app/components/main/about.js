
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
        <div className="row">
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
            </span> */}
            <h2
              data-aos="zoom-in-right"
              style={{ fontSize: "1.5em", marginTop: "15px" }}
            >
              <strong>A Message from Our Project Director</strong>
              <br />
            </h2>
          </div>
        </div>
        <div
          className="row justify-content-lg-around"
          style={{ marginTop: "20px" }}
        >
          <div className="col-md-4">
            <Image
              data-aos="zoom-in-right"
              src={"/assets/img/about-us.svg"}
              width={100}
              height={100}
              alt="About Us"
              layout="responsive"
            />
          </div>
          <div
            data-aos="zoom-in-left"
            className="col-sm-7 d-xl-flex flex-column justify-content-xl-center"
          >
            <p className="lead">
              <br />
              &quot;At the National Forensic Agency, we believe in the
              transformative power of forensic science to shape a safer, more
              just world. Every case we handle is a testament to our unwavering
              dedication to accuracy, innovation, and service to the
              community.&quot;
              <br />
              <br />
              &quot;Our mission goes beyond solving crimes; it is about
              providing clarity, justice, and peace of mind to all those we
              serve. I am deeply proud of our team&apos;s expertise and their
              relentless pursuit of excellence. Together, we are making a
              difference, one case at a time.&quot;
              <br />
              <br />
            </p>
            <p className="text-end">
              <strong>- Project Director, National Forensics Agency</strong>
              <br />
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
