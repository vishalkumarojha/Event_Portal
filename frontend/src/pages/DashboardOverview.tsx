import React from "react";
import { Link, useLocation } from "react-router-dom";

const navItems = [
  { icon: "dashboard", label: "Dashboard", path: "/dashboard" },
  { icon: "event", label: "Events", path: "/dashboard/events" },
  { icon: "group_add", label: "Registrations", path: "/dashboard/registrations" },
  { icon: "groups", label: "Team", path: "/dashboard/team" },
  { icon: "monitoring", label: "Analytics", path: "/dashboard/analytics" },
  { icon: "settings", label: "Settings", path: "/dashboard/settings" },
];

export const DashboardSidebar: React.FC<{ active?: string }> = ({ active }) => {
  const location = useLocation();

  return (
    <aside className="h-screen w-64 fixed left-0 top-0 bg-surface-container-low flex flex-col p-6 space-y-2 z-40">
      <div className="mb-8 flex items-center space-x-3">
        <div className="w-10 h-10 rounded-lg primary-gradient flex items-center justify-center overflow-hidden">
          <span className="material-symbols-outlined text-white text-lg">auto_stories</span>
        </div>
        <div>
          <h2 className="text-lg font-bold text-on-surface tracking-tight">Organizer Portal</h2>
          <p className="text-[10px] font-semibold text-on-surface-variant uppercase tracking-widest">Club Management</p>
        </div>
      </div>

      <nav className="flex-1 space-y-1">
        {navItems.map(({ icon, label, path }) => {
          const isActive = location.pathname === path;
          return (
            <Link
              key={path}
              to={path}
              className={`flex items-center space-x-3 px-4 py-3 rounded-xl font-bold transition-all duration-200 ${
                isActive
                  ? "bg-surface-container-lowest text-primary shadow-[0_4px_12px_rgba(25,28,30,0.04)] translate-x-1"
                  : "text-on-surface-variant hover:bg-surface-container-lowest"
              }`}
            >
              <span className="material-symbols-outlined">{icon}</span>
              <span className="text-sm">{label}</span>
            </Link>
          );
        })}
      </nav>

      <div className="mt-auto space-y-4">
        <Link
          to="/dashboard/create-event"
          className="w-full py-3 primary-gradient text-white rounded-xl font-bold text-sm shadow-[0_8px_24px_rgba(53,37,205,0.2)] hover:scale-105 transition-transform block text-center"
        >
          Create Event
        </Link>
        <div className="pt-4 border-t border-outline-variant/20 space-y-1">
          <a className="flex items-center space-x-3 px-4 py-2 text-on-surface-variant hover:text-primary transition-colors text-xs font-semibold uppercase tracking-wider" href="#">
            <span className="material-symbols-outlined text-lg">help</span>
            <span>Help Center</span>
          </a>
          <Link className="flex items-center space-x-3 px-4 py-2 text-on-surface-variant hover:text-error transition-colors text-xs font-semibold uppercase tracking-wider" to="/dashboard/login">
            <span className="material-symbols-outlined text-lg">logout</span>
            <span>Logout</span>
          </Link>
        </div>
      </div>
    </aside>
  );
};

