import React, { useState } from 'react';
import { useAuth } from '../contexts/AuthContext';

interface NavbarProps {
  onOpenProfile: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenProfile }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { user } = useAuth(); // Get user from context

  const handleScroll = (id: string) => {
    setIsMobileMenuOpen(false); // Close mobile menu if open
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="sticky top-0 z-40 bg-background-light/90 dark:bg-background-dark/90 backdrop-blur-md border-b border-warm-beige dark:border-gray-700 px-4 sm:px-6 lg:px-12 py-4 transition-all duration-300">
      {/* CAMBIO: Aumento de max-w-1200px a max-w-[1920px] para alinear con el grid */}
      <div className="max-w-[1920px] mx-auto flex items-center justify-between">
        <div
          className="flex items-center gap-2 cursor-pointer"
          onClick={() => handleScroll('inicio')}
        >
          <span className="material-symbols-outlined text-sage text-3xl animate-pulse">filter_vintage</span>
          <h2 className="text-charcoal dark:text-white text-xl font-extrabold tracking-tight">YogaGuide</h2>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-10">
          <button
            onClick={() => handleScroll('inicio')}
            className="text-sm font-semibold text-charcoal dark:text-gray-300 hover:text-sage transition-colors bg-transparent border-none cursor-pointer"
          >
            Inicio
          </button>
          <button
            onClick={() => handleScroll('clases')}
            className="text-sm font-semibold text-charcoal dark:text-gray-300 hover:text-sage transition-colors bg-transparent border-none cursor-pointer"
          >
            Clases
          </button>
          <div
            className="flex items-center gap-2 cursor-pointer group"
            onClick={onOpenProfile}
          >
            {user ? (
              <>
                <img
                  src="https://lh3.googleusercontent.com/ogw/AF2bZyiAZz7IWd1EecSdBxf2Qiv3QDLRb1oFLC8kgL_7rD3c8weP=s64-c-mo"
                  alt="Perfil"
                  className="w-8 h-8 rounded-full object-cover border border-sage group-hover:scale-110 transition-transform shadow-sm"
                />
                <span className="text-sm font-semibold text-charcoal dark:text-gray-300 group-hover:text-sage transition-colors">
                  {user.email?.split('@')[0]}
                </span>
              </>
            ) : (
              <span className="text-sm font-semibold text-primary hover:text-sage transition-colors border border-primary px-3 py-1 rounded-full">
                Iniciar Sesión
              </span>
            )}
          </div>
        </nav>

        {/* Mobile Toggle */}
        <div className="md:hidden">
          <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="p-2 text-charcoal dark:text-gray-300 hover:bg-warm-beige/50 rounded-full transition-colors">
            <span className="material-symbols-outlined">{isMobileMenuOpen ? 'close' : 'menu'}</span>
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-background-light dark:bg-background-dark border-b border-warm-beige dark:border-gray-700 p-6 flex flex-col gap-4 shadow-xl z-30 animate-in slide-in-from-top-2">
          <button
            onClick={() => handleScroll('inicio')}
            className="text-left text-base font-semibold text-charcoal dark:text-gray-300 hover:text-sage transition-colors"
          >
            Inicio
          </button>
          <button
            onClick={() => handleScroll('clases')}
            className="text-left text-base font-semibold text-charcoal dark:text-gray-300 hover:text-sage transition-colors"
          >
            Clases
          </button>
          <button
            onClick={() => {
              setIsMobileMenuOpen(false);
              onOpenProfile();
            }}
            className="text-left text-base font-semibold text-charcoal dark:text-gray-300 hover:text-sage transition-colors"
          >
            Perfil
          </button>
        </div>
      )}
    </header>
  );
};