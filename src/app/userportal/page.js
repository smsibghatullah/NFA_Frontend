"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Header from "../components/main/header";
import HCaptcha from "@hcaptcha/react-hcaptcha";
import swal from "sweetalert";

// ✅ Components
const Info = ({ label, value }) => (
  <div className="col-md-6 mb-2">
    <strong>{label}:</strong> {value || "-"}
  </div>
);

const Section = ({ title, children }) => (
  <div className="mb-4">
    <h3 className="mb-2 border-bottom pb-1">{title}</h3>
    {children}
  </div>
);

const Card = ({ title, children }) => (
  <div className="card p-3 mb-2 shadow-sm">
    <h5 className="card-title">{title}</h5>
    <div className="card-body">{children}</div>
  </div>
);
const FormSection = ({ title, subtitle, children }) => (
  <div className="card mb-4 shadow-sm">
    <div className="card-header bg-light">
      <h5 className="mb-0">{title}</h5>
      {subtitle && <small className="text-muted">{subtitle}</small>}
    </div>
    <div className="card-body">{children}</div>
  </div>
);
const EmptyState = ({
  title,
  description,
  // icon = "📭",
  actionLabel,
  onAction,
}) => (
  <div className="card shadow-sm text-center p-5 mt-4">
    {/* <div style={{ fontSize: "48px" }}>{icon}</div> */}
    <h5 className="mt-3 fw-bold">{title}</h5>
    <p className="text-muted mb-3">{description}</p>

    {actionLabel && onAction && (
      <button className="btn btn-success btn-sm" onClick={onAction}>
        {actionLabel}
      </button>
    )}
  </div>
);

