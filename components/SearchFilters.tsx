
import React from 'react';
import { Category } from '../types';

interface SearchFiltersProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  selectedCategory: Category;
  setSelectedCategory: (category: Category) => void;
}

const CATEGORIES: Category[] = ['All', 'AI', 'Aerospace', 'Recycling', 'Solar Energy', 'Programming', 'Life Helper'];

const SearchFilters: React.FC<SearchFiltersProps> = ({ 
  searchQuery, 
  setSearchQuery, 
  selectedCategory, 
  setSelectedCategory 
}) => {
  return (
    <div className="space-y-6 mb-12">
      {/* Search Bar */}
      <div className="relative group max-w-3xl mx-auto">
        <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
        <div className="relative flex items-center bg-slate-900 border border-slate-700 rounded-lg overflow-hidden h-14">
          <div className="pl-4 text-cyan-500">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
          <input
            type="text"
            placeholder="Query repository by title, author, or keyword..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-transparent px-4 py-2 text-white placeholder-slate-500 focus:outline-none font-mono"
          />
          {searchQuery && (
            <button 
              onClick={() => setSearchQuery('')}
              className="pr-4 text-slate-500 hover:text-white"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l18 18" />
              </svg>
            </button>
          )}
        </div>
      </div>

      {/* Category Tabs */}
      <div className="flex flex-wrap justify-center gap-3">
        {CATEGORIES.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-5 py-2 rounded-full text-xs font-bold tracking-wider transition-all duration-300 border ${
              selectedCategory === cat
                ? 'bg-cyan-500 border-cyan-400 text-slate-950 electric-glow'
                : 'bg-slate-900/50 border-slate-700 text-slate-400 hover:border-cyan-500/50 hover:text-cyan-400'
            }`}
          >
            {cat.toUpperCase()}
          </button>
        ))}
      </div>
    </div>
  );
};

export default SearchFilters;
