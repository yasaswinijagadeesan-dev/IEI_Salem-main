
import React from 'react';
import { CheckCircle2, FileText, Send, UserPlus } from 'lucide-react';

const Membership: React.FC = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
      <header className="bg-iei-primary text-white py-24">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-5xl font-bold mb-6 leading-tight">Join the World's Largest Engineering Fraternity</h1>
            <p className="text-gray-300 text-lg mb-8">
              Gain professional recognition, access to exclusive technical resources, and a network that spans the globe.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="bg-iei-accent text-white px-8 py-3 rounded-full font-bold hover:shadow-xl transition-all">Apply Online</button>
              <button className="border border-white/30 px-8 py-3 rounded-full font-bold hover:bg-white/10 transition-all">Download Forms</button>
            </div>
          </div>
          <div className="hidden lg:grid grid-cols-2 gap-4">
            <div className="bg-white/5 backdrop-blur-sm p-6 rounded-2xl border border-white/10">
              <h4 className="font-bold text-iei-accent mb-2">FIE</h4>
              <p className="text-xs text-gray-400 uppercase tracking-tighter">Fellow of the Institution</p>
            </div>
            <div className="bg-white/5 backdrop-blur-sm p-6 rounded-2xl border border-white/10">
              <h4 className="font-bold text-iei-accent mb-2">MIE</h4>
              <p className="text-xs text-gray-400 uppercase tracking-tighter">Member of the Institution</p>
            </div>
            <div className="bg-white/5 backdrop-blur-sm p-6 rounded-2xl border border-white/10">
              <h4 className="font-bold text-iei-accent mb-2">AMIE</h4>
              <p className="text-xs text-gray-400 uppercase tracking-tighter">Associate Member</p>
            </div>
            <div className="bg-white/5 backdrop-blur-sm p-6 rounded-2xl border border-white/10">
              <h4 className="font-bold text-iei-accent mb-2">STUDENT</h4>
              <p className="text-xs text-gray-400 uppercase tracking-tighter">Undergraduate & Diploma</p>
            </div>
          </div>
        </div>
      </header>

      <section className="py-24 max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-iei-primary mb-4">Membership Benefits</h2>
          <p className="text-gray-500 max-w-2xl mx-auto">Enhance your professional journey with benefits designed for engineering excellence.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { icon: <CheckCircle2 className="text-iei-accent" />, title: "Professional Recognition", desc: "Acquire the prestigious Charter Engineer (CE) status and enhance your career profile globally." },
            { icon: <FileText className="text-iei-accent" />, title: "Technical Resources", desc: "Unlimited access to IEI Journals (Springer), Technical Papers, and International Conference proceedings." },
            { icon: <UserPlus className="text-iei-accent" />, title: "Networking Hub", desc: "Interact with over 1 million members globally across 15 engineering disciplines." }
          ].map((benefit, i) => (
            <div key={i} className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-iei-accent/10 rounded-xl flex items-center justify-center mb-6">{benefit.icon}</div>
              <h3 className="text-xl font-bold text-iei-primary mb-4">{benefit.title}</h3>
              <p className="text-gray-500 leading-relaxed text-sm">{benefit.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="py-24 bg-iei-primary text-white">
        <div className="max-w-4xl mx-auto px-4">
          <div className="bg-white text-gray-900 rounded-3xl p-10 lg:p-16 shadow-2xl">
            <h2 className="text-3xl font-bold text-center mb-10">Membership Inquiry</h2>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-bold text-gray-400 uppercase tracking-widest mb-2">Full Name</label>
                  <input type="text" className="w-full bg-gray-50 border border-gray-200 rounded-xl p-4 focus:ring-2 focus:ring-iei-accent outline-none" placeholder="Enter your name" />
                </div>
                <div>
                  <label className="block text-xs font-bold text-gray-400 uppercase tracking-widest mb-2">Email Address</label>
                  <input type="email" className="w-full bg-gray-50 border border-gray-200 rounded-xl p-4 focus:ring-2 focus:ring-iei-accent outline-none" placeholder="Enter your email" />
                </div>
              </div>
              <div>
                <label className="block text-xs font-bold text-gray-400 uppercase tracking-widest mb-2">Engineering Division</label>
                <select className="w-full bg-gray-50 border border-gray-200 rounded-xl p-4 focus:ring-2 focus:ring-iei-accent outline-none">
                  <option>Civil Engineering</option>
                  <option>Mechanical Engineering</option>
                  <option>Electrical Engineering</option>
                  <option>Electronics & Comm.</option>
                  <option>Other</option>
                </select>
              </div>
              <div>
                <label className="block text-xs font-bold text-gray-400 uppercase tracking-widest mb-2">Message/Query</label>
                <textarea className="w-full bg-gray-50 border border-gray-200 rounded-xl p-4 focus:ring-2 focus:ring-iei-accent outline-none h-32" placeholder="Tell us about your requirement"></textarea>
              </div>
              <button className="w-full bg-iei-primary text-white font-bold py-4 rounded-xl flex items-center justify-center gap-3 hover:bg-iei-accent transition-all">
                Send Inquiry <Send size={20} />
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Membership;
