import React from "react";
import { Link } from "react-router-dom";

const HomePage: React.FC = () => {
  return (
    <div className="bg-surface text-on-surface selection:bg-primary-container selection:text-primary">
      {/* Hero Section: Featured Event */}
      <main className="max-w-screen-2xl mx-auto px-8 pt-10 space-y-16 pb-24">
        <section className="relative group">
          <div className="w-full aspect-[21/9] rounded-xl overflow-hidden relative shadow-2xl">
            <img
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAcwd1Derjhp2eIHeFvkdaoHVJZkupaRrNIIBaOMoga19mUEN5nAt58o8ZZULqJY-gi5uDNwDxex8CPo0przX9CW5XlHxyo3qS1UD-jFku0byf0vUb_RCBKxzxoauCkTtjUy5Ic18kYgaYrqR7yffq-_zIW8PKKjZcYU3Y1jseT0sdoi_jGH6cRX0Af7HhTJnKqKSv8LHBLbfKer7wPQe5-QEXrgIp51zjrCWIWoOpfAEM75tDIrRo4cqsz-ZgC7ORrG9xeSv1rKQ"
              alt="Global Tech Summit: Future Horizons"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-on-background/90 via-on-background/20 to-transparent"></div>
            <div className="absolute bottom-0 left-0 p-12 w-full flex flex-col md:flex-row justify-between items-end gap-6">
              <div className="max-w-2xl space-y-4">
                <div className="flex items-center gap-3">
                  <span className="bg-primary text-white text-[10px] font-bold tracking-widest px-3 py-1 rounded-full uppercase">Featured Event</span>
                  <span className="flex items-center gap-1 text-white/80 text-sm">
                    <span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>calendar_today</span>
                    Oct 24, 2026
                  </span>
                </div>
                <h1 className="text-5xl md:text-7xl font-bold text-white tracking-tighter leading-none">Global Tech Summit: Future Horizons</h1>
                <p className="text-lg text-white/70 max-w-lg">Join 500+ innovators for a weekend of groundbreaking talks and hands-on workshops with industry leaders from Google, SpaceX, and OpenAI.</p>
              </div>
              <div className="flex gap-4 w-full md:w-auto">
                <Link to="/events" className="flex-1 md:flex-none px-8 py-4 rounded-xl font-bold text-white primary-gradient hover:shadow-xl transition-all active:scale-95 text-center">Explore Events</Link>
                <Link to="/events" className="flex-1 md:flex-none px-8 py-4 rounded-xl font-bold text-white bg-white/10 backdrop-blur-md hover:bg-white/20 transition-all border border-white/10 text-center">View Schedule</Link>
              </div>
            </div>
          </div>
        </section>

        {/* Category Section */}
        <section className="space-y-8">
          <div className="flex items-end justify-between">
            <div>
              <span className="text-xs font-bold text-primary tracking-widest uppercase">Browse by</span>
              <h2 className="text-3xl font-bold tracking-tight text-on-surface">Event Categories</h2>
            </div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { icon: "memory", label: "Tech" },
              { icon: "palette", label: "Cultural" },
              { icon: "sports_basketball", label: "Sports" },
              { icon: "school", label: "Academic" },
            ].map(({ icon, label }) => (
              <Link to="/events" key={label} className="group p-8 bg-surface-container-lowest rounded-xl flex flex-col items-center justify-center gap-4 editorial-shadow hover:bg-primary transition-all duration-300 active:scale-95 border-b-4 border-transparent hover:border-primary-container">
                <div className="w-16 h-16 bg-surface-container rounded-full flex items-center justify-center group-hover:bg-white/20 transition-colors">
                  <span className="material-symbols-outlined text-3xl text-primary group-hover:text-white">{icon}</span>
                </div>
                <span className="font-bold text-on-surface group-hover:text-white tracking-tight">{label}</span>
              </Link>
            ))}
          </div>
        </section>

        {/* Upcoming Events Carousel */}
        <section className="space-y-8 overflow-hidden">
          <div className="flex items-end justify-between">
            <div>
              <span className="text-xs font-bold text-primary tracking-widest uppercase">Don't Miss Out</span>
              <h2 className="text-3xl font-bold tracking-tight text-on-surface">Upcoming Events</h2>
            </div>
            <div className="flex gap-2">
              <button className="w-12 h-12 rounded-full bg-surface-container flex items-center justify-center hover:bg-surface-container-high transition-colors text-on-surface">
                <span className="material-symbols-outlined">chevron_left</span>
              </button>
              <button className="w-12 h-12 rounded-full bg-surface-container flex items-center justify-center hover:bg-surface-container-high transition-colors text-on-surface">
                <span className="material-symbols-outlined">chevron_right</span>
              </button>
            </div>
          </div>
          <div className="flex gap-8 overflow-x-auto no-scrollbar pb-8 -mx-4 px-4 snap-x">
            {[
              {
                month: "NOV", day: "12",
                org: "Music & Arts Club",
                title: "Indie Soundscapes Night",
                attended: "84 Joined",
                img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCCuoFFt5pitOggDU9R9i4V4mQtD8D94YWA0FCeX42vMQJTKKbsxtYDeKuxD30q0MuWTW5IfcJJpV97Ptn3MGCTkJ1868VERm6alatkY6FssaOI1uVImLwhfZ7UKakxuETYUTdrDITcro9L-vKmsmQAYFh7_OpJwXXiFdvASX0ssqhb-99Af6Q9ZI_7-7qe6WngPU2AjLm0xMWLHudpUMAFLgC16x6QCqegQCD4UWyP7Q2Bl5pq2Uv8GdtHlt5qOoPFEol_gY5Vrg",
              },
              {
                month: "NOV", day: "18",
                org: "Startup Incubator",
                title: "Pitch Perfect Workshop",
                attended: "120 Joined",
                img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDcwBz4yVd_od85V2DMv-9I9RcDXXr-BIyQInLkHXylsAvEkbre8Xt7dN_lFAE_e-XYwMgLloRwiRrR619RtwTlxt95JUFBh9b4p4rVsy6ilLiFs0O1-HfNe3Szzme0kIU7KjNKPGuXgSjUpad13hyG936Tgnd-eHDIGOAa7X7RpcT6Uzrtc3kDTZVMN7r6tGqtEP8JpkZtii9wMrbD-ePN299iHCLRaQ4ae2fAy8T1oRVwAKSquzyCCmLFi_PJOnm9XkqPvmZZYw",
              },
              {
                month: "DEC", day: "05",
                org: "Varsity Sports",
                title: "Inter-College Finals",
                attended: "Full House",
                img: "https://lh3.googleusercontent.com/aida-public/AB6AXuB7HlgY2sRc_WnAcJWyOLVB3w6zwMkvNnhj2pKAafynBkf1BLGpSnPKxr9GmtMp14XAtKwX0kBSvAoViYyh8VYwTixrzEpIcrUU9iHAkxfM3HpiyxLoy3mq5HWjIzcBCTOVCsz8bGChiltU1u2kPSgP9CN24cTPCigIuHF3MrYudIRlInaYhcIXQDPtlKlUw1DmHbJSpqaBOnaCwn2rJwmoKARbOrGIaVN5Vo9C40HOaDLz16bd_Ju256z1UUWYa7KzMAZLfyzp5Q",
              },
            ].map((event, i) => (
              <div key={i} className="min-w-[320px] md:min-w-[400px] snap-start group">
                <div className="bg-surface-container-lowest rounded-xl overflow-hidden editorial-shadow transition-transform duration-300 hover:-translate-y-2">
                  <div className="h-48 relative">
                    <img className="w-full h-full object-cover" src={event.img} alt={event.title} />
                    <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-3 py-1 rounded-lg flex flex-col items-center">
                      <span className="text-xs font-bold text-on-surface leading-none">{event.month}</span>
                      <span className="text-lg font-bold text-primary leading-none">{event.day}</span>
                    </div>
                  </div>
                  <div className="p-6 space-y-4">
                    <div className="space-y-1">
                      <p className="text-xs font-bold text-primary/80 uppercase tracking-wider">{event.org}</p>
                      <h3 className="text-xl font-bold text-on-surface group-hover:text-primary transition-colors">{event.title}</h3>
                    </div>
                    <div className="flex items-center justify-between pt-2">
                      <span className="text-xs text-on-surface-variant font-medium">{event.attended}</span>
                      <Link to="/events" className="px-4 py-2 rounded-lg bg-surface-container text-primary font-bold text-sm hover:bg-primary-container hover:text-white transition-all">Get Ticket</Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Bento Grid Section */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-2 bg-primary-container rounded-xl p-12 flex flex-col justify-center gap-6 text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl"></div>
            <div className="relative z-10 space-y-4">
              <h2 className="text-4xl font-bold tracking-tight">Stay ahead of the curve.</h2>
              <p className="text-white/80 max-w-md">Subscribe to our weekly curator digest and get personalized event recommendations delivered to your inbox every Monday morning.</p>
              <div className="flex max-w-sm bg-white rounded-xl p-1 shadow-lg">
                <input className="flex-1 bg-transparent border-none focus:ring-0 text-on-surface px-4 outline-none" placeholder="Email address" type="email" />
                <button className="px-6 py-3 bg-primary rounded-lg font-bold hover:bg-primary/90 transition-colors text-white">Subscribe</button>
              </div>
            </div>
          </div>
          <div className="bg-surface-container-lowest rounded-xl p-8 flex flex-col justify-between editorial-shadow border-b-8 border-tertiary">
            <div className="space-y-4">
              <div className="w-12 h-12 bg-tertiary-fixed rounded-xl flex items-center justify-center text-tertiary">
                <span className="material-symbols-outlined">auto_awesome</span>
              </div>
              <h3 className="text-2xl font-bold tracking-tight text-on-surface leading-tight">Can't find what you're looking for?</h3>
              <p className="text-on-surface-variant text-sm">Our AI curator can help you find events based on your academic interests and career goals.</p>
            </div>
            <Link to="/events" className="text-primary font-bold flex items-center gap-2 group mt-4">
              Try AI Curator
              <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">arrow_forward</span>
            </Link>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-surface-container-low border-t-0 py-20">
        <div className="max-w-screen-2xl mx-auto px-8 grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="space-y-6">
            <span className="text-2xl font-bold tracking-tighter text-primary">The Academic Curator</span>
            <p className="text-on-surface-variant text-sm leading-relaxed">The premier destination for academic events, club management, and student engagement across the country's top campuses.</p>
          </div>
          <div>
            <h4 className="font-bold text-on-surface mb-6 uppercase tracking-widest text-xs">Platform</h4>
            <ul className="space-y-4 text-on-surface-variant text-sm">
              <li><Link className="hover:text-primary transition-colors" to="/events">Discover Events</Link></li>
              <li><Link className="hover:text-primary transition-colors" to="/events">Ticketing System</Link></li>
              <li><Link className="hover:text-primary transition-colors" to="/dashboard">Club Management</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-on-surface mb-6 uppercase tracking-widest text-xs">Resources</h4>
            <ul className="space-y-4 text-on-surface-variant text-sm">
              <li><a className="hover:text-primary transition-colors" href="#">Organizer Guide</a></li>
              <li><a className="hover:text-primary transition-colors" href="#">Help Center</a></li>
              <li><a className="hover:text-primary transition-colors" href="#">Privacy Policy</a></li>
              <li><a className="hover:text-primary transition-colors" href="#">Terms of Service</a></li>
            </ul>
          </div>
          <div className="space-y-6">
            <h4 className="font-bold text-on-surface mb-6 uppercase tracking-widest text-xs">Connect</h4>
            <div className="flex gap-4">
              <a className="w-10 h-10 bg-surface-container-highest rounded-lg flex items-center justify-center hover:bg-primary hover:text-white transition-all" href="#"><span className="material-symbols-outlined text-xl">language</span></a>
              <a className="w-10 h-10 bg-surface-container-highest rounded-lg flex items-center justify-center hover:bg-primary hover:text-white transition-all" href="#"><span className="material-symbols-outlined text-xl">alternate_email</span></a>
              <a className="w-10 h-10 bg-surface-container-highest rounded-lg flex items-center justify-center hover:bg-primary hover:text-white transition-all" href="#"><span className="material-symbols-outlined text-xl">share</span></a>
            </div>
            <p className="text-xs text-on-surface-variant">© 2026 The Academic Curator. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;
