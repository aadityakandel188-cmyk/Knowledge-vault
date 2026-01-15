
import React from 'react';
import { Book } from '../types';

interface BookCardProps {
  book: Book;
}

const BookCard: React.FC<BookCardProps> = ({ book }) => {
  return (
    <div className="group relative bg-slate-900/40 border border-slate-800 rounded-xl overflow-hidden hover:border-cyan-500/50 transition-all duration-500 hover:-translate-y-1">
      {/* Glow Effect */}
      <div className="absolute inset-0 bg-gradient-to-t from-cyan-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"></div>
      
      {/* Cover Image Wrapper */}
      <div className="relative h-64 overflow-hidden">
        <img 
          src={book.coverImage} 
          alt={book.title}
          className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-100 group-hover:scale-110"
        />
        <div className="absolute top-4 right-4 bg-slate-950/80 backdrop-blur-md px-2 py-1 rounded text-[10px] font-mono text-cyan-400 border border-cyan-500/30">
          {book.year}
        </div>
        <div className="absolute bottom-4 left-4">
          <span className="bg-cyan-500 text-slate-950 text-[10px] font-black px-2 py-0.5 rounded tracking-tighter uppercase">
            {book.category}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-5 space-y-3">
        <div>
          <h3 className="text-lg font-bold text-white leading-tight group-hover:text-cyan-400 transition-colors line-clamp-1">
            {book.title}
          </h3>
          <p className="text-xs text-slate-500 font-mono italic">{book.author}</p>
        </div>
        
        <p className="text-slate-400 text-sm line-clamp-2 h-10">
          {book.description}
        </p>

        <div className="pt-2">
          <a 
            href={book.downloadUrl}
            className="flex items-center justify-center gap-2 w-full bg-slate-800 hover:bg-cyan-500 text-slate-300 hover:text-slate-950 py-2.5 rounded-lg text-xs font-black transition-all border border-slate-700 hover:border-cyan-400 uppercase tracking-widest"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a2 2 0 002 2h12a2 2 0 002-2v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
            </svg>
            Download PDF
          </a>
        </div>
      </div>
    </div>
  );
};

export default BookCard;
