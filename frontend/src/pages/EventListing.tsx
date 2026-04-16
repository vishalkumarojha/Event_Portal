import React, { useState } from "react";
import { Link } from "react-router-dom";

const events = [
  {
    id: 1,
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAC05HNReGlMYTDzX34YfeJrnDvGByad4mwDmK0r_u413KAwKCKtd0RHyDHUBox2Uj5pCmJUl7CgweaAnkiaJ3X-WoaMEoz4S5deOEtdQOoQWpRvIDVvHm8jvAunwqpzMds25NgCYjZhUQVfo4L7J9Z_MTh2IP4MoBboDzpcKfBgxKzpXSg4KRC5Vew6b_4EqoB52sz3zCNuJA41G4cuDaKlw-nM7NHMfhumowNZlcehO5ePssURYBa8NVxldBAKNwp37qDHJKS7Q",
    tag: "Tech", tagColor: "bg-primary",
    date: "Oct 24 • 6:00 PM",
    title: "Quantum Computing: The Next Frontier",
    desc: "Join Dr. Elias Thorne for an in-depth exploration of quantum entanglement and its practical applications in modern cryptography.",
    icon: "rocket_launch",
    org: "Physics Club",
    price: "Free Entry", priceColor: "text-tertiary",
    live: true,
  },
  {
    id: 2,
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuA-pJ8KV-M1mv81RCxT2fmVZcNKwmb2iFUh-zcpBSLjheVBI-8fBoEVBIHFEcL44RvzAe3-HNi1jLhQuE0PE8T9JWmnbYzNkJXc_57uyXzObv39_zeK_Lso6goCOIWqVth0CwQe0HDGj4pvPui200HkE5__ybrtOdLzo37aUrokp0jfc9udvz_87WrNkfpS6hnSe3KNJGw2WtYjJnPMWJqOCV1QYEWeBVbt2xXgqcMg5m1FPOCeVlRQcMAVDAqIwYRiP-FS8AAoWg",
    tag: "Social", tagColor: "bg-secondary",
    date: "Nov 02 • 4:30 PM",
    title: "Annual Inter-Departmental Debate",
    desc: "Witness the sharpest minds on campus battle it out over the ethics of artificial intelligence in higher education.",
    icon: "campaign",
    org: "Forensics Society",
    price: "$5.00", priceColor: "text-on-surface-variant",
    live: false,
  },
  {
    id: 3,
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCuj65PbtOKu71tbsfRw46CIcIUmRosJ0POGbLmWc3mbB8DlSpM6LQ4qHRIGcfioUSjyMeil_FbY5fcV9YxPvbekq_1WgJBY6sSKjq7_V4KVm78ArADQSMkPC3K6OShnAye2fdM-_5R4AYN-EWBWwdpTooUyeNshIOI3DvWBNqyCtx6A_O3RDWTeRIxzovlOqW-fRc_RAkMllE2avC1FyN0zHj-8ddhkNOf8csG3BxsGIScfHbXR5bBpilkN4fLHdQqsZOe0KECOA",
    tag: "Workshop", tagColor: "bg-tertiary",
    date: "Nov 15 • 10:00 AM",
    title: "Sustainable Design Masterclass",
    desc: "A hands-on workshop dedicated to circular economy principles and eco-friendly prototyping techniques.",
    icon: "architecture",
    org: "Eco-Design Hub",
    price: "Free Entry", priceColor: "text-tertiary",
    live: false,
  },
  {
    id: 4,
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuC3I4dyotbqLpMCZxTLGXKBtE31xbR7V9Z8DS65XTY9hGZeus1_tto4nz_LAUd4qpKOTvgzoPeWm1U1x1xD3oZ--eV6YXv1Ew8UDmBgN-0-TR0GBSI22c4MSCUOaAKPSFL_vrPjAHQ7GJ6PmG3rqjUVn7lNWzIn_11EQjgEfIguL-j3pNt46Ul7TF6-tP20ym-teirs-_LIC7RVw_bxqcVUw9Q2i7k7XGOd6UMM_2-t1vJy8c7rJsiTw0Me82KQ9pe_u-AJca9tDA",
    tag: "Sports", tagColor: "bg-primary",
    date: "Dec 01 • 9:00 AM",
    title: "The Winter Invitational Track Meet",
    desc: "Come cheer for your department as they compete in the final athletics event of the semester. High energy guaranteed.",
    icon: "fitness_center",
    org: "Varsity Athletics",
    price: "Entry $10", priceColor: "text-on-surface-variant",
    live: false,
  },
  {
    id: 5,
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAsdljj70-3xDcwvv8vFPV2_IY5HBhshKLnFPw6iOp9PR_7FcVDFkxkn9uTwk4q16z46SyR2qHb8H51Y-8_gTdTPJBn5T2t--SbRctHImqGUyYszIUOd-cj8aehBOG176L0X3otgNScfEMnYOQ7PYvFZXFLiI7FR8BLZ6j9rLKuyWHv7U8K0xPeKjMj5xzIhWp26BHKKT90gWMzpH2CtRRufMN4lSDq3uBdFaBwQHWZRL99N79VXbyO1qg9BlFkPWou5Yj1Nh9MfA",
    tag: "Gala", tagColor: "bg-on-background",
    date: "Dec 12 • 7:30 PM",
    title: "Founder's Day Winter Masquerade",
    desc: "An evening of elegance and celebration marking the university's 150th year. Black-tie event with live orchestra.",
    icon: "piano",
    org: "University Arts Council",
    price: "Limited Seats", priceColor: "text-error",
    live: false,
  },
  {
    id: 6,
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuA8HLsyM6xgfcBvyGhaGUzKZlmagB8-DRfdICyywS4AAvjH1WF51V996Fa56vAZ61pqpo7hU6L8B8fGQHI9AbiC-1nolOuzJWzNorxIKOFD0rT59hU5C9BDK54j-k3c6wMHe9JbhnAaNlGiK8FS1jDJRgsQsZ2J1H0Chad-0DVrIQdtUZRs9kntcpXysLLWv6iUjMs4j1ThQ-fv-GLMfE0bWwK-J_vbO5xqaQKoSYe-dWOIgUUnpwGEZOq05q6eE4z40aYmQP9kXA",
    tag: "Career", tagColor: "bg-primary",
    date: "Jan 10 • 11:00 AM",
    title: "Data Science Career Fair 2026",
    desc: "Connect with over 40 leading tech companies and startups looking for fresh talent in AI and Big Data.",
    icon: "business_center",
    org: "Career Services",
    price: "Student ID Req.", priceColor: "text-tertiary",
    live: false,
  },
];

