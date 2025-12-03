"use client";
import { API_BASE } from "@/lib/api";
import { X, ArrowRight } from "lucide-react";
import { useState } from "react";

export default function ReportIssueModal({ onClose }) {
  const [formData, setFormData] = useState({
    productType: "App",
    codingLang: "", // comma-separated string from input
    issueDesc: "",
    productUrl: "",
    fullName: "",
    language: "English",
    phone: "",
    email: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    // Convert comma-separated coding languages into array
    const codingLangArray = formData.codingLang
      .split(",")
      .map((lang) => lang.trim())
      .filter((lang) => lang.length > 0);

    if (codingLangArray.length === 0) {
      alert("Please enter at least one coding language.");
      setLoading(false);
      return;
    }

    const payload = {
      fullName: formData.fullName.trim(),
      email: formData.email.toLowerCase().trim(),
      phone: formData.phone.trim(),
      productType: formData.productType,
      productUrl: formData.productUrl.trim(),
      codingLang: codingLangArray, // array bhej rahe hain (schema mein [String])
      issueDesc: formData.issueDesc.trim(),
      language: formData.language || "English",
    };

    try {
      const res = await fetch(`${API_BASE}/error-fixing`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const result = await res.json();

      if (res.ok) {
        alert(
          "Thank you! Your issue has been reported. Our team will contact you soon."
        );
        onClose();
      } else {
        alert(
          "Error: " + (result.message || "Submission failed. Please try again.")
        );
      }
    } catch (err) {
      console.error("Submission error:", err);
      alert("Network error! Please check your connection and try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div
        className="fixed inset-0 bg-black/70 backdrop-blur-xl z-50 flex items-center justify-center p-4"
        onClick={onClose}
      >
        <div
          className="relative bg-gradient-to-br from-gray-900 via-black to-gray-900 border border-purple-500/30 rounded-3xl p-8 max-w-3xl w-full shadow-2xl overflow-y-auto max-h-screen"
          onClick={(e) => e.stopPropagation()}
        >
          <button
            onClick={onClose}
            className="absolute top-6 right-6 rounded-full bg-white/10 hover:bg-white/20 transition p-2"
          >
            <X className="size-6 text-gray-400" />
          </button>

          <h2 className="text-2xl lg:text-3xl font-bold text-white mb-8 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Report Error / Bug Fixing
          </h2>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="text-gray-400 text-sm">Type of Product</label>
                <select
                  name="productType"
                  value={formData.productType}
                  onChange={handleChange}
                  required
                  className="mt-2 w-full px-4 py-3 bg-white/5 border border-purple-500/30 rounded-xl text-white focus:outline-none focus:border-purple-400 transition"
                >
                  <option>App</option>
                  <option>Website</option>
                  <option>Backend API</option>
                  <option>DevOps</option>
                </select>
              </div>

              <div>
                <label className="text-gray-400 text-sm">
                  Coding Languages Used{" "}
                  <span className="text-xs">(comma separated)</span>
                </label>
                <input
                  type="text"
                  name="codingLang"
                  placeholder="React, Node.js, MongoDB, Flutter"
                  value={formData.codingLang}
                  onChange={handleChange}
                  required
                  className="mt-2 w-full px-4 py-3 bg-white/5 border border-purple-500/30 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-purple-400 transition"
                />
              </div>
            </div>

            <div>
              <label className="text-gray-400 text-sm">
                Describe the Issue
              </label>
              <textarea
                name="issueDesc"
                rows="4"
                placeholder="Explain the bug or error in detail..."
                value={formData.issueDesc}
                onChange={handleChange}
                required
                className="mt-2 w-full px-4 py-3 bg-white/5 border border-purple-500/30 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-purple-400 transition resize-none"
              />
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="text-gray-400 text-sm">
                  Product / Website URL
                </label>
                <input
                  type="url"
                  name="productUrl"
                  placeholder="https://yourapp.com"
                  value={formData.productUrl}
                  onChange={handleChange}
                  required
                  className="mt-2 w-full px-4 py-3 bg-white/5 border border-purple-500/30 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-purple-400 transition"
                />
              </div>
              <div>
                <label className="text-gray-400 text-sm">Full Name</label>
                <input
                  type="text"
                  name="fullName"
                  placeholder="Your full name"
                  value={formData.fullName}
                  onChange={handleChange}
                  required
                  className="mt-2 w-full px-4 py-3 bg-white/5 border border-purple-500/30 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-purple-400 transition"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="text-gray-400 text-sm">
                  Communication Language
                </label>
                <select
                  name="language"
                  value={formData.language}
                  onChange={handleChange}
                  required
                  className="mt-2 w-full px-4 py-3 bg-white/5 border border-purple-500/30 rounded-xl text-white focus:outline-none focus:border-purple-400 transition"
                >
                  <option>English</option>
                  <option>Hindi</option>
                  <option>English + Hindi</option>
                  <option>Bengali</option>
                </select>
              </div>
              <div>
                <label className="text-gray-400 text-sm">Phone Number</label>
                <input
                  type="tel"
                  name="phone"
                  placeholder="+91 9876543210"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="mt-2 w-full px-4 py-3 bg-white/5 border border-purple-500/30 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-purple-400 transition"
                />
              </div>
            </div>

            <div>
              <label className="text-gray-400 text-sm">Email Address</label>
              <input
                type="email"
                name="email"
                placeholder="you@example.com"
                value={formData.email}
                onChange={handleChange}
                required
                className="mt-2 w-full px-4 py-3 bg-white/5 border border-purple-500/30 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-purple-400 transition"
              />
            </div>

            <div className="flex justify-end gap-4 pt-6">
              <button
                type="button"
                onClick={onClose}
                disabled={loading}
                className="px-8 py-4 bg-white/10 border border-purple-500/30 rounded-2xl text-gray-400 hover:bg-white/20 transition disabled:opacity-50"
              >
                Cancel
              </button>
              <button
                type="submit"
                disabled={loading}
                className="px-10 py-4 bg-gradient-to-r from-purple-600 via-pink-600 to-red-600 rounded-2xl font-bold text-white shadow-lg hover:shadow-purple-500/50 transition-all hover:scale-105 flex items-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? (
                  "Submitting..."
                ) : (
                  <>
                    Submit Report
                    <ArrowRight className="w-5 h-5" />
                  </>
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
