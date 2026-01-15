
import React, { useState } from 'react';
import AirflowSimulator from './AirflowSimulator';
import RangeCalculator from './RangeCalculator';
import BookCard from './BookCard';
import { BOOKS_DATA } from '../data/books';
import { Category } from '../types';

const AeroEVSuite: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'Aero' | 'EV'>('Aero');

  const aeroCategories: Category[] = ['Fluid Mechanics', 'Cd Optimization', 'Wind Tunnel Testing', 'Airfoil Design'];
  const evCategories: Category[] = ['BMS', 'High-Voltage Safety', 'Regenerative Braking', 'Lithium-Ion Chemistry'];

  const filteredBooks = BOOKS_DATA.filter(b => 
    activeTab === 'Aero' ? aeroCategories.includes(b.category) : evCategories.includes(b.category)
  );

  return (
    <div className="space-y-12 py-10">
      {/* Header */}
      <div className="border-b border-cyan-500/20 pb-6">
        <h2 className="text-3xl font-black text-white italic tracking-tighter">
          AERO-EV <span className="text-cyan-400">ENGINEERING SUITE</span>
        </h2>
        <p className="text-slate-500 font-mono text-xs mt-2 uppercase tracking-widest">
          High-performance integration for next-generation mobility systems.
        </p>
      </div>

      {/* Main Grid */}
      <div className="grid lg:grid-cols-12 gap-10">
        {/* Left Control Column */}
        <div className="lg:col-span-4 space-y-8">
          <div className="flex p-1 bg-slate-900 rounded-lg border border-slate-800">
            <button 
              onClick={() => setActiveTab('Aero')}
              className={`flex-1 py-2 text-xs font-bold uppercase rounded-md transition-all ${activeTab === 'Aero' ? 'bg-cyan-500 text-slate-950 shadow-lg' : 'text-slate-500 hover:text-white'}`}
            >
              Aerodynamics
            </button>
            <button 
              onClick={() => setActiveTab('EV')}
              className={`flex-1 py-2 text-xs font-bold uppercase rounded-md transition-all ${activeTab === 'EV' ? 'bg-cyan-500 text-slate-950 shadow-lg' : 'text-slate-500 hover:text-white'}`}
            >
              Electric Drive
            </button>
          </div>

          <div className="space-y-4">
            <h3 className="text-xs font-mono text-cyan-500 uppercase">System Visualizers</h3>
            <AirflowSimulator />
            <RangeCalculator />
          </div>
        </div>

        {/* Right Asset Column */}
        <div className="lg:col-span-8">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-sm font-mono text-white uppercase border-l-2 border-cyan-500 pl-3">Technical Assets: {activeTab.toUpperCase()}</h3>
            <div className="flex gap-2">
              {(activeTab === 'Aero' ? aeroCategories : evCategories).map(cat => (
                <span key={cat} className="text-[9px] bg-slate-800 text-slate-400 px-2 py-1 rounded border border-slate-700 uppercase">
                  {cat}
                </span>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {filteredBooks.map(book => (
              <BookCard key={book.id} book={book} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AeroEVSuite;
