import React, { useState } from "react";

const API_URL = import.meta.env.VITE_API_URL;

export default function Signup({ onAuth, toggle }) {
  const [form, setForm] = useState({ name: "", email: "", password: "" });
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setError("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.password) {
      setError("Please fill in all fields.");
      return;
    }
    try {
      const res = await fetch(`${API_URL}/api/auth/signup`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (!res.ok) {
        setError(data.message || "Signup failed");
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
          Sign Up
        </h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label
              className="block text-[#3e807f] font-poppins mb-1"
              htmlFor="name"
            >
              Name
            </label>
            <input
              className="w-full px-4 py-2 rounded-lg border border-[#BEE3DF] focus:outline-none focus:ring-2 focus:ring-[#FFBB97] font-poppins"
              type="text"
              id="name"
              name="name"
              value={form.name}
              onChange={handleChange}
              autoComplete="name"
              required
            />
          </div>
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
                id="signup-password"
                name="password"
                value={form.password}
                onChange={handleChange}
                autoComplete="new-password"
                required
              />
              <button
                type="button"
                className="absolute right-3 top-1/2 -translate-y-1/2 text-[#3e807f]"
                onClick={() => setShowPassword((v) => !v)}
                tabIndex={-1}
                aria-label={showPassword ? "Hide password" : "Show password"}
              >
                {showPassword ? (
                  // Heroicons Eye Off
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="h-5 w-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3.98 8.223A10.477 10.477 0 001.934 12.001C3.226 16.065 7.24 19 12 19c1.306 0 2.563-.202 3.735-.573M6.228 6.228A9.956 9.956 0 0112 5c4.76 0 8.774 2.935 10.066 6.999a10.477 10.477 0 01-2.025 3.779M15 12a3 3 0 11-6 0 3 3 0 016 0zm-9 9l18-18"
                    />
                  </svg>
                ) : (
                  // Heroicons Eye
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="h-5 w-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M2.458 12C3.732 7.943 7.523 5 12 5c4.477 0 8.268 2.943 9.542 7-1.274 4.057-5.065 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                    />
                    <circle cx="12" cy="12" r="3" />
                  </svg>
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
            Sign Up
          </button>
        </form>
        <div className="text-center mt-6 text-[#3e807f] font-poppins">
          Already have an account?{" "}
          <a
            href="/"
            className="text-[#FFBB97] hover:underline"
            onClick={(e) => {
              e.preventDefault();
              toggle();
            }}
          >
            Login
          </a>
        </div>
      </div>
    </div>
  );
}
