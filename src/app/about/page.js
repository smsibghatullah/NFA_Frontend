import Header from "../components/main/header";
import AboutUs from "../components/main/about";
import AboutUsInterior from "../components/main/aboutus-interior";

export default function About() {
  return (
    <>
      <Header>
        <section
          data-aos="fade"
          style={{
            background:
              'url("/assets/img/header-nfa.svg") center / cover no-repeat',
            height: "250px",
            marginTop: "-5px",
          }}
        >
          <div className="container" style={{ height: "100%" }}>
            <div className="row" style={{ height: "100%" }}>
              <div
                data-aos="fade-right"
                className="col-sm-12 d-flex flex-column align-items-center justify-content-sm-center align-items-start justify-content-center align-items-start"
              >
                <h1>
                  <strong>About Us</strong>
                </h1>
              </div>
            </div>
          </div>
        </section>
        <br />
        {/* <AboutUsInterior /> */}
        {/* <div style={{ backgroundColor: "#F3F4F6" }}> */}
          <AboutUs />
          <br></br>
        {/* </div> */}
      </Header>
    </>
  );
}
