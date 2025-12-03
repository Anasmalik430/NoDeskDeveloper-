import { motion } from "framer-motion";
import { X, ArrowRight } from "lucide-react";
import { useState } from "react";
import { developersType, languages } from "./Data";
import { API_BASE } from "@/lib/api";


const modalVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1, transition: { type: "spring", stiffness: 300, damping: 30 } },
  exit: { opacity: 0, scale: 0.95, transition: { duration: 0.2 } },
};

const backdropVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

export default function TechConsultModal({ onClose }) {
  const [formData, setFormData] = useState({
    techType: "App Developers",
    language: "English",           
    fullName: "",
    phone: "",
    email: "",
    whatsapp: "",
    preferredLang: "English",
    preferredTime: "",
  });

  const [loading, setLoading] = useState(false); // for smooth UX

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const payload = {
      fullName: formData.fullName.trim(),
      email: formData.email.toLowerCase().trim(),
      phone: formData.phone.trim(),
      whatsapp: formData.whatsapp.trim() || formData.phone.trim(), // fallback
      techType: formData.techType,
      language: [formData.language],           // schema expects array
      preferredLang: formData.preferredLang,
      preferredTime: formData.preferredTime.trim(),
    };

    try {
      const res = await fetch(`${API_BASE}/tech-consult`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const result = await res.json();

      if (res.ok) {
        alert("Consultation booked successfully! We'll contact you soon.");
        onClose();
      } else {
        alert("Error: " + (result.message || "Please try again"));
      }
    } catch (err) {
      console.error("Booking failed:", err);
      alert("Network error! Please check your connection and try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <motion.div
      variants={backdropVariants}
      initial="hidden"
      animate="visible"
      exit="hidden"
      className="fixed inset-0 bg-black/70 backdrop-blur-xl z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <motion.div
        variants={modalVariants}
        onClick={(e) => e.stopPropagation()}
        className="relative bg-gradient-to-br from-gray-900 via-black to-gray-900 border border-blue-500/30 rounded-3xl p-8 max-w-lg w-full shadow-2xl"
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full bg-white/10 hover:bg-white/20 transition-all"
        >
          <X className="w-5 h-5 text-gray-400" />
        </button>

        <h2 className="text-2xl font-bold text-white mb-6">Book Tech Consultancy</h2>

        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Tech Type & Language */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="text-gray-400 text-sm">Select Tech Type</label>
              <select
                name="techType"
                value={formData.techType}
                onChange={handleChange}
                required
                className="mt-1 w-full px-4 py-3 bg-white/5 border border-blue-500/30 rounded-xl text-white focus:outline-none focus:border-blue-400 transition"
              >
                {developersType.map((dev) => (
                  <option key={dev} value={dev} className="bg-black">
                    {dev}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label className="text-gray-400 text-sm">Preferred Language</label>
              <select
                name="language"
                value={formData.language}
                onChange={handleChange}
                required
                className="mt-1 w-full px-4 py-3 bg-white/5 border border-blue-500/30 rounded-xl text-white focus:outline-none focus:border-blue-400 transition"
              >
                {languages.map((lang) => (
                  <option key={lang} value={lang} className="bg-black">
                    {lang}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Form Fields */}
          <div className="grid grid-cols-2 gap-4">
            <input
              type="text"
              name="fullName"
              placeholder="Full Name"
              value={formData.fullName}
              onChange={handleChange}
              required
              className="px-4 py-3 bg-white/5 border border-blue-500/30 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-blue-400 transition"
            />
            <input
              type="tel"
              name="phone"
              placeholder="Phone Number"
              value={formData.phone}
              onChange={handleChange}
              required
              className="px-4 py-3 bg-white/5 border border-blue-500/30 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-blue-400 transition"
            />
            <input
              type="email"
              name="email"
              placeholder="Email ID"
              value={formData.email}
              onChange={handleChange}
              required
              className="px-4 py-3 bg-white/5 border border-blue-500/30 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-blue-400 transition"
            />
            <input
              type="tel"
              name="whatsapp"
              placeholder="WhatsApp Number (optional)"
              value={formData.whatsapp}
              onChange={handleChange}
              className="px-4 py-3 bg-white/5 border border-blue-500/30 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-blue-400 transition"
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="text-gray-400 text-sm">Preferred Communication Language</label>
              <select
                name="preferredLang"
                value={formData.preferredLang}
                onChange={handleChange}
                required
                className="mt-1 w-full px-4 py-3 bg-white/5 border border-blue-500/30 rounded-xl text-white focus:outline-none focus:border-blue-400 transition"
              >
                {languages.map((lang) => (
                  <option key={lang} value={lang} className="bg-black">
                    {lang}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label className="text-gray-400 text-sm">Preferred Time for Consultation</label>
              <input
                type="text"
                name="preferredTime"
                placeholder="e.g. Friday 7–8 PM"
                value={formData.preferredTime}
                onChange={handleChange}
                required
                className="mt-1 w-full px-4 py-3 bg-white/5 border border-blue-500/30 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-blue-400 transition"
              />
            </div>
          </div>

          {/* Submit Button */}
          <motion.button
            whileHover={{ scale: loading ? 1 : 1.05 }}
            whileTap={{ scale: loading ? 1 : 0.95 }}
            type="submit"
            disabled={loading}
            className="w-full mt-6 py-4 bg-gradient-to-r from-blue-600 via-sky-500 to-teal-600 rounded-2xl font-bold text-white shadow-lg hover:shadow-purple-500/50 flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
          >
            {loading ? (
              <>Submitting...</>
            ) : (
              <>
                Confirm Booking
                <ArrowRight className="w-5 h-5" />
              </>
            )}
          </motion.button>

          <p className="text-center text-gray-500 text-sm mt-4">
            You’ll receive an email with all booking details.
          </p>
        </form>
      </motion.div>
    </motion.div>
  );
}