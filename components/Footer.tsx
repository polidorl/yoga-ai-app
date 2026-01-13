import React from 'react';

export const Footer: React.FC = () => {
  return (
    // CAMBIO: Se eliminó 'mt-20'. Ahora el footer se apila naturalmente después del contenido.
    // El borde superior (border-t) servirá como divisor visual sutil.
    <footer className="bg-warm-beige/50 dark:bg-gray-900 border-t border-warm-beige dark:border-gray-800 py-12 px-4 sm:px-6 lg:px-12 mt-0">
      {/* CAMBIO: Aumento de max-w-1200px a max-w-[1920px] */}
      <div className="max-w-[1920px] mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="flex items-center gap-2">
          <span className="material-symbols-outlined text-sage text-2xl">filter_vintage</span>
          <h3 className="text-charcoal dark:text-white text-lg font-bold">YogaGuide</h3>
        </div>
        
        <p className="text-sm text-charcoal/50 dark:text-gray-500">© 2026 YogaGuide App. Diseñando para el equilibrio.</p>
        
        <div className="flex gap-6">
          {/* GitHub Link */}
          <a 
            href="https://github.com/polidorl/" 
            target="_blank" 
            rel="noopener noreferrer"
            title="Ver Código en GitHub"
            className="text-charcoal/40 hover:text-sage hover:scale-110 transition-all duration-200"
          >
            <span className="material-symbols-outlined">code</span>
          </a>

          {/* LinkedIn Link */}
          <a 
            href="https://www.linkedin.com/in/lisbeth-emperatriz-polidor-solano/" 
            target="_blank" 
            rel="noopener noreferrer"
            title="Mi Perfil Profesional"
            className="text-charcoal/40 hover:text-sage hover:scale-110 transition-all duration-200"
          >
            <span className="material-symbols-outlined">work</span>
          </a>

          {/* Email Link */}
          <a 
            href="mailto:polidor.lisbeth4@gmail.com" 
            title="Envíame un correo"
            className="text-charcoal/40 hover:text-sage hover:scale-110 transition-all duration-200"
          >
            <span className="material-symbols-outlined">mail</span>
          </a>
        </div>
      </div>
    </footer>
  );
};