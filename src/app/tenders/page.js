import Header from "../components/main/header";

export default function Tenders() {
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
                  <strong>Tender & Publications</strong>
                </h1>
              </div>
            </div>
          </div>
        </section>
        <br />
        <div className="container">
          <div className="row">
            <div className="col-md-6 mb-4">
              <a
                href="/tenders/NFA Tender Notice.pdf"
                className="text-decoration-none"
                target="_blank"
              >
                <div className="card shadow-sm position-relative">
                  <div className="card-body">
                    <h5 className="card-title text-dark">
                      <strong>
                        INVITATION FOR E-BIDDING – SUPPLY OF OTHER STORE ITEMS
                      </strong>
                      {/* <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                          New
                          <span class="visually-hidden">New</span>
                        </span> */}
                    </h5>
                  </div>
                </div>
              </a>
            </div>
            <div className="col-md-6 mb-4">
              <a
                href="/tenders/Tender Notice-Stationary Items.pdf"
                className="text-decoration-none"
                target="_blank"
              >
                <div className="card shadow-sm position-relative">
                  <div className="card-body">
                    <h5 className="card-title text-dark">
                      <strong>Tender Notice Stationary Items</strong>
                      {/* <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                        New
                        <span class="visually-hidden">New</span>
                      </span> */}
                    </h5>
                  </div>
                </div>
              </a>
            </div>
            <div className="col-md-6 mb-4">
              <a
                href="/tenders/EOI-Notice-Software.pdf"
                className="text-decoration-none"
                target="_blank"
              >
                <div className="card shadow-sm position-relative">
                  <div className="card-body">
                    <h5 className="card-title text-dark">
                      <strong>EOI Notice Software</strong>
                      <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                        New
                        <span class="visually-hidden">New</span>
                      </span>
                    </h5>
                  </div>
                </div>
              </a>
            </div>
            <div className="col-md-6 mb-4">
              <a
                href="/tenders/OSINT Tool Requirments.pdf"
                className="text-decoration-none"
                target="_blank"
              >
                <div className="card shadow-sm position-relative">
                  <div className="card-body">
                    <h5 className="card-title text-dark">
                      <strong>OSINT Tool Requirments</strong>
                      <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                        New
                        <span class="visually-hidden">New</span>
                      </span>
                    </h5>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </Header>
    </>
  );
}
