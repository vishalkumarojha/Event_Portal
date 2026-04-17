import React from "react";
import { useNavigate } from "react-router-dom";
import { DashboardSidebar } from "./DashboardOverview";

const CreateEvent: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-surface font-body text-on-surface min-h-screen">
      <DashboardSidebar />

      <main className="ml-64 p-8 max-w-5xl mx-auto min-h-screen">
        <header className="mb-12">
          <div className="flex items-center gap-4 mb-4">
            <button
              onClick={() => navigate(-1)}
              className="w-10 h-10 flex items-center justify-center bg-surface-container-low rounded-full hover:bg-surface-container-high transition-colors text-on-surface"
            >
              <span className="material-symbols-outlined">arrow_back</span>
            </button>
            <p className="text-xs font-bold text-primary uppercase tracking-[0.15em]">New Record</p>
          </div>
          <h1 className="text-4xl font-bold text-on-surface tracking-tighter">Create Event</h1>
        </header>

        <form className="space-y-12 pb-24" onSubmit={(e) => { e.preventDefault(); navigate("/dashboard/events"); }}>
          {/* Section 1: Basic Information */}
          <section className="bg-surface-container-lowest p-10 rounded-xl editorial-shadow space-y-8">
            <div className="flex items-center gap-4 border-b border-surface-container-high pb-4">
              <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                <span className="material-symbols-outlined text-lg">info</span>
              </div>
              <h2 className="text-xl font-bold">Basic Information</h2>
            </div>

            <div className="space-y-6">
              <div className="space-y-2">
                <label className="text-xs font-bold text-on-surface-variant uppercase tracking-widest ml-1">Event Title</label>
                <input
                  type="text"
                  placeholder="e.g. Annual Tech Symposium 2026"
                  className="w-full px-6 py-4 bg-surface-container-low border-none rounded-xl focus:ring-4 focus:ring-primary/10 transition-all font-semibold outline-none"
                  required
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-bold text-on-surface-variant uppercase tracking-widest ml-1">Category</label>
                  <select className="w-full px-6 py-4 bg-surface-container-low border-none rounded-xl focus:ring-4 focus:ring-primary/10 transition-all font-semibold outline-none appearance-none cursor-pointer">
                    <option>Technology</option>
                    <option>Cultural</option>
                    <option>Academic</option>
                    <option>Sports</option>
                    <option>Social</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold text-on-surface-variant uppercase tracking-widest ml-1">Event Type</label>
                  <select className="w-full px-6 py-4 bg-surface-container-low border-none rounded-xl focus:ring-4 focus:ring-primary/10 transition-all font-semibold outline-none appearance-none cursor-pointer">
                    <option>Technical</option>
                    <option>Non-Technical</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold text-on-surface-variant uppercase tracking-widest ml-1">Organizer Club</label>
                  <input
                    type="text"
                    disabled
                    value="The Tech Collective"
                    className="w-full px-6 py-4 bg-surface-container-lowest border-2 border-surface-container-high rounded-xl font-bold text-primary/60"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold text-on-surface-variant uppercase tracking-widest ml-1">Detailed Description</label>
                <textarea
                  placeholder="Elaborate on the event's goals, key speakers, and what attendees can expect..."
                  rows={6}
                  className="w-full px-6 py-4 bg-surface-container-low border-none rounded-xl focus:ring-4 focus:ring-primary/10 transition-all font-medium outline-none resize-none"
                  required
                ></textarea>
              </div>
            </div>
          </section>

          {/* Section 2: Logistics & Ticketing */}
          <section className="bg-surface-container-lowest p-10 rounded-xl editorial-shadow space-y-8">
            <div className="flex items-center gap-4 border-b border-surface-container-high pb-4">
              <div className="w-8 h-8 rounded-lg bg-tertiary-container/10 flex items-center justify-center text-tertiary">
                <span className="material-symbols-outlined text-lg">event_available</span>
              </div>
              <h2 className="text-xl font-bold">Logistics & Ticketing</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="space-y-2">
                  <label className="text-xs font-bold text-on-surface-variant uppercase tracking-widest ml-1">Event Date</label>
                  <input
                    type="date"
                    className="w-full px-6 py-4 bg-surface-container-low border-none rounded-xl focus:ring-4 focus:ring-primary/10 transition-all font-bold outline-none"
                    required
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-on-surface-variant uppercase tracking-widest ml-1">Start Time</label>
                    <input type="time" className="w-full px-4 py-4 bg-surface-container-low border-none rounded-xl font-bold outline-none" required />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-on-surface-variant uppercase tracking-widest ml-1">End Time</label>
                    <input type="time" className="w-full px-4 py-4 bg-surface-container-low border-none rounded-xl font-bold outline-none" required />
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <div className="space-y-2">
                  <label className="text-xs font-bold text-on-surface-variant uppercase tracking-widest ml-1">Ticket Price ($)</label>
                  <div className="relative">
                    <span className="absolute left-6 top-1/2 -translate-y-1/2 font-bold text-outline">$</span>
                    <input
                      type="number"
                      placeholder="0.00"
                      className="w-full pl-10 pr-6 py-4 bg-surface-container-low border-none rounded-xl focus:ring-4 focus:ring-primary/10 transition-all font-bold outline-none"
                      required
                    />
                  </div>
                  <p className="text-[10px] text-on-surface-variant italic ml-2">Set to 0.00 for free entry events.</p>
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold text-on-surface-variant uppercase tracking-widest ml-1">Attendance Capacity</label>
                  <input
                    type="number"
                    placeholder="e.g. 150"
                    className="w-full px-6 py-4 bg-surface-container-low border-none rounded-xl focus:ring-4 focus:ring-primary/10 transition-all font-bold outline-none"
                    required
                  />
                </div>
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-xs font-bold text-on-surface-variant uppercase tracking-widest ml-1">Venue Location</label>
              <div className="relative group">
                <span className="material-symbols-outlined absolute left-6 top-1/2 -translate-y-1/2 text-outline group-focus-within:text-primary transition-colors">location_on</span>
                <input
                  type="text"
                  placeholder="e.g. Main Auditorium, Library Block 2"
                  className="w-full pl-14 pr-6 py-4 bg-surface-container-low border-none rounded-xl focus:ring-4 focus:ring-primary/10 transition-all font-semibold outline-none"
                  required
                />
              </div>
            </div>
          </section>

          {/* Section 3: Visual Assets */}
          <section className="bg-surface-container-lowest p-10 rounded-xl editorial-shadow space-y-8">
            <div className="flex items-center gap-4 border-b border-surface-container-high pb-4">
              <div className="w-8 h-8 rounded-lg bg-surface-container-high flex items-center justify-center text-on-surface">
                <span className="material-symbols-outlined text-lg">image</span>
              </div>
              <h2 className="text-xl font-bold">Event Branding</h2>
            </div>

            <div className="flex flex-col items-center justify-center border-2 border-dashed border-outline-variant/30 rounded-2xl p-12 bg-surface-container-low/50 hover:bg-surface-container-low transition-colors cursor-pointer group">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-sm mb-4 group-hover:scale-110 transition-transform">
                <span className="material-symbols-outlined text-3xl text-primary">cloud_upload</span>
              </div>
              <p className="font-bold text-on-surface mb-1">Click to upload header image</p>
              <p className="text-xs text-on-surface-variant uppercase tracking-widest font-semibold text-center italic">Aspect Ratio 21:9 Recommended (4K or High-Res)</p>
            </div>
          </section>

          {/* Form Actions */}
          <div className="flex items-center justify-end gap-6 pt-8">
            <button
              type="button"
              className="px-10 py-4 text-on-surface-variant font-bold hover:text-primary transition-colors tracking-widest uppercase text-xs"
              onClick={() => navigate(-1)}
            >
              Cancel Draft
            </button>
            <button
              type="submit"
              className="px-12 py-5 primary-gradient text-white rounded-xl font-extrabold text-sm shadow-xl shadow-primary/20 hover:scale-105 active:scale-95 transition-all tracking-widest uppercase"
            >
              Finalize & Publish
            </button>
          </div>
        </form>

        <footer className="mt-12 text-center pb-12">
          <p className="text-[10px] text-outline font-bold uppercase tracking-[0.3em]">The Academic Curator • Organizer Studio 2026</p>
        </footer>
      </main>
    </div>
  );
};

export default CreateEvent;
