"use client";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import "@tabler/core/dist/css/tabler.min.css";
import swal from "sweetalert";

const Dashboard = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem("token");
    console.log(token); // Assuming token is stored in localStorage
    if (!token) {
      router.push("/admin/login"); // Redirect to login if no token
      return;
    }

    fetch("/api/auth/verify", {
      method: "GET",
      headers: { Authorization: `Bearer ${token}` },
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error("Token is invalid");
        }
      })
      .catch(() => {
        router.push("/admin/login"); // Redirect if token is invalid
      });
  }, [router]);

  const handleLogout = () => {
    swal({
      title: "Are you sure?",
      text: "Do you really want to log out?",
      icon: "warning",
      buttons: {
        cancel: "Stay Logged In",
        confirm: "Log Out",
      },
      dangerMode: true,
    }).then((willLogout) => {
      if (willLogout) {
        if (localStorage.getItem("token")) {
          localStorage.removeItem("token"); // Remove token from local storage
        }
        window.location.href = "/admin/login"; // Redirect user to login page
      }
    });
  };

  return (
    <div className="page">
      {/* Navbar */}
      <header className="navbar navbar-expand-md d-print-none p-0">
        <div className="container-xl">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbar-menu"
            aria-controls="navbar-menu"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <h1 className="navbar-brand navbar-brand-autodark d-none-navbar-horizontal pe-0 pe-md-3">
            <Link href="/admin/dashboard">
              <Image
                src="/assets/img/NFA-logo.svg"
                width={250}
                height={10}
                alt="NFA"
                loading="lazy"
              />
            </Link>
          </h1>
          <div className="navbar-nav flex-row order-md-last">
            {/* User Menu */}
            <div className="nav-item dropdown">
              <a
                href="#"
                className="nav-link d-flex lh-1 text-reset p-0"
                // data-bs-toggle="dropdown"
                // aria-label="Open user menu"
              >
                <span
                  className="avatar avatar-sm"
                  style={{
                    backgroundImage: "url('/img/dummy-profile-pic-1.jpg')",
                  }}
                ></span>
                <div className="d-none d-xl-block ps-2">
                  <div>
                    <b>NFA</b>
                    <br></br>
                    <p className="p-0 m-0 text-secondary txt-sm mt-1">ADMIN</p>
                    {/* <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  strokeWidth="2"  strokeLinecap="round"  strokeLinejoin="round"  className="icon icon-tabler icons-tabler-outline icon-tabler-chevron-down"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M6 9l6 6l6 -6" /></svg> */}
                  </div>{" "}
                  {/* Display user's name */}
                  {/* <div className="mt-1 small text-secondary">UI Designer</div> */}
                </div>
              </a>
              {/* <div className="dropdown-menu dropdown-menu-end dropdown-menu-arrow">
                  <Link href="#" className="dropdown-item">
                    Status
                  </Link>
                  <Link href="/profile" className="dropdown-item">
                    Profile
                  </Link>
                  <button onClick={handleLogout} className="dropdown-item">
                    Logout
                  </button>
                </div> */}
            </div>
          </div>
          <div className="collapse navbar-collapse" id="navbar-menu">
            <div className="d-flex flex-column flex-md-row flex-fill align-items-stretch align-items-md-center">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <Link className="nav-link" href="/admin/dashboard">
                    <span className="nav-link-icon d-md-none d-lg-inline-block">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="icon"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        strokeWidth="2"
                        stroke="currentColor"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <path d="M5 12l-2 0l9 -9l9 9l-2 0" />
                        <path d="M5 12v7a2 2 0 0 0 2 2h4v-6h4v6h4a2 2 0 0 0 2 -2v-7" />
                      </svg>
                    </span>
                    <span className="nav-link-title">Home</span>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" href="/admin/manage-announcement">
                    <span className="nav-link-icon d-md-none d-lg-inline-block">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={24}
                        height={24}
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="icon icon-tabler icons-tabler-outline icon-tabler-speakerphone"
                      >
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <path d="M18 8a3 3 0 0 1 0 6" />
                        <path d="M10 8v11a1 1 0 0 1 -1 1h-1a1 1 0 0 1 -1 -1v-5" />
                        <path d="M12 8h0l4.524 -3.77a.9 .9 0 0 1 1.476 .692v12.156a.9 .9 0 0 1 -1.476 .692l-4.524 -3.77h-8a1 1 0 0 1 -1 -1v-4a1 1 0 0 1 1 -1h8" />
                      </svg>
                    </span>
                    <span className="nav-link-title">Announcement</span>
                  </Link>
                </li>
                <li className="nav-item">
                  <button className="nav-link" onClick={handleLogout}>
                    <span className="nav-link-icon d-md-none d-lg-inline-block">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="icon icon-tabler icons-tabler-outline icon-tabler-logout"
                      >
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <path d="M14 8v-2a2 2 0 0 0 -2 -2h-7a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h7a2 2 0 0 0 2 -2v-2" />
                        <path d="M9 12h12l-3 -3" />
                        <path d="M18 15l3 -3" />
                      </svg>
                    </span>
                    <span className="nav-link-title">Logout</span>
                  </button>
                </li>
                {/* More nav items */}
              </ul>
            </div>
          </div>
        </div>
      </header>

      {/* Content */}
      <div className="content">
        <div className="container-xl">{children}</div>
      </div>
    </div>
  );
};

export default Dashboard;
