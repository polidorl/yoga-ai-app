import React, { useState, useMemo } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { FilterBar } from './components/FilterBar';
import { YogaCard } from './components/YogaCard';
import { Footer } from './components/Footer';
import { YogaModal } from './components/YogaModal';
import { ProfileModal } from './components/ProfileModal';
import { AIAssistant } from './components/AIAssistant';
import { yogaData } from './data';
import { CategoryType, YogaStyle } from './types';

import { LandingPage } from './components/LandingPage';

const App: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<CategoryType>('Todos');
  const [selectedYoga, setSelectedYoga] = useState<YogaStyle | null>(null);
  const [isProfileOpen, setIsProfileOpen] = useState(false);

  // Nuevo estado para controlar la Landing Page
  const [hasEntered, setHasEntered] = useState(false);

  // Filter data logic
  const filteredData = useMemo(() => {
    if (selectedCategory === 'Todos') return yogaData;
    return yogaData.filter(item => item.category === selectedCategory);
  }, [selectedCategory]);

  if (!hasEntered) {
    return <LandingPage onEnter={() => setHasEntered(true)} />;
  }

  return (
    <div className="flex flex-col min-h-screen relative overflow-x-hidden animate-in fade-in duration-700">
      <Navbar onOpenProfile={() => setIsProfileOpen(true)} />

      {/* 
        CAMBIO 1: Layout Principal 
        Eliminamos restricciones de max-width en el contenedor principal (<main>) 
        para permitir que el Hero y el Footer toquen los bordes.
      */}
      <main className="flex-1 w-full">
        <div id="inicio">
          <Hero />
        </div>

        {/* 
          CAMBIO 2: Contenedor de Contenido
          - pt-12: Mantiene espacio arriba (separación del Hero).
          - pb-10: Reduce el espacio abajo (antes del Footer) para que no se vea desconectado.
          - Antes era py-12 lo que sumado al mt-20 del footer creaba un hueco enorme.
        */}
        <div className="max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-12 pt-12 pb-10">
          <FilterBar
            selectedCategory={selectedCategory}
            onSelectCategory={setSelectedCategory}
          />

          {/* 
            CAMBIO 3: Grid Responsivo Avanzado
            - Mobile: 1 col
            - Tablet: 2 cols
            - Laptop (lg): 3 cols
            - Desktop (xl): 4 cols
            - Pantallas 2K/4K (2xl): 5 cols
          */}
          <section id="clases" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-6 xl:gap-8 min-h-[500px] scroll-mt-28">
            {filteredData.map((yoga) => (
              <YogaCard
                key={yoga.id}
                data={yoga}
                onClick={(data) => setSelectedYoga(data)}
              />
            ))}

            {filteredData.length === 0 && (
              <div className="col-span-full flex flex-col items-center justify-center text-center py-20 text-charcoal/40">
                <span className="material-symbols-outlined text-5xl mb-4">search_off</span>
                <p>No se encontraron clases en esta categoría.</p>
              </div>
            )}
          </section>
        </div>
      </main>

      <Footer />

      {/* Feature: AI Yoga Assistant */}
      <AIAssistant />

      {/* Modal Overlay for Yoga Details */}
      {selectedYoga && (
        <YogaModal
          data={selectedYoga}
          onClose={() => setSelectedYoga(null)}
        />
      )}

      {/* Modal Overlay for Profile */}
      {isProfileOpen && (
        <ProfileModal
          onClose={() => setIsProfileOpen(false)}
        />
      )}
    </div>
  );
};

export default App;