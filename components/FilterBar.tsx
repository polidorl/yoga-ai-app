import React from 'react';
import { CategoryType } from '../types';

interface FilterBarProps {
  selectedCategory: CategoryType;
  onSelectCategory: (category: CategoryType) => void;
}

const categories: CategoryType[] = ['Todos', 'Dinámico', 'Alineación', 'Pasivo', 'Espiritual'];

export const FilterBar: React.FC<FilterBarProps> = ({ selectedCategory, onSelectCategory }) => {
  return (
    <section className="mb-12 sticky top-[80px] z-30 py-4 bg-background-light/95 dark:bg-background-dark/95 backdrop-blur-sm -mx-6 px-6 md:mx-0 md:px-0">
      <div className="flex items-center justify-center gap-3 flex-wrap">
        {categories.map((cat) => {
          const isActive = selectedCategory === cat;
          return (
            <button
              key={cat}
              onClick={() => onSelectCategory(cat)}
              className={`px-6 py-2.5 rounded-full font-bold text-sm shadow-sm transition-all duration-300 ease-out 
                ${isActive 
                  ? 'bg-primary text-white scale-105 shadow-md' 
                  : 'bg-white dark:bg-gray-800 border border-warm-beige dark:border-gray-700 text-charcoal dark:text-gray-300 hover:border-sage hover:text-sage hover:-translate-y-0.5'
                }`}
            >
              {cat}
            </button>
          );
        })}
      </div>
    </section>
  );
};