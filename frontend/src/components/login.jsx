import React, { useState } from "react";

const API_URL = import.meta.env.VITE_API_URL;

export default function Login({ onAuth, toggle }) {
  const [form, setForm] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setError("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.email || !form.password) {
      setError("Please fill in all fields.");
      return;
    }
    try {
      const res = await fetch(`${API_URL}/api/auth/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (!res.ok) {
        setError(data.message || "Login failed");
        return;
      }
      onAuth(data); // or set token/user in context/state
    } catch (err) {
      setError("Network error. Please try again.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#FBF3E8] px-4">
      <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 w-full max-w-md border border-[#e8d5c4]">
        <h2 className="font-playfair text-3xl font-bold text-[#3e807f] mb-6 text-center">
          Login
        </h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label
              className="block text-[#3e807f] font-poppins mb-1"
              htmlFor="email"
            >
              Email
            </label>
            <input
              className="w-full px-4 py-2 rounded-lg border border-[#BEE3DF] focus:outline-none focus:ring-2 focus:ring-[#FFBB97] font-poppins"
              type="email"
              id="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              autoComplete="email"
              required
            />
          </div>
          <div>
            <label
              className="block text-[#3e807f] font-poppins mb-1"
              htmlFor="password"
            >
              Password
            </label>
            <div className="relative">
              <input
                className="w-full px-4 py-2 rounded-lg border border-[#BEE3DF] focus:outline-none focus:ring-2 focus:ring-[#FFBB97] font-poppins"
                type={showPassword ? "text" : "password"}
                id="login-password"
                name="password"
                value={form.password}
                onChange={handleChange}
                autoComplete="current-password"
                required
              />
              <button
                type="button"
                className="absolute right-3 top-1/2 -translate-y-1/2 text-[#3e807f]"
                onClick={() => setShowPassword((v) => !v)}
                tabIndex={-1}
              >
                {showPassword ? (
                  <span role="img" aria-label="Hide password">
                    🙈
                  </span>
                ) : (
                  <span role="img" aria-label="Show password">
                    👁️
                  </span>
                )}
              </button>
            </div>
          </div>
          {error && (
            <div className="text-red-500 text-sm text-center">{error}</div>
          )}
          <button
            type="submit"
            className="w-full bg-[#3e807f] hover:bg-[#2d5f5d] text-white font-semibold py-3 rounded-full shadow-md transition-colors duration-150"
          >
            Login
          </button>
        </form>
        <div className="text-center mt-6 text-[#3e807f] font-poppins">
          Don't have an account?{" "}
          <a
            href="#"
            className="text-[#FFBB97] hover:underline"
            onClick={(e) => {
              e.preventDefault();
              toggle();
            }}
          >
            Sign up
          </a>
        </div>
      </div>
    </div>
  );
}
