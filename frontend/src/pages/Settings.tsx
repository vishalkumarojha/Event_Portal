import React from "react";
import { DashboardSidebar } from "./DashboardOverview";

const Settings: React.FC = () => {
  return (
    <div className="bg-surface text-on-surface min-h-screen">
      <DashboardSidebar />

      <main className="ml-64 p-8 max-w-7xl mx-auto min-h-screen">
        <header className="mb-12">
          <p className="text-xs font-bold text-primary uppercase tracking-[0.15em] mb-2">Configuration</p>
          <h1 className="text-4xl font-bold text-on-surface tracking-tighter">Settings</h1>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Navigation */}
          <nav className="lg:col-span-1 space-y-1">
            {[
              { label: "Profile", icon: "person", active: true },
              { label: "Notifications", icon: "notifications", active: false },
              { label: "Security", icon: "security", active: false },
              { label: "Integration", icon: "api", active: false },
              { label: "Club Info", icon: "business", active: false },
            ].map(item => (
              <button 
                key={item.label}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl font-bold text-sm transition-all ${
                  item.active 
                    ? "bg-primary text-white shadow-lg shadow-primary/20" 
                    : "text-on-surface-variant hover:bg-surface-container-high"
                }`}
              >
                <span className="material-symbols-outlined text-lg">{item.icon}</span>
                {item.label}
              </button>
            ))}
          </nav>

          {/* Form */}
          <section className="lg:col-span-3 space-y-8">
            {/* Profile Section */}
            <div className="bg-surface-container-lowest p-8 rounded-3xl border border-outline-variant/10 shadow-[0_12px_40px_rgba(25,28,30,0.04)]">
              <h2 className="text-xl font-bold mb-6 text-on-surface">Public Profile</h2>
              <div className="space-y-6">
                <div className="flex items-center gap-6">
                  <div className="relative group">
                    <img 
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuDGdHFo5lSfM6piZOuY68KMYJ2hGsBvkfnhOIAqV26VleidwbpOqyrnpkfk7zZGGBX_Ib3sPIMTaiUuyp1LhN4o_O3O7ZbDbx1PmA5OAy6Z-9siGwtu5pQ_-8H79OfDQFsm5LOe9nQXQcXHXmOSPJNAmXulvfuPpsAZJcZt8b1E3C5EbGFvnZ0dVkWiuArTBjwTiWNjGkFtojJwageD2aK8iZqFgllyVopYKOj31lyaww6L9w2R-WRN03bPLsVJqPEI2p9Seof4VA" 
                      alt="Profile" 
                      className="w-24 h-24 rounded-full object-cover border-4 border-surface shadow-md group-hover:brightness-50 transition-all"
                    />
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                      <span className="material-symbols-outlined text-white">photo_camera</span>
                    </div>
                  </div>
                  <div>
                    <button className="px-4 py-2 bg-surface-container-high text-on-surface font-bold text-xs rounded-lg hover:bg-primary hover:text-white transition-all">
                      Change Photo
                    </button>
                    <p className="mt-2 text-[10px] font-bold text-on-surface-variant uppercase tracking-widest">JPG, GIF or PNG. 1MB Max.</p>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-on-surface-variant uppercase tracking-widest ml-1">Display Name</label>
                    <input 
                      type="text" 
                      defaultValue="Marcus Chen"
                      className="w-full bg-surface-container-low border border-outline-variant/20 rounded-xl py-3 px-4 text-sm focus:ring-2 focus:ring-primary/20 outline-none transition-all font-medium" 
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-on-surface-variant uppercase tracking-widest ml-1">Email Address</label>
                    <input 
                      type="email" 
                      defaultValue="marcus@club.edu"
                      className="w-full bg-surface-container-low border border-outline-variant/20 rounded-xl py-3 px-4 text-sm focus:ring-2 focus:ring-primary/20 outline-none transition-all font-medium" 
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-bold text-on-surface-variant uppercase tracking-widest ml-1">Short Bio</label>
                  <textarea 
                    rows={4}
                    placeholder="Tell us about yourself..."
                    className="w-full bg-surface-container-low border border-outline-variant/20 rounded-xl py-3 px-4 text-sm focus:ring-2 focus:ring-primary/20 outline-none transition-all font-medium resize-none" 
                  />
                </div>
              </div>
            </div>

            {/* Account Settings */}
            <div className="bg-surface-container-lowest p-8 rounded-3xl border border-outline-variant/10 shadow-[0_12px_40px_rgba(25,28,30,0.04)]">
              <h2 className="text-xl font-bold mb-6 text-on-surface">Account Actions</h2>
              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 bg-surface-container-low/50 rounded-2xl border border-outline-variant/10">
                  <div>
                    <h3 className="text-sm font-bold text-on-surface">Two-Factor Authentication</h3>
                    <p className="text-xs text-on-surface-variant mt-1">Add an extra layer of security to your account.</p>
                  </div>
                  <div className="w-12 h-6 bg-surface-container-highest rounded-full relative cursor-pointer">
                    <div className="absolute left-1 top-1 w-4 h-4 bg-on-surface-variant rounded-full" />
                  </div>
                </div>
                <div className="flex items-center justify-between p-4 bg-error/5 rounded-2xl border border-error/10">
                  <div>
                    <h3 className="text-sm font-bold text-error">Delete Account</h3>
                    <p className="text-xs text-error/60 mt-1">Permanently remove your account and all club data.</p>
                  </div>
                  <button className="px-4 py-2 bg-error text-white font-bold text-xs rounded-lg hover:scale-105 transition-all">
                    Delete
                  </button>
                </div>
              </div>
            </div>

            <div className="flex justify-end gap-4">
              <button className="px-8 py-3 text-on-surface-variant font-bold text-sm hover:text-on-surface transition-colors">Discard</button>
              <button className="px-8 py-3 primary-gradient text-white font-bold text-sm rounded-xl shadow-lg shadow-primary/20 hover:scale-105 active:scale-95 transition-all">
                Save Changes
              </button>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};

export default Settings;
