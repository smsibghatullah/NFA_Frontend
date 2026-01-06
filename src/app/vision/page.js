import Header from "../components/main/header";

export default function Vision() {
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
              <div data-aos="fade-right" className="col-sm-12 d-flex flex-column align-items-center justify-content-sm-center align-items-start justify-content-center align-items-start">
                <h1>
                  <strong>Our Vision</strong>
                </h1>
                <p className="lead">Precision, Credibility, Authenticity</p>
              </div>
            </div>
          </div>
        </section>
        <br />
        <div className="container mt-5 mb-5">
          <div className="row">
            <div className="col-sm-12">
              <p className="lead text-center" data-aos="zoom-in">
                To establish NFA as the leading authority in forensic sciences,
                ensuring scientific precision, maintaining credibility, and
                upholding authenticity in the pursuit of justice across Pakistan
                and beyond.
              </p>
            </div>
          </div>
        </div>
      </Header>
    </>
  );
}
