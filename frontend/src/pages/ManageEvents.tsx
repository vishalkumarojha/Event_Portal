import React, { useState } from "react";
import { Link } from "react-router-dom";
import { DashboardSidebar } from "./DashboardOverview";

const ManageEvents: React.FC = () => {
  const [search, setSearch] = useState("");

  const events = [
    { id: "EV-9921", title: "Annual Tech Symposium", attendees: "128/150", status: "Active", statusColor: "primary", date: "Oct 24, 2026", category: "Tech" },
    { id: "EV-8842", title: "Ethics in AI Workshop", attendees: "45/50", status: "Active", statusColor: "primary", date: "Nov 02, 2026", category: "Academic" },
    { id: "EV-7756", title: "Winter Gala 2026", attendees: "-", status: "Draft", statusColor: "surface-variant text-on-surface-variant", date: "Dec 15, 2026", category: "Social" },
    { id: "EV-6610", title: "Hackathon: Spring Edition", attendees: "0/200", status: "Scheduled", statusColor: "surface-container-high text-on-surface-variant", date: "Jan 12, 2027", category: "Tech" },
    { id: "EV-5542", title: "Data Science Career Fair", attendees: "89/100", status: "Active", statusColor: "primary", date: "Jan 10, 2027", category: "Career" },
    { id: "EV-4431", title: "Sustainable Design Workshop", attendees: "32/40", status: "Active", statusColor: "primary", date: "Nov 15, 2026", category: "Workshop" },
  ];

  return (
    <div className="bg-surface font-body text-on-surface min-h-screen">
      <DashboardSidebar />

      <main className="ml-64 p-8 max-w-7xl mx-auto min-h-screen">
        <header className="flex justify-between items-end mb-12">
          <div>
            <p className="text-xs font-bold text-primary uppercase tracking-[0.15em] mb-2">Management</p>
            <h1 className="text-4xl font-bold text-on-surface tracking-tighter">Manage Events</h1>
          </div>
          <div className="flex items-center gap-4">
            <button className="flex items-center gap-2 px-6 py-3 bg-white text-on-surface font-bold rounded-xl editorial-shadow hover:bg-surface-container-low transition-all">
              <span className="material-symbols-outlined text-lg">filter_alt</span>
              Filters
            </button>
            <Link to="/dashboard/create-event" className="flex items-center gap-2 px-6 py-3 primary-gradient text-white font-bold rounded-xl shadow-lg shadow-primary/20 hover:scale-105 transition-all">
              <span className="material-symbols-outlined text-lg">add</span>
              New Event
            </Link>
          </div>
        </header>

        {/* Search & Bulk Actions */}
        <section className="mb-8 flex flex-col md:flex-row gap-4 items-center justify-between">
          <div className="relative w-full md:w-96 group">
            <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-outline group-focus-within:text-primary transition-colors">search</span>
            <input
              type="text"
              placeholder="Search by ID, name or category..."
              className="w-full pl-12 pr-4 py-3.5 bg-surface-container-lowest border-none rounded-xl editorial-shadow text-on-surface placeholder:text-outline outline-none focus:ring-4 focus:ring-primary/5 transition-all"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
          <div className="flex items-center gap-3">
            <span className="text-xs font-bold text-on-surface-variant uppercase tracking-widest">Selected: 0</span>
            <button className="p-3 bg-surface-container-low text-on-surface-variant rounded-lg hover:text-error transition-colors">
              <span className="material-symbols-outlined">delete</span>
            </button>
            <button className="p-3 bg-surface-container-low text-on-surface-variant rounded-lg hover:text-primary transition-colors">
              <span className="material-symbols-outlined">file_download</span>
            </button>
          </div>
        </section>

        {/* Events Table */}
        <div className="bg-surface-container-lowest rounded-xl shadow-[0_12px_40px_rgba(25,28,30,0.04)] overflow-hidden">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-surface-container-low/50 border-b border-surface-container-high">
                <th className="px-8 py-5 w-12">
                  <input type="checkbox" className="w-4 h-4 rounded border-outline-variant text-primary focus:ring-primary/20" />
                </th>
                {["Event ID", "Event Details", "Date", "Attendees", "Status", "Actions"].map((h) => (
                  <th key={h} className="px-6 py-5 text-[10px] font-bold text-on-surface-variant uppercase tracking-[0.2em]">{h}</th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-surface-container-high">
              {events.filter(e => e.title.toLowerCase().includes(search.toLowerCase()) || e.id.toLowerCase().includes(search.toLowerCase())).map((event) => (
                <tr key={event.id} className="hover:bg-surface-container-low/30 transition-all cursor-pointer group">
                  <td className="px-8 py-6">
                    <input type="checkbox" className="w-4 h-4 rounded border-outline-variant text-primary focus:ring-primary/20" />
                  </td>
                  <td className="px-6 py-6 font-mono text-xs font-bold text-primary">{event.id}</td>
                  <td className="px-6 py-6">
                    <div className="space-y-1">
                      <p className="font-bold text-on-surface text-sm group-hover:text-primary transition-colors">{event.title}</p>
                      <p className="text-[10px] font-bold text-on-surface-variant uppercase tracking-widest">{event.category}</p>
                    </div>
                  </td>
                  <td className="px-6 py-6 text-sm font-medium text-on-surface-variant">{event.date}</td>
                  <td className="px-6 py-6">
                    <div className="flex items-center gap-2">
                      <span className="material-symbols-outlined text-sm text-on-surface-variant">groups</span>
                      <span className="text-sm font-bold text-on-surface">{event.attendees}</span>
                    </div>
                  </td>
                  <td className="px-6 py-6">
                    <span className={`px-4 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-tighter ${
                      event.status === 'Active' ? 'bg-primary/10 text-primary' : 
                      event.status === 'Draft' ? 'bg-tertiary-container/10 text-tertiary' : 
                      'bg-surface-container-high text-on-surface-variant'
                    }`}>
                      {event.status}
                    </span>
                  </td>
                  <td className="px-6 py-6">
                    <div className="flex items-center gap-2">
                      <button className="w-9 h-9 flex items-center justify-center rounded-lg hover:bg-surface-container-low text-on-surface-variant hover:text-primary transition-all">
                        <span className="material-symbols-outlined text-[20px]">edit</span>
                      </button>
                      <button className="w-9 h-9 flex items-center justify-center rounded-lg hover:bg-surface-container-low text-on-surface-variant hover:text-primary transition-all">
                        <span className="material-symbols-outlined text-[20px]">analytics</span>
                      </button>
                      <button className="w-9 h-9 flex items-center justify-center rounded-lg hover:bg-surface-container-low text-on-surface-variant hover:text-error transition-all">
                        <span className="material-symbols-outlined text-[20px]">more_vert</span>
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Footer */}
        <footer className="mt-12 flex justify-between items-center text-on-surface-variant text-[10px] font-bold uppercase tracking-[0.2em]">
          <p>© 2026 The Academic Curator</p>
          <div className="flex items-center gap-4">
            <button className="flex items-center gap-2 hover:text-primary transition-colors">
              <span className="material-symbols-outlined text-sm">download</span>
              Export PDF
            </button>
            <span className="opacity-20">|</span>
            <button className="flex items-center gap-2 hover:text-primary transition-colors">
              <span className="material-symbols-outlined text-sm">print</span>
              Print List
            </button>
          </div>
        </footer>
      </main>
    </div>
  );
};

export default ManageEvents;
