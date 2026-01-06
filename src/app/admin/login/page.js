"use client";
import { useState } from "react";
import "@tabler/core/dist/css/tabler.min.css";
import { useRouter } from 'next/navigation';

const AuthForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);

    const res = await fetch("/api/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, password }),
    });

    const data = await res.json();

    if (res.ok) {
      // console.log(data.token);
      // Save token to local storage
      localStorage.setItem("token", data.token);

      router.push('/admin/dashboard');
      setError("");
    } else {
      console.log("Error logging in");
      setError(data.message || "Invalid username or password");
    }

    setLoading(false);
  };

  return (
    <div className="page-center">
      <div className="container container-tight py-4 w-50">
        <div className="text-center mb-4">
          <a href="." className="navbar-brand navbar-brand-autodark"></a>
        </div>
        <div className="card card-md">
          <div className="card-body">
            <h2 className="h2 text-center mb-4">Login to your account</h2>
            <form onSubmit={handleLogin} autoComplete="off" noValidate>
              <div className="mb-3">
                <label className="form-label">Username</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Your username"
                  autoComplete="off"
                  required
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  disabled={loading}
                />
              </div>
              <div className="mb-2">
                <label className="form-label">
                  Password
                  <span className="form-label-description">
                    <a className="text-dark" href="./forgot-password.html">
                      I forgot password
                    </a>
                  </span>
                </label>
                <div className="input-group input-group-flat">
                  <input
                    type="password"
                    className="form-control"
                    placeholder="Your password"
                    autoComplete="off"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    disabled={loading}
                  />
                </div>
              </div>
              {error && <div className="text-danger">{error}</div>}
              <div className="mb-2">
                <label className="form-check">
                  <input type="checkbox" className="form-check-input" />
                  <span className="form-check-label">
                    Remember me on this device
                  </span>
                </label>
              </div>
              <div className="form-footer">
                <button type="submit" className="btn btn-success w-100" disabled={loading}>
                  {loading ? "Loading..." : "Sign in"}
                </button>
              </div>
              <div className="text-center text-secondary mt-3">
                Don’t have an account yet?{" "}
                <a className="text-dark" href="./register" tabIndex="-1">
                  Sign up
                </a>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthForm;
