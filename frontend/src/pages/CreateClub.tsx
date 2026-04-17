import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { DashboardSidebar } from "./DashboardOverview";
import { createClub } from "../api";

const CreateClub: React.FC = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [clubName, setClubName] = useState("");
  const [status, setStatus] = useState({ type: "", message: "" });
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setStatus({ type: "", message: "" });

    try {
      await createClub({ email, password, clubName });
      setStatus({ type: "success", message: "Club account created successfully!" });
      setEmail("");
      setPassword("");
      setClubName("");
    } catch (err: any) {
      setStatus({ 
        type: "error", 
        message: err.response?.data?.error || "Failed to create club account." 
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-surface font-body text-on-surface min-h-screen">
      <DashboardSidebar />

      <main className="ml-64 p-8 max-w-4xl mx-auto min-h-screen">
        <header className="mb-12">
          <div className="flex items-center gap-4 mb-4">
            <button
              onClick={() => navigate(-1)}
              className="w-10 h-10 flex items-center justify-center bg-surface-container-low rounded-full hover:bg-surface-container-high transition-colors text-on-surface"
            >
              <span className="material-symbols-outlined">arrow_back</span>
            </button>
            <p className="text-xs font-bold text-primary uppercase tracking-[0.15em]">Administrative</p>
          </div>
          <h1 className="text-4xl font-bold text-on-surface tracking-tighter">Add New Club</h1>
          <p className="text-on-surface-variant mt-2 font-medium">Create a new club account. Only the DSW can perform this action.</p>
        </header>

        <section className="bg-surface-container-lowest p-10 rounded-xl editorial-shadow">
          <form className="space-y-8" onSubmit={handleSubmit}>
            {status.message && (
              <div className={`p-4 rounded-xl text-sm font-bold ${
                status.type === "success" ? "bg-primary/10 text-primary" : "bg-error/10 text-error"
              }`}>
                {status.message}
              </div>
            )}

            <div className="space-y-6">
              <div className="space-y-2">
                <label className="text-xs font-bold text-on-surface-variant uppercase tracking-widest ml-1">Club Name</label>
                <input
                  type="text"
                  value={clubName}
                  onChange={(e) => setClubName(e.target.value)}
                  placeholder="e.g. The Robotics Society"
                  className="w-full px-6 py-4 bg-surface-container-low border-none rounded-xl focus:ring-4 focus:ring-primary/10 transition-all font-semibold outline-none"
                  required
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-bold text-on-surface-variant uppercase tracking-widest ml-1">Club Email</label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="club@institution.edu"
                    className="w-full px-6 py-4 bg-surface-container-low border-none rounded-xl focus:ring-4 focus:ring-primary/10 transition-all font-semibold outline-none"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold text-on-surface-variant uppercase tracking-widest ml-1">Initial Password</label>
                  <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="••••••••"
                    className="w-full px-6 py-4 bg-surface-container-low border-none rounded-xl focus:ring-4 focus:ring-primary/10 transition-all font-semibold outline-none"
                    required
                  />
                </div>
              </div>
            </div>

            <div className="flex justify-end pt-4">
              <button
                type="submit"
                disabled={loading}
                className="px-12 py-5 primary-gradient text-white rounded-xl font-extrabold text-sm shadow-xl shadow-primary/20 hover:scale-105 active:scale-95 transition-all tracking-widest uppercase disabled:opacity-50"
              >
                {loading ? "Creating..." : "Create Club Account"}
              </button>
            </div>
          </form>
        </section>

        <footer className="mt-12 text-center pb-12">
          <p className="text-[10px] text-outline font-bold uppercase tracking-[0.3em]">DSW Administration Panel • 2026</p>
        </footer>
      </main>
    </div>
  );
};

export default CreateClub;
