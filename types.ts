export type CategoryType = 'Todos' | 'Dinámico' | 'Alineación' | 'Pasivo' | 'Espiritual';

export interface YogaStyle {
  id: string;
  name: string;
  shortDescription: string;
  fullDescription: string;
  category: Exclude<CategoryType, 'Todos'>;
  intensityLevel: number; // 0 to 100
  benefits: string[];
  imageUrl: string;
  videoUrl: string; // URL de YouTube para la clase práctica
  duration?: string; // Avg duration
}

export interface NavItem {
  label: string;
  href: string;
  icon?: string;
}