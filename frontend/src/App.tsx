import { BrowserRouter as Router, Routes, Route, Link, useLocation } from "react-router-dom";
import HomePage from "./pages/HomePage";
import EventListing from "./pages/EventListing";
import EventDetails from "./pages/EventDetails";
import EventTicket from "./pages/EventTicket";
import DashboardLogin from "./pages/DashboardLogin";
import DashboardOverview from "./pages/DashboardOverview";
import ManageEvents from "./pages/ManageEvents";
import CreateEvent from "./pages/CreateEvent";

const Navbar = () => {
  const location = useLocation();
  const isDashboard = location.pathname.startsWith("/dashboard");

  if (isDashboard && location.pathname !== "/dashboard/login") return null;

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass-nav border-b border-surface-container-high/50">
      <div className="max-w-screen-2xl mx-auto px-8 h-20 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 group transition-all">
          <div className="w-10 h-10 rounded-xl primary-gradient flex items-center justify-center text-white scale-90 group-hover:scale-100 transition-transform">
            <span className="material-symbols-outlined font-bold">auto_stories</span>
          </div>
          <span className="text-xl font-bold tracking-tighter text-on-surface">The Academic Curator</span>
        </Link>
        <div className="hidden md:flex items-center gap-10">
          <Link to="/" className="text-sm font-bold text-on-surface-variant hover:text-primary transition-colors tracking-tight">Home</Link>
          <Link to="/events" className="text-sm font-bold text-on-surface-variant hover:text-primary transition-colors tracking-tight">Events</Link>
          <a href="#" className="text-sm font-bold text-on-surface-variant hover:text-primary transition-colors tracking-tight">Organizers</a>
          <Link to="/dashboard/login" className="px-6 py-2.5 rounded-xl bg-surface-container-high text-primary font-bold text-sm hover:bg-primary hover:text-white transition-all active:scale-95 shadow-sm">
            Curator Portal
          </Link>
        </div>
        <button className="md:hidden text-on-surface">
          <span className="material-symbols-outlined text-3xl">menu</span>
        </button>
      </div>
    </nav>
  );
};

const Layout = ({ children }: { children: React.ReactNode }) => {
  const location = useLocation();
  const isDashboard = location.pathname.startsWith("/dashboard") && location.pathname !== "/dashboard/login";

  return (
    <div className={`min-h-screen ${!isDashboard ? "pt-20" : ""}`}>
      <Navbar />
      {children}
    </div>
  );
};

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/events" element={<EventListing />} />
          <Route path="/events/:id" element={<EventDetails />} />
          <Route path="/ticket" element={<EventTicket />} />
          <Route path="/dashboard/login" element={<DashboardLogin />} />
          <Route path="/dashboard" element={<DashboardOverview />} />
          <Route path="/dashboard/events" element={<ManageEvents />} />
          <Route path="/dashboard/create-event" element={<CreateEvent />} />
          {/* Fallback routes for specific dashboard paths used in links */}
          <Route path="/dashboard/registrations" element={<DashboardOverview />} />
          <Route path="/dashboard/team" element={<DashboardOverview />} />
          <Route path="/dashboard/analytics" element={<DashboardOverview />} />
          <Route path="/dashboard/settings" element={<DashboardOverview />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
