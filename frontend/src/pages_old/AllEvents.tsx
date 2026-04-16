import React from 'react';
import { Search, Filter, Calendar as CalIcon, MapPin, Users } from 'lucide-react';
import { supabase } from '../supabaseClient';

interface Event {
  id: string;
  title: string;
  description: string;
  date: string;
  location: string;
  image_url: string;
  category: string;
}

const AllEvents = () => {
  const [events, setEvents] = React.useState<Event[]>([]);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    fetchEvents();
  }, []);

  const fetchEvents = async () => {
    try {
      setLoading(true);
      const { data, error } = await supabase
        .from('events')
        .select('*')
        .order('date', { ascending: true });

      if (error) throw error;
      setEvents(data || []);
    } catch (err) {
      console.error('Error fetching events:', err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <div className="relative h-[400px] bg-indigo-900 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-900 to-transparent z-10" />
        <img 
          src="/stitch_assets/screen1.png" 
          alt="Hero" 
          className="absolute inset-0 w-full h-full object-cover opacity-50"
        />
        <div className="relative z-20 max-w-7xl mx-auto px-4 h-full flex flex-col justify-center">
          <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-4 tracking-tight">
            Discover What's <span className="text-indigo-400">Happening</span>
          </h1>
          <p className="text-lg text-indigo-100 max-w-2xl mb-8">
            The central hub for all college club events. From tech workshops to cultural fests, find your next experience here.
          </p>
          
          {/* Search Bar */}
          <div className="max-w-3xl w-full flex p-1 bg-white rounded-2xl shadow-2xl">
            <div className="flex-grow flex items-center px-4">
              <Search className="text-gray-400 mr-2" />
              <input 
                type="text" 
                placeholder="Search events, clubs, or keywords..." 
                className="w-full py-3 focus:outline-none text-gray-700"
              />
            </div>
            <button className="bg-indigo-600 text-white px-8 py-3 rounded-xl font-semibold hover:bg-indigo-700 transition-all shadow-lg shadow-indigo-200">
              Explore
            </button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 gap-6">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-2 tracking-tight">Upcoming Events</h2>
            <p className="text-gray-500">Find the perfect event for your interests.</p>
          </div>
          
          <div className="flex gap-4">
            <button className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-200 rounded-xl text-gray-600 hover:bg-gray-50 transition-colors">
              <Filter size={18} />
              <span>Filters</span>
            </button>
            <select className="px-4 py-2 bg-white border border-gray-200 rounded-xl text-gray-600 focus:outline-none focus:ring-2 focus:ring-indigo-500">
              <option>Sort by Date</option>
              <option>Sort by Popularity</option>
            </select>
          </div>
        </div>

        {/* Categories */}
        <div className="flex gap-4 mb-12 overflow-x-auto pb-4 no-scrollbar">
          {['All Events', 'Workshops', 'Socials', 'Cultural', 'Sports', 'Academic'].map((cat) => (
            <button 
              key={cat}
              className={`px-6 py-2 rounded-full font-medium whitespace-nowrap transition-all ${
                cat === 'All Events' 
                ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-100' 
                : 'bg-white text-gray-600 hover:border-indigo-600 border border-transparent'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Event Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {loading ? (
            [1, 2, 3, 4, 5, 6].map(i => (
              <div key={i} className="bg-white rounded-3xl h-[400px] animate-pulse shadow-sm border border-gray-100" />
            ))
          ) : events.length > 0 ? (
            events.map(event => (
              <div key={event.id} className="group bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 flex flex-col">
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={event.image_url || 'https://images.unsplash.com/photo-1540575861501-7ad060e39fe5?auto=format&fit=crop&q=80'} 
                    alt={event.title} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-xs font-bold text-indigo-600">
                    {event.category || 'Event'}
                  </div>
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-indigo-600 transition-colors">
                    {event.title}
                  </h3>
                  <div className="space-y-2 mb-6 text-gray-500 text-sm">
                    <div className="flex items-center gap-2">
                      <CalIcon size={16} className="text-indigo-500" />
                      <span>{new Date(event.date).toLocaleDateString(undefined, { dateStyle: 'long' })}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin size={16} className="text-indigo-500" />
                      <span>{event.location}</span>
                    </div>
                  </div>
                  <div className="mt-auto flex items-center justify-between pt-6 border-t border-gray-50">
                    <div className="flex items-center gap-1 text-gray-400">
                      <Users size={16} />
                      <span className="text-xs font-medium">120+ going</span>
                    </div>
                    <button className="text-indigo-600 font-bold hover:text-indigo-700 transition-colors">
                      Learn More →
                    </button>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="col-span-full text-center py-20">
              <p className="text-gray-500">No events found. Check back later!</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AllEvents;
