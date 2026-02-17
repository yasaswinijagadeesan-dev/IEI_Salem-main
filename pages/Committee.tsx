import React, { useState } from 'react';
import { Linkedin, Search } from 'lucide-react';

// ---------------- EXECUTIVE COMMITTEE ----------------
export const EXECUTIVE_COMMITTEE = [
  { id: 1, role: "Chairman", name: "Er. S. LOGANATHAN, FIE", division: "Civil", membershipType: "FIE", designation: "", imageUrl: "", linkedIn: "" },
  { id: 2, role: "Secretary", name: "Dr. R. SATISH KUMAR, FIE", division: "Electrical", membershipType: "FIE", designation: "", imageUrl: "", linkedIn: "" },
  { id: 3, role: "Committee Member", name: "Dr. M. LOGESH KUMAR, MIE", division: "Agricultural", membershipType: "MIE", designation: "", imageUrl: "", linkedIn: "" },
  { id: 4, role: "Committee Member", name: "Er. J. UMANAMBI, MIE", division: "Architectural", membershipType: "MIE", designation: "", imageUrl: "", linkedIn: "" },
  { id: 5, role: "Committee Member", name: "Er. S. HARI DARWIN, AMIE", division: "Aerospace", membershipType: "AMIE", designation: "", imageUrl: "", linkedIn: "" },
  { id: 6, role: "Committee Member", name: "Er. C. SIVAKUMAR, MIE", division: "Chemical", membershipType: "MIE", designation: "", imageUrl: "", linkedIn: "" },
  { id: 7, role: "Committee Member", name: "Dr. H. LILLY BEAULAH, FIE", division: "Computer", membershipType: "FIE", designation: "", imageUrl: "", linkedIn: "" },
  { id: 8, role: "Committee Member", name: "Er. V. KANIAN POONKUNDRAN, FIE", division: "Civil", membershipType: "FIE", designation: "", imageUrl: "", linkedIn: "" },
  { id: 9, role: "Committee Member", name: "Dr. R. LAVANYA, MIE", division: "Civil", membershipType: "MIE", designation: "", imageUrl: "", linkedIn: "" },
  { id: 10, role: "Committee Member", name: "Dr. S. SASIKUMAR, MIE", division: "Civil", membershipType: "MIE", designation: "", imageUrl: "", linkedIn: "" },
  { id: 11, role: "Committee Member", name: "Dr. V. DURAISAMY, FIE", division: "Electrical", membershipType: "FIE", designation: "", imageUrl: "", linkedIn: "" },
  { id: 12, role: "Committee Member", name: "Er. A. SELVA KUMAR, FIE", division: "Electrical", membershipType: "FIE", designation: "", imageUrl: "", linkedIn: "" },
  { id: 13, role: "Committee Member", name: "Er. D. BALASUBRAMANIAM, MIE", division: "Electrical", membershipType: "MIE", designation: "", imageUrl: "", linkedIn: "" },
  { id: 14, role: "Committee Member", name: "Dr. G. MAHESWARAN, FIE", division: "Environmental", membershipType: "FIE", designation: "", imageUrl: "", linkedIn: "" },
  { id: 15, role: "Committee Member", name: "Dr. M. MADHESWARAN, FIE", division: "Electronics and Telecommunication", membershipType: "FIE", designation: "", imageUrl: "", linkedIn: "" },
  { id: 16, role: "Committee Member", name: "Dr. K. SENATHIPATHI, FIE", division: "Electronics and Telecommunication", membershipType: "FIE", designation: "", imageUrl: "", linkedIn: "" },
  { id: 17, role: "Committee Member", name: "Dr. A. KUMARAVEL, FIE", division: "Mechanical", membershipType: "FIE", designation: "", imageUrl: "", linkedIn: "" },
  { id: 18, role: "Committee Member", name: "Dr. S. DURAISIVAM, AMIE", division: "Mechanical", membershipType: "AMIE", designation: "", imageUrl: "", linkedIn: "" },
  { id: 19, role: "Committee Member", name: "Er. M. KAMAL PRIYA, MIE", division: "Metallurgical and Materials", membershipType: "MIE", designation: "", imageUrl: "", linkedIn: "" },
  { id: 20, role: "Committee Member", name: "Er. D. RAJAKUMAR, AMIE", division: "Mining", membershipType: "AMIE", designation: "", imageUrl: "", linkedIn: "" },
  { id: 21, role: "Committee Member", name: "Dr. C. PRABHU, AMIE", division: "Production", membershipType: "AMIE", designation: "", imageUrl: "", linkedIn: "" },
  { id: 22, role: "Committee Member", name: "Er. B. MUNUSAMY, AMIE", division: "Textile", membershipType: "AMIE", designation: "", imageUrl: "", linkedIn: "" },
  { id: 23, role: "Co Opted Member", name: "Dr. K. VIDHYA, FIE", division: "Environmental", membershipType: "FIE", designation: "", imageUrl: "", linkedIn: "" },
  { id: 24, role: "Co Opted Member", name: "Dr. B. PRABU, MIE", division: "Civil", membershipType: "MIE", designation: "", imageUrl: "", linkedIn: "" },
  { id: 25, role: "Imm. Past Chairman", name: "Dr. K. THANGARAJ, FIE", division: "Computer", membershipType: "FIE", designation: "", imageUrl: "", linkedIn: "" },
  { id: 26, role: "Imm. Past Hon. Secretary", name: "Dr. C. DHAVAMANI, FIE", division: "Aerospace", membershipType: "FIE", designation: "", imageUrl: "", linkedIn: "" },
  { id: 27, role: "Chairman, TNSC", name: "Dr. D. ELANGO, FIE", division: "Civil", membershipType: "FIE", designation: "", imageUrl: "", linkedIn: "" },
  { id: 28, role: "Hon. Secretary, TNSC", name: "Dr. J. BALAMURUGAN, FIE", division: "Electrical", membershipType: "FIE", designation: "", imageUrl: "", linkedIn: "" },
  { id: 29, role: "Council Member, TNSC", name: "Dr. V. KARTHIKEYAN, FIE", division: "Environmental", membershipType: "FIE", designation: "", imageUrl: "", linkedIn: "" },
  { id: 30, role: "Committee Member, TNSC", name: "Er. N. SENTHIL KUMAR, FIE", division: "Environmental", membershipType: "FIE", designation: "", imageUrl: "", linkedIn: "" },
  { id: 31, role: "Committee Member, TNSC", name: "Er. S. NATARAJAN, FIE", division: "Metallurgical and Materials", membershipType: "FIE", designation: "", imageUrl: "", linkedIn: "" },
];

