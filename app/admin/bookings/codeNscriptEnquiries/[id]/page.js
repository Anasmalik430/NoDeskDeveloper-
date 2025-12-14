"use client";
import { useState, useEffect } from "react";
import { useRouter, useParams } from "next/navigation";
import { ArrowLeft, Loader2, Trash2, CheckCircle, Code2, Link, Image, DollarSign, Globe, Calendar } from "lucide-react";
import { API_BASE } from "@/lib/api";


export default function AdminCodeNscriptEnquiryDetail() {
  const { id } = useParams();
  const router = useRouter();
  const [enquiry, setEnquiry] = useState(null);
  const [loading, setLoading] = useState(true);
  const [status, setStatus] = useState("");
  const [updating, setUpdating] = useState(false);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const fetchEnquiry = async () => {
      try {
        const res = await fetch(`${API_BASE}/code-n-script-enquiry/${id}`);
        if (!res.ok) throw new Error("Not found");
        const data = await res.json();
        setEnquiry(data.data);
        setStatus(data.data.status);
      } catch (err) {
        alert("Enquiry not found");
        router.push("/admin/bookings/codeNscriptEnquiries");
      } finally {
        setLoading(false);
      }
    };
    fetchEnquiry();
  }, [id, router]);

  const handleUpdate = async () => {
    if (status === enquiry.status) return;
    setUpdating(true);
    try {
      const res = await fetch(`${API_BASE}/code-n-script-enquiry/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ status }),
      });
      if (res.ok) {
        setEnquiry(prev => ({ ...prev, status }));
        alert("Status updated successfully!");
      }
    } catch (err) {
      alert("Update failed");
    } finally {
      setUpdating(false);
    }
  };

  const handleDelete = async () => {
    if (!confirm("Delete this enquiry permanently?")) return;
    setDeleting(true);
    try {
      await fetch(`${API_BASE}/code-n-script-enquiry/${id}`, { method: "DELETE" });
      alert("Deleted successfully");
      router.push("/admin/bookings/codeNscriptEnquiries");
    } catch (err) {
      alert("Delete failed");
    } finally {
      setDeleting(false);
    }
  };

  if (loading) return <div className="min-h-screen flex items-center justify-center bg-black"><Loader2 className="w-12 h-12 text-teal-500 animate-spin" /></div>;

  return (
    <div className="min-h-screen bg-black/95 p-6 lg:p-10">
      <div className="max-w-5xl mx-auto">
        <button onClick={() => router.back()} className="mb-6 flex items-center gap-2 text-teal-400 hover:text-teal-300">
          <ArrowLeft className="w-5 h-5" /> Back to List
        </button>

        <div className="bg-linear-to-br from-slate-900/90 to-slate-950/90 border border-teal-500/30 rounded-2xl p-8 shadow-2xl backdrop-blur-xl">
          <h1 className="text-3xl font-bold bg-linear-to-r from-teal-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent mb-8">
            Code & Script Enquiry
          </h1>

          <div className="grid md:grid-cols-2 gap-8 text-white/90 mb-10">
            <div className="space-y-5">
              <p className="flex items-center gap-3"><Code2 className="w-5 h-5 text-teal-400" /> <strong>Name:</strong> {enquiry.name || "N/A"}</p>
              <p className="flex items-center gap-3"><DollarSign className="w-5 h-5 text-teal-400" /> <strong>Base Price:</strong> ₹{enquiry.basePrice}</p>
              <p className="flex items-center gap-3"><DollarSign className="w-5 h-5 text-cyan-400" /> <strong>Total Price:</strong> ₹{enquiry.totalPrice || enquiry.basePrice}</p>
              <p className="flex items-center gap-3"><Calendar className="w-5 h-5 text-teal-400" /> <strong>Submitted:</strong> {new Date(enquiry.createdAt).toLocaleString()}</p>
            </div>
            <div className="space-y-5">
              {enquiry.codeLanguages.length > 0 && (
                <p className="flex items-center gap-3"><Code2 className="w-5 h-5 text-teal-400" /> <strong>Languages:</strong> {enquiry.codeLanguages.join(", ")}</p>
              )}
              {enquiry.installationType.length > 0 && (
                <p className="flex items-center gap-3"><Globe className="w-5 h-5 text-teal-400" /> <strong>Installation:</strong> {enquiry.installationType.join(", ")}</p>
              )}
              {enquiry.images.length > 0 && (
                <p className="flex items-center gap-3"><Image className="w-5 h-5 text-teal-400" /> <strong>Images:</strong> {enquiry.images.length} uploaded</p>
              )}
            </div>
          </div>

          {(enquiry.codeLink || enquiry.codePreview || enquiry.previousLink) && (
            <div className="mb-8 space-y-3">
              <h3 className="text-lg font-semibold text-teal-300">Links</h3>
              {enquiry.codeLink && <p className="flex items-center gap-2"><Link className="w-5 h-5 text-teal-400" /> <a href={enquiry.codeLink} target="_blank" className="text-cyan-400 hover:underline">Source Code Link</a></p>}
              {enquiry.codePreview && <p className="flex items-center gap-2"><Link className="w-5 h-5 text-teal-400" /> <a href={enquiry.codePreview} target="_blank" className="text-cyan-400 hover:underline">Preview Link</a></p>}
              {enquiry.previousLink && <p className="flex items-center gap-2"><Link className="w-5 h-5 text-teal-400" /> <a href={enquiry.previousLink} target="_blank" className="text-cyan-400 hover:underline">Previous Work Link</a></p>}
            </div>
          )}

          {enquiry.description && (
            <div className="mb-8">
              <h3 className="text-lg font-semibold text-teal-300 mb-3">Description</h3>
              <p className="text-gray-300 bg-slate-800/50 p-5 rounded-xl border border-teal-500/20">{enquiry.description}</p>
            </div>
          )}

          <div className="flex flex-col sm:flex-row gap-4">
            <select
              value={status}
              onChange={(e) => setStatus(e.target.value)}
              className="px-6 py-3 bg-slate-800/70 border border-teal-500/40 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-teal-500"
            >
              <option>Pending</option>
              <option>Scheduled</option>
              <option>Completed</option>
              <option>Cancelled</option>
            </select>

            <button
              onClick={handleUpdate}
              disabled={updating || status === enquiry.status}
              className="px-8 py-3 bg-linear-to-r from-teal-600 to-cyan-600 rounded-xl font-bold text-white flex items-center justify-center gap-2 disabled:opacity-50"
            >
              {updating ? <Loader2 className="w-5 h-5 animate-spin" /> : <CheckCircle className="w-5 h-5" />}
              Update Status
            </button>

            <button
              onClick={handleDelete}
              disabled={deleting}
              className="px-8 py-3 bg-linear-to-r from-red-600 to-red-500 rounded-xl font-bold text-white flex items-center justify-center gap-2 disabled:opacity-50"
            >
              {deleting ? <Loader2 className="w-5 h-5 animate-spin" /> : <Trash2 className="w-5 h-5" />}
              Delete Enquiry
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}