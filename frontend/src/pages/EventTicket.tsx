import React from "react";

const EventTicket: React.FC = () => {
  return (
    <div className="bg-surface font-body text-on-surface min-h-screen">
      <main className="max-w-4xl mx-auto px-6 py-12 md:py-20">
        {/* Hero Title */}
        <div className="text-center mb-12">
          <span className="text-xs font-semibold tracking-[0.1em] text-primary uppercase mb-4 block">Registration Confirmed</span>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-on-surface mb-4">Your Curated Experience Awaits</h1>
          <p className="text-on-surface-variant text-lg max-w-xl mx-auto">Please present this ticket at the venue entrance. A copy has also been sent to your academic email.</p>
        </div>

        {/* Ticket Component */}
        <div className="relative group">
          <div className="absolute -inset-1 bg-gradient-to-r from-primary to-primary-container rounded-[2rem] blur opacity-10 group-hover:opacity-20 transition duration-1000"></div>
          <div className="relative flex flex-col md:flex-row bg-surface-container-lowest rounded-xl overflow-hidden shadow-[0_12px_40px_rgba(25,28,30,0.06)]">
            {/* Main Ticket Body */}
            <div className="flex-grow p-8 md:p-12">
              <div className="flex justify-between items-start mb-10">
                <div className="space-y-1">
                  <h2 className="text-3xl font-bold text-on-surface tracking-tight">The Future of Digital Humanities</h2>
                  <p className="text-on-surface-variant flex items-center gap-2">
                    <span className="material-symbols-outlined text-sm">location_on</span>
                    Grand Auditorium • Oxford Science Park
                  </p>
                </div>
                <div className="bg-primary/5 px-4 py-2 rounded-lg">
                  <span className="text-primary font-bold text-sm tracking-widest uppercase">VIP PASS</span>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-y-8 gap-x-12 mb-10">
                {[
                  { label: "Attendee Name", value: "Julian Alexander Thorne" },
                  { label: "Registration ID", value: "AC-7782-2024" },
                  { label: "Date & Time", value: "Oct 24, 2024 • 09:30 AM" },
                  { label: "Seat Assignment", value: "Section A • Row 4 • Seat 12" },
                ].map(({ label, value }) => (
                  <div key={label}>
                    <p className="text-[10px] font-bold text-on-surface-variant uppercase tracking-widest mb-1">{label}</p>
                    <p className="text-lg font-semibold text-on-surface">{value}</p>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap gap-4 pt-8 border-t border-surface-container">
                <button className="flex items-center gap-2 px-8 py-3.5 bg-gradient-to-br from-primary to-primary-container text-white rounded-lg font-semibold hover:shadow-lg hover:shadow-primary/20 transition-all active:scale-95">
                  <span className="material-symbols-outlined">download</span>
                  Download Ticket
                </button>
                <button className="flex items-center gap-2 px-8 py-3.5 bg-surface-container-high text-on-surface rounded-lg font-semibold hover:bg-surface-variant transition-all active:scale-95">
                  <span className="material-symbols-outlined">visibility</span>
                  View Digital Pass
                </button>
              </div>
            </div>

            {/* Ticket Stub / QR */}
            <div className="w-full md:w-72 bg-surface-container-low p-8 md:p-12 flex flex-col items-center justify-center relative md:border-l-2 md:border-dashed md:border-outline-variant/30">
              <div className="hidden md:block absolute -top-4 -left-4 w-8 h-8 bg-surface rounded-full"></div>
              <div className="hidden md:block absolute -bottom-4 -left-4 w-8 h-8 bg-surface rounded-full"></div>
              <div className="bg-white p-4 rounded-xl shadow-inner mb-6 w-full max-w-[200px] aspect-square flex items-center justify-center">
                <div
                  className="w-full h-full relative"
                  style={{
                    backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuAgvKsggw7lagInS17JU03AjyYPR3uj3dC0PG6Ivhxu2Of3S-78OZ4ZAx3HPiuxO-HqOQjWNbAW46x1lWx-phtuMCxRE-AN0prusYzFZhlhvvTIWNPUiIWhmclXvFMZDPjpAvA2BH0Rc3Gx8JWnyOzeC_auqbX9SEL4WrIlavyltldPbTkL5dHqZF1JWQpIWQGxTILXGYj9EnNLpCBxWq_RBHpb32E7rnWdFyjxZRuxKC8I5B1hC62Y74bMDPjzt3giKXlIi7gS1Q')`,
                    backgroundSize: "cover",
                  }}
                ></div>
              </div>
              <p className="text-center text-[10px] font-bold text-on-surface-variant uppercase tracking-widest mb-4">Entry Code Scan</p>
              <div className="flex flex-col items-center gap-1 opacity-60">
                <span className="material-symbols-outlined text-primary">verified_user</span>
                <span className="text-[10px] font-medium">Valid for Single Entry</span>
              </div>
            </div>
          </div>
        </div>

        {/* Additional Info */}
        <div className="mt-16 grid md:grid-cols-3 gap-8">
          {[
            { icon: "map", title: "Venue Directions", desc: "Located just 5 minutes from Central Station. Shuttle services available every 15 mins.", link: "Open in Maps" },
            { icon: "restaurant", title: "Catering Info", desc: "Complimentary artisanal coffee and light refreshments provided for VIP pass holders.", link: "View Menu" },
            { icon: "support_agent", title: "Need Assistance?", desc: "Our concierge team is available 24/7 for any registration or accessibility inquiries.", link: "Contact Support" },
          ].map(({ icon, title, desc, link }) => (
            <div key={title} className="p-6 bg-surface-container-low rounded-xl">
              <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center text-primary mb-4">
                <span className="material-symbols-outlined">{icon}</span>
              </div>
              <h3 className="font-bold mb-2">{title}</h3>
              <p className="text-sm text-on-surface-variant leading-relaxed">{desc}</p>
              <a className="inline-block mt-3 text-sm text-primary font-semibold hover:underline" href="#">{link}</a>
            </div>
          ))}
        </div>
      </main>

      {/* Footer */}
      <footer className="py-12 border-t border-surface-container-low text-center">
        <p className="text-on-surface-variant/40 text-xs font-medium uppercase tracking-[0.2em]">The Academic Curator • Premium Event Management</p>
      </footer>
    </div>
  );
};

export default EventTicket;
