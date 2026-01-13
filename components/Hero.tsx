import React from 'react';

export const Hero: React.FC = () => {
  const handleStartExploration = () => {
    const element = document.getElementById('clases');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    // CAMBIO: Eliminado mb-16 del section wrapper para controlarlo mejor en App.tsx si fuera necesario, o mantenerlo.
    // El div principal ahora es w-full y se le quitó el rounded-xl para ser "full bleed" (borde a borde).
    <section className="w-full bg-warm-beige dark:bg-gray-800/50 border-b border-warm-beige dark:border-gray-800">
      <div className="relative overflow-hidden w-full px-4 py-20 lg:py-28 flex flex-col items-center text-center shadow-inner">
        {/* Decorative Background Pattern */}
        <div 
          className="absolute inset-0 opacity-10 pointer-events-none" 
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, #9dc185 1px, transparent 0)`,
            backgroundSize: '40px 40px'
          }}
        ></div>
        
        {/* Contenedor de texto restringido para que no se lea incómodo en pantallas ultra anchas */}
        <div className="max-w-4xl mx-auto relative z-10">
            <h1 className="text-4xl lg:text-6xl 2xl:text-7xl font-extrabold text-charcoal dark:text-white mb-6 leading-tight tracking-tight">
              Encuentra tu Equilibrio Interior
            </h1>
            <p className="max-w-2xl mx-auto text-lg lg:text-xl text-charcoal/70 dark:text-gray-400 mb-10 leading-relaxed">
              Explora sesiones guiadas adaptadas a tu ritmo y espíritu. Descubre una práctica que se siente como volver a casa.
            </p>
            <button 
              onClick={handleStartExploration}
              className="bg-primary hover:bg-sage/90 text-white px-12 py-5 text-lg rounded-full font-bold shadow-lg shadow-sage/20 transition-all hover:-translate-y-1 hover:shadow-xl active:scale-95 cursor-pointer"
            >
              Comenzar Exploración
            </button>
        </div>
      </div>
    </section>
  );
};