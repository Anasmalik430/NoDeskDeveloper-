"use client";

import { useEffect, useState } from "react";
import { API_BASE } from "@/lib/api";
import SoftwareCard from "@/components/AdminPanel/SoftwareCard";
import AddSoftwareModal from "@/components/Modals/AddSoftwareModal";
import { useSoftwareModal } from "./layout";

export default function AllSoftwaresPage() {
  const [softwares, setSoftwares] = useState([]);
  const [loading, setLoading] = useState(true);
  const { isModalOpen, setIsModalOpen } = useSoftwareModal();

  useEffect(() => {
    const fetchSoftwares = async () => {
      try {
        const res = await fetch(`${API_BASE}/projects`);
        const result = await res.json();
        console.log("Fetched softwares:", result);

        if (result.success) {
          setSoftwares(result.data);
        }
      } catch (error) {
        console.error("Error fetching softwares:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchSoftwares();
  }, []);

  const handleAddSoftware = async (newSoftware) => {
    try {
      const res = await fetch(`${API_BASE}/add-project`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newSoftware),
      });

      const result = await res.json();

      if (result.success) {
        setSoftwares((prev) => [result.data, ...prev]);
        setIsModalOpen(false);
      } else {
        alert("Failed: " + result.message);
      }
    } catch (error) {
      alert("Network error");
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <p className="text-white text-2xl">Loading softwares...</p>
      </div>
    );
  }

  return (
    <>
      {/* Grid */}
      <div className="p-8">
        {softwares.length === 0 ? (
          <div className="text-center py-20">
            <p className="text-gray-500 text-xl">No softwares added yet.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {softwares.map((software) => (
              <SoftwareCard key={software._id} software={software} />
            ))}
          </div>
        )}
      </div>

      <AddSoftwareModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onAdd={handleAddSoftware}
      />
    </>
  );
}