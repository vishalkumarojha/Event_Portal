import React from "react";
import { Link, useNavigate } from "react-router-dom";

const EventDetails: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-surface text-on-surface selection:bg-primary-container selection:text-on-primary-container min-h-screen">
      <main className="max-w-screen-2xl mx-auto px-8 py-12">
        {/* Hero Section */}
        <section className="relative rounded-xl overflow-hidden mb-16 aspect-[21/9]">
          <img
            alt="Grand Academic Hall"
            className="w-full h-full object-cover"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDhrmaZ15CJ7B75xGNOGTRr99sAvFCSs35rARLx_suc8Xs6KGaVupA8h7cUEysZcq4PqVoMPQ4e5bSQPVyiOxDmHVXiDryOwgajppghI_nYCUxT9SMX5V47V8VlcQWV5ILlFucXOYGm24mqwi2buRfbdV_d3YJe0pnPpo9lPZXg3_hbOJ9QOJewypUdAIkjdbl_L2nQXx2ZOD5lcWFL3j7m9IGw-YDA0G26hMgNZzDGF3QcRO0cbSGI-Kw4wegmMnk0XvAyMtXHnw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-on-background/80 via-on-background/20 to-transparent flex flex-col justify-end p-12">
            <div className="flex gap-3 mb-4">
              <span className="px-3 py-1 bg-primary text-white text-[10px] font-bold tracking-widest uppercase rounded-full flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 bg-white rounded-full animate-pulse"></span>
                LIVE
              </span>
              <span className="px-3 py-1 bg-surface-container-lowest text-primary text-[10px] font-bold tracking-widest uppercase rounded-full">Symposium</span>
            </div>
            <h1 className="text-white text-6xl font-bold tracking-tighter mb-4 max-w-4xl leading-tight">The Future of Neural Networks in Modern Architecture</h1>
            <div className="flex items-center gap-8 text-surface-container-lowest/80 font-medium">
              <div className="flex items-center gap-2"><span className="material-symbols-outlined">calendar_today</span>October 24, 2026</div>
              <div className="flex items-center gap-2"><span className="material-symbols-outlined">schedule</span>09:00 AM — 05:00 PM</div>
              <div className="flex items-center gap-2"><span className="material-symbols-outlined">location_on</span>Grand Academic Hall, London</div>
            </div>
          </div>
        </section>

        {/* Bento Layout */}
        <div className="grid grid-cols-12 gap-8">
          {/* Main Content Left */}
          <div className="col-span-12 lg:col-span-8 space-y-12">
            {/* Description */}
            <section className="bg-surface-container-lowest p-10 rounded-xl editorial-shadow">
              <h2 className="text-2xl font-bold tracking-tight mb-6 text-on-background">Event Overview</h2>
              <p className="text-on-surface-variant leading-relaxed text-lg mb-6">
                Dive into a profound exploration of how neural networks are reshaping the structural and aesthetic foundations of modern architecture. This symposium brings together world-renowned architects and AI researchers to discuss the intersection of generative design, structural optimization, and the philosophy of digital creation.
              </p>
              <p className="text-on-surface-variant leading-relaxed text-lg">
                Attendees will gain exclusive insights into the latest computational tools being used by top-tier firms and participate in hands-on workshops exploring the ethical implications of automated design.
              </p>
            </section>

            {/* Schedule Timeline */}
            <section className="bg-surface-container-low p-10 rounded-xl">
              <h2 className="text-2xl font-bold tracking-tight mb-8 text-on-background">Event Schedule</h2>
              <div className="space-y-0">
                {[
                  { time: "09:00 AM", title: "Keynote: The Silicon Blueprint", desc: "Opening remarks by Dr. Elara Vance on the evolution of algorithmic aesthetics.", active: true },
                  { time: "11:30 AM", title: "Panel Discussion: Human vs. Machine", desc: "A debate featuring the leaders of Morphosis and the AI Research Lab at MIT.", active: false },
                  { time: "02:00 PM", title: "Workshop: Generative Optimization", desc: "Interactive session focusing on real-time structural analysis through neural networks.", active: false },
                ].map((item, i) => (
                  <div key={i} className="flex gap-8 group">
                    <div className="flex flex-col items-center">
                      <div className={`w-4 h-4 rounded-full ${item.active ? 'bg-primary ring-4 ring-primary/20' : 'bg-outline-variant'}`}></div>
                      {i < 2 && <div className="w-0.5 h-full bg-outline-variant/30"></div>}
                    </div>
                    <div className="pb-10">
                      <span className={`font-bold text-sm tracking-widest uppercase block mb-1 ${item.active ? 'text-primary' : 'text-on-surface-variant'}`}>{item.time}</span>
                      <h3 className="text-xl font-bold text-on-background mb-2">{item.title}</h3>
                      <p className="text-on-surface-variant">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Venue */}
            <section className="bg-surface-container-lowest rounded-xl editorial-shadow overflow-hidden">
              <div className="p-10 pb-4">
                <h2 className="text-2xl font-bold tracking-tight text-on-background mb-2">The Venue</h2>
                <p className="text-on-surface-variant mb-6">Imperial College Campus, South Kensington, London SW7 2AZ</p>
              </div>
              <div className="h-80 bg-surface-container relative">
                <img
                  className="w-full h-full object-cover grayscale opacity-50"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBvtX-ZI19CqaMQ2vUmsTX-4D4ZbThf6MZdLXrn4Wfrnaktvtvnukbtlgt0mrM0lHG9IXa-QE53Vs6A8NUPvxESEosAgU0aTqgWElMvuvLwZ7v4wUavjUN1EH-tcRftQdJWY1aJy6UNIUDhRwcVigZ12WFtEWpHGtqIaaSee3-HtNUt2wLxxt-LEfSBiQCflgCUmyhJqcZ28vtCLUOcQwi1BNoMTyvIWIexvjlJL7ktLE8lV-siX7njzsgj3Nicjx0aoFOWrRcooQ"
                  alt="Venue map"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-12 h-12 bg-primary rounded-full editorial-shadow flex items-center justify-center text-white ring-8 ring-primary/10">
                    <span className="material-symbols-outlined">location_on</span>
                  </div>
                </div>
              </div>
            </section>
          </div>

          {/* Sidebar */}
          <aside className="col-span-12 lg:col-span-4 space-y-8">
            {/* Registration Card */}
            <div className="bg-surface-container-lowest p-8 rounded-xl editorial-shadow sticky top-28">
              <div className="mb-8">
                <div className="flex justify-between items-end mb-4">
                  <div>
                    <span className="text-on-surface-variant text-sm font-semibold uppercase tracking-widest">Pricing</span>
                    <p className="text-4xl font-extrabold text-on-background">£149.00</p>
                  </div>
                  <span className="text-primary font-bold text-sm bg-primary/10 px-3 py-1 rounded-lg">Early Bird</span>
                </div>
                <div className="space-y-3">
                  <div className="flex justify-between text-sm font-bold">
                    <span className="text-on-background">Seats Available</span>
                    <span className="text-primary">42 / 120</span>
                  </div>
                  <div className="h-3 w-full bg-surface-container rounded-full overflow-hidden">
                    <div className="h-full bg-primary rounded-full" style={{ width: "35%" }}></div>
                  </div>
                  <p className="text-xs text-on-surface-variant italic">Only 35% of seats remaining. Book soon!</p>
                </div>
              </div>
              <div className="space-y-4">
                <button
                  onClick={() => navigate("/ticket")}
                  className="w-full py-5 primary-gradient text-white text-lg font-bold rounded-xl editorial-shadow active:scale-[0.98] transition-all"
                >
                  Register Now
                </button>
                <div className="grid grid-cols-2 gap-3">
                  <button className="flex items-center justify-center gap-2 py-3 bg-surface-container-low text-on-surface font-semibold rounded-lg hover:bg-surface-container-high transition-colors">
                    <span className="material-symbols-outlined text-sm">calendar_add_on</span>
                    Calendar
                  </button>
                  <button className="flex items-center justify-center gap-2 py-3 bg-surface-container-low text-on-surface font-semibold rounded-lg hover:bg-surface-container-high transition-colors">
                    <span className="material-symbols-outlined text-sm">share</span>
                    Share
                  </button>
                </div>
              </div>
              <div className="mt-8 space-y-4">
                <div className="flex items-center gap-3 text-sm text-on-surface-variant">
                  <span className="material-symbols-outlined text-primary">verified_user</span>
                  <span>Secure checkout & instant ticket delivery</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-on-surface-variant">
                  <span className="material-symbols-outlined text-primary">history_edu</span>
                  <span>Certificate of Attendance included</span>
                </div>
              </div>
            </div>

            {/* Organizer */}
            <div className="bg-surface-container-low p-8 rounded-xl">
              <span className="text-on-surface-variant text-sm font-bold uppercase tracking-widest block mb-4">Organizer</span>
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 rounded-xl bg-white p-2 editorial-shadow">
                  <img alt="Club Logo" className="w-full h-full object-contain" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCnbZepWv1hwMB4kq3VFiMJMitPWrobKYam4pLkQUwMCrq3Z_qzmVHEPrfhkGBzgic4oi4qLiC3v2fLWf6ZaN4iTI6NL1QG7AahYeoDa_NOHqPW8t6Ajvs6kPzJV84zQTZAWM_2qUNBKO8tUmm561xEGwYLexTievoMyE9DnCwzItkdc7CUyjs8tzJn_mtfvt--1be07nAwqCuAxqtJInFW81kZLy9u06_lcS0sbmIzGJxUDOHibV-sc_QXts5vG0BZhbxZXwtGdQ" />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-on-background">Architectural Nexus</h4>
                  <p className="text-sm text-on-surface-variant">Established 1994</p>
                </div>
              </div>
              <p className="text-sm text-on-surface-variant leading-relaxed mb-6">
                Architectural Nexus is a global collective dedicated to the integration of cutting-edge technology and human-centric design.
              </p>
              <button className="w-full py-3 bg-white text-primary font-bold rounded-lg border-2 border-primary/5 hover:border-primary/20 transition-all">
                View Club Profile
              </button>
            </div>

            {/* Ticket Stub Visual */}
            <div className="relative bg-primary p-6 rounded-xl text-white overflow-hidden">
              <div className="absolute -left-3 top-1/2 -translate-y-1/2 w-6 h-12 bg-surface rounded-full"></div>
              <div className="absolute -right-3 top-1/2 -translate-y-1/2 w-6 h-12 bg-surface rounded-full"></div>
              <div className="border-l-2 border-dashed border-white/20 ml-2 pl-4">
                <p className="text-[10px] font-bold tracking-widest uppercase opacity-70 mb-1">Admission Type</p>
                <h5 className="text-xl font-bold mb-4">All-Access Pass</h5>
                <div className="flex justify-between items-end">
                  <div>
                    <p className="text-[10px] font-bold tracking-widest uppercase opacity-70">Row / Seat</p>
                    <p className="font-bold">GA / Open</p>
                  </div>
                  <span className="material-symbols-outlined opacity-30 text-5xl">confirmation_number</span>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-on-background text-surface-container-lowest mt-24 py-16">
        <div className="max-w-screen-2xl mx-auto px-8 grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="col-span-2">
            <span className="text-3xl font-bold tracking-tighter text-white block mb-6">The Academic Curator</span>
            <p className="text-outline-variant max-w-sm leading-relaxed">Bridging the gap between traditional scholarship and modern experiential learning through curated academic events.</p>
          </div>
          <div>
            <h6 className="font-bold text-sm uppercase tracking-widest mb-6">Navigation</h6>
            <ul className="space-y-4 text-outline-variant">
              <li><Link className="hover:text-white transition-colors" to="/events">Explore Events</Link></li>
              <li><Link className="hover:text-white transition-colors" to="/dashboard">For Organizers</Link></li>
              <li><a className="hover:text-white transition-colors" href="#">Help Center</a></li>
            </ul>
          </div>
          <div>
            <h6 className="font-bold text-sm uppercase tracking-widest mb-6">Connect</h6>
            <ul className="space-y-4 text-outline-variant">
              <li><a className="hover:text-white transition-colors" href="#">Twitter (X)</a></li>
              <li><a className="hover:text-white transition-colors" href="#">Instagram</a></li>
              <li><a className="hover:text-white transition-colors" href="#">LinkedIn</a></li>
            </ul>
          </div>
        </div>
        <div className="max-w-screen-2xl mx-auto px-8 mt-16 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between text-sm text-outline-variant/60">
          <p>© 2026 The Academic Curator. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default EventDetails;
