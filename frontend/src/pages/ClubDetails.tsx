import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { DashboardSidebar } from "./DashboardOverview";
import { getClubDetails } from "../api";

const ClubDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [club, setClub] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    if (id) fetchDetails(id);
  }, [id]);

  const fetchDetails = async (clubId: string) => {
    try {
      const response = await getClubDetails(clubId);
      setClub(response.data);
    } catch (error) {
      console.error("Failed to fetch club details:", error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) return (
    <div className="bg-surface text-on-surface min-h-screen flex items-center justify-center">
        <div className="w-10 h-10 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
    </div>
  );

  if (!club) return <div>Club not found</div>;

  return (
    <div className="bg-surface text-on-surface min-h-screen">
      <DashboardSidebar />

      <main className="ml-64 p-8 max-w-7xl mx-auto min-h-screen">
        <header className="mb-12">
          <button
            onClick={() => navigate("/dashboard/clubs")}
            className="flex items-center gap-2 text-primary font-bold text-xs uppercase tracking-widest mb-6 hover:-translate-x-1 transition-transform"
          >
            <span className="material-symbols-outlined text-sm">arrow_back</span>
            Back to Directory
          </button>
          <div className="flex items-center gap-6">
            <div className="w-20 h-20 rounded-2xl primary-gradient flex items-center justify-center text-white text-3xl font-bold border-4 border-surface-container-high shadow-xl">
              {club.name[0].toUpperCase()}
            </div>
            <div>
              <h1 className="text-4xl font-bold text-on-surface tracking-tighter mb-1">{club.name}</h1>
              <p className="text-on-surface-variant font-medium">{club.email} • Club ID: {club.id.slice(0, 8)}</p>
            </div>
          </div>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
            <div className="lg:col-span-2 space-y-8">
                {/* Events Section */}
                <section>
                    <div className="flex justify-between items-center mb-6">
                        <h2 className="text-xl font-bold text-on-surface flex items-center gap-2">
                            <span className="material-symbols-outlined text-primary">event</span>
                            Recent Events
                        </h2>
                    </div>
                    {club.events.length === 0 ? (
                        <div className="bg-surface-container-low p-12 rounded-xl text-center border border-outline-variant/10">
                            <p className="text-on-surface-variant text-sm font-medium">No events found for this club.</p>
                        </div>
                    ) : (
                        <div className="bg-surface-container-lowest rounded-xl shadow-sm border border-outline-variant/10 overflow-hidden">
                            <table className="w-full text-left">
                                <thead className="bg-surface-container-low/50 border-b border-outline-variant/10">
                                    <tr>
                                        <th className="px-6 py-4 text-[10px] font-bold text-on-surface-variant uppercase tracking-widest">Event</th>
                                        <th className="px-6 py-4 text-[10px] font-bold text-on-surface-variant uppercase tracking-widest">Date</th>
                                        <th className="px-6 py-4 text-[10px] font-bold text-on-surface-variant uppercase tracking-widest">Status</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-outline-variant/5">
                                    {club.events.map((ev: any) => (
                                        <tr key={ev.id} className="hover:bg-surface-container-low/30 transition-colors">
                                            <td className="px-6 py-4 text-sm font-bold text-on-surface">{ev.name}</td>
                                            <td className="px-6 py-4 text-xs text-on-surface-variant">{new Date(ev.date_time).toLocaleDateString()}</td>
                                            <td className="px-6 py-4">
                                                <span className="px-2 py-1 bg-surface-container-high text-[10px] font-bold rounded-full uppercase tracking-tighter text-on-surface-variant">
                                                    {ev.status}
                                                </span>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    )}
                </section>
            </div>

            <aside className="space-y-8">
                {/* Members Section */}
                <section>
                    <h2 className="text-xl font-bold text-on-surface flex items-center gap-2 mb-6">
                        <span className="material-symbols-outlined text-primary">groups</span>
                        Club Core Team
                    </h2>
                    <div className="bg-surface-container-lowest p-6 rounded-xl border border-outline-variant/10 shadow-sm space-y-4">
                        {club.members.length === 0 ? (
                            <div className="text-center py-4">
                                <p className="text-xs text-on-surface-variant font-medium">No core members listed.</p>
                                <button className="mt-4 text-primary font-bold text-[10px] uppercase tracking-widest border border-primary/20 px-4 py-2 rounded-lg hover:bg-primary/5 transition-colors">
                                    + Add Member
                                </button>
                            </div>
                        ) : (
                            club.members.map((member: any) => (
                                <div key={member.id} className="flex items-center gap-3">
                                    <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary text-xs font-bold">
                                        {member.name[0]}
                                    </div>
                                    <div>
                                        <p className="text-sm font-bold text-on-surface">{member.name}</p>
                                        <p className="text-[10px] text-on-surface-variant uppercase font-bold tracking-wider">{member.role}</p>
                                    </div>
                                </div>
                            ))
                        )}
                    </div>
                </section>

                {/* Quick Info */}
                <section className="bg-primary/5 p-6 rounded-xl border border-primary/10">
                    <h3 className="text-xs font-bold text-primary uppercase tracking-[0.2em] mb-4">Account Metadata</h3>
                    <div className="space-y-3">
                        <div className="flex justify-between">
                            <span className="text-xs text-on-surface-variant font-medium">Created</span>
                            <span className="text-xs text-on-surface font-bold">{new Date(club.created_at).toLocaleDateString()}</span>
                        </div>
                        <div className="flex justify-between">
                            <span className="text-xs text-on-surface-variant font-medium">Total Events</span>
                            <span className="text-xs text-on-surface font-bold">{club.events.length}</span>
                        </div>
                    </div>
                </section>
            </aside>
        </div>
      </main>
    </div>
  );
};

export default ClubDetails;
