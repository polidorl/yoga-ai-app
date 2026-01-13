import React, { useEffect, useState } from 'react';

interface LandingPageProps {
    onEnter: () => void;
}

export const LandingPage: React.FC<LandingPageProps> = ({ onEnter }) => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setIsVisible(true);
    }, []);

    return (
        <div className="font-sans text-charcoal bg-warm-beige/20 min-h-screen overflow-x-hidden selection:bg-sage selection:text-white">

            {/* Decorative Background Elements */}
            <div className="fixed inset-0 z-0 pointer-events-none opacity-30">
                <div className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] bg-sage/20 rounded-full blur-[100px] animate-pulse duration-[5000ms]"></div>
                <div className="absolute bottom-[-10%] right-[-10%] w-[50vw] h-[50vw] bg-primary/20 rounded-full blur-[100px] animate-pulse duration-[7000ms]"></div>
            </div>

            {/* --- HERO SECTION --- */}
            <section className="relative z-10 min-h-screen flex flex-col items-center justify-center text-center px-6 pt-20">

                {/* Logo Animation */}
                <div className={`transition-all duration-1000 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                    <div className="flex items-center gap-2 justify-center mb-6">
                        <span className="material-symbols-outlined text-sage text-5xl animate-spin-slow">filter_vintage</span>
                        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-charcoal">YogaGuide</h1>
                    </div>
                </div>

                {/* Headline */}
                <div className={`max-w-4xl transition-all duration-1000 delay-300 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                    <h2 className="text-5xl md:text-7xl font-bold mb-6 leading-tight bg-gradient-to-r from-charcoal to-sage bg-clip-text text-transparent">
                        Tu Santuario Digital <br /> de Bienestar
                    </h2>
                    <p className="text-xl md:text-2xl text-charcoal/70 mb-10 max-w-2xl mx-auto font-light">
                        Encuentra tu equilibrio perfecto con rutinas personalizadas, seguimiento inteligente y una comunidad que respira contigo.
                    </p>
                </div>

                {/* CTA Button */}
                <div className={`transition-all duration-1000 delay-500 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                    <button
                        onClick={onEnter}
                        className="group relative px-10 py-5 bg-charcoal text-white text-xl font-bold rounded-full overflow-hidden shadow-2xl hover:shadow-sage/50 transition-all hover:-translate-y-1"
                    >
                        <span className="relative z-10 flex items-center gap-3">
                            Comenzar Mi Viaje
                            <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">arrow_forward</span>
                        </span>
                        <div className="absolute inset-0 bg-sage transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500"></div>
                    </button>
                    <p className="mt-4 text-sm text-charcoal/50 font-medium">✨ Únete a más de 10,000 yoguis hoy</p>
                </div>

                {/* Scroll Indicator */}
                <div className="absolute bottom-10 animate-bounce text-charcoal/30">
                    <span className="material-symbols-outlined text-3xl">keyboard_arrow_down</span>
                </div>
            </section>

            {/* --- BENEFITS BENTO GRID --- */}
            <section className="relative z-10 py-24 px-6 md:px-12 max-w-[1400px] mx-auto">
                <h3 className="text-3xl font-bold text-center mb-16 text-charcoal/80">Por qué elegir YogaGuide</h3>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[300px]">

                    {/* Card 1: Personalization (Large) */}
                    <div className="md:col-span-2 row-span-1 bg-white p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-all border border-warm-beige group overflow-hidden relative">
                        <div className="relative z-10">
                            <span className="material-symbols-outlined text-4xl text-primary mb-4 bg-primary/10 p-3 rounded-2xl">person_celebrate</span>
                            <h4 className="text-2xl font-bold mb-2">100% Personalizado</h4>
                            <p className="text-charcoal/60">Adaptamos cada sesión a tu nivel, estado de ánimo y tiempo disponible. Tu práctica evoluciona contigo.</p>
                        </div>
                        <div className="absolute right-[-50px] bottom-[-50px] w-64 h-64 bg-gradient-to-br from-primary/20 to-transparent rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700"></div>
                    </div>

                    {/* Card 2: AI Assistant */}
                    <div className="md:col-span-1 row-span-2 bg-charcoal text-white p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-all border border-gray-700 group overflow-hidden relative flex flex-col justify-between">
                        <div>
                            <span className="material-symbols-outlined text-4xl text-sage mb-4 bg-white/10 p-3 rounded-2xl">smart_toy</span>
                            <h4 className="text-2xl font-bold mb-2">YogaBot IA</h4>
                            <p className="text-gray-400">Tu asistente personal disponible 24/7 para recomendarte la clase perfecta según cómo te sientas.</p>
                        </div>
                        <div className="mt-6 bg-white/5 rounded-xl p-4 backdrop-blur-sm border border-white/10 transform translate-y-4 group-hover:translate-y-0 transition-transform">
                            <div className="flex gap-2 mb-2">
                                <div className="w-2 h-2 rounded-full bg-red-400"></div>
                                <div className="w-2 h-2 rounded-full bg-yellow-400"></div>
                                <div className="w-2 h-2 rounded-full bg-green-400"></div>
                            </div>
                            <p className="text-xs font-mono text-sage">"Hoy te recomiendo Yoga Restaurativo..."</p>
                        </div>
                    </div>

                    {/* Card 3: Community */}
                    <div className="md:col-span-1 row-span-1 bg-white p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-all border border-warm-beige group">
                        <span className="material-symbols-outlined text-4xl text-indigo-500 mb-4 bg-indigo-50 p-3 rounded-2xl">groups</span>
                        <h4 className="text-2xl font-bold mb-2">Comunidad Global</h4>
                        <p className="text-charcoal/60">Conéctate con personas que comparten tu pasión por el bienestar.</p>
                    </div>

                    {/* Card 4: Analytics */}
                    <div className="md:col-span-1 row-span-1 bg-white p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-all border border-warm-beige group">
                        <span className="material-symbols-outlined text-4xl text-orange-500 mb-4 bg-orange-50 p-3 rounded-2xl">monitoring</span>
                        <h4 className="text-2xl font-bold mb-2">Seguimiento Real</h4>
                        <p className="text-charcoal/60">Visualiza tu progreso con estadísticas detalladas.</p>
                    </div>

                </div>
            </section>

            {/* --- TESTIMONIALS --- */}
            <section className="bg-white py-24 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-sage to-transparent"></div>
                <div className="max-w-6xl mx-auto px-6">
                    <h3 className="text-3xl font-bold text-center mb-16 text-charcoal">Voces de Nuestra Comunidad</h3>
                    <div className="flex flex-col md:flex-row gap-8">
                        {[
                            { name: "Ana García", role: "Principiante", text: "Nunca pensé que podría hacer yoga hasta que probé esta app. ¡Increíble!", img: "https://i.pravatar.cc/150?u=a042581f4e29026704d" },
                            { name: "Carlos Ruiz", role: "Intermedio", text: "La personalización es real. Siento que tengo un instructor privado en casa.", img: "https://i.pravatar.cc/150?u=a042581f4e29026024d" },
                            { name: "Elena Chen", role: "Avanzada", text: "Las rutinas avanzadas son desafiantes y mantienen mi práctica fresca.", img: "https://i.pravatar.cc/150?u=a042581f4e29026703d" }
                        ].map((t, i) => (
                            <div key={i} className="flex-1 bg-warm-beige/30 p-8 rounded-2xl border border-warm-beige hover:-translate-y-2 transition-transform duration-300">
                                <div className="flex items-center gap-4 mb-4">
                                    <img src={t.img} alt={t.name} className="w-12 h-12 rounded-full" />
                                    <div>
                                        <h5 className="font-bold text-charcoal">{t.name}</h5>
                                        <span className="text-xs text-primary uppercase font-bold">{t.role}</span>
                                    </div>
                                </div>
                                <p className="text-charcoal/70 italic">"{t.text}"</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* --- FINAL CTA --- */}
            <section className="py-32 px-6 text-center bg-charcoal text-white relative overflow-hidden">
                <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
                <div className="relative z-10 max-w-3xl mx-auto">
                    <h2 className="text-4xl md:text-5xl font-bold mb-8">¿Listo para transformar tu vida?</h2>
                    <p className="text-xl text-gray-300 mb-10">
                        No necesitas equipo costoso ni experiencia previa. Solo a ti mismo.
                    </p>
                    <button
                        onClick={onEnter}
                        className="px-12 py-6 bg-white text-charcoal text-xl font-bold rounded-full hover:bg-sage hover:text-white transition-all transform hover:scale-105 shadow-2xl"
                    >
                        Empezar Gratis Ahora
                    </button>
                    <p className="mt-6 text-xs text-gray-500">Sin tarjeta de crédito requerida • Cancelación en cualquier momento</p>
                </div>
            </section>

            {/* FOOTER SIMPLE */}
            <footer className="bg-charcoal text-gray-500 py-8 text-center text-sm border-t border-gray-800">
                <p>&copy; 2026 YogaGuide. Todos los derechos reservados.</p>
            </footer>

        </div>
    );
};