export default function UserPortal() {
  const router = useRouter();

  // 🌐 States
  const [loading, setLoading] = useState(true);
  // const [sidebarOpen, setSidebarOpen] = useState(false);
  const [jobs, setJobs] = useState([]);
  const [jobsLoading, setJobsLoading] = useState(true);
  const [activePage, setActivePage] = useState("jobs");
  const [alert, setAlert] = useState({ show: false, type: "", message: "" });
  const [profileExists, setProfileExists] = useState(false);
  const [profileData, setProfileData] = useState(null);

  const [applications, setApplications] = useState([]);
  const [applicationsLoading, setApplicationsLoading] = useState(false);

  // ✅ Dynamic Entries
  const [educations, setEducations] = useState([]);
  const [workHistories, setWorkHistories] = useState([]);
  const [skills, setSkills] = useState([]);
  const [hobbies, setHobbies] = useState([]);
  const [showApplyModal, setShowApplyModal] = useState(false);
  const [selectedJob, setSelectedJob] = useState(null);
  const [uploading, setUploading] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  useEffect(() => {
    document.body.style.overflow = "auto";
    document.body.style.position = "static";

    return () => {
      document.body.style.overflow = "auto";
      document.body.style.position = "static";
    };
  }, []);

  // ✅ Personal Info
  const [personal, setPersonal] = useState({
    first_name: "",
    last_name: "",
    cnic: "",
    father_name: "",
    gender: "",
    marital_status: "",
    permanent_address: "",
    current_address: "",
    postal_address: "",
    phone_number: "",
    profile_picture: null,
    domicile_city: "",
    domicile_province: "",
    religion: "",
    nationality: "",
    current_occupation: "",
    date_of_birth: "",
    bio: "",
  });

  // ✅ Captcha
  const [captchaToken, setCaptchaToken] = useState(null);

  // ✅ Fetch profile, jobs, applications
  useEffect(() => {
    const token = localStorage.getItem("access");
    if (!token) return router.replace("/");

    const fetchProfile = async () => {
      try {
        const res = await fetch("/api/myprofile", {
          headers: { Authorization: `Bearer ${token}` },
        });
        if (!res.ok) return;
        const data = await res.json();
        if (data?.profile) {
          setProfileExists(true);
          setProfileData(data.profile);

          // Prefill form
          setPersonal({ ...personal, ...data.profile });
          setEducations(data.profile.educations || []);
          setWorkHistories(data.profile.work_histories || []);
          setSkills(data.profile.skills || []);
          setHobbies(data.profile.hobbies || []);
        }
      } catch (err) {
        console.error(err);
      }
    };

    const fetchJobs = async () => {
      try {
        setJobsLoading(true);
        const res = await fetch("/api/nfajobs");
        const data = await res.json();
        setJobs(Array.isArray(data.data) ? data.data : []);
      } catch (err) {
        console.error(err);
      } finally {
        setJobsLoading(false);
        setLoading(false);
      }
    };

    const fetchApplications = async () => {
      try {
        setApplicationsLoading(true);
        const res = await fetch("/api/myapplication", {
          headers: { Authorization: `Bearer ${token}` },
        });
        const data = await res.json();
        setApplications(data.data || []);
      } catch (err) {
        console.error(err);
      } finally {
        setApplicationsLoading(false);
      }
    };

    fetchProfile();
    fetchJobs();
    fetchApplications();
  }, []);

  // ✅ Alerts
  const showAlert = (type, message) => {
    setAlert({ show: true, type, message });
    setTimeout(() => setAlert({ show: false, type: "", message: "" }), 4000);
  };

  // ✅ Input Handlers
  const handlePersonalChange = (e) => {
    const { name, value, files } = e.target;
    setPersonal((prev) => ({ ...prev, [name]: files ? files[0] : value }));
  };

  // ✅ Dynamic Handlers
  const addEducation = () => setEducations([...educations, {}]);
  const removeEducation = (i) =>
    setEducations(educations.filter((_, idx) => idx !== i));
  const handleEducationChange = (i, e) => {
    const { name, value, type, checked } = e.target;

    setEducations((prev) =>
      prev.map((edu, idx) => {
        if (idx !== i) return edu;

        // Handle checkbox for "currently_studying"
        if (type === "checkbox" && name === "currently_studying") {
          return {
            ...edu,
            currently_studying: checked,
            end_date: checked ? null : edu.end_date, // null if studying, keep existing end_date otherwise
          };
        }

        // Handle other inputs
        return {
          ...edu,
          [name]: name === "end_date" && edu.currently_studying ? null : value,
        };
      }),
    );
  };

  const addWork = () =>
    setWorkHistories([
      ...workHistories,
      {
        company_name: "",
        job_title: "",
        start_date: "",
        end_date: "",
        responsibilities: "",
        currently_working: false,
      },
    ]);
  const removeWork = (i) =>
    setWorkHistories(workHistories.filter((_, idx) => idx !== i));
  const handleWorkChange = (i, e) => {
    const { name, value, type, checked } = e.target;

    setWorkHistories((prev) =>
      prev.map((w, idx) => {
        if (idx !== i) return w;

        if (type === "checkbox" && name === "currently_working") {
          return {
            ...w,
            currently_working: checked,
            end_date: checked ? null : w.end_date,
          };
        }

        return {
          ...w,
          [name]: value,
        };
      }),
    );
  };

  const addSkill = () => setSkills([...skills, {}]);
  const removeSkill = (i) => setSkills(skills.filter((_, idx) => idx !== i));
  const handleSkillChange = (i, e) => {
    const { name, value } = e.target;
    setSkills((prev) =>
      prev.map((s, idx) => (idx === i ? { ...s, [name]: value } : s)),
    );
  };

  const addHobby = () => setHobbies([...hobbies, {}]);
  const removeHobby = (i) => setHobbies(hobbies.filter((_, idx) => idx !== i));
  const handleHobbyChange = (i, e) => {
    const { name, value } = e.target;
    setHobbies((prev) =>
      prev.map((h, idx) => (idx === i ? { ...h, [name]: value } : h)),
    );
  };

  // ✅ Submit Profile (Create/Update)
  const handleProfileSubmit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem("access");
    if (!token) return router.push("/");

    if (!captchaToken) {
      swal("CAPTCHA Required", "Please complete the CAPTCHA.", "error");
      return;
    }

    const formData = new FormData();
    Object.keys(personal).forEach((key) => {
      if (key === "profile_picture") {
        if (personal.profile_picture instanceof File) {
          formData.append("profile_picture", personal.profile_picture);
        }
      } else {
        formData.append(key, personal[key] ?? "");
      }
    });

    formData.append("educations", JSON.stringify(educations));
    formData.append("work_histories", JSON.stringify(workHistories));
    formData.append("skills", JSON.stringify(skills));
    formData.append("hobbies", JSON.stringify(hobbies));
    formData.append("captcha_token", captchaToken);

    try {
      const res = await fetch("/api/nfaprofile", {
        method: "POST",
        headers: { Authorization: `Bearer ${token}` },
        body: formData,
      });
      const data = await res.json();

      if (res.ok) {
        showAlert("success", "Profile saved successfully!");
        setProfileExists(true);
        setProfileData(data.profile);

        // Prefill form after update
        setPersonal({ ...personal, ...data.profile });
        setEducations(data.profile.educations || []);
        setWorkHistories(data.profile.work_histories || []);
        setSkills(data.profile.skills || []);
        setHobbies(data.profile.hobbies || []);
        setActivePage("myProfile");
      } else {
        showAlert("danger", data?.detail || "Profile submission failed");
      }
    } catch (err) {
      console.error(err);
      showAlert("danger", "Error submitting profile");
    }
  };
  // applying for job
  const handleApplyOnline = async (job) => {
    const token = localStorage.getItem("access");
    // console.log(token);

    if (!token) return router.push("/");

    try {
      // disable button / show loader here if you want (optional)
      const res = await fetch(`/api/eligibility-check?job_id=${job.id}`, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      const data = await res.json();
      if (!res.ok)
        return showAlert(
          "danger",
          data?.message || "Eligibility check failed.",
        );

      const isEligible = data?.eligible === true;

      if (isEligible) {
        setSelectedJob(job);
        setShowApplyModal(true);
      } else {
        let errorMessage = "You are not eligible for this job.";

        if (Array.isArray(data?.reasons)) {
          errorMessage = data.reasons.join(" ");
        } else if (data?.message) {
          errorMessage = data.message;
        }

        showAlert("danger", errorMessage);
      }
    } catch (err) {
      console.error("Eligibility Check Error:", err);
      showAlert("danger", "Error checking eligibility.");
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
        setApplications(data.data || []);
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
  // ✅ Submit Application Form
  const handleApplicationSubmit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem("access");
    if (!token) return router.push("/");

    if (!selectedJob?.id) return showAlert("danger", "Job not selected");

    const formData = new FormData(e.target);

    // Required by backend
    formData.append("job_id", selectedJob.id);
    formData.append("user_id", profileData?.user?.id || "");

    try {
      setUploading(true);

      const res = await fetch("/api/applicationsubmit", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
        },
        body: formData,
      });

      const data = await res.json();

      if (res.ok) {
        swal({
          title: "Application Submitted ",
          text: "Your application has been submitted successfully!",
          icon: "success",
          button: "OK",
        });

        setShowApplyModal(false);
        fetchMyApplications();

        // ✅ Email send after successful application
        try {
          const userEmail = profileData?.user?.email;
          const userName = profileData?.user?.name || "Applicant";
          console.log("Sending email to:", userEmail);

          if (!userEmail) {
            console.error("No email found for this user");
          } else {
            console.log('smtp temporary block due to limitation of server');

            //             await fetch("/api/application-email", {
            //               method: "POST",
            //               headers: { "Content-Type": "application/json" },
            //               body: JSON.stringify({
            //                 to: userEmail,
            //                 subject: `Application Received for ${selectedJob?.job_post?.title || "Job"}`,
            //                 message: `
            // Dear ${userName},

            // Your application for the position "${selectedJob?.job_post?.title || "NFA Job"}" has been successfully received.

            // We’ll review your profile and get back to you soon.

            // Best Regards,  
            // NFA Team
            //               `,
            //               }),
            //             });
          }
        } catch (emailErr) {
          console.error("Email sending failed:", emailErr);
        }

        // ✅ Optionally refresh applications list
        fetchMyApplications();
      } else {
        showAlert("danger", data?.message || "Application failed");
      }
    } catch (err) {
      console.error(err);
      showAlert("danger", "Upload error");
    } finally {
      setUploading(false);
    }
  };

  // ✅ Check if job is already applied
  const isJobApplied = (jobId) => {
    return applications.some((app) => app.job_id === jobId);
  };

  const today = new Date();
  const activeJobs = jobs.filter((job) => {
    const deadline = new Date(job.application_deadline);
    // Show if deadline is today or in the future
    return deadline >= today.setHours(0, 0, 0, 0);
  });

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
        {alert.show && (
          <div className={`alert alert-${alert.type}`}>{alert.message}</div>
        )}

        <div className="d-flex mycontainer">
          {/* Sidebar */}
          <aside className={`myaside ${sidebarOpen ? "open" : ""}`}>
            <h3 className="text-center mb-4 border-bottom pb-2">Dashboard</h3>
            <nav className="nav flex-column">
              <button
                className={`nav-link text-white btn btn-link ${activePage === "jobs" ? "text-warning" : ""
                  }`}
                onClick={() => setActivePage("jobs")}
              >
                Available Jobs
              </button>
              <button
                className={`nav-link text-white btn btn-link ${activePage === "myapplications" ? "text-warning" : ""
                  }`}
                onClick={() => {
                  setActivePage("myapplications");
                  fetchMyApplications();
                }}
              >
                My Applications
              </button>
              <button
                className={`nav-link text-white btn btn-link ${activePage === (profileExists ? "myProfile" : "createProfile")
                  ? "text-warning"
                  : ""
                  }`}
                onClick={() =>
                  setActivePage(profileExists ? "myProfile" : "createProfile")
                }
              >
                {profileExists ? "My Profile" : "Create Profile"}
              </button>
            </nav>
            <button
              className="btn btn-success w-100 mt-4"
              onClick={() => {
                localStorage.clear();
                router.push("/");
              }}
            >
              Logout
            </button>
          </aside>

          {/* Main */}
          <main className="flex-grow-1 main-content">
            <nav className="navbar navbar-expand-lg navbar-light bg-light shadow-sm px-3">
              <button
                className="btn btn-outline-primary d-md-none"
                onClick={() => setSidebarOpen(!sidebarOpen)}
              >
                ☰
              </button>
              <span className="navbar-brand ms-3 fw-bold">
                {activePage === "jobs" && "Available Jobs"}
                {activePage === "myapplications" && "My Applications"}
                {activePage.includes("Profile") && "Profile Management"}
              </span>

              <div className="ms-auto small text-muted">
                Logged in as <b>{profileData?.first_name}</b>
              </div>
            </nav>

            <div className="container-fluid p-4">
              {/* ✅ Create/Edit Profile Form */}
              {activePage === "createProfile" && (
                <form
                  onSubmit={handleProfileSubmit}
                  encType="multipart/form-data"
                >
                  <FormSection
                    title="Personal Information"
                    subtitle="Basic identity & contact details"
                  >
                    <div className="row">
                      {Object.keys(personal).map((key) => {
                        if (key === "profile_picture") {
                          return (
                            <div className="col-md-6 mb-3" key={key}>
                              <label>Profile Picture</label>
                              <input
                                type="file"
                                name={key}
                                className="form-control"
                                onChange={handlePersonalChange}
                                accept="image/*"
                              />

                              {profileExists &&
                                profileData?.profile_picture && (
                                  <small className="text-muted">
                                    Leave empty to keep existing picture
                                  </small>
                                )}
                            </div>
                          );
                        }

                        if (key === "gender") {
                          return (
                            <div className="col-md-6 mb-3" key={key}>
                              <label>Gender</label>
                              <select
                                name={key}
                                className="form-control"
                                value={personal[key]}
                                onChange={handlePersonalChange}
                                required
                              >
                                <option value="">Select Gender</option>
                                <option value="male">Male</option>
                                <option value="female">Female</option>
                                <option value="other">Other</option>
                              </select>
                            </div>
                          );
                        }

                        if (key === "marital_status") {
                          return (
                            <div className="col-md-6 mb-3" key={key}>
                              <label>Marital Status</label>
                              <select
                                name={key}
                                className="form-control"
                                value={personal[key]}
                                onChange={handlePersonalChange}
                                required
                              >
                                <option value="">Select</option>
                                <option value="single">Single</option>
                                <option value="married">Married</option>
                              </select>
                            </div>
                          );
                        }

                        if (key === "current_occupation") {
                          return (
                            <div className="col-md-6 mb-3" key={key}>
                              <label>Current Occupation</label>
                              <select
                                name={key}
                                className="form-control"
                                value={personal[key]}
                                onChange={handlePersonalChange}
                                required
                              >
                                <option value="">Select Occupation</option>
                                <option value="government">Government</option>
                                <option value="private">Private</option>
                                <option value="unemployed">Unemployed</option>
                              </select>
                            </div>
                          );
                        }

                        // Default text input for other fields
                        return (
                          <div className="col-md-6 mb-3" key={key}>
                            <label>{key.replace("_", " ")}</label>
                            <input
                              type={key === "date_of_birth" ? "date" : "text"}
                              name={key}
                              value={personal[key]}
                              className="form-control"
                              onChange={handlePersonalChange}
                              required
                            />
                          </div>
                        );
                      })}
                    </div>
                  </FormSection>

                  {/* ✅ Education */}
                  <FormSection
                    title="Education"
                    subtitle="Your academic background (latest first)"
                  >
                    {" "}
                    {educations.map((edu, idx) => (
                      <div className="card p-3 mb-3" key={idx}>
                        <div className="d-flex justify-content-between">
                          <h5>Education {idx + 1}</h5>
                          <button
                            type="button"
                            className="btn btn-danger btn-sm"
                            onClick={() => removeEducation(idx)}
                          >
                            Remove
                          </button>
                        </div>
                        <div className="row">
                          <div className="col-md-6 mb-3">
                            <label>Institution</label>
                            <input
                              type="text"
                              name="institution_name"
                              value={edu.institution_name || ""}
                              onChange={(e) => handleEducationChange(idx, e)}
                              className="form-control"
                              required
                            />
                          </div>
                          <div className="col-md-6 mb-3">
                            <label>Degree</label>
                            <select
                              name="degree" // keep the same
                              value={edu.degree || ""} // controlled value
                              onChange={(e) => handleEducationChange(idx, e)} // same handler
                              className="form-control"
                              required
                            >
                              <option value="">Select Degree</option>
                              <option value="Matric">Matric</option>
                              <option value="Intermediate">Intermediate</option>
                              <option value="Bachelors">Bachelors</option>
                              <option value="Master">Master</option>
                              <option value="PhD">PhD</option>
                            </select>
                          </div>

                          <div className="col-md-6 mb-3">
                            <label>Field of Study</label>
                            <input
                              type="text"
                              name="field_of_study"
                              value={edu.field_of_study || ""}
                              onChange={(e) => handleEducationChange(idx, e)}
                              className="form-control"
                              required
                            />
                          </div>
                          <div className="col-md-6 mb-3">
                            <label>Grade</label>
                            <input
                              type="text"
                              name="grade"
                              value={edu.grade || ""}
                              onChange={(e) => handleEducationChange(idx, e)}
                              className="form-control"
                            />
                          </div>
                          <div className="col-md-6 mb-3">
                            <label>Start Date</label>
                            <input
                              type="date"
                              name="start_date"
                              value={edu.start_date || ""}
                              onChange={(e) => handleEducationChange(idx, e)}
                              className="form-control"
                              required
                            />
                          </div>
                          <div className="col-md-6 mb-3">
                            <label>End Date</label>
                            <input
                              type="date"
                              name="end_date"
                              value={edu.end_date || ""}
                              onChange={(e) => handleEducationChange(idx, e)}
                              className="form-control"
                              disabled={edu.currently_studying || false}
                            />
                          </div>
                          <div className="col-12 mb-3">
                            <label>Description</label>
                            <textarea
                              name="description"
                              value={edu.description || ""}
                              onChange={(e) => handleEducationChange(idx, e)}
                              className="form-control"
                            ></textarea>
                          </div>
                          <div className="col-12 mb-3 form-check">
                            <input
                              type="checkbox"
                              name="currently_studying"
                              checked={edu.currently_studying || false}
                              onChange={(e) => handleEducationChange(idx, e)}
                              className="form-check-input"
                            />
                            <label className="form-check-label">
                              Currently Studying
                            </label>
                          </div>
                        </div>
                      </div>
                    ))}
                    <button
                      type="button"
                      className="btn btn-success mb-3"
                      onClick={addEducation}
                    >
                      + Add Education
                    </button>
                  </FormSection>

                  {/* ✅ Work Histories */}
                  <FormSection
                    title="Work Experience"
                    subtitle="Your professional history"
                  >
                    {" "}
                    {workHistories.map((w, idx) => (
                      <div className="card p-3 mb-3" key={idx}>
                        <div className="d-flex justify-content-between">
                          <h5>Work {idx + 1}</h5>
                          <button
                            type="button"
                            className="btn btn-danger btn-sm"
                            onClick={() => removeWork(idx)}
                          >
                            Remove
                          </button>
                        </div>
                        <div className="row">
                          <div className="col-md-6 mb-3">
                            <label>Company Name</label>
                            <input
                              type="text"
                              name="company_name"
                              value={w.company_name || ""}
                              onChange={(e) => handleWorkChange(idx, e)}
                              className="form-control"
                              required
                            />
                          </div>
                          <div className="col-md-6 mb-3">
                            <label>Job Title</label>
                            <input
                              type="text"
                              name="job_title"
                              value={w.job_title || ""}
                              onChange={(e) => handleWorkChange(idx, e)}
                              className="form-control"
                              required
                            />
                          </div>
                          <div className="col-md-6 mb-3">
                            <label>Start Date</label>
                            <input
                              type="date"
                              name="start_date"
                              value={w.start_date || ""}
                              onChange={(e) => handleWorkChange(idx, e)}
                              className="form-control"
                              required
                            />
                          </div>
                          <div className="col-md-6 mb-3">
                            <label>End Date</label>
                            <input
                              type="date"
                              name="end_date"
                              value={w.end_date || ""}
                              onChange={(e) => handleWorkChange(idx, e)}
                              className="form-control"
                              disabled={w.currently_working || false}
                            />
                          </div>
                          <div className="col-12 mb-3">
                            <label>Responsibilities</label>
                            <textarea
                              name="responsibilities"
                              value={w.responsibilities || ""}
                              onChange={(e) => handleWorkChange(idx, e)}
                              className="form-control"
                              required
                            />
                          </div>
                          <div className="col-12 mb-3 form-check">
                            <input
                              type="checkbox"
                              name="currently_working"
                              checked={w.currently_working || false}
                              onChange={(e) => handleWorkChange(idx, e)}
                              className="form-check-input"
                            />
                            <label className="form-check-label">
                              Currently Working
                            </label>
                          </div>
                        </div>
                      </div>
                    ))}
                    <button
                      type="button"
                      className="btn btn-success mb-3"
                      onClick={addWork}
                    >
                      + Add Work Experience
                    </button>
                  </FormSection>

                  {/* ✅ Skills */}
                  <FormSection
                    title="Skills"
                    subtitle="Technical or professional skills"
                  >
                    {" "}
                    {skills.map((s, idx) => (
                      <div className="input-group mb-2" key={idx}>
                        <input
                          type="text"
                          name="name"
                          value={s.name || ""}
                          onChange={(e) => handleSkillChange(idx, e)}
                          placeholder="Skill Name"
                          className="form-control"
                          required
                        />
                        <input
                          type="text"
                          name="description"
                          value={s.description || ""}
                          onChange={(e) => handleSkillChange(idx, e)}
                          placeholder="Description (optional)"
                          className="form-control"
                        />
                        <button
                          type="button"
                          className="btn btn-danger"
                          onClick={() => removeSkill(idx)}
                        >
                          Remove
                        </button>
                      </div>
                    ))}
                    <button
                      type="button"
                      className="btn btn-success mb-3"
                      onClick={addSkill}
                    >
                      + Add Skill
                    </button>
                  </FormSection>

                  {/* ✅ Hobbies */}
                  <FormSection
                    title="Hobbies & Interests"
                    subtitle="Optional but helps profile strength"
                  >
                    {" "}
                    {hobbies.map((h, idx) => (
                      <div className="input-group mb-2" key={idx}>
                        <input
                          type="text"
                          name="name"
                          value={h.name || ""}
                          onChange={(e) => handleHobbyChange(idx, e)}
                          placeholder="Hobby Name"
                          className="form-control"
                          required
                        />
                        <input
                          type="text"
                          name="description"
                          value={h.description || ""}
                          onChange={(e) => handleHobbyChange(idx, e)}
                          placeholder="Description (optional)"
                          className="form-control"
                        />
                        <button
                          type="button"
                          className="btn btn-danger"
                          onClick={() => removeHobby(idx)}
                        >
                          Remove
                        </button>
                      </div>
                    ))}
                    <button
                      type="button"
                      className="btn btn-success mb-3"
                      onClick={addHobby}
                    >
                      + Add Hobby
                    </button>
                  </FormSection>

                  {/* ✅ hCaptcha */}
                  <FormSection
                    title="Verification"
                    subtitle="Confirm you are a human"
                  >
                    <HCaptcha
                      sitekey="cd88560c-8a08-47fa-971c-a532fea2183a"
                      onVerify={(token) => setCaptchaToken(token)}
                    />

                    <button type="submit" className="btn btn-primary mt-3">
                      {profileExists ? "Update Profile" : "Save Profile"}
                    </button>
                  </FormSection>
                </form>
              )}

              {/* ✅ My Profile Page */}
              {activePage === "myProfile" && profileData && (
                <div className="container">
                  <h2 className="mb-4 border-bottom pb-2">My Profile</h2>
                  <button
                    className="btn btn-success mb-4"
                    onClick={() => setActivePage("createProfile")}
                  >
                    Edit Profile
                  </button>
                  {/* 🧑 Personal Info */}
                  <div className="card mb-4 shadow-sm">
                    <div className="card-body row">
                      <div className="col-md-3 text-center">
                        <img
                          src={
                            profileData.profile_picture
                              ? `/api/proxy-image?path=${encodeURIComponent(profileData.profile_picture)}`
                              : "/default-avatar.png"
                          }
                          className="img-fluid rounded-circle mb-2"
                          style={{
                            width: "150px",
                            height: "150px",
                            objectFit: "cover",
                          }}
                        />


                        <h5>
                          {profileData.first_name} {profileData.last_name}
                        </h5>
                        <small>{profileData.current_occupation}</small>
                      </div>

                      <div className="col-md-9">
                        <div className="row">
                          <Info label="CNIC" value={profileData.cnic} />
                          <Info
                            label="Father Name"
                            value={profileData.father_name}
                          />
                          <Info label="Gender" value={profileData.gender} />
                          <Info
                            label="Marital Status"
                            value={profileData.marital_status}
                          />
                          <Info
                            label="Phone"
                            value={profileData.phone_number}
                          />
                          <Info label="DOB" value={profileData.date_of_birth} />
                          <Info
                            label="Nationality"
                            value={profileData.nationality}
                          />
                          <Info label="Religion" value={profileData.religion} />
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* 🎓 Education */}
                  <Section title="Education">
                    {(profileData.educations || []).map((edu, i) => (
                      <Card key={i} title={edu.degree}>
                        <p>
                          <b>{edu.institution_name}</b>
                        </p>
                        <p>{edu.field_of_study}</p>
                        <small>
                          {edu.start_date} – {edu.end_date || "Present"}
                        </small>
                      </Card>
                    ))}
                  </Section>

                  {/* 💼 Work Experience */}
                  <Section title="Work Experience">
                    {(profileData.work_histories || []).map((w, i) => (
                      <Card key={i} title={w.job_title}>
                        <p>
                          <b>{w.company_name}</b>
                        </p>
                        <p>{w.responsibilities}</p>
                        <small>
                          {w.start_date} – {w.end_date || "Present"}
                        </small>
                      </Card>
                    ))}
                  </Section>

                  {/* 🧠 Skills */}
                  <Section title="Skills">
                    {(profileData.skills || []).map((s, i) => (
                      <span key={i} className="badge bg-success me-2 mb-2">
                        {s.name}
                      </span>
                    ))}
                  </Section>

                  {/* 🎯 Hobbies */}
                  <Section title="Hobbies">
                    {(profileData.hobbies || []).map((h, i) => (
                      <span key={i} className="badge bg-secondary me-2 mb-2">
                        {h.name}
                      </span>
                    ))}
                  </Section>
                </div>
              )}

              {/* ✅ Jobs Page */}
              {activePage === "jobs" && (
                <div>
                  <h2>Available Jobs</h2>
                  {jobsLoading ? (
                    <div>Loading jobs...</div>
                  ) : jobs.length === 0 ? (
                    <EmptyState
                      title="No applications found"
                      description="You have not applied to any jobs yet."
                      actionLabel="Browse Jobs"
                      onAction={() => setActivePage("jobs")}
                    />
                  ) : (
                    activeJobs.map((job) => (
                      <div key={job.id} className="card mb-3 p-3">
                        <h5 className="fw-bold">{job.job_title}</h5>
                        <p>{job.responsibilities}</p>
                        <button
                          className="btn btn-success"
                          onClick={() => handleApplyOnline(job)}
                          disabled={isJobApplied(job.id)}
                        >
                          {isJobApplied(job.id)
                            ? "Already Applied"
                            : "Apply Online"}
                        </button>
                      </div>
                    ))
                  )}
                </div>
              )}

              {/* ✅ My Applications */}
              {activePage === "myapplications" && (
                <div>
                  <h2>My Applications</h2>
                  {applicationsLoading ? (
                    <div>Loading applications...</div>
                  ) : applications.length === 0 ? (
                    <EmptyState
                      title="No applications found"
                      description="You have not applied to any jobs yet."
                      actionLabel="Browse Jobs"
                      onAction={() => setActivePage("jobs")}
                    />
                  ) : (
                    applications.map((app) => (
                      <div key={app.id} className="card mb-3 p-3">
                        <h5>{app.job_title}</h5>
                        <p>
                          Applied at:{" "}
                          <em className="fw-bold ">{app.applied_at}</em>
                        </p>
                      </div>
                    ))
                  )}
                </div>
              )}
            </div>
          </main>
        </div>
      </div>
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

              <form
                onSubmit={handleApplicationSubmit}
                encType="multipart/form-data"
              >
                <div className="modal-body">
                  <div className="mb-3">
                    <label className="form-label">CNIC File</label>
                    <input
                      type="file"
                      name="cnic"
                      className="form-control"
                      accept=".pdf,.doc,.docx"
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">CV File</label>
                    <input
                      type="file"
                      name="cv"
                      className="form-control"
                      accept=".pdf,.doc,.docx"
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Last Education Degree</label>
                    <input
                      type="file"
                      name="degree"
                      className="form-control"
                      accept=".pdf,.doc,.docx"
                      required
                    />
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
                  <button
                    type="submit"
                    className="btn btn-success"
                    disabled={uploading}
                  >
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