const DashboardOverview: React.FC = () => {
  return (
    <div className="bg-surface text-on-surface min-h-screen">
      <DashboardSidebar />

      <main className="ml-64 p-8 max-w-7xl mx-auto min-h-screen">
        {/* Header */}
        <header className="flex justify-between items-end mb-12">
          <div>
            <p className="text-xs font-bold text-primary uppercase tracking-[0.15em] mb-2">Overview</p>
            <h1 className="text-4xl font-bold text-on-surface tracking-tighter">Club Dashboard</h1>
          </div>
          <div className="flex items-center space-x-4">
            <div className="flex -space-x-3">
              {[
                "https://lh3.googleusercontent.com/aida-public/AB6AXuDGdHFo5lSfM6piZOuY68KMYJ2hGsBvkfnhOIAqV26VleidwbpOqyrnpkfk7zZGGBX_Ib3sPIMTaiUuyp1LhN4o_O3O7ZbDbx1PmA5OAy6Z-9siGwtu5pQ_-8H79OfDQFsm5LOe9nQXQcXHXmOSPJNAmXulvfuPpsAZJcZt8b1E3C5EbGFvnZ0dVkWiuArTBjwTiWNjGkFtojJwageD2aK8iZqFgllyVopYKOj31lyaww6L9w2R-WRN03bPLsVJqPEI2p9Seof4VA",
                "https://lh3.googleusercontent.com/aida-public/AB6AXuCf5Vhf7d2CQJjFC18tiugWnjVc6jOkethdJPsVldhuFpbqxYzNMmAKNpasm4yAQVHOKU9-koE3P7eQ9tnDKcHGXJEYC6z3QSkUytO_8kUWOP2WzBor90qeKmFD4WwqFUeASG3zhIoIesXTp5_eU4c5Q2wd61wcecR56hBfXuvIaD1h15qQyAhDhAUgz-s_Fk11d00v246CGwXFPpuDHv0xrsHMPIgCRUmkPI8HTLJbiMBalmOrn3dJiOD8f0ufaeVke2BSMMzOJQ",
              ].map((src, i) => (
                <img key={i} alt="Team member" className="w-10 h-10 rounded-full border-2 border-surface" src={src} />
              ))}
              <div className="w-10 h-10 rounded-full border-2 border-surface bg-surface-container-high flex items-center justify-center text-[10px] font-bold">+4</div>
            </div>
          </div>
        </header>

        {/* Stats Bento Grid */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {[
            { icon: "calendar_today", label: "Total Events", value: "48", badge: "+12%", badgeClass: "text-on-surface-variant bg-surface-container-low", iconBg: "bg-surface-container-low" },
            { icon: "pending_actions", label: "Pending Approvals", value: "07", badge: "Critical", badgeClass: "text-tertiary", iconBg: "bg-tertiary-fixed", pulse: true },
            { icon: "person_add", label: "New Registrations", value: "154", badge: "2.4k Total", badgeClass: "text-on-surface-variant bg-surface-container-low", iconBg: "bg-surface-container-low" },
          ].map(({ icon, label, value, badge, badgeClass, iconBg, pulse }) => (
            <div key={label} className="bg-surface-container-lowest p-8 rounded-xl shadow-[0_12px_40px_rgba(25,28,30,0.04)] group hover:shadow-[0_12px_40px_rgba(25,28,30,0.08)] transition-all">
              <div className="flex justify-between items-start mb-6">
                <div className={`p-3 ${iconBg} rounded-lg group-hover:bg-primary/5 transition-colors`}>
                  <span className="material-symbols-outlined text-primary">{icon}</span>
                </div>
                {pulse ? (
                  <div className="flex items-center space-x-1">
                    <div className="w-2 h-2 rounded-full bg-tertiary animate-pulse"></div>
                    <span className={`text-[10px] font-bold uppercase tracking-wider ${badgeClass}`}>{badge}</span>
                  </div>
                ) : (
                  <span className={`text-xs font-bold px-2 py-1 rounded ${badgeClass}`}>{badge}</span>
                )}
              </div>
              <p className="text-on-surface-variant text-sm font-semibold uppercase tracking-wider mb-1">{label}</p>
              <p className="text-4xl font-bold text-on-surface tracking-tight">{value}</p>
            </div>
          ))}
        </section>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Recent Activity Table */}
          <section className="lg:col-span-2 space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="text-xl font-bold text-on-surface">Recent Activity</h2>
              <button className="text-xs font-bold text-primary uppercase tracking-widest hover:underline underline-offset-4">See All History</button>
            </div>
            <div className="bg-surface-container-lowest rounded-xl shadow-[0_12px_40px_rgba(25,28,30,0.04)] overflow-hidden">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-surface-container-low/50">
                    {["Event Name", "Organizer", "Date", "Status"].map((h) => (
                      <th key={h} className="px-6 py-4 text-[10px] font-bold text-on-surface-variant uppercase tracking-widest">{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody className="divide-y divide-surface-container-high">
                  {[
                    { name: "Annual Tech Symposium", org: "Marcus Chen", date: "Oct 24, 2023", status: "Completed", statusClass: "bg-surface-container-high text-on-surface-variant" },
                    { name: "Ethics in AI Workshop", org: "Sarah Jenkins", date: "Nov 02, 2023", status: "In Progress", statusClass: "bg-primary/10 text-primary" },
                    { name: "Winter Gala 2023", org: "Global Events Team", date: "Dec 15, 2023", status: "Draft", statusClass: "bg-tertiary-container/10 text-tertiary" },
                    { name: "Hackathon: Spring Edition", org: "James Wilson", date: "Jan 12, 2024", status: "Scheduled", statusClass: "bg-surface-container-high text-on-surface-variant" },
                  ].map((row) => (
                    <tr key={row.name} className="hover:bg-surface-container-low/30 transition-colors cursor-pointer">
                      <td className="px-6 py-5 font-semibold text-on-surface text-sm">{row.name}</td>
                      <td className="px-6 py-5 text-on-surface-variant text-sm">{row.org}</td>
                      <td className="px-6 py-5 text-on-surface-variant text-sm">{row.date}</td>
                      <td className="px-6 py-5">
                        <span className={`px-3 py-1 ${row.statusClass} text-[10px] font-bold rounded-full uppercase tracking-tighter`}>{row.status}</span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* Quick Actions */}
          <section className="space-y-6">
            <h2 className="text-xl font-bold text-on-surface">Quick Actions</h2>
            <div className="flex flex-col space-y-4">
              <Link to="/dashboard/create-event" className="flex items-center justify-between p-5 primary-gradient text-white rounded-xl shadow-[0_12px_40px_rgba(53,37,205,0.15)] group hover:scale-[1.02] transition-all">
                <div className="flex items-center space-x-4">
                  <span className="material-symbols-outlined">add_circle</span>
                  <span className="font-bold">Create Event</span>
                </div>
                <span className="material-symbols-outlined opacity-0 group-hover:opacity-100 transition-opacity">chevron_right</span>
              </Link>
              <button className="flex items-center justify-between p-5 bg-surface-container-lowest text-on-surface rounded-xl shadow-[0_4px_12px_rgba(25,28,30,0.04)] border border-outline-variant/10 group hover:bg-surface-container-low transition-all">
                <div className="flex items-center space-x-4">
                  <span className="material-symbols-outlined text-primary">description</span>
                  <span className="font-semibold">View Reports</span>
                </div>
                <span className="material-symbols-outlined text-on-surface-variant">open_in_new</span>
              </button>
              <Link to="/dashboard/events" className="flex items-center justify-between p-5 bg-surface-container-lowest text-on-surface rounded-xl shadow-[0_4px_12px_rgba(25,28,30,0.04)] border border-outline-variant/10 group hover:bg-surface-container-low transition-all">
                <div className="flex items-center space-x-4">
                  <span className="material-symbols-outlined text-primary">settings_suggest</span>
                  <span className="font-semibold">Manage Events</span>
                </div>
                <span className="material-symbols-outlined text-on-surface-variant" style={{ fontSize: "16px" }}>arrow_forward_ios</span>
              </Link>
            </div>

            {/* Promo Card */}
            <div className="relative mt-8 h-48 rounded-xl overflow-hidden shadow-lg group">
              <img
                alt="Collaboration"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBV_zo1dmznVpkCFYNOctd2c9QckcBWejX4xOwqUzbW4mVKJL7fE-qdWHm8z22J0EeCyL4-jcaRKCs1xzhO4QQ6dgEglrCnCfUU802UllIIFfVQnCXNEoeNfvGM6D7CAL7oYJo4m13UIk6-Kf3Yh6_M7OF6AuOp9eVj36XZTFAN-a4hjfOmeXTkctrmDFotIgm9fDoC4CtgC4N4h9WQj1gUUwIuItQ3SvDuldswNhCkLKTdKM0RC6Y_08sHolvcvkKJybGGlLI95A"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-on-background/80 via-transparent to-transparent p-6 flex flex-col justify-end">
                <p className="text-white text-xs font-bold uppercase tracking-widest mb-1">New Feature</p>
                <h3 className="text-white font-bold leading-tight">Advanced Ticketing Metrics are now live.</h3>
              </div>
            </div>
          </section>
        </div>

        {/* Footer */}
        <footer className="mt-16 pt-8 border-t border-outline-variant/20 flex justify-between items-center text-on-surface-variant text-[10px] font-bold uppercase tracking-[0.2em]">
          <span>© 2026 The Academic Curator</span>
          <div className="flex space-x-6">
            <a className="hover:text-primary transition-colors" href="#">Privacy</a>
            <a className="hover:text-primary transition-colors" href="#">Terms</a>
            <a className="hover:text-primary transition-colors" href="#">API Docs</a>
          </div>
        </footer>
      </main>
    </div>
  );
};

export default DashboardOverview;
