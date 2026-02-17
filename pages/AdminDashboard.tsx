
import React, { useState } from 'react';
import { LayoutDashboard, Users, Calendar, Image as ImageIcon, MessageSquare, Plus, Edit2, Trash2, LogOut } from 'lucide-react';
import { MOCK_EVENTS, EXECUTIVE_COMMITTEE } from '../constants';

const AdminDashboard: React.FC = () => {
  const [activeTab, setActiveTab] = useState('Overview');

  const stats = [
    { label: 'Total Members', count: '1,248', color: 'bg-blue-500' },
    { label: 'Upcoming Events', count: '4', color: 'bg-green-500' },
    { label: 'Inquiries', count: '12', color: 'bg-orange-500' },
    { label: 'Gallery Items', count: '85', color: 'bg-purple-500' }
  ];

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-iei-primary text-white flex flex-col">
        <div className="p-8 border-b border-white/10">
          <h1 className="text-xl font-bold flex items-center gap-2">
            <LayoutDashboard /> Admin CMS
          </h1>
          <p className="text-xs text-gray-400 mt-1 uppercase tracking-widest">IEI Salem LC</p>
        </div>
        <nav className="flex-grow p-4 space-y-2">
          {['Overview', 'Events', 'Committee', 'Gallery', 'Messages'].map(tab => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${activeTab === tab ? 'bg-white/10 text-white font-bold' : 'text-gray-400 hover:text-white hover:bg-white/5'}`}
            >
              {tab === 'Overview' && <LayoutDashboard size={18} />}
              {tab === 'Events' && <Calendar size={18} />}
              {tab === 'Committee' && <Users size={18} />}
              {tab === 'Gallery' && <ImageIcon size={18} />}
              {tab === 'Messages' && <MessageSquare size={18} />}
              {tab}
            </button>
          ))}
        </nav>
        <div className="p-4 border-t border-white/10">
          <button className="w-full flex items-center gap-3 px-4 py-3 text-red-400 hover:bg-red-500/10 rounded-xl transition-all">
            <LogOut size={18} /> Logout
          </button>
        </div>
      </aside>

      {/* Main Panel */}
      <main className="flex-grow p-10 overflow-y-auto">
        <div className="flex justify-between items-center mb-10">
          <h2 className="text-3xl font-bold text-gray-800">{activeTab} Dashboard</h2>
          <button className="bg-iei-primary text-white px-6 py-2.5 rounded-xl flex items-center gap-2 font-bold hover:bg-iei-accent transition-all">
            <Plus size={20} /> Add New {activeTab === 'Overview' ? 'Content' : activeTab.slice(0, -1)}
          </button>
        </div>

        {activeTab === 'Overview' && (
          <div className="space-y-10">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {stats.map((s, i) => (
                <div key={i} className="bg-white p-6 rounded-3xl shadow-sm border border-gray-200">
                  <div className={`w-10 h-1 rounded-full ${s.color} mb-4`}></div>
                  <p className="text-gray-400 text-sm font-medium uppercase tracking-tighter">{s.label}</p>
                  <p className="text-4xl font-bold text-gray-800 mt-1">{s.count}</p>
                </div>
              ))}
            </div>

            <div className="bg-white rounded-3xl border border-gray-200 overflow-hidden shadow-sm">
              <div className="p-6 border-b border-gray-100 flex justify-between items-center">
                <h3 className="font-bold text-iei-primary">Recent Event Activity</h3>
                <button className="text-xs font-bold text-iei-accent">View All</button>
              </div>
              <table className="w-full text-left">
                <thead className="bg-gray-50 text-xs font-bold text-gray-400 uppercase tracking-widest">
                  <tr>
                    <th className="px-6 py-4">Title</th>
                    <th className="px-6 py-4">Status</th>
                    <th className="px-6 py-4">Date</th>
                    <th className="px-6 py-4">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {MOCK_EVENTS.map(event => (
                    <tr key={event.id} className="hover:bg-gray-50 transition-colors">
                      <td className="px-6 py-4 font-bold text-gray-700">{event.title}</td>
                      <td className="px-6 py-4">
                        <span className={`text-[10px] font-bold px-2 py-1 rounded-full ${event.status === 'Upcoming' ? 'bg-green-100 text-green-600' : 'bg-gray-100 text-gray-500'}`}>
                          {event.status}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-500">{event.date}</td>
                      <td className="px-6 py-4">
                        <div className="flex gap-2">
                          <button className="p-2 text-gray-400 hover:text-iei-accent transition-colors"><Edit2 size={16} /></button>
                          <button className="p-2 text-gray-400 hover:text-red-500 transition-colors"><Trash2 size={16} /></button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {activeTab !== 'Overview' && (
          <div className="bg-white rounded-3xl p-12 text-center border-2 border-dashed border-gray-200">
            <div className="w-20 h-20 bg-gray-50 rounded-full flex items-center justify-center mx-auto mb-6 text-gray-300">
              <Plus size={40} />
            </div>
            <h3 className="text-2xl font-bold text-gray-400">Manage {activeTab}</h3>
            <p className="text-gray-400 mt-2">Comprehensive CRUD controls for {activeTab.toLowerCase()} content.</p>
          </div>
        )}
      </main>
    </div>
  );
};

export default AdminDashboard;
