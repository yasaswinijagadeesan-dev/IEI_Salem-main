
import React, { useState } from 'react';
import { MOCK_GALLERY } from '../constants';
import { Download, Maximize2, X } from 'lucide-react';

const Gallery: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const categories = ['All', ...new Set(MOCK_GALLERY.map(item => item.category))];
  const filteredImages = activeCategory === 'All' 
    ? MOCK_GALLERY 
    : MOCK_GALLERY.filter(item => item.category === activeCategory);

  return (
    <div className="bg-white min-h-screen">
      <header className="bg-gray-50 py-24 text-center border-b">
        <h1 className="text-5xl font-bold text-iei-primary mb-4">Media Archive</h1>
        <p className="text-gray-500">Glimpses of excellence and institutional activities at Salem LC</p>
      </header>

      <div className="max-w-7xl mx-auto px-4 py-16">
        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-6 py-2 rounded-full text-xs font-bold border transition-all ${
                activeCategory === cat 
                ? 'bg-iei-primary border-iei-primary text-white shadow-lg' 
                : 'bg-white border-gray-200 text-gray-500 hover:border-iei-accent'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Masonry Grid Simulation */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
          {filteredImages.map(item => (
            <div 
              key={item.id} 
              className="relative group break-inside-avoid rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl transition-all cursor-pointer"
              onClick={() => setSelectedImage(item.imageUrl)}
            >
              <img src={item.imageUrl} alt={item.caption} className="w-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-iei-primary/90 via-iei-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <span className="text-iei-accent text-[10px] font-bold uppercase tracking-widest mb-1">{item.category} • {item.year}</span>
                <h4 className="text-white font-bold text-lg mb-4">{item.caption}</h4>
                <div className="flex gap-4">
                  <button className="bg-white/20 backdrop-blur-md p-2 rounded-full text-white hover:bg-white hover:text-iei-primary transition-all">
                    <Maximize2 size={18} />
                  </button>
                  <button className="bg-white/20 backdrop-blur-md p-2 rounded-full text-white hover:bg-white hover:text-iei-primary transition-all">
                    <Download size={18} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {selectedImage && (
        <div className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-4">
          <button className="absolute top-8 right-8 text-white p-2 hover:bg-white/10 rounded-full" onClick={() => setSelectedImage(null)}>
            <X size={32} />
          </button>
          <img src={selectedImage} alt="Large View" className="max-w-full max-h-[90vh] object-contain shadow-2xl" />
        </div>
      )}
    </div>
  );
};

export default Gallery;
