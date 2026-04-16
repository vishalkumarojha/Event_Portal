import React from "react";
import { DashboardSidebar } from "./DashboardOverview";
import { motion } from "framer-motion";

const Analytics: React.FC = () => {
  const stats = [
    { label: "Check-ins", value: "1.2k", trend: "+15%", color: "text-primary" },
    { label: "New Members", value: "48", trend: "+10%", color: "text-tertiary" },
    { label: "Revenue", value: "$4.5k", trend: "+25%", color: "text-secondary" },
    { label: "Avg Rating", value: "4.8", trend: "+2%", color: "text-primary" },
  ];

  const chartData = [
    { month: "Jan", value: 30 },
    { month: "Feb", value: 45 },
    { month: "Mar", value: 75 },
    { month: "Apr", value: 25 },
    { month: "May", value: 60 },
    { month: "Jun", value: 90 },
  ];

  return (
    <div className="bg-surface text-on-surface min-h-screen">
      <DashboardSidebar />

      <main className="ml-64 p-8 max-w-7xl mx-auto min-h-screen">
        <header className="flex justify-between items-end mb-12">
          <div>
            <p className="text-xs font-bold text-primary uppercase tracking-[0.15em] mb-2">Insights</p>
            <h1 className="text-4xl font-bold text-on-surface tracking-tighter">Club Analytics</h1>
          </div>
          <div className="flex gap-4">
            <select className="bg-surface-container-high border-none rounded-xl py-2.5 px-6 text-sm font-bold text-on-surface transition-all cursor-pointer hover:bg-surface-container-highest">
              <option>Last 6 Months</option>
              <option>Last Year</option>
              <option>All Time</option>
            </select>
          </div>
        </header>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
          {stats.map((stat) => (
            <div key={stat.label} className="bg-surface-container-lowest p-6 rounded-2xl shadow-[0_12px_40px_rgba(25,28,30,0.04)] border border-outline-variant/5">
              <p className="text-xs font-bold text-on-surface-variant uppercase tracking-widest mb-2">{stat.label}</p>
              <div className="flex items-end justify-between">
                <h3 className="text-3xl font-bold text-on-surface tracking-tight">{stat.value}</h3>
                <span className={`text-xs font-bold ${stat.color}`}>{stat.trend}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Main Chart Section */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <section className="lg:col-span-2 bg-surface-container-lowest p-8 rounded-3xl shadow-[0_12px_40px_rgba(25,28,30,0.04)] border border-outline-variant/10">
            <div className="flex justify-between items-start mb-12">
              <div>
                <h2 className="text-xl font-bold text-on-surface tracking-tight">Event Attendance</h2>
                <p className="text-sm text-on-surface-variant">Monthly breakdown of unique attendees</p>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-primary"></div>
                <span className="text-xs font-bold text-on-surface-variant uppercase">Attendees</span>
              </div>
            </div>

            <div className="h-64 flex items-end justify-between gap-4">
              {chartData.map((data) => (
                <div key={data.month} className="flex-1 flex flex-col items-center gap-4">
                  <motion.div 
                    initial={{ height: 0 }}
                    animate={{ height: `${data.value}%` }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    className="w-full primary-gradient rounded-full relative group"
                  >
                    <div className="absolute -top-10 left-1/2 -translate-x-1/2 bg-on-surface text-surface text-[10px] font-bold py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity">
                      {data.value}
                    </div>
                  </motion.div>
                  <span className="text-xs font-bold text-on-surface-variant uppercase tracking-widest">{data.month}</span>
                </div>
              ))}
            </div>
          </section>

          <section className="space-y-6">
            <div className="bg-tertiary-fixed p-8 rounded-3xl text-on-tertiary-fixed h-full relative overflow-hidden">
              <div className="relative z-10">
                <h3 className="text-lg font-bold mb-2">Growth Target</h3>
                <p className="text-sm opacity-80 mb-8">Increase engagement by 40% this semester.</p>
                <div className="space-y-6">
                  <div>
                    <div className="flex justify-between text-xs font-bold uppercase tracking-widest mb-2">
                      <span>Progress</span>
                      <span>65%</span>
                    </div>
                    <div className="h-2 bg-on-tertiary-fixed/20 rounded-full overflow-hidden">
                      <motion.div 
                        initial={{ width: 0 }}
                        animate={{ width: "65%" }}
                        transition={{ duration: 1.5, delay: 0.5 }}
                        className="h-full bg-on-tertiary-fixed"
                      />
                    </div>
                  </div>
                  <button className="w-full py-3 bg-on-tertiary-fixed text-tertiary-fixed font-bold text-sm rounded-xl hover:scale-[1.02] transition-transform">
                    View Strategy
                  </button>
                </div>
              </div>
              <span className="material-symbols-outlined absolute -bottom-8 -right-8 text-[160px] opacity-10 rotate-12">trending_up</span>
            </div>
          </section>
        </div>

        {/* Distribution */}
        <section className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-surface-container-lowest p-8 rounded-3xl border border-outline-variant/10">
            <h3 className="text-lg font-bold mb-6">User Demographics</h3>
            <div className="space-y-4">
              {[
                { label: "Freshman", percent: 45, color: "bg-primary" },
                { label: "Sophomore", percent: 30, color: "bg-tertiary" },
                { label: "Junior/Senior", percent: 25, color: "bg-secondary" },
              ].map(d => (
                <div key={d.label}>
                  <div className="flex justify-between text-xs font-bold uppercase mb-2">
                    <span className="text-on-surface-variant tracking-widest">{d.label}</span>
                    <span className="text-on-surface">{d.percent}%</span>
                  </div>
                  <div className="h-1.5 bg-surface-container-high rounded-full overflow-hidden">
                    <motion.div 
                      initial={{ width: 0 }}
                      animate={{ width: `${d.percent}%` }}
                      transition={{ duration: 1 }}
                      className={`h-full ${d.color}`}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="bg-surface-container-lowest p-8 rounded-3xl border border-outline-variant/10 flex flex-col justify-center">
            <div className="flex items-center gap-6">
              <div className="w-24 h-24 rounded-full border-8 border-primary border-t-transparent animate-spin-slow"></div>
              <div>
                <h3 className="text-lg font-bold mb-1">Live Updates</h3>
                <p className="text-sm text-on-surface-variant font-medium">System is monitoring 12 active event streams.</p>
                <div className="mt-4 flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-primary animate-pulse"></div>
                  <span className="text-[10px] font-bold text-primary uppercase tracking-[0.2em]">Active Now</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Analytics;
