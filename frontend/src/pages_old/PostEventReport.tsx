import React from 'react';
import { 
  BarChart, 
  Users, 
  MessageSquare, 
  TrendingUp, 
  Download, 
  Share2,
  PieChart as PieIcon,
  CheckCircle2,
  Star
} from 'lucide-react';

const PostEventReport = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-12 text-black">
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 gap-6">
        <div>
          <span className="inline-block px-3 py-1 bg-green-100 text-green-700 text-xs font-bold rounded-full mb-4">
            Report Completed
          </span>
          <h1 className="text-4xl font-black text-gray-900 mb-2">Annual Cultural Fest 2024</h1>
          <p className="text-gray-500 font-medium">Post-Event Performance & Insights Analysis</p>
        </div>
        <div className="flex gap-4">
          <button className="flex items-center gap-2 bg-white border border-gray-200 px-6 py-3 rounded-2xl font-bold text-gray-700 hover:bg-gray-50 transition-all shadow-sm">
            <Share2 size={20} />
            <span>Share</span>
          </button>
          <button className="flex items-center gap-2 bg-indigo-600 text-white px-6 py-3 rounded-2xl font-bold hover:bg-indigo-700 shadow-xl shadow-indigo-100 transition-all">
            <Download size={20} />
            <span>Download PDF</span>
          </button>
        </div>
      </div>

      {/* Stats Summary */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
        {[
          { icon: Users, label: 'Attendance', value: '1,240', sub: '85% of registered', color: 'indigo' },
          { icon: Star, label: 'User Rating', value: '4.8/5.0', sub: 'Based on 450 reviews', color: 'amber' },
          { icon: TrendingUp, label: 'Engagement', value: '92%', sub: '+12% from last year', color: 'emerald' },
          { icon: MessageSquare, label: 'Feedback', value: '562', sub: 'Total comments rec.', color: 'blue' }
        ].map((stat, i) => (
          <div key={i} className="bg-white p-8 rounded-[32px] border border-gray-100 shadow-sm">
            <div className={`w-12 h-12 rounded-2xl bg-${stat.color}-50 flex items-center justify-center mb-6`}>
              <stat.icon className={`text-${stat.color}-600`} size={24} />
            </div>
            <p className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-1">{stat.label}</p>
            <p className="text-3xl font-black text-gray-900 mb-2">{stat.value}</p>
            <p className="text-xs font-bold text-gray-500">{stat.sub}</p>
          </div>
        ))}
      </div>

      {/* Detailed Analysis */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-8 text-black">
          {/* Main Chart Placeholder */}
          <div className="bg-white p-8 rounded-[40px] border border-gray-100 shadow-sm h-[400px] flex flex-col">
            <div className="flex justify-between items-center mb-8">
              <h3 className="text-xl font-bold text-gray-900">Registration vs Attendance</h3>
              <div className="flex gap-2">
                <span className="flex items-center gap-1.5 text-xs font-bold text-gray-500">
                  <div className="w-2.5 h-2.5 rounded-full bg-indigo-600" /> Registrations
                </span>
                <span className="flex items-center gap-1.5 text-xs font-bold text-gray-500">
                  <div className="w-2.5 h-2.5 rounded-full bg-indigo-300" /> Attendance
                </span>
              </div>
            </div>
            <div className="flex-grow flex items-end gap-4 px-4 pb-4">
              {[60, 85, 45, 90, 75, 100, 80].map((h, i) => (
                <div key={i} className="flex-grow flex flex-col items-center gap-3">
                  <div className="w-full relative flex flex-col justify-end gap-1 h-full">
                    <div style={{ height: `${h}%` }} className="w-full bg-indigo-600 rounded-lg group relative transition-all duration-500 hover:bg-indigo-700">
                      <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-gray-900 text-white text-[10px] font-bold px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">
                        {h}%
                      </div>
                    </div>
                    <div style={{ height: `${h * 0.8}%` }} className="w-full bg-indigo-200 rounded-lg" />
                  </div>
                  <span className="text-[10px] font-bold text-gray-400 uppercase tracking-tighter">Day {i + 1}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Qualitative Feedback */}
          <div className="bg-white p-8 rounded-[40px] border border-gray-100 shadow-sm">
            <h3 className="text-xl font-bold text-gray-900 mb-8">Direct Feedback Highlights</h3>
            <div className="space-y-6">
              {[
                { name: 'David K.', text: "The workshop sessions were incredible! Very practical and hands-on. Looking forward to more like this.", rating: 5 },
                { name: 'Elena R.', text: "Great event overall, though the food stalls could have been better organized. Management was smooth.", rating: 4 },
                { name: 'Marcus L.', text: "A bit crowded during the keynote, but the energy was amazing. Definitely worth it!", rating: 4 }
              ].map((feedback, i) => (
                <div key={i} className="p-6 bg-gray-50 rounded-3xl relative">
                  <div className="flex gap-1 mb-3">
                    {[...Array(5)].map((_, j) => (
                      <Star key={j} size={14} className={j < feedback.rating ? 'fill-amber-400 text-amber-400' : 'text-gray-200'} />
                    ))}
                  </div>
                  <p className="text-gray-700 font-medium mb-4 italic">"{feedback.text}"</p>
                  <p className="text-sm font-bold text-indigo-600">— {feedback.name}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Sidebar Info */}
        <div className="space-y-8">
          <div className="bg-indigo-600 p-8 rounded-[40px] text-white shadow-xl shadow-indigo-100">
            <h3 className="text-xl font-bold mb-6">Key Wins</h3>
            <ul className="space-y-4">
              {[
                "Reached 100% attendance on Day 2",
                "Positive social media sentiment at 88%",
                "Zero safety incidents reported",
                "Smooth check-in process (avg 15s/person)"
              ].map((win, i) => (
                <li key={i} className="flex gap-3 items-start">
                  <CheckCircle2 size={18} className="mt-0.5 text-indigo-200 shrink-0" />
                  <span className="text-sm font-medium leading-relaxed">{win}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-white p-8 rounded-[40px] border border-gray-100 shadow-sm">
            <h3 className="text-xl font-bold text-gray-900 mb-6">Demographics</h3>
            <div className="space-y-6">
              {[
                { label: 'Engineering', value: 45, color: 'bg-indigo-600' },
                { label: 'Business', value: 25, color: 'bg-indigo-400' },
                { label: 'Arts & Design', value: 20, color: 'bg-indigo-200' },
                { label: 'Others', value: 10, color: 'bg-gray-200' }
              ].map((item, i) => (
                <div key={i}>
                  <div className="flex justify-between text-sm font-bold mb-2">
                    <span className="text-gray-600">{item.label}</span>
                    <span className="text-indigo-600">{item.value}%</span>
                  </div>
                  <div className="h-2 w-full bg-gray-100 rounded-full overflow-hidden">
                    <div style={{ width: `${item.value}%` }} className={`h-full ${item.color}`} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostEventReport;
