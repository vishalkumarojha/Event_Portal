import React from "react";
import { DashboardSidebar } from "./DashboardOverview";

const registrations = [
  { id: 1, name: "Arjun Mehta", email: "arjun.m@example.com", event: "Annual Tech Symposium", date: "Oct 20, 2023", status: "Paid" },
  { id: 2, name: "Priya Sharma", email: "priya.s@example.com", event: "Ethics in AI Workshop", date: "Oct 21, 2023", status: "Pending" },
  { id: 3, name: "Rahul Verma", email: "rahul.v@example.com", event: "Annual Tech Symposium", date: "Oct 22, 2023", status: "Paid" },
  { id: 4, name: "Sneha Kapur", email: "sneha.k@example.com", event: "Winter Gala 2023", date: "Oct 23, 2023", status: "Cancelled" },
  { id: 5, name: "Vikram Singh", email: "vikram.s@example.com", event: "Hackathon: Spring Edition", date: "Oct 24, 2023", status: "Paid" },
];

const Registrations: React.FC = () => {
  return (
    <div className="bg-surface text-on-surface min-h-screen">
      <DashboardSidebar />

      <main className="ml-64 p-8 max-w-7xl mx-auto min-h-screen">
        <header className="flex justify-between items-end mb-12">
          <div>
            <p className="text-xs font-bold text-primary uppercase tracking-[0.15em] mb-2">Management</p>
            <h1 className="text-4xl font-bold text-on-surface tracking-tighter">Event Registrations</h1>
          </div>
          <button className="px-6 py-2.5 rounded-xl primary-gradient text-white font-bold text-sm hover:scale-105 transition-all flex items-center gap-2 shadow-lg">
            <span className="material-symbols-outlined text-lg">download</span>
            Export List
          </button>
        </header>

        <section className="bg-surface-container-lowest rounded-xl shadow-[0_12px_40px_rgba(25,28,30,0.04)] overflow-hidden">
          <div className="p-6 border-b border-outline-variant/10 flex justify-between items-center bg-surface-container-low/30">
            <div className="relative flex-1 max-w-md">
              <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant text-lg">search</span>
              <input 
                type="text" 
                placeholder="Search participants..." 
                className="w-full bg-surface-container-highest/50 border-none rounded-lg py-2 pl-10 pr-4 text-sm focus:ring-2 focus:ring-primary/20 transition-all"
              />
            </div>
            <div className="flex gap-4">
              <select className="bg-surface-container-highest/50 border-none rounded-lg py-2 px-4 text-xs font-bold text-on-surface-variant">
                <option>All Events</option>
                <option>Tech Symposium</option>
                <option>AI Workshop</option>
              </select>
            </div>
          </div>

          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-surface-container-low/50">
                {["Attendee", "Event", "Registration Date", "Status", "Actions"].map((h) => (
                  <th key={h} className="px-6 py-4 text-[10px] font-bold text-on-surface-variant uppercase tracking-widest">{h}</th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-surface-container-high">
              {registrations.map((reg) => (
                <tr key={reg.id} className="hover:bg-surface-container-low/30 transition-colors">
                  <td className="px-6 py-5">
                    <div className="flex flex-col">
                      <span className="font-semibold text-on-surface text-sm">{reg.name}</span>
                      <span className="text-xs text-on-surface-variant">{reg.email}</span>
                    </div>
                  </td>
                  <td className="px-6 py-5 text-on-surface-variant text-sm">{reg.event}</td>
                  <td className="px-6 py-5 text-on-surface-variant text-sm">{reg.date}</td>
                  <td className="px-6 py-5">
                    <span className={`px-3 py-1 text-[10px] font-bold rounded-full uppercase tracking-tighter ${
                      reg.status === "Paid" ? "bg-primary/10 text-primary" : 
                      reg.status === "Pending" ? "bg-tertiary-container/10 text-tertiary" : 
                      "bg-surface-container-high text-on-surface-variant"
                    }`}>
                      {reg.status}
                    </span>
                  </td>
                  <td className="px-6 py-5">
                    <button className="p-2 hover:bg-surface-container-high rounded-lg transition-colors text-on-surface-variant">
                      <span className="material-symbols-outlined text-lg">more_vert</span>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="p-6 border-t border-outline-variant/10 flex justify-between items-center text-xs font-bold text-on-surface-variant">
            <span>Showing 5 of 154 registrations</span>
            <div className="flex gap-2">
              <button className="px-3 py-1 rounded bg-surface-container-high disabled:opacity-50">Prev</button>
              <button className="px-3 py-1 rounded bg-surface-container-high">Next</button>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Registrations;
