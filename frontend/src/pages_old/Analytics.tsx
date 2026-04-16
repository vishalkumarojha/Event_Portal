import React from 'react';
import { 
  Activity, 
  Users, 
  Calendar, 
  Award, 
  ArrowUpRight, 
  ArrowDownRight,
  Filter,
  Download,
  MoreVertical,
  Search
} from 'lucide-react';

const Analytics = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12 text-black">
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10 gap-6">
        <div>
          <h1 className="text-4xl font-black text-gray-900 mb-2 tracking-tight">System Intelligence</h1>
          <p className="text-gray-500 font-medium">Holistic view of all club activities and engagement metrics.</p>
        </div>
        <div className="flex gap-4">
          <button className="flex items-center gap-2 bg-white border border-gray-200 px-5 py-2.5 rounded-2xl font-bold text-gray-700 hover:bg-gray-50 transition-all shadow-sm">
            <Filter size={18} />
            <span>Customize View</span>
          </button>
          <button className="flex items-center gap-2 bg-indigo-600 text-white px-5 py-2.5 rounded-2xl font-bold hover:bg-indigo-700 shadow-xl shadow-indigo-100 transition-all">
            <Download size={18} />
            <span>Export Global Data</span>
          </button>
        </div>
      </div>

      {/* High-level KPIs */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
        {[
          { label: 'Active Clubs', value: '24', change: '+2', trend: 'up', icon: Award, color: 'indigo' },
          { label: 'Total Events', value: '148', change: '+12%', trend: 'up', icon: Calendar, color: 'blue' },
          { label: 'Total Registrations', value: '8,420', change: '+1.2k', trend: 'up', icon: Users, color: 'emerald' },
          { label: 'Avg Attendance', value: '78%', change: '-2%', trend: 'down', icon: Activity, color: 'amber' }
        ].map((kpi, i) => (
          <div key={i} className="bg-white p-8 rounded-[36px] border border-gray-100 shadow-sm relative overflow-hidden group">
            <div className={`absolute top-0 right-0 w-32 h-32 bg-${kpi.color}-500/5 rounded-full -mr-16 -mt-16 transition-transform group-hover:scale-110 duration-500`} />
            <div className={`w-14 h-14 rounded-2xl bg-${kpi.color}-50 flex items-center justify-center mb-6`}>
              <kpi.icon className={`text-${kpi.color}-600`} size={28} />
            </div>
            <p className="text-xs font-black text-gray-400 uppercase tracking-widest mb-2">{kpi.label}</p>
            <div className="flex items-end gap-3 mb-2">
              <span className="text-4xl font-black text-gray-900 leading-none">{kpi.value}</span>
              <div className={`flex items-center text-xs font-black py-1 px-2 rounded-lg ${
                kpi.trend === 'up' ? 'text-emerald-600 bg-emerald-50' : 'text-rose-600 bg-rose-50'
              }`}>
                {kpi.trend === 'up' ? <ArrowUpRight size={14} /> : <ArrowDownRight size={14} />}
                {kpi.change}
              </div>
            </div>
            <p className="text-xs font-bold text-gray-400">vs last registration cycle</p>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 text-black">
        {/* Engagement Over Time */}
        <div className="lg:col-span-2 bg-white p-8 rounded-[40px] border border-gray-100 shadow-sm flex flex-col">
          <div className="flex justify-between items-center mb-10">
            <div>
              <h3 className="text-xl font-bold text-gray-900">Engagement Patterns</h3>
              <p className="text-sm text-gray-500 font-medium">Monthly active users vs Event frequency</p>
            </div>
            <select className="bg-gray-50 border-none text-xs font-bold py-2 px-4 rounded-xl outline-none">
              <option>Last 6 Months</option>
              <option>Last Year</option>
            </select>
          </div>
          
          <div className="flex-grow flex items-end justify-between px-4 pb-4 gap-4">
            {[40, 65, 35, 90, 75, 55, 100, 85, 60, 45, 70, 80].map((h, i) => (
              <div key={i} className="flex-grow flex flex-col items-center gap-4">
                <div className="w-full relative h-[250px] flex items-end">
                  <div 
                    style={{ height: `${h}%` }} 
                    className="w-full bg-indigo-600 rounded-t-xl hover:bg-indigo-700 transition-all cursor-pointer relative group"
                  >
                    <div className="absolute -top-10 left-1/2 -translate-x-1/2 bg-gray-900 text-white text-[10px] font-bold px-2.5 py-1.5 rounded-lg opacity-0 group-hover:opacity-100 transition-all pointer-events-none whitespace-nowrap">
                      {h * 120} users
                    </div>
                  </div>
                </div>
                <span className="text-[10px] font-black text-gray-400">{['J','F','M','A','M','J','J','A','S','O','N','D'][i]}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Club Performance Leaderboard */}
        <div className="bg-white p-8 rounded-[40px] border border-gray-100 shadow-sm">
          <div className="flex justify-between items-center mb-8">
            <h3 className="text-xl font-bold text-gray-900">Top Performing Clubs</h3>
            <button className="p-2 hover:bg-gray-50 rounded-xl transition-colors">
              <MoreVertical size={20} className="text-gray-400" />
            </button>
          </div>
          
          <div className="space-y-6">
            {[
              { name: 'Coding Club', events: 12, rating: 4.9, img: '💻', color: 'bg-indigo-500' },
              { name: 'Entrepreneurship', events: 8, rating: 4.7, img: '🚀', color: 'bg-emerald-500' },
              { name: 'Dance Society', events: 15, rating: 4.8, img: '💃', color: 'bg-rose-500' },
              { name: 'Literary Circle', events: 6, rating: 4.5, img: '📚', color: 'bg-amber-500' },
              { name: 'Robotics Int.', events: 9, rating: 4.6, img: '🤖', color: 'bg-blue-500' }
            ].map((club, i) => (
              <div key={i} className="flex items-center gap-4 p-4 hover:bg-gray-50 rounded-3xl transition-all cursor-pointer group">
                <div className={`w-12 h-12 rounded-2xl ${club.color} flex items-center justify-center text-xl shadow-lg shadow-${club.color.split('-')[1]}-100 transition-transform group-hover:scale-110`}>
                  {club.img}
                </div>
                <div className="flex-grow">
                  <h4 className="font-bold text-gray-900 text-sm mb-1">{club.name}</h4>
                  <p className="text-xs text-gray-500 font-medium">{club.events} Events Hosted</p>
                </div>
                <div className="text-right">
                  <div className="flex items-center gap-1 text-amber-500 font-black text-sm mb-1">
                    <Award size={14} className="fill-amber-500" />
                    <span>{club.rating}</span>
                  </div>
                  <p className="text-[10px] font-bold text-gray-400 uppercase tracking-tighter">Rating</p>
                </div>
              </div>
            ))}
          </div>
          
          <button className="w-full mt-8 py-4 bg-gray-50 text-gray-600 font-bold text-sm rounded-2xl hover:bg-gray-100 transition-all">
            View All Clubs
          </button>
        </div>
      </div>
    </div>
  );
};

export default Analytics;
