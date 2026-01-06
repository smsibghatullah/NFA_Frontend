"use client";
import { useEffect, useState } from "react";
import Header from "../components/main/header";
import { useRouter } from "next/navigation";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

const Careers = () => {
  const [documents, setDocuments] = useState([]);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  // 🔹 Alert state
  const [alert, setAlert] = useState({ type: "", message: "" });

  // 🔹 Form states
  const [loginForm, setLoginForm] = useState({ email: "", cnic: "", password: "" });
  const [registerForm, setRegisterForm] = useState({
    email: "",
    cnic: "",
    password: "",
    password2: "",
    first_name: "",
    last_name: "",
  });

  // 🔹 Helper: show alert
  const showAlert = (type, message) => {
    setAlert({ type, message });
    setTimeout(() => setAlert({ type: "", message: "" }), 5000);
  };

  // Fetch documents
  useEffect(() => {
    const fetchDocs = async () => {
      try {
        const res = await fetch("/api/documents", { cache: "no-store" });
        if (!res.ok) {
          const errorData = await res.json().catch(() => ({}));
          throw new Error(errorData.detail || "Failed to fetch documents.");
        }
        const data = await res.json();
        setDocuments(data);
      } catch (error) {
        console.error("Error fetching documents:", error);
        showAlert("danger", error.message || "Something went wrong while fetching documents.");
      } finally {
        setLoading(false);
      }
    };
    fetchDocs();
  }, []);

  // 🔹 Handle Login
  const handleLogin = async (e) => {
    e.preventDefault();
    setAlert({ type: "", message: "" });

    if (!loginForm.password) return showAlert("danger", "Password is required.");
    if (!loginForm.email && !loginForm.cnic)
      return showAlert("danger", "Please enter your Email or CNIC.");

    try {
      const payload = {};
      if (loginForm.email) payload.email = loginForm.email;
      if (loginForm.cnic) payload.cnic = loginForm.cnic;
      payload.password = loginForm.password;

      const res = await fetch("/api/nfaapplicantlogin", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.detail || "Login failed. Please check your credentials.");

      // ✅ Save tokens
      localStorage.setItem("access", data.access);
      localStorage.setItem("refresh", data.refresh);

      // ✅ Close modal safely
      if (typeof document !== "undefined") {
        const modalEl = document.getElementById("authModal");
        let modal = null;
        try {
          modal = bootstrap?.Modal?.getInstance(modalEl);
        } catch (e) {}
        if (modal) modal.hide();
        else if (modalEl) {
          modalEl.classList.remove("show");
          modalEl.style.display = "none";
        }
        const backdrop = document.querySelector(".modal-backdrop");
        if (backdrop) backdrop.remove();
        document.body.classList.remove("modal-open");
        document.body.style.overflow = "";
        document.body.style.paddingRight = "";
      }

      showAlert("success", "Login successful!");
      setLoginForm({ email: "", cnic: "", password: "" });
      router.push("/userportal");
    } catch (err) {
      console.error("Login Error:", err);
      showAlert("danger", err.message || "Login failed. Try again later.");
    }
  };

  // 🔹 Handle Register
 const handleRegister = async (e) => {
  e.preventDefault();
  setAlert({ type: "", message: "" });

  // ✅ Validate passwords match
  if (registerForm.password !== registerForm.password2) {
    return showAlert("danger", "Passwords do not match.");
  }

  // ✅ Basic validation
  if (!registerForm.email || !registerForm.cnic || !registerForm.password) {
    return showAlert("danger", "Email, CNIC, and password are required.");
  }

  try {
    const res = await fetch("/api/nfaapplicantregister", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(registerForm),
    });

    const data = await res.json();

    if (!res.ok) {
      // 🔹 Check for duplicate email or CNIC
      if (data?.email) throw new Error("This email is already registered.");
      if (data?.cnic) throw new Error("This CNIC is already registered.");
      // 🔹 Fallback generic error
      const msg = data.detail || data.error || "Registration failed. Please try again.";
      throw new Error(msg);
    }

    showAlert("success", "Registration successful! You can now log in.");
    setRegisterForm({
      email: "",
      cnic: "",
      password: "",
      password2: "",
      first_name: "",
      last_name: "",
    });
  } catch (err) {
    console.error("Registration Error:", err);
    showAlert("danger", err.message || "Registration failed. Try again later.");
  }
};


  return (
    <>
      <Header>
        <section
          style={{
            background: 'url("/assets/img/header-nfa.svg") center / cover no-repeat',
            height: "250px",
            marginTop: "-5px",
          }}
        >
          <div className="container h-100 d-flex align-items-center">
            <h1><strong>Careers</strong></h1>
          </div>
        </section>

        <div className="container mt-4">
          <div className="text-center">
            <button
              className="btn btn-success fw-bold px-4"
              data-bs-toggle="modal"
              data-bs-target="#authModal"
            >
              Apply here
            </button>
          </div>
          <hr />

          <div className="row">
            {loading ? (
              <p className="text-center">Loading...</p>
            ) : documents.length === 0 ? (
              <p className="text-center text-muted">No documents available.</p>
            ) : (
              documents.map((doc) => (
                <div className="col-md-6 mb-4" key={doc.id}>
                  <a
                    href={doc.file}
                    target="_blank"
                    className="text-decoration-none"
                    rel="noopener noreferrer"
                  >
                    <div className="card shadow-sm">
                      <div className="card-body">
                        <h5 className="card-title text-dark">
                          <strong>{doc.title}</strong>
                        </h5>
                        {doc.published_on && (
                          <p className="text-end mb-1">
                            Published On {doc.published_on}
                          </p>
                        )}
                        {doc.purpose && <p>{doc.purpose}</p>}
                      </div>
                    </div>
                  </a>
                </div>
              ))
            )}
          </div>
        </div>
      </Header>

      {/* 🔹 Auth Modal */}
      <div className="modal fade" id="authModal" tabIndex={-1}>
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content p-3">
            <div className="modal-header border-0 pb-0">
              <ul className="nav nav-tabs w-100 justify-content-around">
                <li className="nav-item">
                  <button
                    className="nav-link active"
                    data-bs-toggle="tab"
                    data-bs-target="#loginTab"
                  >
                    Login
                  </button>
                </li>
                <li className="nav-item">
                  <button
                    className="nav-link"
                    data-bs-toggle="tab"
                    data-bs-target="#registerTab"
                  >
                    Register
                  </button>
                </li>
              </ul>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
              />
            </div>

            <div className="modal-body">
              {/* ✅ Alert */}
              {alert.message && (
                <div className={`alert alert-${alert.type}`} role="alert">
                  {alert.message}
                </div>
              )}

              <div className="tab-content">
                {/* 🔹 Login Form */}
                <div className="tab-pane fade show active" id="loginTab">
                  <form onSubmit={handleLogin}>
                    <div className="mb-3">
                      <label className="form-label">Email (or CNIC)</label>
                      <input
                        type="text"
                        className="form-control"
                        value={loginForm.email || loginForm.cnic}
                        onChange={(e) => {
                          const val = e.target.value;
                          if (val.includes("@")) {
                            setLoginForm({ ...loginForm, email: val, cnic: "" });
                          } else {
                            setLoginForm({ ...loginForm, cnic: val, email: "" });
                          }
                        }}
                        required
                      />
                    </div>
                    <div className="mb-3">
                      <label className="form-label">Password</label>
                      <input
                        type="password"
                        className="form-control"
                        value={loginForm.password}
                        onChange={(e) =>
                          setLoginForm({ ...loginForm, password: e.target.value })
                        }
                        required
                      />
                    </div>
                    <button type="submit" className="btn btn-primary w-100">
                      Login
                    </button>
                  </form>
                </div>

                {/* 🔹 Register Form */}
                <div className="tab-pane fade" id="registerTab">
                  <form onSubmit={handleRegister}>
                    <div className="mb-3">
                      <label className="form-label">First Name</label>
                      <input
                        type="text"
                        className="form-control"
                        value={registerForm.first_name}
                        onChange={(e) =>
                          setRegisterForm({ ...registerForm, first_name: e.target.value })
                        }
                        required
                      />
                    </div>
                    <div className="mb-3">
                      <label className="form-label">Last Name</label>
                      <input
                        type="text"
                        className="form-control"
                        value={registerForm.last_name}
                        onChange={(e) =>
                          setRegisterForm({ ...registerForm, last_name: e.target.value })
                        }
                        required
                      />
                    </div>
                    <div className="mb-3">
                      <label className="form-label">Email</label>
                      <input
                        type="email"
                        className="form-control"
                        value={registerForm.email}
                        onChange={(e) =>
                          setRegisterForm({ ...registerForm, email: e.target.value })
                        }
                        required
                      />
                    </div>
                    <div className="mb-3">
                      <label className="form-label">CNIC</label>
                      <input
                        type="text"
                        className="form-control"
                        value={registerForm.cnic}
                        onChange={(e) =>
                          setRegisterForm({ ...registerForm, cnic: e.target.value })
                        }
                        required
                      />
                    </div>
                    <div className="mb-3">
                      <label className="form-label">Password</label>
                      <input
                        type="password"
                        className="form-control"
                        value={registerForm.password}
                        onChange={(e) =>
                          setRegisterForm({ ...registerForm, password: e.target.value })
                        }
                        required
                      />
                    </div>
                    <div className="mb-3">
                      <label className="form-label">Confirm Password</label>
                      <input
                        type="password"
                        className="form-control"
                        value={registerForm.password2}
                        onChange={(e) =>
                          setRegisterForm({ ...registerForm, password2: e.target.value })
                        }
                        required
                      />
                    </div>
                    <button type="submit" className="btn btn-success w-100">
                      Register
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Careers;
