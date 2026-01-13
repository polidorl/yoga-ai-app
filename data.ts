import { YogaStyle } from './types';

export const yogaData: YogaStyle[] = [
  {
    id: '1',
    name: 'Vinyasa',
    shortDescription: 'Movimiento fluido sincronizado con la respiración para crear una meditación en movimiento.',
    fullDescription: 'Vinyasa es un estilo de yoga caracterizado por encadenar posturas de manera que te muevas de una a otra sin problemas, utilizando la respiración. Comúnmente conocido como yoga "flow", a veces se confunde con el "power yoga". Las clases de Vinyasa ofrecen una variedad de posturas y no hay dos clases exactamente iguales.',
    category: 'Dinámico',
    intensityLevel: 80,
    benefits: ['Mejora la salud cardiovascular', 'Construye fuerza y resistencia', 'Reduce el estrés'],
    imageUrl: 'https://images.unsplash.com/photo-1695795749640-4f31c388b476?q=80&w=687&auto=format&fit=crop',
    duration: '60-75 min',
    videoUrl: 'https://www.youtube.com/watch?v=KODMk5HxczI'
  },
  {
    id: '2',
    name: 'Ashtanga',
    shortDescription: 'Una secuencia rigurosa y estructurada de posturas perfecta para generar calor interno.',
    fullDescription: 'El yoga Ashtanga implica una secuencia de posturas físicamente muy exigente, por lo que este estilo definitivamente no es para principiantes. Lleva años dominarlo. Implica sincronizar la respiración con una serie progresiva de posturas, un proceso que produce un intenso calor interno y un sudor profuso y purificador que desintoxica músculos y órganos.',
    category: 'Dinámico',
    intensityLevel: 95,
    benefits: ['Fuerza central (Core)', 'Tonificación muscular', 'Purificación interna'],
    imageUrl: 'https://images.unsplash.com/photo-1717821681365-36b0da044a75?q=80&w=1074&auto=format&fit=crop',
    duration: '90 min',
    videoUrl: 'https://www.youtube.com/watch?v=zYQSfHXWAS8'
  },
  {
    id: '3',
    name: 'Bikram',
    shortDescription: 'Una secuencia fija de 26 posturas practicadas en una habitación con calefacción.',
    fullDescription: 'El yoga Bikram es un sistema sintetizado a partir de técnicas tradicionales de hatha yoga. Todas las clases de Bikram Yoga duran 90 minutos y consisten en la misma serie de 26 posturas, incluidos dos ejercicios de respiración. Se practica idealmente en una habitación calentada a 40°C con una humedad del 40%.',
    category: 'Dinámico',
    intensityLevel: 90,
    benefits: ['Desintoxicación', 'Flexibilidad', 'Pérdida de peso'],
    imageUrl: 'https://images.unsplash.com/photo-1599447292325-2cffaa79bcbb?q=80&w=1106&auto=format&fit=crop',
    duration: '90 min',
    videoUrl: 'https://www.youtube.com/watch?v=5tIGrEdjwYw'
  },
  {
    id: '4',
    name: 'Power Yoga',
    shortDescription: 'Enfoque basado en el fitness del estilo vinyasa con énfasis en la fuerza.',
    fullDescription: 'Power yoga es un término general utilizado para describir un enfoque vigoroso y basado en el fitness del yoga estilo vinyasa. Aunque muchos lo consideran "yoga de gimnasio", este estilo se modeló originalmente en el método Ashtanga. Incorpora el atletismo del Ashtanga, incluyendo muchos vinyasas, pero da a cada instructor la flexibilidad de enseñar posturas en cualquier orden.',
    category: 'Dinámico',
    intensityLevel: 85,
    benefits: ['Quema de calorías', 'Masa muscular magra', 'Resistencia'],
    imageUrl: 'https://images.unsplash.com/photo-1767611121720-25180d5b5a1e?q=80&w=1170&auto=format&fit=crop ',
    duration: '60 min',
    videoUrl: 'https://www.youtube.com/watch?v=lDbJdJWX82M'
  },
  {
    id: '5',
    name: 'Hatha',
    shortDescription: 'Enfoque en posturas físicas y técnicas de respiración para una fuerza fundamental.',
    fullDescription: 'Hatha yoga es un término genérico que se refiere a cualquier tipo de yoga que enseña posturas físicas. Casi todos los tipos de clases de yoga enseñados en Occidente son Hatha yoga. Cuando una clase se comercializa como Hatha, generalmente significa que obtendrás una introducción suave a las posturas de yoga más básicas. Probablemente no sudes mucho, pero terminarás sintiéndote más relajado y suelto.',
    category: 'Alineación',
    intensityLevel: 50,
    benefits: ['Mejora de la postura', 'Equilibrio', 'Relajación'],
    imageUrl: 'https://images.unsplash.com/photo-1667890786022-83bca6c4f4c2?q=80&w=687&auto=format&fit=crop ',
    duration: '60 min',
    videoUrl: 'https://www.youtube.com/watch?v=vd1j1nqHhuY'
  },
  {
    id: '6',
    name: 'Iyengar',
    shortDescription: 'Precisión y alineación estructural del cuerpo mediante el uso de accesorios.',
    fullDescription: 'El yoga Iyengar es un estilo muy meticuloso, con la máxima atención puesta en encontrar la alineación adecuada en una postura. Para ayudar a cada estudiante a encontrar la alineación correcta, un estudio de Iyengar está equipado con una amplia gama de accesorios de yoga: bloques, mantas, correas, sillas y cojines.',
    category: 'Alineación',
    intensityLevel: 40,
    benefits: ['Alineación estructural', 'Recuperación de lesiones', 'Conciencia corporal'],
    imageUrl: 'https://plus.unsplash.com/premium_photo-1664442990583-43a42393fd87?q=80&w=687&auto=format&fit=crop',
    duration: '75 min',
    videoUrl: 'https://www.youtube.com/watch?v=NWx0ViIxpM4'
  },
  {
    id: '7',
    name: 'Yin Yoga',
    shortDescription: 'Estiramientos profundos y posturas de suelo sostenidas dirigidas al tejido conectivo.',
    fullDescription: 'El Yin yoga es un estilo de ritmo lento con posturas, o asanas, que se mantienen durante períodos de tiempo más largos (de 45 segundos a dos minutos para principiantes; más de cinco minutos para avanzados). Las posturas de Yin yoga aplican un estrés moderado a los tejidos conectivos del cuerpo (tendones, fascia y ligamentos) con el objetivo de aumentar la circulación en las articulaciones y mejorar la flexibilidad.',
    category: 'Pasivo',
    intensityLevel: 20,
    benefits: ['Movilidad articular', 'Liberación de fascia', 'Calmar la mente'],
    imageUrl: 'https://images.unsplash.com/photo-1552196563-55cd4e45efb3?q=80&w=1026&auto=format&fit=crop',
    duration: '60-90 min',
    videoUrl: 'https://www.youtube.com/watch?v=fppKVWZl5d4'
  },
  {
    id: '8',
    name: 'Restaurativo',
    shortDescription: 'Práctica completamente pasiva centrada en la relajación y la regulación del sistema nervioso.',
    fullDescription: 'El yoga restaurativo es una forma deliciosa de simplemente relajarse y calmar los nervios alterados. Las clases restaurativas utilizan cojines, mantas y bloques para apoyar a los estudiantes en posturas pasivas para que el cuerpo pueda experimentar los beneficios de una postura sin tener que ejercer ningún esfuerzo. Una buena clase restaurativa es más rejuvenecedora que una siesta.',
    category: 'Pasivo',
    intensityLevel: 10,
    benefits: ['Reducción del estrés', 'Mejor sueño', 'Regulación nerviosa'],
    imageUrl: 'https://images.unsplash.com/photo-1767611115202-78fc7374286e?q=80&w=1740&auto=format&fit=crop',
    duration: '60 min',
    videoUrl: 'https://www.youtube.com/watch?v=bbFWuI4jDLo'
  },
  {
    id: '9',
    name: 'Yoga Nidra',
    shortDescription: 'Sueño yóguico: un estado de conciencia entre la vigilia y el sueño.',
    fullDescription: 'Yoga Nidra, o "sueño yóguico", es una técnica de meditación inmensamente poderosa y una de las prácticas de yoga más fáciles de desarrollar y mantener. Mientras el practicante descansa cómodamente en Savasana (postura del cadáver), esta meditación sistemática te lleva a través de las cinco capas del ser, dejándote con una sensación de plenitud.',
    category: 'Espiritual',
    intensityLevel: 5,
    benefits: ['Relajación profunda', 'Liberación de traumas', 'Creatividad mejorada'],
    imageUrl: 'https://images.unsplash.com/photo-1758274534605-0b1e206b4724?q=80&w=1331&auto=format&fit=crop',
    duration: '45-60 min',
    videoUrl: 'https://www.youtube.com/watch?v=xYaNZ1QbFnM'
  },
  {
    id: '10',
    name: 'Kundalini',
    shortDescription: 'Despertar la energía a través de cantos específicos, meditación y trabajo de respiración.',
    fullDescription: 'El Kundalini Yoga es a partes iguales espiritual y físico. Este estilo trata sobre liberar la energía kundalini en tu cuerpo que se dice está atrapada, o enrollada, en la base de la columna. Estas clases son bastante intensas y pueden implicar cantos, mantras y meditación. A menudo se le llama el "yoga de la conciencia".',
    category: 'Espiritual',
    intensityLevel: 60,
    benefits: ['Despertar espiritual', 'Aumento de energía', 'Claridad mental'],
    imageUrl: 'https://images.unsplash.com/photo-1606487704494-4e2fa9969cb5?q=80&w=735&auto=format&fit=crop',
    duration: '90 min',
    videoUrl: 'https://www.youtube.com/watch?v=fPFz0DUL1tE'
  }
];