// ---------------- SUB COMMITTEES ----------------

export const SUB_COMMITTEES = [
  {
    title: "Finance Sub Committee",
    members: [
      { name: "Er. S. LOGANATHAN, FIE", membershipNo: "F-130621-5 / CV", position: "Chairman" },
      { name: "Dr. R. SATISH KUMAR, FIE", membershipNo: "F-123297-1 / EL", position: "Convener" },
      { name: "Er. N. ARUMUGHAM, MIE", membershipNo: "M-131411-9 / MC", position: "Member" },
      { name: "Dr. R. LAVANYA, MIE", membershipNo: "M-152557-8 / CV", position: "Member" },
    ],
  },
  {
    title: "Membership Drive Sub Committee",
    members: [
      { name: "Dr. K. SENATHIPATHI, FIE", membershipNo: "F-116212-4 / MC", position: "Chairman" },
      { name: "Er. B. MUNUSAMY, AMIE", membershipNo: "AM-153857-0 / TX", position: "Convener" },
      { name: "Er. A. SELVA KUMAR, FIE", membershipNo: "F-128402-5 / EL", position: "Member" },
      { name: "Dr. S. DURAISIVAM, MIE", membershipNo: "AM171494-8 MC", position: "Member" },
    ],
  },
  {
    title: "Technical Sub Committee",
    members: [
      { name: "Dr. A. KUMARAVEL, FIE", membershipNo: "F-116212-4 / MC", position: "Chairman" },
      { name: "Er. S. NATARAJAN, FIE", membershipNo: "Ff-117320-7 / MM", position: "Convener" },
      { name: "Er. D. BALASUBRAMANIAM, MIE", membershipNo: "M-128331-0 / EL", position: "Member" },
      { name: "Er. C. SIVAKUMAR, MIE", membershipNo: "M-141131-9 / CH", position: "Member" },
    ],
  },
  {
    title: "Building Sub Committee",
    members: [
      { name: "Er. V. KANIAN POONKUNDRAN, MIE", membershipNo: "F-130363-1 CV", position: "Chairman" },
      { name: "Er. N. SENTHIL KUMAR, FIE", membershipNo: "F-129601-5 / EN", position: "Convener" },
      { name: "Er. R. VIJAYAKUMAR, FIE", membershipNo: "F-110728-5 / CV", position: "Member" },
      { name: "Dr. B. PRABU, MIE", membershipNo: "M-178214-7 / CV", position: "Member" },
    ],
  },
  {
    title: "Website Development & Newsletter Sub Committee",
    members: [
      { name: "Dr. K. THANGARAJ, FIE", membershipNo: "F-129679-1 / CP", position: "Chairman" },
      { name: "Dr. M. LOGESH KUMAR, MIE", membershipNo: "M-172135-0 / AG", position: "Convener" },
      { name: "Dr. C. PRABHU, AMIE", membershipNo: "AM184386-1 / PR", position: "Member" },
      { name: "Dr. S. SASIKUMAR, MIE", membershipNo: "M-177921-9 / CV", position: "Member" },
    ],
  },
  {
    title: "Technician Chapter & Student Chapter Sub Committee",
    members: [
      { name: "Dr. M. MADHESWARAN, FIE", membershipNo: "F-114704-4 / ET", position: "Chairman" },
      { name: "Dr. G. MAHESWARAN, FIE", membershipNo: "F-121249-0 / EN", position: "Convener" },
      { name: "Dr. V. DURAISAMY, FIE", membershipNo: "F-120732-2 / EL", position: "Member" },
      { name: "Er. D. RAJAKUMAR, AMIE", membershipNo: "AM093619-5 / MN", position: "Member" },
    ],
  },
  {
    title: "Women Engineer Cell Sub Committee",
    members: [
      { name: "Dr. C. DHAVAMANI, FIE", membershipNo: "F-129674-0 / AS", position: "Chairman" },
      { name: "Dr. H. LILLY BEAULAH, FIE", membershipNo: "F-128173-5 / CP", position: "Convener" },
      { name: "Er. J. UMANAMBI, MIE", membershipNo: "M-117052-4 / AR", position: "Member" },
      { name: "Dr. K. VIDHYA, FIE", membershipNo: "F-130220-1 EN", position: "Member" },
    ],
  },
];


  const Committee: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'executive' | 'sub'>('executive');
  const [search, setSearch] = useState('');

  const filteredEx = EXECUTIVE_COMMITTEE.filter(m => 
    m.name.toLowerCase().includes(search.toLowerCase()) || 
    m.division.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="bg-gray-50 min-h-screen">
      <header className="bg-iei-primary py-24 text-center text-white relative">
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
        <div className="relative z-10">
          <h1 className="text-5xl font-bold mb-4">Leadership & Committee</h1>
          <p className="text-iei-accent font-medium text-lg">Guiding IEI Salem Local Centre • Session 2025–2027</p>
        </div>
      </header>
    
      <div className="max-w-7xl mx-auto px-4 py-16">
        {/* Navigation Tabs & Filter */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-12 gap-6">
          <div className="bg-white p-1 rounded-full shadow-md flex">
            <button 
              onClick={() => setActiveTab('executive')}
              className={`px-8 py-2.5 rounded-full text-sm font-bold transition-all ${activeTab === 'executive' ? 'bg-iei-primary text-white' : 'text-gray-500 hover:text-iei-primary'}`}
            >
              Executive Committee
            </button>
            <button 
              onClick={() => setActiveTab('sub')}
              className={`px-8 py-2.5 rounded-full text-sm font-bold transition-all ${activeTab === 'sub' ? 'bg-iei-primary text-white' : 'text-gray-500 hover:text-iei-primary'}`}
            >
              Sub Committees
            </button>
          </div>
      
          <div className="relative w-full max-w-sm">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
            <input 
              type="text" 
              placeholder="Search by name or division..." 
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-12 pr-4 py-3 rounded-full border border-gray-200 focus:outline-none focus:ring-2 focus:ring-iei-accent/30 focus:border-iei-accent"
            />
          </div>
        </div>
      </div>
    
        {activeTab === 'executive' ? (
  <div className="space-y-16">
    {/* Executive Leaders */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
      {filteredEx.filter(m => m.role === 'Chairman' || m.role === 'Secretary').map(member => (
        <div key={member.id} className="bg-white rounded-3xl overflow-hidden shadow-xl border border-gray-100 flex group hover:scale-[1.02] transition-transform">
          <div className="w-1/3 aspect-[3/4]">
            <img src={member.imageUrl} alt={member.name} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" />
          </div>
          <div className="w-2/3 p-6 flex flex-col justify-center">
            <span className="text-iei-accent font-bold text-xs uppercase tracking-widest">{member.role}</span>
            <h3 className="text-xl font-bold text-iei-primary mt-1 mb-2">{member.name}</h3>
            <p className="text-gray-500 text-sm font-medium mb-1">{member.designation}</p>
            <p className="text-gray-400 text-xs mb-4">{member.division} • {member.membershipType}</p>
            <a href={member.linkedIn || '#'} className="text-gray-300 hover:text-blue-600 transition-colors">
              <Linkedin size={20} />
            </a>
          </div>
        </div>
        
      ))}
    </div>

    {/* Committee Members */}
    <div>
      <h2 className="text-2xl font-bold text-gray-800 mb-8 border-l-4 border-iei-accent pl-4">Committee Members</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {filteredEx.filter(m => m.role === 'Committee Member').map(member => (
          <div key={member.id} className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 text-center hover:shadow-lg transition-shadow group">
            <h4 className="font-bold text-iei-primary">{member.name}</h4>
            <p className="text-gray-500 text-xs mt-1 mb-2">{member.designation}</p>
            <div className="bg-gray-50 rounded py-1 px-2 inline-block">
              <span className="text-[10px] text-gray-400 font-bold uppercase">{member.division}</span>
            </div>
          </div>
        ))}
      </div>
    </div>

    {/* Co‑Opted Members */}
    <div>
      <h2 className="text-2xl font-bold text-gray-800 mb-8 border-l-4 border-iei-accent pl-4">Co‑Opted Members</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {filteredEx.filter(m => m.role === 'Co Opted Member').map(member => (
          <div key={member.id} className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 text-center hover:shadow-lg transition-shadow group">
            <h4 className="font-bold text-iei-primary">{member.name}</h4>
            <p className="text-gray-500 text-xs mt-1 mb-2">{member.designation}</p>
            <div className="bg-gray-50 rounded py-1 px-2 inline-block">
              <span className="text-[10px] text-gray-400 font-bold uppercase">{member.division}</span>
            </div>
          </div>
        ))}
      </div>
    </div>

    {/* Ex‑Officio Members */}
    <div>
      <h2 className="text-2xl font-bold text-gray-800 mb-8 border-l-4 border-iei-accent pl-4">Ex‑Officio Members</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {filteredEx.filter(m => m.role.includes('TNSC') || m.role.includes('Imm.')).map(member => (
          <div key={member.id} className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 text-center hover:shadow-lg transition-shadow group">
            <h4 className="font-bold text-iei-primary">{member.name}</h4>
            <p className="text-gray-500 text-xs mt-1 mb-2">{member.role}</p>
            <div className="bg-gray-50 rounded py-1 px-2 inline-block">
              <span className="text-[10px] text-gray-400 font-bold uppercase">{member.division}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
) : (
  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
    {SUB_COMMITTEES.map((sub, i) => (
      <div key={i} className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
        <h3 className="text-xl font-bold text-iei-primary mb-6 flex items-center gap-3">
          <div className="w-2 h-8 bg-iei-accent rounded-full"></div>
          {sub.title}
        </h3>
        <div className="space-y-4">
          {sub.members.map((m, idx) => (
            <div key={idx} className="flex justify-between items-center p-3 rounded-xl bg-gray-50 border border-gray-100">
              <div>
                <p className="font-bold text-gray-800">{m.name}</p>
                <p className="text-xs text-gray-400">{m.membershipNo}</p>
              </div>
              <span className={`text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-tighter ${
                m.position === 'Chairman' ? 'bg-iei-primary text-white' : 
                m.position === 'Convener' ? 'bg-iei-accent text-white' : 
                'bg-gray-200 text-gray-600'
              }`}>
                {m.position}
              </span>
            </div>
          ))}
        </div>
      </div>
    ))}
  </div>
)}
</div>
);
  };
export default Committee;
