import React from "react";
import { DashboardSidebar } from "./DashboardOverview";

const teamItems = [
  { 
    name: "Marcus Chen", 
    role: "Lead Curator", 
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDGdHFo5lSfM6piZOuY68KMYJ2hGsBvkfnhOIAqV26VleidwbpOqyrnpkfk7zZGGBX_Ib3sPIMTaiUuyp1LhN4o_O3O7ZbDbx1PmA5OAy6Z-9siGwtu5pQ_-8H79OfDQFsm5LOe9nQXQcXHXmOSPJNAmXulvfuPpsAZJcZt8b1E3C5EbGFvnZ0dVkWiuArTBjwTiWNjGkFtojJwageD2aK8iZqFgllyVopYKOj31lyaww6L9w2R-WRN03bPLsVJqPEI2p9Seof4VA", 
    email: "marcus@club.edu",
    events: 12
  },
  { 
    name: "Sarah Jenkins", 
    role: "Event Coordinator", 
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCf5Vhf7d2CQJjFC18tiugWnjVc6jOkethdJPsVldhuFpbqxYzNMmAKNpasm4yAQVHOKU9-koE3P7eQ9tnDKcHGXJEYC6z3QSkUytO_8kUWOP2WzBor90qeKmFD4WwqFUeASG3zhIoIesXTp5_eU4c5Q2wd61wcecR56hBfXuvIaD1h15qQyAhDhAUgz-s_Fk11d00v246CGwXFPpuDHv0xrsHMPIgCRUmkPI8HTLJbiMBalmOrn3dJiOD8f0ufaeVke2BSMMzOJQ", 
    email: "sarah@club.edu",
    events: 8
  },
  { 
    name: "James Wilson", 
    role: "Treasurer", 
    img: "https://i.pravatar.cc/150?u=james", 
    email: "james@club.edu",
    events: 5
  },
  { 
    name: "Elena Rodriguez", 
    role: "PR Manager", 
    img: "https://i.pravatar.cc/150?u=elena", 
    email: "elena@club.edu",
    events: 4
  },
];

const Team: React.FC = () => {
  return (
    <div className="bg-surface text-on-surface min-h-screen">
      <DashboardSidebar />

      <main className="ml-64 p-8 max-w-7xl mx-auto min-h-screen">
        <header className="flex justify-between items-end mb-12">
          <div>
            <p className="text-xs font-bold text-primary uppercase tracking-[0.15em] mb-2">Internal</p>
            <h1 className="text-4xl font-bold text-on-surface tracking-tighter">Club Team</h1>
          </div>
          <button className="px-6 py-2.5 rounded-xl primary-gradient text-white font-bold text-sm hover:scale-105 transition-all flex items-center gap-2 shadow-lg">
            <span className="material-symbols-outlined text-lg">person_add</span>
            Add Member
          </button>
        </header>

        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {teamItems.map((member) => (
            <div key={member.name} className="bg-surface-container-lowest p-6 rounded-2xl shadow-[0_12px_40px_rgba(25,28,30,0.04)] hover:shadow-[0_12px_40px_rgba(25,28,30,0.1)] transition-all group">
              <div className="flex flex-col items-center text-center">
                <div className="relative mb-4">
                  <img 
                    src={member.img} 
                    alt={member.name} 
                    className="w-24 h-24 rounded-full object-cover border-4 border-surface shadow-md group-hover:scale-105 transition-transform"
                  />
                  <div className="absolute -bottom-1 -right-1 w-8 h-8 rounded-full bg-primary flex items-center justify-center text-white border-4 border-surface">
                    <span className="material-symbols-outlined text-xs">verified</span>
                  </div>
                </div>
                <h3 className="text-lg font-bold text-on-surface tracking-tight">{member.name}</h3>
                <p className="text-sm font-semibold text-primary mb-4">{member.role}</p>
                <div className="w-full pt-4 border-t border-outline-variant/10 grid grid-cols-2 gap-4 text-xs font-bold text-on-surface-variant uppercase tracking-widest">
                  <div className="flex flex-col gap-1">
                    <span>Events</span>
                    <span className="text-on-surface text-lg font-bold">{member.events}</span>
                  </div>
                  <div className="flex flex-col gap-1">
                    <span>Rank</span>
                    <span className="text-on-surface text-lg font-bold">#1</span>
                  </div>
                </div>
                <button className="mt-6 w-full py-2 bg-surface-container-high text-on-surface font-bold text-xs rounded-lg hover:bg-primary hover:text-white transition-all">
                  View Profile
                </button>
              </div>
            </div>
          ))}
        </section>

        <section className="mt-12 bg-surface-container-low p-8 rounded-3xl border border-outline-variant/10">
          <div className="flex items-center gap-4 mb-6">
            <div className="p-3 bg-tertiary-container/20 rounded-xl">
              <span className="material-symbols-outlined text-tertiary">groups</span>
            </div>
            <div>
              <h2 className="text-xl font-bold text-on-surface">Team Hierarchy</h2>
              <p className="text-sm text-on-surface-variant">Management roles and permissions overview</p>
            </div>
          </div>
          <div className="space-y-4">
            {[
              { role: "Administrator", count: 2, color: "bg-primary" },
              { role: "Coordinator", count: 4, color: "bg-tertiary" },
              { role: "Editor", count: 12, color: "bg-secondary" },
            ].map(r => (
              <div key={r.role} className="flex items-center justify-between p-4 bg-surface-container-lowest rounded-xl">
                <div className="flex items-center gap-3">
                  <div className={`w-2 h-2 rounded-full ${r.color}`}></div>
                  <span className="font-bold text-sm">{r.role}</span>
                </div>
                <span className="text-xs font-bold text-on-surface-variant">{r.count} Members</span>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
};

export default Team;
