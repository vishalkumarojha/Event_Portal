import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { DashboardSidebar } from "./DashboardOverview";
import { getClubs } from "../api";

const ClubList: React.FC = () => {
  const [clubs, setClubs] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    fetchClubs();
  }, []);

  const fetchClubs = async () => {
    try {
      const response = await getClubs();
      setClubs(response.data);
    } catch (error) {
      console.error("Failed to fetch clubs:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-surface text-on-surface min-h-screen">
      <DashboardSidebar />

      <main className="ml-64 p-8 max-w-7xl mx-auto min-h-screen">
        <header className="flex justify-between items-end mb-12">
          <div>
            <p className="text-xs font-bold text-primary uppercase tracking-[0.15em] mb-2">Administrative</p>
            <h1 className="text-4xl font-bold text-on-surface tracking-tighter">Club Directory</h1>
          </div>
          <Link
            to="/dashboard/create-club"
            className="px-8 py-3 primary-gradient text-white rounded-xl font-bold text-sm shadow-lg shadow-primary/20 hover:scale-105 transition-all flex items-center gap-2"
          >
            <span className="material-symbols-outlined">add</span>
            Add New Club
          </Link>
        </header>

        {loading ? (
          <div className="flex items-center justify-center p-20">
            <div className="w-10 h-10 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
          </div>
        ) : clubs.length === 0 ? (
          <div className="bg-surface-container-low p-20 rounded-xl text-center border border-dashed border-outline-variant">
            <span className="material-symbols-outlined text-6xl text-outline mb-4">hub</span>
            <h3 className="text-xl font-bold text-on-surface mb-2">No clubs registered yet</h3>
            <p className="text-on-surface-variant max-w-md mx-auto">Start by creating your first club account to begin managing student organizations.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {clubs.map((club) => (
              <div
                key={club.id}
                onClick={() => navigate(`/dashboard/clubs/${club.id}`)}
                className="bg-surface-container-lowest p-6 rounded-xl border border-outline-variant/10 shadow-sm hover:shadow-md transition-all cursor-pointer group hover:border-primary/20"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-lg bg-surface-container-high flex items-center justify-center group-hover:bg-primary/5 transition-colors">
                    <span className="material-symbols-outlined text-primary">hub</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-on-surface group-hover:text-primary transition-colors truncate">
                      {club.name}
                    </h3>
                    <p className="text-xs text-on-surface-variant font-medium truncate">{club.email}</p>
                  </div>
                </div>
                <div className="flex items-center justify-between pt-4 border-t border-outline-variant/10 mt-auto">
                    <div className="flex items-center gap-1 text-xs font-bold text-on-surface-variant uppercase tracking-wider">
                        <span className="material-symbols-outlined text-sm">event</span>
                        <span>Activity Tracking</span>
                    </div>
                  <span className="material-symbols-outlined text-primary opacity-0 group-hover:opacity-100 transition-all -translate-x-2 group-hover:translate-x-0">
                    arrow_forward
                  </span>
                </div>
              </div>
            ))}
          </div>
        )}
      </main>
    </div>
  );
};

export default ClubList;
