import React, { useEffect, useRef } from 'react';
import { YogaStyle } from '../types';

interface YogaModalProps {
  data: YogaStyle;
  onClose: () => void;
}

export const YogaModal: React.FC<YogaModalProps> = ({ data, onClose }) => {
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Close on escape key
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleEsc);
    // Prevent background scroll
    document.body.style.overflow = 'hidden';
    
    return () => {
      window.removeEventListener('keydown', handleEsc);
      document.body.style.overflow = 'unset';
    };
  }, [onClose]);

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
      onClose();
    }
  };

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-charcoal/60 backdrop-blur-md animate-in fade-in duration-200"
      onClick={handleBackdropClick}
    >
      <div 
        ref={modalRef}
        className="bg-white dark:bg-gray-900 w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-2xl shadow-2xl flex flex-col md:flex-row animate-in zoom-in-95 duration-300 no-scrollbar"
      >
        {/* Image Section */}
        <div className="w-full md:w-2/5 h-64 md:h-auto sticky top-0 md:relative">
           <img 
            src={data.imageUrl} 
            alt={data.name} 
            className="w-full h-full object-cover"
           />
           <button 
            onClick={onClose}
            className="absolute top-4 left-4 md:hidden bg-white/80 p-2 rounded-full shadow-lg text-charcoal hover:bg-white"
           >
             <span className="material-symbols-outlined select-none">arrow_back</span>
           </button>
        </div>

        {/* Content Section */}
        <div className="w-full md:w-3/5 p-8 md:p-12 relative">
          <button 
            onClick={onClose}
            className="hidden md:block absolute top-6 right-6 text-charcoal/40 hover:text-charcoal dark:text-gray-500 dark:hover:text-white transition-colors"
          >
            <span className="material-symbols-outlined text-3xl select-none">close</span>
          </button>

          <div className="flex items-center gap-3 mb-4">
             <span className="px-3 py-1 bg-primary/10 text-primary text-xs font-bold uppercase tracking-widest rounded-full">
               {data.category}
             </span>
             {/* Duration indicator removed per request */}
          </div>

          <h2 className="text-4xl font-extrabold text-charcoal dark:text-white mb-6 font-display">
            {data.name}
          </h2>

          <div className="space-y-6">
            <div>
              <h4 className="text-sm font-bold text-charcoal/40 dark:text-gray-500 uppercase mb-2">Descripción</h4>
              <p className="text-lg text-charcoal/80 dark:text-gray-300 leading-relaxed">
                {data.fullDescription}
              </p>
            </div>

            <div>
              <h4 className="text-sm font-bold text-charcoal/40 dark:text-gray-500 uppercase mb-3">Beneficios Clave</h4>
              <div className="flex flex-wrap gap-2">
                {data.benefits.map((benefit, idx) => (
                  <span key={idx} className="px-4 py-2 bg-warm-beige dark:bg-gray-800 rounded-lg text-sm font-medium text-charcoal dark:text-gray-300 flex items-center gap-2">
                    <span className="material-symbols-outlined text-base text-sage select-none leading-none">check_circle</span>
                    {benefit}
                  </span>
                ))}
              </div>
            </div>

            <div className="pt-4 border-t border-warm-beige dark:border-gray-800">
               <div className="flex justify-between items-center mb-2">
                 <span className="text-sm font-bold text-charcoal/60 dark:text-gray-400">Nivel de Intensidad</span>
                 <span className="text-lg font-bold text-primary">{data.intensityLevel}%</span>
               </div>
               <div className="h-2 w-full bg-warm-beige dark:bg-gray-800 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-primary rounded-full" 
                    style={{ width: `${data.intensityLevel}%` }}
                  ></div>
               </div>
               <p className="text-xs text-charcoal/40 mt-2 text-right">
                  {data.intensityLevel < 30 ? 'Relajado y Suave' : data.intensityLevel < 70 ? 'Esfuerzo Moderado' : 'Alta Intensidad'}
               </p>
            </div>

            <a 
              href={data.videoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full mt-6 bg-charcoal dark:bg-white text-white dark:text-charcoal py-4 rounded-xl font-bold shadow-lg hover:opacity-90 transition-opacity flex items-center justify-center gap-2 cursor-pointer"
            >
              <span className="material-symbols-outlined select-none">play_circle</span>
              Comenzar {data.name}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};