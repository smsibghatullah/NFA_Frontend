import { useState } from "react";
import swal from "sweetalert";
import HCaptcha from "@hcaptcha/react-hcaptcha";

const sanitizeInput = (input) => {
  if (!input) return "";
  input = input.trim();
  const div = document.createElement("div");
  div.textContent = input;
  return div.innerHTML;
};

const FileUploadForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    description: "",
    preferredContact: "Email",
  });

  const [attachment, setAttachment] = useState(null);
  const [btnText, setBtnText] = useState("Submit");
  const [loading, setLoading] = useState(false);
  const [captchaToken, setCaptchaToken] = useState(null);
  const [showCaptcha, setShowCaptcha] = useState(false);

  // Convert file to base64
  const toBase64 = (file) =>
    new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = (error) => reject(error);
    });

  // Handle input changes
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: sanitizeInput(value) });
  };

  const handleFormInteraction = () => {
    setShowCaptcha(true);
  };

  // Handle file upload
  const handleFileChange = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    if (file.type !== "application/pdf") {
      swal("Invalid File", "Only PDF files are allowed!", "error");
      e.target.value = "";
      return;
    }

    const base64 = await toBase64(file);
    setAttachment({
      name: file.name,
      type: file.type,
      data: base64.split(",")[1], // sirf base64 data
    });
  };

  // Handle form submission
  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!captchaToken) {
      swal("CAPTCHA Required", "Please complete the CAPTCHA challenge.", "error");
      return;
    }

    if (!attachment) {
      swal("File Required", "Please upload a PDF document.", "error");
      return;
    }

    setLoading(true);
    setBtnText("Sending...");

    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ formData, attachment, captchaToken }),
      });

      if (response.ok) {
        setFormData({
          name: "",
          email: "",
          phone: "",
          service: "",
          description: "",
          preferredContact: "Email",
        });
        setAttachment(null);
        setCaptchaToken(null);
        setBtnText("Submitted");
        swal("Success", "Your message has been sent successfully.", "success");
      } else {
        const errorData = await response.json();
        swal("Error", errorData.message || "Failed to send your message.", "error");
        setBtnText("Failed to send");
      }
    } catch (error) {
      console.error("Error:", error);
      swal("Error", "An unexpected error occurred. Please try again later.", "error");
      setBtnText("Error sending");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container my-5">
      <form
        onSubmit={handleSubmit}
        onChange={handleFormInteraction}
        className="p-4 border rounded shadow-sm"
      >
        {/* Name */}
        <div className="mb-3">
          <label className="form-label">Name *</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="form-control"
            required
            maxLength="100"
          />
        </div>

        {/* Email + Phone */}
        <div className="row">
          <div className="col-sm-6">
            <div className="mb-3">
              <label className="form-label">Email *</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="form-control"
                required
                maxLength="100"
              />
            </div>
          </div>
          <div className="col-sm-6">
            <div className="mb-3">
              <label className="form-label">Phone Number</label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="form-control"
                pattern="^\+?[0-9\s-]{7,15}$"
              />
            </div>
          </div>
        </div>

        {/* Service */}
        <div className="mb-3">
          <label className="form-label">Service *</label>
          <select
            name="service"
            value={formData.service}
            onChange={handleChange}
            className="form-select"
            required
          >
            <option value="">Select a service</option>
            <option value="fingerprint_analysis">Fingerprint Analysis</option>
            <option value="digital_forensics">Digital Forensics</option>
            <option value="narcotics_analysis">Narcotics Analysis</option>
            <option value="crime_scene_investigation">Crime Scene Investigation</option>
            <option value="firearms_tool_marks">Firearms & Tool Marks</option>
            <option value="dna_forensics">DNA Forensics</option>
            <option value="questioned_documents">Questioned Documents</option>
            <option value="toxicology">Toxicology</option>
            <option value="serology">Serology</option>
            <option value="pathology">Pathology</option>
            <option value="explosives_analysis">Explosives Analysis</option>
          </select>
        </div>

        {/* Description */}
        <div className="mb-3">
          <label className="form-label">Description</label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            className="form-control"
            rows="4"
            maxLength="1000"
          ></textarea>
        </div>

        {/* Contact Preference */}
        <div className="mb-3">
          <label className="form-label">Preferred Contact Method</label>
          <div className="d-flex">
            <div className="form-check">
              <input
                type="radio"
                name="preferredContact"
                value="Email"
                checked={formData.preferredContact === "Email"}
                onChange={handleChange}
                className="form-check-input"
              />
              <label className="form-check-label">Email</label>
            </div>
            <div className="form-check ms-3">
              <input
                type="radio"
                name="preferredContact"
                value="Phone"
                checked={formData.preferredContact === "Phone"}
                onChange={handleChange}
                className="form-check-input"
              />
              <label className="form-check-label">Phone</label>
            </div>
          </div>
        </div>

        {/* ✅ PDF Upload */}
        <div className="mb-3">
          <label className="form-label">Upload Document (PDF only)</label>
          <input
            type="file"
            className="form-control"
            accept="application/pdf"
            onChange={handleFileChange}
            // required
          />
        </div>

        {/* hCaptcha */}
        {showCaptcha && (
          <div className="mb-3">
            <HCaptcha
              sitekey="cd88560c-8a08-47fa-971c-a532fea2183a"
              onVerify={(token) => setCaptchaToken(token)}
            />
          </div>
        )}

        <button type="submit" className="btn btn-success w-100" disabled={loading}>
          {btnText}
        </button>
      </form>
    </div>
  );
};

export default FileUploadForm;
