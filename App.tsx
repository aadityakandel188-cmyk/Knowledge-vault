
import React, { useState, useMemo } from 'react';
import Navbar from './components/Navbar';
import SearchFilters from './components/SearchFilters';
import BookCard from './components/BookCard';
import AIAssistant from './components/AIAssistant';
import AeroEVSuite from './components/AeroEVSuite';
import { BOOKS_DATA } from './data/books';
import { Category } from './types';

const App: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<Category>('All');
  const [view, setView] = useState<'Library' | 'AeroEV'>('Library');

  // Efficient memoized filtering for main library
  const filteredBooks = useMemo(() => {
    return BOOKS_DATA.filter(book => {
      const matchesSearch = 
        book.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
        book.author.toLowerCase().includes(searchQuery.toLowerCase()) ||
        book.description.toLowerCase().includes(searchQuery.toLowerCase());
      
      const matchesCategory = selectedCategory === 'All' || book.category === selectedCategory;
      
      return matchesSearch && matchesCategory;
    });
  }, [searchQuery, selectedCategory]);

  return (
    <div className="min-h-screen pb-20 selection:bg-cyan-500 selection:text-slate-950 bg-slate-950">
      <Navbar />
      
      {/* Blueprint Sub-nav */}
      <div className="bg-slate-900/50 border-b border-slate-800 py-3">
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          <div className="flex gap-4">
            <button 
              onClick={() => setView('Library')}
              className={`text-[10px] font-mono tracking-widest uppercase transition-colors ${view === 'Library' ? 'text-cyan-400 border-b border-cyan-400' : 'text-slate-500 hover:text-white'}`}
            >
              [ Main_Repository ]
            </button>
            <button 
              onClick={() => setView('AeroEV')}
              className={`text-[10px] font-mono tracking-widest uppercase transition-colors ${view === 'AeroEV' ? 'text-cyan-400 border-b border-cyan-400' : 'text-slate-500 hover:text-white'}`}
            >
              [ Aero-EV_Suite_v2 ]
            </button>
          </div>
          <div className="hidden sm:block text-[10px] font-mono text-slate-700">
            SYSTEM_TIME: {new Date().toLocaleTimeString()} // SECURITY: LEVEL_4
          </div>
        </div>
      </div>

      <main className="max-w-7xl mx-auto px-6">
        {view === 'Library' ? (
          <>
            {/* Hero Section */}
            <div className="text-center space-y-4 pt-16 mb-16">
              <h2 className="text-4xl md:text-6xl font-black text-white tracking-tight leading-none">
                CURATING THE <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600">FRONTIERS OF HUMANITY</span>
              </h2>
              <p className="text-slate-500 font-mono text-sm max-w-2xl mx-auto">
                A secured archival node for high-level research in Aerospace, Artificial Intelligence, and Sustainable Systems. Restricted access.
              </p>
            </div>

            {/* Interactive Controls */}
            <SearchFilters 
              searchQuery={searchQuery}
              setSearchQuery={setSearchQuery}
              selectedCategory={selectedCategory}
              setSelectedCategory={setSelectedCategory}
            />

            {/* Results Info */}
            <div className="flex justify-between items-center mb-8 border-l-2 border-cyan-500 pl-4 py-1">
              <div className="flex gap-4">
                <span className="text-[10px] text-slate-500 uppercase tracking-widest font-bold">STATUS: STABLE</span>
                <span className="text-[10px] text-slate-500 uppercase tracking-widest font-bold">ENTRIES: {filteredBooks.length}</span>
              </div>
              <div className="text-[10px] text-cyan-500/50 font-mono uppercase">
                Location: Cluster-09 // Sector-X
              </div>
            </div>

            {/* Grid Layout */}
            {filteredBooks.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                {filteredBooks.map((book) => (
                  <BookCard key={book.id} book={book} />
                ))}
              </div>
            ) : (
              <div className="py-20 text-center border-2 border-dashed border-slate-800 rounded-3xl">
                <p className="text-slate-500 font-mono text-sm">No assets found matching your encryption keys.</p>
                <button 
                  onClick={() => {setSearchQuery(''); setSelectedCategory('All');}}
                  className="mt-4 text-cyan-400 hover:text-cyan-300 text-xs font-bold underline underline-offset-4"
                >
                  RESET FILTERS
                </button>
              </div>
            )}
          </>
        ) : (
          <AeroEVSuite />
        )}
      </main>

      {/* Floating Elements */}
      <AIAssistant />

      {/* Footer Branding */}
      <footer className="mt-20 border-t border-slate-800 py-10 text-center">
        <p className="text-slate-600 text-[10px] font-mono tracking-widest uppercase">
          Proprietary System of Knowledge Vault Corp © 2025 // Unauthorized Duplication is Prohibited
        </p>
      </footer>
    </div>
  );
};

export default App;
