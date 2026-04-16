import React from 'react';
import { Search, QrCode, UserCheck, AlertCircle, CheckCircle2 } from 'lucide-react';

const EventCheckIn = () => {
  const [searchQuery, setSearchQuery] = React.useState('');
  const [activeTab, setActiveTab] = React.useState<'pending' | 'checked-in'>('pending');

  const mockStudents = [
    { id: '1', name: 'Alex Johnson', email: 'alex.j@college.edu', status: 'pending' },
    { id: '2', name: 'Sarah Miller', email: 'sarah.m@college.edu', status: 'checked-in' },
    { id: '3', name: 'James Wilson', email: 'james.w@college.edu', status: 'pending' },
    { id: '4', name: 'Emma Davis', email: 'emma.d@college.edu', status: 'pending' },
  ];

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10 gap-6">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Event Check-in</h1>
          <p className="text-gray-500">Manage attendee arrivals for <span className="text-indigo-600 font-semibold">Tech Symposium 2026</span></p>
        </div>
        <button className="flex items-center gap-2 bg-indigo-600 text-white px-6 py-3 rounded-2xl font-bold hover:bg-indigo-700 shadow-lg shadow-indigo-100 transition-all">
          <QrCode size={20} />
          <span>Scan QR Code</span>
        </button>
      </div>

      {/* Stats bar */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-10">
        <div className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm">
          <p className="text-sm font-medium text-gray-500 mb-1">Total Registered</p>
          <p className="text-2xl font-bold text-gray-900">450</p>
        </div>
        <div className="bg-green-50 p-6 rounded-3xl border border-green-100">
          <p className="text-sm font-medium text-green-700 mb-1">Checked In</p>
          <p className="text-2xl font-bold text-green-900">328</p>
        </div>
        <div className="bg-amber-50 p-6 rounded-3xl border border-amber-100">
          <p className="text-sm font-medium text-amber-700 mb-1">Remaining</p>
          <p className="text-2xl font-bold text-amber-900">122</p>
        </div>
      </div>

      {/* Search and Filters */}
      <div className="bg-white rounded-3xl border border-gray-100 shadow-sm overflow-hidden text-black">
        <div className="p-6 border-b border-gray-100">
          <div className="relative mb-6">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
            <input 
              type="text" 
              placeholder="Search by name or email..." 
              className="w-full pl-12 pr-4 py-3 bg-gray-50 border-transparent focus:bg-white focus:border-indigo-500 focus:ring-4 focus:ring-indigo-50/50 rounded-2xl transition-all outline-none"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          
          <div className="flex gap-2">
            <button 
              onClick={() => setActiveTab('pending')}
              className={`px-6 py-2 rounded-xl font-semibold text-sm transition-all ${
                activeTab === 'pending' ? 'bg-indigo-600 text-white' : 'text-gray-500 hover:bg-gray-50'
              }`}
            >
              Pending Approval
            </button>
            <button 
              onClick={() => setActiveTab('checked-in')}
              className={`px-6 py-2 rounded-xl font-semibold text-sm transition-all ${
                activeTab === 'checked-in' ? 'bg-indigo-600 text-white' : 'text-gray-500 hover:bg-gray-50'
              }`}
            >
              Already Checked
            </button>
          </div>
        </div>

        <div className="divide-y divide-gray-50">
          {mockStudents
            .filter(s => s.status === activeTab)
            .map(student => (
              <div key={student.id} className="p-6 flex items-center justify-between hover:bg-gray-50 transition-colors">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-indigo-100 flex items-center justify-center text-indigo-700 font-bold">
                    {student.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900">{student.name}</h3>
                    <p className="text-sm text-gray-500">{student.email}</p>
                  </div>
                </div>
                
                {student.status === 'pending' ? (
                  <button className="flex items-center gap-2 bg-white border-2 border-indigo-600 text-indigo-600 px-5 py-2 rounded-xl font-bold hover:bg-indigo-50 transition-all">
                    <UserCheck size={18} />
                    <span>Check In</span>
                  </button>
                ) : (
                  <div className="flex items-center gap-2 text-green-600 font-bold px-4 py-2 bg-green-50 rounded-xl">
                    <CheckCircle2 size={18} />
                    <span>Success</span>
                  </div>
                )}
              </div>
            ))}
        </div>
      </div>

      <div className="mt-8 p-6 bg-indigo-50 rounded-3xl border border-indigo-100 flex items-start gap-4 text-black">
        <AlertCircle className="text-indigo-600 mt-1" size={20} />
        <div>
          <h4 className="font-bold text-indigo-900">Need help?</h4>
          <p className="text-sm text-indigo-800/80">If a student is not on the list, please verify their registration in the portal or contact the administrator.</p>
        </div>
      </div>
    </div>
  );
};

export default EventCheckIn;
