"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Header from "../components/main/header";

export default function UserPortal() {
  const router = useRouter();

  // 🌐 States
  const [loading, setLoading] = useState(true);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [jobs, setJobs] = useState([]);
  const [jobsLoading, setJobsLoading] = useState(true);
  const [activePage, setActivePage] = useState("jobs");
  const [alert, setAlert] = useState({ show: false, type: "", message: "" });
  const [profileExists, setProfileExists] = useState(false);
  const [profileData, setProfileData] = useState(null);
  // ✅ Modal State
  const [showApplyModal, setShowApplyModal] = useState(false);
  const [selectedJob, setSelectedJob] = useState(null);
  const [uploading, setUploading] = useState(false);
  const [applications, setApplications] = useState([]);
  const [applicationsLoading, setApplicationsLoading] = useState(false);

  // ✅ Open modal if eligible


  // ✅ Verify Token & Fetch Jobs
  useEffect(() => {
    const token = localStorage.getItem("access");
    if (!token) {
      router.replace("/");
      return;
    }
    const checkProfile = async () => {
      try {
        const res = await fetch("/api/myprofile", {
          headers: { Authorization: `Bearer ${token}` },
        });
        if (res.ok) {
          const data = await res.json();
          if (data && !data.detail) {
            setProfileExists(true);
            setProfileData(data);
          }
        }
      } catch (err) {
        console.error("Error checking profile:", err);
      }
    };



    const fetchJobs = async () => {
      try {
        setJobsLoading(true);
        const res = await fetch("/api/nfajobs", {
          headers: { Authorization: `Bearer ${token}` },
        });

        if (res.status === 401) {
          localStorage.removeItem("access");
          localStorage.removeItem("refresh");
          router.replace("/");
          return;
        }

        const data = await res.json();
        setJobs(Array.isArray(data) ? data : []);
      } catch (err) {
        console.error("Error fetching jobs:", err);
        setJobs([]);
      } finally {
        setJobsLoading(false);
        setLoading(false);
      }
    };
    fetchMyApplications(); // to refresh list
    checkProfile();
    fetchJobs();
  }, [router]);
  // applying for job
  const handleApplyOnline = async (job) => {
    const token = localStorage.getItem("access");
    if (!token) return router.push("/");

    try {
      // disable button / show loader here if you want (optional)
      const res = await fetch("/api/eligiblitycheck", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ job_id: job.id }),
      });

      const data = await res.json();
      if (!res.ok) return showAlert("danger", data?.message || "Eligibility check failed.");

      const isEligible =
        data?.eligible === true ||
        data?.status === true ||
        (typeof data?.status === "string" &&
          ["eligible", "success", "ok"].includes(data.status.toLowerCase()));

      const successMessage =
        data?.reason || data?.message || "You are eligible for this job!";
      const failMessage =
        data?.reason || data?.message || "You are not eligible for this job.";

      if (isEligible) {
        setSelectedJob(job);
        setShowApplyModal(true); // 👈 Open modal
      } else {
        showAlert("danger", failMessage);
      }
    } catch (err) {
      console.error("Eligibility Check Error:", err);
      showAlert("danger", "Error checking eligibility. Try again.");
    }
  };



  const fetchMyApplications = async () => {
    const token = localStorage.getItem("access");
    if (!token) return router.push("/");

    try {
      setApplicationsLoading(true);
      const res = await fetch("/api/myapplication", {
        headers: { Authorization: `Bearer ${token}` },
      });
      const data = await res.json();

      if (res.ok) {
        setApplications(data);
      } else {
        showAlert("danger", data?.error || "Failed to load applications");
      }
    } catch (err) {
      console.error("Error fetching applications:", err);
      showAlert("danger", "Error fetching your applications.");
    } finally {
      setApplicationsLoading(false);
    }
  };

  // ✅ Profile Submit Handler
  //  const handleProfileSubmit = async (e) => {
  // ✅ Profile Submit Handler
  const handleProfileSubmit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem("access");
    if (!token) return router.push("/");

    const form = e.target;
    const phone = form.phone_number.value.trim();

    // 🔹 Validate Phone Number (must start with 03 and have 11 digits)
    const phoneRegex = /^03\d{9}$/;
    if (!phoneRegex.test(phone)) {
      showAlert("danger", "Please enter a valid phone number (must start with 03 and be 11 digits).");
      return;
    }

    const profileData = {
      date_of_birth: form.date_of_birth.value,
      postal_address: form.postal_address.value,
      phone_number: phone,
      bio: form.bio.value,
      educations: [
        {
          institution_name: form.institution_name.value,
          degree: form.degree.value,
          field_of_study: form.field_of_study.value,
          start_date: form.edu_start_date.value,
          end_date: form.edu_end_date.value,
          grade: form.grade.value,
          description: form.description.value,
        },
      ],
      work_histories: [
        {
          company_name: form.company_name.value,
          job_title: form.job_title.value,
          start_date: form.work_start_date.value,
          end_date: form.work_end_date.value,
          responsibilities: form.responsibilities.value,
          is_current: form.is_current.checked,
        },
      ],
    };
    try {
      const res = await fetch("/api/nfaprofile", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(profileData),
      });

      if (res.status === 401) {
        localStorage.removeItem("access");
        localStorage.removeItem("refresh");
        showAlert("danger", "Session expired! Please log in again.");
        router.push("/");
        return;
      }

      const data = await res.json();

      if (res.ok) {
        showAlert("success", "Profile created successfully!");

        // ✅ Instantly update local state
        setProfileExists(true);
        setProfileData(data);
        setActivePage("myProfile");

        // ✅ Optional small delay + reload to refresh API-based data
        setTimeout(() => {
          window.location.reload();
        }, 1000);
      } else {
        showAlert("danger", data?.detail || "Failed to create profile.");
      }
    } catch (err) {
      console.error("Profile Error:", err);
      showAlert("danger", "Error creating profile.");
    }
  };



  // ✅ Logout Handler
  const handleLogout = () => {
    localStorage.removeItem("access");
    localStorage.removeItem("refresh");
    router.push("/");
  };

  // ✅ Show Alert Helper
  const showAlert = (type, message) => {
    setAlert({ show: true, type, message });
    setTimeout(() => setAlert({ show: false, type: "", message: "" }), 3000);
  };

  // ✅ Submit Application Form
  // ✅ Submit Application Form
  const handleApplicationSubmit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem("access");
    if (!token) return router.push("/");

    const formData = new FormData(e.target);
    formData.append("job_listing", selectedJob?.id);

    try {
      setUploading(true);
      const res = await fetch("/api/applicationsubmit", {
        method: "POST",
        headers: { Authorization: `Bearer ${token}` },
        body: formData,
      });

      const data = await res.json();

      if (res.ok) {
        showAlert("success", "Application submitted successfully!");
        setShowApplyModal(false);

        // ✅ Email send after successful application
       // ✅ Email send after successful application
try {
  const userEmail = profileData?.email;
  console.log("Sending email to:", userEmail);

  if (!userEmail) {
    console.error("No email found for this user");
  } else {
    await fetch("/api/application-email", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        to: userEmail, // Correct email path
        subject: `Application Received for ${selectedJob?.job_post?.title || "Job"}`,
        message: `
Dear ${profileData?.user?.username || "Applicant"},

Your application for the position "${selectedJob?.job_post?.title || "NFA Job"}" has been successfully received.

We’ll review your profile and get back to you soon.

Best Regards,  
NFA Team
        `,
      }),
    });
  }
} catch (emailErr) {
  console.error("Email sending failed:", emailErr);
}


        // ✅ Optionally refresh applications list
        fetchMyApplications();
      } else {
        showAlert("danger", data?.detail || "Failed to submit application.");
      }
    } catch (err) {
      console.error("Upload Error:", err);
      showAlert("danger", "Error uploading application.");
    } finally {
      setUploading(false);
    }
  };

  // ✅ Check if job is already applied
  const isJobApplied = (jobId) => {
    return applications.some(app => app.job_listing === jobId);
  };

  // ✅ Loading Screen
  if (loading)
    return (
      <div className="d-flex justify-content-center align-items-center vh-100">
        <div className="spinner-border text-primary" role="status" />
        <span className="ms-2">Loading portal...</span>
      </div>
    );

  return (
    <Header>
      <div className="container border rounded shadow-sm mt-4">
        {/* ✅ Alert Message */}
        {alert.show && (
          <div
            className={`alert alert-${alert.type} alert-dismissible fade show`}
            role="alert"
          >
            {alert.message}
            <button
              type="button"
              className="btn-close"
              onClick={() => setAlert({ show: false, type: "", message: "" })}
            ></button>
          </div>
        )}

        <div className="d-flex align-items-start" style={{ minHeight: "100vh" }}>
          {/* ✅ Sidebar */}
          <aside
            className={`text-white rounded p-3 position-absolute transition-all ${sidebarOpen ? "d-block" : "d-none d-md-block"
              }`}
            style={{
              backgroundColor: "#023d29",
              width: "240px",
              height: "100vh", // ✅ full viewport height
              position: "sticky", // stays fixed while scrolling
              // top: 0,
              zIndex: 10,
            }}


          >
            <h3 className="text-center mb-4 border-bottom pb-2">Dashboard</h3>
            <nav className="nav flex-column">
              <button
                className={`nav-link text-white fw-bold text-start mb-2 btn btn-link ${activePage === "jobs" ? "text-warning" : ""
                  }`}
                onClick={() => setActivePage("jobs")}
              >
                <i className="bi bi-briefcase me-2"></i> Available Jobs
              </button>
              <button
                className={`nav-link text-white fw-bold text-start mb-2 btn btn-link ${activePage === "myapplications" ? "text-warning" : ""}`}
                onClick={() => {
                  setActivePage("myapplications");
                  fetchMyApplications(); // 👈 Fetch on click
                }}
              >
                <i className="bi bi-briefcase me-2"></i> My Applications
              </button>

              <button
                className={`nav-link text-white fw-bold text-start mb-2 btn btn-link ${activePage === (profileExists ? "myProfile" : "createProfile")
                  ? "text-warning"
                  : ""
                  }`}
                onClick={() =>
                  setActivePage(profileExists ? "myProfile" : "createProfile")
                }
              >
                <i className="bi bi-person-plus me-2"></i>{" "}
                {profileExists ? "My Profile" : "Create Profile"}
              </button>


            </nav>
            <button
              onClick={handleLogout}
              className="btn btn-success w-100 mt-4 fw-semibold"
            >
              Logout
            </button>
          </aside>

          {/* ✅ Main Content */}
          <main
            className="flex-grow-1"
            style={{ marginLeft: "240px", width: "100%" }}
          >
            <nav className="navbar navbar-expand-lg navbar-light bg-light shadow-sm px-3">
              <button
                className="btn btn-outline-primary d-md-none"
                onClick={() => setSidebarOpen(!sidebarOpen)}
              >
                <i className="bi bi-list"></i>
              </button>
              <span className="navbar-brand ms-3 fw-bold">User Portal</span>
            </nav>

            <div className="container-fluid p-4">
              {/* ✅ Create Profile */}
              {activePage === "createProfile" && (
                <>
                  <h1 className="mb-4">Create Profile</h1>
                  <form onSubmit={handleProfileSubmit}>
                    <div className="row">
                      {/* Basic Info */}
                      <div className="col-md-6 mb-3">
                        <label>Date of Birth</label>
                        <input
                          type="date"
                          name="date_of_birth"
                          className="form-control"
                          required
                        />
                      </div>
                      <div className="col-md-6 mb-3">
                        <label>Phone Number</label>
                        <input
                          type="text"
                          name="phone_number"
                          className="form-control"
                          required
                        />
                      </div>
                      <div className="col-12 mb-3">
                        <label>Postal Address</label>
                        <input
                          type="text"
                          name="postal_address"
                          className="form-control"
                          required
                        />
                      </div>
                      <div className="col-12 mb-3">
                        <label>Bio</label>
                        <textarea
                          name="bio"
                          className="form-control"
                          required
                        ></textarea>
                      </div>

                      {/* Education */}
                      <h5 className="mt-3">🎓 Education</h5>
                      <div className="col-md-6 mb-3">
                        <label>Institution Name</label>
                        <input
                          type="text"
                          name="institution_name"
                          className="form-control"
                          required
                        />
                      </div>
                      <div className="col-md-6 mb-3">
                        <label>Degree</label>
                        <select name="degree" className="form-control" required>
                          <option value="">Select Degree</option>
                          <option value="matric">Matric</option>
                          <option value="intermediate">Intermediate</option>
                          <option value="bachelors">Bachelors</option>
                          <option value="masters">Masters</option>
                        </select>
                      </div>

                      <div className="col-md-6 mb-3">
                        <label>Field of Study</label>
                        <input
                          type="text"
                          name="field_of_study"
                          className="form-control"
                          required
                        />
                      </div>
                      <div className="col-md-6 mb-3">
                        <label>Grade</label>
                        <input
                          type="text"
                          name="grade"
                          className="form-control"
                          required
                        />
                      </div>
                      <div className="col-md-6 mb-3">
                        <label>Start Date</label>
                        <input
                          type="date"
                          name="edu_start_date"
                          className="form-control"
                          required
                        />
                      </div>
                      <div className="col-md-6 mb-3">
                        <label>End Date</label>
                        <input
                          type="date"
                          name="edu_end_date"
                          className="form-control"
                          required
                        />
                      </div>
                      <div className="col-12 mb-3">
                        <label>Description</label>
                        <textarea
                          name="description"
                          className="form-control"
                        ></textarea>
                      </div>

                      {/* Work History */}
                      <h5 className="mt-3">Work History</h5>
                      <div className="col-md-6 mb-3">
                        <label>Company Name</label>
                        <input
                          type="text"
                          name="company_name"
                          className="form-control"
                        />
                      </div>
                      <div className="col-md-6 mb-3">
                        <label>Job Title</label>
                        <input
                          type="text"
                          name="job_title"
                          className="form-control"
                        />
                      </div>
                      <div className="col-md-6 mb-3">
                        <label>Start Date</label>
                        <input
                          type="date"
                          name="work_start_date"
                          className="form-control"
                        />
                      </div>
                      <div className="col-md-6 mb-3">
                        <label>End Date</label>
                        <input
                          type="date"
                          name="work_end_date"
                          className="form-control"
                        />
                      </div>
                      <div className="col-12 mb-3">
                        <label>Responsibilities</label>
                        <textarea
                          name="responsibilities"
                          className="form-control"
                        ></textarea>
                      </div>
                      <div className="col-12 mb-3 form-check">
                        <input
                          type="checkbox"
                          name="is_current"
                          className="form-check-input"
                        />
                        <label className="form-check-label">
                          Currently Working Here
                        </label>
                      </div>
                    </div>
                    <button type="submit" className="btn btn-primary mt-2">
                      Submit Profile
                    </button>
                  </form>
                </>
              )}

              {/* ✅ Jobs Section */}
              {activePage === "jobs" && (
                <>
                  <h1 className="mb-4">Available Jobs</h1>
                  {jobsLoading ? (
                    <p>Loading jobs...</p>
                  ) : jobs.length > 0 ? (
                    <div className="row">
                      {jobs.map((job) => (
                        <div key={job.id} className="col-md-6 mb-3">
                          <div className="card shadow-sm h-100">
                            <div className="card-body d-flex flex-column justify-content-between">
                              <div>
                                <h5 className="card-title text-primary">
                                  {job.job_post?.title || "Untitled Job"}
                                </h5>
                                <p className="mb-1">
                                  <strong>Status:</strong>{" "}
                                  <span
                                    className={`badge ${job.status === "open"
                                      ? "bg-success"
                                      : "bg-secondary"
                                      }`}
                                  >
                                    {job.status}
                                  </span>
                                </p>
                                <p className="mb-1">
                                  <strong>Location:</strong> {job.location || "N/A"}
                                </p>
                                <p className="mb-1">
                                  <strong>Deadline:</strong> {job.application_deadline}
                                </p>
                                <p className="mb-1">
                                  <strong>Salary:</strong> {job.salary_range || "N/A"}
                                </p>
                                <p className="mb-1">
                                  <strong>Qualification:</strong>{" "}
                                  {job.minimum_qualification || "Not specified"}
                                </p>
                                <p className="mb-1">
                                  <strong>Experience:</strong>{" "}
                                  {job.required_experience
                                    ? `${job.required_experience} year(s)`
                                    : "Not mentioned"}
                                </p>
                              </div>

                              {isJobApplied(job.id) ? (
                                <button className="btn btn-secondary mt-3 w-100 fw-semibold" disabled>Applied</button>
                              ) : (
                                <button
                                  className="btn btn-primary mt-3 w-100 fw-semibold"
                                  onClick={() => handleApplyOnline(job)}
                                >
                                  Apply Online
                                </button>
                              )}

                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <p className="text-muted">No jobs available</p>
                  )}
                </>
              )}
              {activePage === "myapplications" && (
                <>
                  <h1 className="mb-4">My Applications</h1>

                  {applicationsLoading ? (
                    <p>Loading your applications...</p>
                  ) : applications.length > 0 ? (
                    <div className="row">
                      {applications.map((app) => (
                        <div key={app.id} className="col-md-6 mb-3">
                          <div className="card shadow-sm h-100">
                            <div className="card-body">
                              {/* ✅ Job Title (if available) */}
                              <h5 className="card-title text-success">
                                {app.job_title || "Untitled Job"}
                              </h5>


                              <p>
                                <strong>Description:</strong> {app.description || "No description"}
                              </p>

                              {/* ✅ Download Links */}
                              {/* <div className="d-flex flex-wrap gap-2 mt-2">
                                {app.cv && (
                                  <a
                                    href={app.cv}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="btn btn-outline-primary btn-sm"
                                  >
                                    View CV
                                  </a>
                                )}
                                {app.cnic && (
                                  <a
                                    href={app.cnic}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="btn btn-outline-secondary btn-sm"
                                  >
                                    View CNIC
                                  </a>
                                )}
                                {app.cover_letter && (
                                  <a
                                    href={app.cover_letter}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="btn btn-outline-success btn-sm"
                                  >
                                    View Cover Letter
                                  </a>
                                )}
                              </div> */}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <p className="text-muted">No applications submitted yet.</p>
                  )}
                </>
              )}


              {/* ✅ My Profile Section */}
              {activePage === "myProfile" && profileData && (
                <>
                  <h1 className="mb-4">👤 My Profile</h1>
                  <div className="card shadow-sm p-4 mb-4">
                    <p><strong>Date of Birth:</strong> {profileData.date_of_birth}</p>
                    <p><strong>Phone:</strong> {profileData.phone_number}</p>
                    <p><strong>Address:</strong> {profileData.postal_address}</p>
                    <p><strong>Bio:</strong> {profileData.bio}</p>
                  </div>

                  <h4>🎓 Education</h4>
                  {profileData.educations?.map((edu) => (
                    <div key={edu.id} className="card p-3 mb-3">
                      <p><strong>Institution:</strong> {edu.institution_name}</p>
                      <p><strong>Degree:</strong> {edu.degree}</p>
                      <p><strong>Field:</strong> {edu.field_of_study}</p>
                      <p><strong>Grade:</strong> {edu.grade}</p>
                      <p><strong>Description:</strong> {edu.description}</p>
                    </div>
                  ))}

                  <h4>💼 Work History</h4>
                  {profileData.work_histories?.map((work) => (
                    <div key={work.id} className="card p-3 mb-3">
                      <p><strong>Company:</strong> {work.company_name}</p>
                      <p><strong>Title:</strong> {work.job_title}</p>
                      <p><strong>Responsibilities:</strong> {work.responsibilities}</p>
                      <p><strong>Current:</strong> {work.is_current ? "Yes" : "No"}</p>
                    </div>
                  ))}
                </>
              )}

            </div>
          </main>
        </div>
      </div>
      {/* ✅ Application Upload Modal */}
      {showApplyModal && (
        <div
          className="modal fade show"
          style={{ display: "block", backgroundColor: "rgba(0,0,0,0.5)" }}
        >
          <div className="modal-dialog modal-lg modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-header bg-success text-white">
                <h5 className="modal-title">
                  Apply for: {selectedJob?.job_post?.title || "Job"}
                </h5>
                <button
                  type="button"
                  className="btn-close"
                  onClick={() => setShowApplyModal(false)}
                ></button>
              </div>

              <form onSubmit={handleApplicationSubmit}>
                <div className="modal-body">
                  <div className="mb-3">
                    <label className="form-label">CNIC File</label>
                    <input type="file" name="cnic" className="form-control" required />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">CV File</label>
                    <input type="file" name="cv" className="form-control" required />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Cover Letter</label>
                    <input type="file" name="cover_letter" className="form-control" required />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Description</label>
                    <textarea
                      name="description"
                      className="form-control"
                      placeholder="Brief description of your skills or experience"
                      rows="3"
                      required
                    ></textarea>
                  </div>
                </div>

                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn btn-secondary"
                    onClick={() => setShowApplyModal(false)}
                  >
                    Cancel
                  </button>
                  <button type="submit" className="btn btn-success" disabled={uploading}>
                    {uploading ? (
                      <>
                        <span className="spinner-border spinner-border-sm me-2"></span>
                        Uploading...
                      </>
                    ) : (
                      "Submit Application"
                    )}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}

    </Header>
  );
}
