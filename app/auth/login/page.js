"use client";

import { useState } from "react";
import {
  Mail,
  Lock,
  Sparkles,
  AlertCircle,
  Loader2,
  UserPlus,
  LogIn,
  EyeOff,
  Eye,
} from "lucide-react";
import { useRouter } from "next/navigation";
import { API_BASE } from "@/lib/api";
import { useAuth } from "@/context/AuthContext"; // Global Auth use karenge
import { showToast } from "nextjs-toast-notify";

export default function AuthForm() {
  const [isLogin, setIsLogin] = useState(true); // Toggle State
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const router = useRouter();
  const { login: updateGlobalUser } = useAuth(); // AuthContext ka login function

  const handleSubmit = async (e) => {
    e?.preventDefault();
    if (!email || !password) return setError("All fields are required");

    setError("");
    setIsLoading(true);

    // Endpoint switch based on mode
    const endpoint = isLogin ? `${API_BASE}/login` : `${API_BASE}/register`;

    try {
      const res = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: email.toLowerCase().trim(), password }),
        credentials: "include", // Cookies ke liye zaroori
      });

      const data = await res.json();

      if (res.ok && data.success) {
        showToast.success(
          isLogin ? "Welcome Back!" : "Account Created Successfully",
        );

        // 1. Context update karo taaki 'user' state null na rahe
        updateGlobalUser();

        // 2. Role based redirect
        const role = data.user?.role || "user";
        router.push(role === "admin" ? "/admin/dashboard" : "/");
      } else {
        setError(data.message || "Authentication failed");
      }
    } catch (err) {
      setError("Network error. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-[90vh] bg-linear-to-br from-gray-950 via-blue-950 to-black flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-black bg-linear-to-r from-blue-400 via-sky-400 to-teal-400 bg-clip-text text-transparent">
            {isLogin ? "Welcome Back" : "Join the Community"}
          </h1>
          <p className="text-blue-300/70 text-sm mt-2">
            {isLogin
              ? "Login to access your dashboard"
              : "Create an account to get started"}
          </p>
        </div>

        <div className="relative group">
          <div className="absolute -inset-0.5 bg-linear-to-r from-blue-600 via-sky-500 to-teal-400 rounded-3xl blur opacity-30 group-hover:opacity-60 transition duration-500" />

          <div className="relative bg-black/60 backdrop-blur-xl border border-blue-500/30 rounded-3xl p-8 shadow-2xl">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Error Alert */}
              {error && (
                <div className="flex items-center gap-3 p-4 bg-red-500/10 border border-red-500/30 rounded-2xl text-red-400 text-sm animate-shake">
                  <AlertCircle className="w-5 h-5 shrink-0" />
                  <span>{error}</span>
                </div>
              )}

              {/* Email */}
              <div className="space-y-2">
                <label className="text-sm font-semibold text-blue-300/90">
                  Email Address
                </label>
                <div className="relative">
                  <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-blue-400/60" />
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your mail id"
                    disabled={isLoading}
                    className="w-full pl-12 pr-4 py-3.5 bg-white/5 border border-blue-500/30 rounded-2xl text-white focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-all disabled:opacity-50"
                  />
                </div>
              </div>

              {/* Password */}
              <div className="space-y-2">
                <label className="text-sm font-semibold text-blue-300/90">
                  Password
                </label>
                <div className="relative">
                  <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-blue-400/60" />
                  <input
                    type={showPassword ? "text" : "password"}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Enter your password"
                    disabled={isLoading}
                    className="w-full pl-12 pr-12 py-3.5 bg-white/5 border border-blue-500/30 rounded-2xl text-white focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-all disabled:opacity-50"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-4 cursor-pointer top-1/2 -translate-y-1/2 text-blue-400/60 hover:text-blue-400 transition-colors"
                  >
                    {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                  </button>
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isLoading}
                className="w-full cursor-pointer relative px-8 py-4 bg-linear-to-r from-blue-600 via-sky-500 to-teal-400 rounded-2xl font-bold text-white shadow-xl hover:shadow-sky-500/10 transition-all duration-300 hover:scale-[1.01] active:scale-95 disabled:opacity-60 flex items-center justify-center gap-3 group overflow-hidden"
              >
                {isLoading ? (
                  <Loader2 className="w-5 h-5 animate-spin" />
                ) : (
                  <>
                    {isLogin ? (
                      <LogIn className="w-5 h-5 cursor-pointer" />
                    ) : (
                      <UserPlus className="w-5 h-5 cursor-pointer" />
                    )}
                    {isLogin ? "Sign In" : "Create Account"}
                  </>
                )}
              </button>
            </form>

            {/* Toggle Link */}
            <div className="mt-8 text-center space-y-4">
              <button
                onClick={() => {
                  setIsLogin(!isLogin);
                  setError("");
                }}
                className="text-sm text-blue-300/70 hover:text-blue-200 transition-colors"
              >
                {isLogin ? (
                  <>
                    Don't have an account?{" "}
                    <span className="text-blue-400 font-bold underline underline-offset-4">
                      Sign up
                    </span>
                  </>
                ) : (
                  <>
                    Already have an account?{" "}
                    <span className="text-blue-400 font-bold underline underline-offset-4">
                      Log in
                    </span>
                  </>
                )}
              </button>

              <p className="text-[10px] text-blue-300/30 tracking-widest uppercase">
                Secured by NoDeskDeveloper
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
