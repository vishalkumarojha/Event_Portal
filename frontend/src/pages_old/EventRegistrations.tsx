import React from 'react';
import { Download, FileText, Search, MoreVertical, Filter, ChevronLeft, ChevronRight } from 'lucide-react';

const EventRegistrations = () => {
  const registrations = [
    { id: '1', name: 'Alex Johnson', email: 'alex.j@college.edu', date: '2026-04-10', status: 'Confirmed', dept: 'CS' },
    { id: '2', name: 'Sarah Miller', email: 'sarah.m@college.edu', date: '2026-04-11', status: 'Confirmed', dept: 'Design' },
    { id: '3', name: 'James Wilson', email: 'james.w@college.edu', date: '2026-04-12', status: 'Pending', dept: 'Business' },
    { id: '4', name: 'Emma Davis', email: 'emma.d@college.edu', date: '2026-04-12', status: 'Confirmed', dept: 'CS' },
    { id: '5', name: 'Michael Brown', email: 'm.brown@college.edu', date: '2026-04-13', status: 'Cancelled', dept: 'Eng' },
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 py-12 text-black">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10 gap-6">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2 tracking-tight">Event Registrations</h1>
          <nav className="flex text-sm text-gray-500">
            <span>Dashboard</span>
            <span className="mx-2">/</span>
            <span className="text-indigo-600 font-medium">Registrations</span>
          </nav>
        </div>
        <div className="flex gap-4">
          <button className="flex items-center gap-2 bg-white border border-gray-200 px-5 py-2.5 rounded-xl font-bold text-gray-700 hover:bg-gray-50 transition-all">
            <Download size={18} />
            <span>Export CSV</span>
          </button>
          <button className="flex items-center gap-2 bg-indigo-600 text-white px-5 py-2.5 rounded-xl font-bold hover:bg-indigo-700 shadow-lg shadow-indigo-100 transition-all">
            <FileText size={18} />
            <span>Generate Report</span>
          </button>
        </div>
      </div>

      <div className="bg-white rounded-[32px] border border-gray-100 shadow-sm overflow-hidden">
        <div className="p-8 border-b border-gray-100 flex flex-col md:flex-row gap-6 justify-between items-center">
          <div className="relative w-full md:w-96">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
            <input 
              type="text" 
              placeholder="Search registrant..." 
              className="w-full pl-12 pr-4 py-3 bg-gray-50 border-transparent focus:bg-white focus:border-indigo-500 focus:ring-4 focus:ring-indigo-50/50 rounded-2xl transition-all outline-none"
            />
          </div>
          <div className="flex gap-3 w-full md:w-auto">
            <button className="flex-grow md:flex-grow-0 flex items-center justify-center gap-2 px-4 py-2 border border-gray-100 rounded-xl text-gray-600 hover:bg-gray-50">
              <Filter size={18} />
              <span>Filter</span>
            </button>
            <select className="flex-grow md:flex-grow-0 px-4 py-2 bg-gray-50 border-transparent rounded-xl text-gray-600 focus:outline-none">
              <option>Newest First</option>
              <option>Oldest First</option>
            </select>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="bg-gray-50/50 text-gray-500 text-sm font-bold uppercase tracking-wider">
                <th className="px-8 py-5">Full Name</th>
                <th className="px-8 py-5">Email</th>
                <th className="px-8 py-5">Department</th>
                <th className="px-8 py-5">Reg. Date</th>
                <th className="px-8 py-5">Status</th>
                <th className="px-8 py-5 text-center">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50">
              {registrations.map((reg) => (
                <tr key={reg.id} className="hover:bg-gray-50/50 transition-colors group">
                  <td className="px-8 py-6">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-indigo-50 text-indigo-600 flex items-center justify-center font-bold text-xs">
                        {reg.name.split(' ').map(n => n[0]).join('')}
                      </div>
                      <span className="font-bold text-gray-900">{reg.name}</span>
                    </div>
                  </td>
                  <td className="px-8 py-6 text-gray-500">{reg.email}</td>
                  <td className="px-8 py-6">
                    <span className="px-3 py-1 bg-gray-100 text-gray-600 rounded-lg text-xs font-bold">
                      {reg.dept}
                    </span>
                  </td>
                  <td className="px-8 py-6 text-gray-500 font-medium">{reg.date}</td>
                  <td className="px-8 py-6">
                    <span className={`px-3 py-1 rounded-full text-xs font-bold ${
                      reg.status === 'Confirmed' ? 'bg-green-100 text-green-700' : 
                      reg.status === 'Pending' ? 'bg-amber-100 text-amber-700' : 
                      'bg-red-100 text-red-700'
                    }`}>
                      {reg.status}
                    </span>
                  </td>
                  <td className="px-8 py-6 text-center">
                    <button className="p-2 text-gray-400 hover:text-indigo-600 rounded-lg transition-colors">
                      <MoreVertical size={20} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="p-8 border-t border-gray-100 flex justify-between items-center bg-gray-50/20">
          <p className="text-sm text-gray-500">Showing <span className="font-bold text-gray-900">5</span> of <span className="font-bold text-gray-900">450</span> registrants</p>
          <div className="flex gap-2">
            <button className="p-2 border border-gray-200 rounded-xl text-gray-400 hover:border-indigo-600 hover:text-indigo-600 disabled:opacity-50 transition-all" disabled>
              <ChevronLeft size={20} />
            </button>
            <button className="p-2 border border-indigo-600 bg-indigo-600 rounded-xl text-white shadow-lg shadow-indigo-100 transition-all">
              1
            </button>
            <button className="p-2 border border-gray-200 rounded-xl text-gray-600 hover:border-indigo-600 hover:text-indigo-600 transition-all">
              2
            </button>
            <button className="p-2 border border-gray-200 rounded-xl text-gray-600 hover:border-indigo-600 hover:text-indigo-600 transition-all">
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventRegistrations;