const EventListing: React.FC = () => {
  const [search, setSearch] = useState("");

  const filtered = events.filter(
    (e) =>
      e.title.toLowerCase().includes(search.toLowerCase()) ||
      e.org.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="text-on-surface antialiased bg-surface min-h-screen">
      <main className="max-w-screen-2xl mx-auto px-8 py-12">
        {/* Hero */}
        <div className="mb-16">
          <h1 className="text-6xl font-extrabold tracking-tight text-on-background mb-4">Curated Experiences.</h1>
          <p className="text-xl text-on-surface-variant max-w-2xl leading-relaxed">
            Discover the most influential academic events, workshops, and social gatherings happening across campus this season.
          </p>
        </div>

        {/* Sticky Filter Bar */}
        <section className="sticky top-0 z-40 mb-12 py-4 bg-surface/95 backdrop-blur-md">
          <div className="flex flex-wrap items-center justify-between gap-4 p-2 bg-surface-container-low rounded-2xl">
            <div className="flex flex-wrap items-center gap-3">
              {["Date", "Category", "Club", "Pricing"].map((f, i) => (
                <button key={f} className="flex items-center gap-2 px-5 py-2.5 bg-surface-container-lowest rounded-xl text-sm font-semibold text-on-surface editorial-shadow hover:bg-white transition-all">
                  <span className="material-symbols-outlined text-[20px]">{["calendar_today","category","groups","payments"][i]}</span>
                  {f}
                  <span className="material-symbols-outlined text-[18px]">expand_more</span>
                </button>
              ))}
            </div>
            <div className="flex items-center gap-2 px-4 py-2.5 bg-surface-container-lowest rounded-xl editorial-shadow w-full md:w-80">
              <span className="material-symbols-outlined text-outline">search</span>
              <input
                className="bg-transparent border-none focus:ring-0 text-sm w-full placeholder:text-outline outline-none"
                placeholder="Search events, clubs, or topics..."
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>
          </div>
        </section>

        {/* Events Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10">
          {filtered.map((event) => (
            <div key={event.id} className="group bg-surface-container-lowest rounded-xl overflow-hidden editorial-shadow transition-transform duration-300 hover:-translate-y-2">
              <div className="aspect-[16/10] overflow-hidden relative">
                <img className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" src={event.img} alt={event.title} />
                <div className={`absolute top-4 right-4 ${event.tagColor} text-white text-[10px] font-bold tracking-widest uppercase px-3 py-1 rounded-full editorial-shadow`}>{event.tag}</div>
                {event.live && (
                  <div className="absolute bottom-4 left-4 flex items-center gap-2 bg-surface-container-lowest/90 backdrop-blur-md px-3 py-1.5 rounded-lg">
                    <div className="w-2 h-2 rounded-full bg-primary animate-pulse"></div>
                    <span className="text-[10px] font-bold tracking-widest text-on-surface uppercase">Live</span>
                  </div>
                )}
              </div>
              <div className="p-8">
                <div className="flex items-center gap-2 mb-3">
                  <span className="material-symbols-outlined text-primary text-[18px]">event</span>
                  <span className="text-xs font-bold tracking-widest uppercase text-on-surface-variant">{event.date}</span>
                </div>
                <h3 className="text-2xl font-bold text-on-background mb-2 leading-tight group-hover:text-primary transition-colors">{event.title}</h3>
                <p className="text-on-surface-variant text-sm mb-6 line-clamp-2">{event.desc}</p>
                <div className="flex items-center justify-between pt-6 border-t border-surface-container-low">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-surface-container-high flex items-center justify-center">
                      <span className="material-symbols-outlined text-primary text-sm">{event.icon}</span>
                    </div>
                    <span className="text-xs font-bold text-on-surface uppercase tracking-wider">{event.org}</span>
                  </div>
                  <span className={`text-xs font-bold uppercase tracking-wider ${event.priceColor}`}>{event.price}</span>
                </div>
                <div className="mt-8 grid grid-cols-2 gap-4">
                  <Link to={`/events/${event.id}`} className="py-3 px-4 rounded-xl text-primary font-bold text-sm bg-surface-container-low hover:bg-primary-container hover:text-white transition-all text-center">View Details</Link>
                  <Link to={`/events/${event.id}`} className="py-3 px-4 rounded-xl primary-gradient text-white font-bold text-sm editorial-shadow active:scale-95 transition-all text-center">Register</Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination */}
        <div className="mt-20 flex flex-col items-center">
          <div className="flex items-center gap-2 mb-4">
            <button className="w-12 h-12 flex items-center justify-center rounded-xl bg-surface-container-low text-on-surface hover:bg-surface-container-high transition-all">
              <span className="material-symbols-outlined">chevron_left</span>
            </button>
            <button className="w-12 h-12 flex items-center justify-center rounded-xl primary-gradient text-white font-bold editorial-shadow">1</button>
            <button className="w-12 h-12 flex items-center justify-center rounded-xl bg-surface-container-lowest text-on-surface hover:bg-surface-container-low transition-all">2</button>
            <button className="w-12 h-12 flex items-center justify-center rounded-xl bg-surface-container-lowest text-on-surface hover:bg-surface-container-low transition-all">3</button>
            <span className="px-2 text-outline">...</span>
            <button className="w-12 h-12 flex items-center justify-center rounded-xl bg-surface-container-lowest text-on-surface hover:bg-surface-container-low transition-all">12</button>
            <button className="w-12 h-12 flex items-center justify-center rounded-xl bg-surface-container-low text-on-surface hover:bg-surface-container-high transition-all">
              <span className="material-symbols-outlined">chevron_right</span>
            </button>
          </div>
          <p className="text-sm font-medium text-on-surface-variant">Showing 1-6 of 72 curated events</p>
        </div>
      </main>

      {/* Footer */}
      <footer className="mt-32 py-16 bg-surface-container-low">
        <div className="max-w-screen-2xl mx-auto px-8 grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="col-span-1 md:col-span-1">
            <span className="text-2xl font-bold tracking-tighter text-primary">The Academic Curator</span>
            <p className="mt-6 text-sm text-on-surface-variant leading-relaxed">Redefining how academia discovers, organizes, and experiences campus life. Excellence through curated connection.</p>
          </div>
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-on-surface mb-6">Navigation</h4>
            <ul className="space-y-4">
              <li><Link className="text-sm text-on-surface-variant hover:text-primary transition-colors" to="/">Home</Link></li>
              <li><Link className="text-sm text-on-surface-variant hover:text-primary transition-colors" to="/events">Events</Link></li>
              <li><Link className="text-sm text-on-surface-variant hover:text-primary transition-colors" to="/dashboard">Dashboard</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-on-surface mb-6">For Organizers</h4>
            <ul className="space-y-4">
              <li><Link className="text-sm text-on-surface-variant hover:text-primary transition-colors" to="/dashboard/create-event">Create Event</Link></li>
              <li><Link className="text-sm text-on-surface-variant hover:text-primary transition-colors" to="/dashboard">Event Dashboard</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-on-surface mb-6">Newsletter</h4>
            <p className="text-sm text-on-surface-variant mb-4">Stay updated with weekly event highlights.</p>
            <div className="flex gap-2">
              <input className="bg-surface-container-lowest border-none rounded-xl text-sm w-full focus:ring-primary px-3 py-2 outline-none" placeholder="Email address" type="email" />
              <button className="bg-primary text-white p-2 rounded-xl"><span className="material-symbols-outlined">send</span></button>
            </div>
          </div>
        </div>
        <div className="max-w-screen-2xl mx-auto px-8 mt-16 pt-8 border-t border-outline-variant/20 flex justify-between items-center">
          <p className="text-[10px] uppercase font-bold tracking-widest text-outline">© 2026 The Academic Curator • Built for Academic Excellence</p>
        </div>
      </footer>
    </div>
  );
};

export default EventListing;
