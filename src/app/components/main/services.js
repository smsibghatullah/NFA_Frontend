import Image from "next/image";

export default function Services({ isserviceshow }) {
  return (
    <div
      className="container"
      data-aos="fade-up"
      data-aos-anchor-placement="top-bottom"
    >
      {isserviceshow ? (
        <div className="row">
          <div className="col">
            <h2 style={{ marginTop: "15px", textAlign: "center" }}>
              <strong>Our Services</strong>
              <br />
            </h2>
            <p className="text-center">
              Comprehensive Forensic Solutions for Every Investigation.
              <br />
            </p>
          </div>
        </div>
      ) : null}
      <div className="row service-row">
        <div className="col-md-4">
          <div
            className="text-center service-div"
            style={{
              background: "#ffffff",
              borderRadius: "15px",
              paddingBottom: "10px",
              paddingRight: "10px",
              paddingLeft: "10px",
              height: "100%",
            }}
          >
            <Image
              src="assets/img/csi.svg"
              style={{ marginTop: "-40px" }}
              width={100}
              height={100}
              alt="CSI"
            />
            <h3
              style={{
                marginTop: "15px",
                textAlign: "center",
                fontSize: "1.4em",
              }}
            >
              <strong>CSI</strong>
              <br />
            </h3>
            <p className="text-center">
              Crime Scene Investigation units with specialized staff and Vans.{" "}
              <br />
            </p>
          </div>
        </div>
        <div className="col-md-4">
          <div
            className="text-center service-div"
            style={{
              background: "#ffffff",
              borderRadius: "15px",
              paddingBottom: "10px",
              paddingTop: "10px",
              paddingRight: "10px",
              height: "100%",
            }}
          >
            <Image
              src="assets/img/Forensics.svg"
              style={{ marginTop: "-40px" }}
              width={100}
              height={100}
              alt="Forensics"
            />
            <h3
              style={{
                marginTop: "15px",
                textAlign: "center",
                fontSize: "1.4em",
              }}
            >
              <strong>Forensics</strong>
              <br />
            </h3>
            <p className="text-center">
              State of the art Forensic services will be provided in all the
              stated departments
              <br />
            </p>
          </div>
        </div>
        <div className="col-md-4">
          <div
            className="text-center service-div"
            style={{
              background: "#ffffff",
              borderRadius: "15px",
              paddingBottom: "10px",
              paddingRight: "10px",
              paddingLeft: "10px",
              height: "100%",
            }}
          >
            <Image
              src="assets/img/r&i.svg"
              style={{ marginTop: "-40px" }}
              width={100}
              height={100}
              alt="R&I"
            />
            <h3
              style={{
                marginTop: "15px",
                textAlign: "center",
                fontSize: "1.4em",
              }}
            >
              <strong>R&amp;I</strong>
              <br />
            </h3>
            <p className="text-center">
              Research and Innovation department will help forensic departments
              in the country to develop solutions they require. <br />
            </p>
          </div>
        </div>
      </div>
      <div className="row service-row">
        <div className="col-md-4">
          <div
            className="text-center service-div"
            style={{
              background: "#ffffff",
              borderRadius: "15px",
              paddingBottom: "10px",
              paddingRight: "10px",
              paddingLeft: "10px",
              height: "100%",
            }}
          >
            <Image
              src="assets/img/sops.svg"
              style={{ marginTop: "-40px" }}
              width={100}
              height={100}
              alt="SOPs"
            />
            <h3
              style={{
                marginTop: "15px",
                textAlign: "center",
                fontSize: "1.4em",
              }}
            >
              <strong>SOPs</strong>
              <br />
            </h3>
            <p className="text-center">
              The Agency will develop SOPs in consultation with the best local
              and international Labs. These SOPs will be followed in letter and
              spirit to establish NFA as a benchmark lab of the country.
              <br />
            </p>
          </div>
        </div>
        <div className="col-md-4">
          <div
            className="text-center service-div"
            style={{
              background: "#ffffff",
              borderRadius: "15px",
              paddingBottom: "10px",
              paddingTop: "10px",
              paddingRight: "10px",
              height: "100%",
            }}
          >
            <Image
              src="assets/img/training.svg"
              style={{ marginTop: "-40px" }}
              width={100}
              height={100}
              alt="Training"
            />
            <h3
              style={{
                marginTop: "15px",
                textAlign: "center",
                fontSize: "1.4em",
              }}
            >
              <strong>Training</strong>
              <br />
            </h3>
            <p className="text-center">
              The Agency will design and disseminate training to the LEAs and
              other departments that desire these training. <br />
            </p>
          </div>
        </div>
        <div className="col-md-4">
          <div
            className="text-center service-div"
            style={{
              background: "#ffffff",
              borderRadius: "15px",
              paddingBottom: "10px",
              paddingRight: "10px",
              paddingLeft: "10px",
              height: "100%",
            }}
          >
            <Image
              src="assets/img/CAL.svg"
              style={{ marginTop: "-40px" }}
              width={100}
              height={100}
              alt="Coordination Among Labs"
            />
            <h3
              style={{
                marginTop: "15px",
                textAlign: "center",
                fontSize: "1.4em",
              }}
            >
              <strong>Coordination Among Labs</strong>
              <br />
            </h3>
            <p className="text-center">
              Whenever needed the Agency will coordinate with various sister
              labs.
              <br />
            </p>
          </div>
        </div>
      </div>
      <div className="row justify-content-center service-row">
        <div className="col-md-4">
          <div
            className="text-center service-div"
            style={{
              background: "#ffffff",
              borderRadius: "15px",
              paddingBottom: "10px",
              paddingRight: "10px",
              paddingLeft: "10px",
              height: "100%",
            }}
          >
            <Image
              src="assets/img/CAI.svg"
              style={{ marginTop: "-40px" }}
              width={100}
              height={100}
              alt="Collaborate with Academia and Industry"
            />
            <h3
              style={{
                marginTop: "15px",
                textAlign: "center",
                fontSize: "1.4em",
              }}
            >
              <strong>Collaborate with Academia and Industry</strong>
              <br />
            </h3>
            <p className="text-center">
              The Agency will integrate with Academia and industry to solve the
              problems faced by the departments, in and outside the country.{" "}
              <br />
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}