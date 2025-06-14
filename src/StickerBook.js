import React from 'react';
import { BookOpen, Home, Star } from 'lucide-react';

export function StickerBook({ unlockedStickers, onExit }) {
  const hasStickers = unlockedStickers && unlockedStickers.length > 0;

  return (
    <div className="text-center animate-fade-in">
      <div className="flex justify-between items-center mb-4">
        <div className="flex items-center">
          <BookOpen className="w-8 h-8 text-orange-500" />
          <h1 className="text-2xl md:text-3xl font-bold ml-3 text-orange-800">My Sticker Book</h1>
        </div>
        <button onClick={onExit} className="p-2 rounded-full hover:bg-orange-100 transition">
          <Home className="w-6 h-6 text-orange-600"/>
        </button>
      </div>

      <p className="text-slate-600 mb-6">Here are all the amazing stickers you've collected. Keep playing to earn more!</p>

      <div className="p-4 bg-amber-50 border-2 border-dashed border-amber-300 rounded-lg min-h-[300px]">
        {hasStickers ? (
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-4">
            {unlockedStickers.map(sticker => (
              <div key={sticker.id} className="p-2 bg-white rounded-lg shadow-sm flex flex-col items-center animate-fade-in">
                <img src={sticker.image} alt={sticker.name} className="w-20 h-20 object-contain" />
                <p className="text-xs mt-2 font-semibold text-slate-700">{sticker.name}</p>
              </div>
            ))}
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center h-full pt-10">
            <Star className="w-16 h-16 text-slate-300 mb-4" />
            <p className="font-bold text-slate-500">Your sticker book is empty!</p>
            <p className="text-sm text-slate-400">Play some quizzes to earn your first sticker.</p>
          </div>
        )}
      </div>
      
       <button 
          onClick={onExit} 
          className="mt-6 bg-teal-500 text-white font-bold py-3 px-8 rounded-lg shadow-md hover:bg-teal-600 transition-all transform hover:scale-105 flex items-center mx-auto"
      >
          Find More Games
      </button>
    </div>
  );
}
