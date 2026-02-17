
import React, { useState } from 'react';
import { MOCK_EVENTS } from '../constants';
import { Calendar, MapPin, Search, ArrowRight } from 'lucide-react';

const Events: React.FC = () => {
  const [filter, setFilter] = useState<'All' | 'Upcoming' | 'Past'>('All');
  const [typeFilter, setTypeFilter] = useState('All');

  const filteredEvents = MOCK_EVENTS.filter(e => {
    const statusMatch = filter === 'All' || e.status === filter;
    const typeMatch = typeFilter === 'All' || e.type === typeFilter;
    return statusMatch && typeMatch;
  });

  return (
    <div className="bg-gray-50 min-h-screen">
      <header className="bg-iei-accent/5 py-24 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold text-iei-primary mb-4">Events & Workshops</h1>
          <p className="text-gray-500 max-w-2xl mx-auto text-lg">
            Stay updated with the latest technical sessions, workshops, and institutional meetings organized by IEI Salem.
          </p>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Controls */}
        <div className="bg-white p-4 rounded-2xl shadow-sm border border-gray-200 flex flex-wrap gap-6 items-center justify-between mb-12">
          <div className="flex items-center gap-4">
            <span className="text-xs font-bold text-gray-400 uppercase tracking-widest">Status:</span>
            <div className="flex bg-gray-100 p-1 rounded-lg">
              {['All', 'Upcoming', 'Past'].map(s => (
                <button
                  key={s}
                  onClick={() => setFilter(s as any)}
                  className={`px-6 py-2 rounded-md text-xs font-bold transition-all ${filter === s ? 'bg-white text-iei-primary shadow-sm' : 'text-gray-500 hover:text-iei-primary'}`}
                >
                  {s}
                </button>
              ))}
            </div>
          </div>

          <div className="flex items-center gap-4">
            <span className="text-xs font-bold text-gray-400 uppercase tracking-widest">Category:</span>
            <select 
              className="bg-gray-100 px-4 py-2 rounded-lg text-xs font-bold text-iei-primary focus:outline-none"
              onChange={(e) => setTypeFilter(e.target.value)}
            >
              <option value="All">All Categories</option>
              <option value="Technical">Technical</option>
              <option value="Membership">Membership</option>
              <option value="Student Chapter">Student Chapter</option>
              <option value="Women Engineer Cell">Women Engineer Cell</option>
            </select>
          </div>
        </div>

        {/* Events Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredEvents.map(event => (
            <div key={event.id} className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all border border-gray-100 flex flex-col h-full">
              <div className="relative aspect-video overflow-hidden">
                <img src={event.imageUrl} alt={event.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                <div className="absolute top-4 left-4 bg-iei-primary text-white text-[10px] font-bold px-3 py-1 rounded uppercase tracking-wider">
                  {event.type}
                </div>
                {event.status === 'Upcoming' && (
                  <div className="absolute top-4 right-4 bg-green-500 text-white text-[10px] font-bold px-3 py-1 rounded uppercase tracking-wider animate-pulse">
                    Registration Open
                  </div>
                )}
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <div className="flex items-center gap-4 text-xs font-medium text-gray-400 mb-4">
                  <span className="flex items-center gap-1"><Calendar size={14} className="text-iei-accent" /> {event.date}</span>
                  <span className="flex items-center gap-1"><MapPin size={14} className="text-iei-accent" /> {event.venue.split(',')[0]}</span>
                </div>
                <h3 className="text-xl font-bold text-iei-primary mb-4 line-clamp-2 leading-tight">
                  {event.title}
                </h3>
                <p className="text-gray-500 text-sm mb-6 line-clamp-3 leading-relaxed">
                  {event.description}
                </p>
                <div className="mt-auto pt-6 border-t border-gray-50 flex items-center justify-between">
                  <button className="text-iei-accent font-bold text-sm flex items-center gap-2 hover:gap-4 transition-all">
                    Details <ArrowRight size={16} />
                  </button>
                  {event.status === 'Upcoming' && (
                    <button className="bg-iei-primary text-white px-4 py-2 rounded-lg text-xs font-bold hover:bg-iei-accent transition-colors">
                      Join Event
                    </button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredEvents.length === 0 && (
          <div className="text-center py-32 bg-white rounded-3xl border-2 border-dashed border-gray-200">
            <h3 className="text-2xl font-bold text-gray-400">No events found in this category.</h3>
            <p className="text-gray-400 mt-2">Try adjusting your filters or check back later.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Events;
