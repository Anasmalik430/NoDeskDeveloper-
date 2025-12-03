"use client";
import { useState, useEffect } from "react";
import { useRouter, useParams } from "next/navigation";
import { ArrowLeft, Loader2, Trash2, CheckCircle, Code, Link, Globe, Clock } from "lucide-react";

export const API_BASE = process.env.NEXT_PUBLIC_BASE_URL || "https://nodeskdevbackend.onrender.com/api";

export default function AdminTechMaintenanceDetails() {
  const { id } = useParams();
  const [request, setRequest] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [newStatus, setNewStatus] = useState("");
  const [updating, setUpdating] = useState(false);
  const [deleting, setDeleting] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const fetchRequest = async () => {
      try {
        const res = await fetch(`${API_BASE}/technical-maintenance/${id}`);
        if (!res.ok) throw new Error("Failed to fetch request");
        const data = await res.json();
        setRequest(data.data);
        setNewStatus(data.data.status);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchRequest();
  }, [id]);

  const handleUpdateStatus = async () => {
    if (!newStatus || newStatus === request.status) return;
    setUpdating(true);
    try {
      const res = await fetch(`${API_BASE}/technical-maintenance/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ status: newStatus }),
      });
      if (!res.ok) throw new Error("Failed to update");
      const updatedData = await res.json();
      setRequest(updatedData.data);
      alert("Status updated successfully!");
    } catch (err) {
      alert(`Error: ${err.message}`);
    } finally {
      setUpdating(false);
    }
  };

  const handleDelete = async () => {
    if (!confirm("Are you sure you want to delete this enquiry?")) return;
    setDeleting(true);
    try {
      const res = await fetch(`${API_BASE}/technical-maintenance/${id}`, {
        method: "DELETE",
      });
      if (!res.ok) throw new Error("Failed to delete");
      alert("Enquiry deleted successfully!");
      router.push("/admin/bookings/tech-maintenance");
    } catch (err) {
      alert(`Error: ${err.message}`);
    } finally {
      setDeleting(false);
    }
  };

  if (loading) return <div className="min-h-screen flex items-center justify-center bg-black"><Loader2 className="w-12 h-12 text-blue-500 animate-spin" /></div>;
  if (error || !request) return <div className="min-h-screen flex items-center justify-center bg-black text-red-400">{error || "Enquiry not found"}</div>;

  return (
    <div className="min-h-screen bg-black/95 p-6 lg:p-10">
      <div className="max-w-4xl mx-auto">
        <button
          onClick={() => router.back()}
          className="mb-6 flex items-center gap-2 text-blue-300 hover:text-blue-400 transition-colors"
        >
          <ArrowLeft className="w-5 h-5" /> Back to List
        </button>

        <div className="bg-linear-to-br from-slate-900/80 to-slate-950/90 border border-blue-500/30 rounded-2xl p-8 shadow-xl backdrop-blur-xl">
          <h1 className="text-3xl font-bold bg-linear-to-r from-blue-400 via-sky-400 to-teal-400 bg-clip-text text-transparent mb-8 flex items-center gap-3">
            <Code className="w-8 h-8 text-teal-400" /> Enquiry Details: {request.category}
          </h1>

          <div className="space-y-6 text-white/90">
            <p className="flex flex-col sm:flex-row sm:items-center sm:gap-3">
              <span className="font-medium text-blue-300 min-w-[180px]">Category:</span> {request.category}
            </p>
            <p className="flex flex-col sm:flex-row sm:items-center sm:gap-3">
              <span className="font-medium text-blue-300 min-w-[180px]">Project Link:</span> <a href={request.projectLink} className="text-blue-400 hover:underline flex items-center gap-2"><Link className="w-5 h-5" /> {request.projectLink}</a>
            </p>
            <p className="flex flex-col sm:flex-row sm:items-center sm:gap-3">
              <span className="font-medium text-blue-300 min-w-[180px]">Code Types:</span> {request.codeTypes.join(", ")}
            </p>
            <p className="flex flex-col sm:flex-row sm:items-center sm:gap-3">
              <span className="font-medium text-blue-300 min-w-[180px]">Language:</span> <Globe className="inline w-5 h-5 mr-2" /> {request.language}
            </p>
            <p className="flex flex-col sm:flex-row sm:items-center sm:gap-3">
              <span className="font-medium text-blue-300 min-w-[180px]">Discussion Time:</span> <Clock className="inline w-5 h-5 mr-2" /> {request.discussionTime}
            </p>
            <p className="flex flex-col sm:flex-row sm:items-center sm:gap-3">
              <span className="font-medium text-blue-300 min-w-[180px]">Submitted At:</span> {new Date(request.submittedAt).toLocaleString()}
            </p>
            <p className="flex flex-col sm:flex-row sm:items-center sm:gap-3">
              <span className="font-medium text-blue-300 min-w-[180px]">Created At:</span> {new Date(request.createdAt).toLocaleString()}
            </p>
          </div>

          <div className="mt-10 space-y-6">
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <label className="font-medium text-blue-300 min-w-[180px]">Update Status:</label>
              <select
                value={newStatus}
                onChange={(e) => setNewStatus(e.target.value)}
                className="px-4 py-3 bg-black/50 border border-blue-500/50 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
              >
                <option>Pending</option>
                <option>Under Review</option>
                <option>In Progress</option>
                <option>Completed</option>
                <option>Cancelled</option>
              </select>
              <button
                onClick={handleUpdateStatus}
                disabled={updating || newStatus === request.status}
                className="px-6 py-3 bg-linear-to-r from-blue-600 via-sky-500 to-teal-400 rounded-2xl font-bold text-white shadow-lg hover:shadow-sky-500/70 transition-all duration-400 hover:scale-105 active:scale-95 flex items-center gap-2 disabled:opacity-50"
              >
                {updating ? <Loader2 className="w-5 h-5 animate-spin" /> : <CheckCircle className="w-5 h-5" />}
                {updating ? "Updating..." : "Update Status"}
              </button>
            </div>

            <button
              onClick={handleDelete}
              disabled={deleting}
              className="w-full sm:w-auto px-6 py-3 bg-linear-to-r from-red-600 via-red-500 to-red-400 rounded-2xl font-bold text-white shadow-lg hover:shadow-red-500/70 transition-all duration-400 hover:scale-105 active:scale-95 flex items-center justify-center gap-2 disabled:opacity-50"
            >
              {deleting ? <Loader2 className="w-5 h-5 animate-spin" /> : <Trash2 className="w-5 h-5" />}
              {deleting ? "Deleting..." : "Delete Enquiry"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}