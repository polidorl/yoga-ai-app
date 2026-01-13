import React from 'react';
import { YogaStyle } from '../types';

interface YogaCardProps {
  data: YogaStyle;
  onClick: (data: YogaStyle) => void;
}

export const YogaCard: React.FC<YogaCardProps> = ({ data, onClick }) => {
  // Helper to determine badge color
  const getBadgeColor = (cat: string) => {
    switch (cat) {
      case 'Dinámico': return 'bg-forest/10 text-forest';
      case 'Alineación': return 'bg-sky/20 text-sky-700';
      case 'Pasivo': return 'bg-gold/20 text-orange-700';
      case 'Espiritual': return 'bg-rose/30 text-rose-700';
      default: return 'bg-gray-100 text-gray-600';
    }
  };

  return (
    <div 
      onClick={() => onClick(data)}
      className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-300 group border border-transparent hover:border-sage/20 cursor-pointer flex flex-col h-full hover:-translate-y-2 relative"
    >
      {/* 
        CAMBIO: Reemplazo de background-image por etiqueta <img> 
        Esto asegura que object-cover funcione perfectamente en todos los tamaños de rejilla
        y mejora la accesibilidad.
      */}
      <div className="aspect-video w-full overflow-hidden relative">
         <img 
            src={data.imageUrl} 
            alt={data.name}
            loading="lazy"
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
         />
         {/* Overlay oscuro sutil en hover */}
         <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
      </div>
      
      <div className="p-6 flex flex-col flex-grow">
        <div className="flex items-center justify-between mb-3">
          <span className={`px-3 py-1 text-[10px] font-bold uppercase tracking-widest rounded-full ${getBadgeColor(data.category)}`}>
            {data.category}
          </span>
          <button 
            className="material-symbols-outlined text-charcoal/30 hover:text-rose-500 hover:scale-110 transition-all active:scale-90"
            onClick={(e) => { e.stopPropagation(); /* prevent card click */ }}
          >
            favorite
          </button>
        </div>
        
        <h3 className="text-xl font-bold text-charcoal dark:text-white mb-2 group-hover:text-sage transition-colors">
          {data.name}
        </h3>
        
        <p className="text-sm text-charcoal/60 dark:text-gray-400 line-clamp-3 mb-6 flex-grow">
          {data.shortDescription}
        </p>
        
        <div className="space-y-2 mt-auto">
          <div className="flex justify-between text-[11px] font-bold text-charcoal/50 dark:text-gray-500 uppercase tracking-tighter">
            <span>Nivel de Intensidad</span>
            <span>{data.intensityLevel}%</span>
          </div>
          <div className="h-1.5 w-full bg-warm-beige dark:bg-gray-700 rounded-full overflow-hidden">
            <div 
              className="h-full bg-primary rounded-full transition-all duration-1000 ease-out group-hover:brightness-110" 
              style={{ width: `${data.intensityLevel}%` }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
};