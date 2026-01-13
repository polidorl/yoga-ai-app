import React, { useState, useRef, useEffect } from 'react';

interface RecommendationCard {
  title: string;
  imageUrl: string;
  videoUrl: string;
  category: string;
}

interface Message {
  id: string;
  text: string;
  sender: 'user' | 'bot';
  recommendation?: RecommendationCard;
}

export const AIAssistant: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 'welcome',
      text: '¡Namasté! Soy YogaBot 🧘‍♀️. Estoy aquí para guiarte. ¿Qué edad tienes o cómo te sientes hoy? (ej: "Tengo dolor de espalda" o "Tengo 65 años")',
      sender: 'bot'
    }
  ]);

  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping, isOpen]);

  const handleSendMessage = (e?: React.FormEvent) => {
    e?.preventDefault();
    if (!inputValue.trim()) return;

    // 1. Añadir mensaje del usuario
    const userMsg: Message = {
      id: Date.now().toString(),
      text: inputValue,
      sender: 'user'
    };

    setMessages(prev => [...prev, userMsg]);
    setInputValue("");
    setIsTyping(true);

    // 2. Simular "pensamiento" de la IA
    setTimeout(() => {
      const lowerInput = userMsg.text.toLowerCase();
      let botResponse: Message;
      const responseId = (Date.now() + 1).toString();

      // LÓGICA DE RESPUESTA
      // LÓGICA DE RESPUESTA MEJORADA
      if (lowerInput.match(/60|mayor|abuela|edad|senior|años|movilidad/)) {
        botResponse = {
          id: responseId,
          text: "Para esa edad maravillosa, la clave es la movilidad suave y el equilibrio seguro. Te he seleccionado una clase especial.",
          sender: 'bot',
          recommendation: {
            title: "Yoga Suave en Silla",
            category: "Movilidad Senior",
            imageUrl: "https://images.unsplash.com/photo-1575052814086-f385e2e2ad1b?q=80&w=1000&auto=format&fit=crop",
            videoUrl: "https://www.youtube.com/watch?v=kFhG-ZzLNN4"
          }
        };
      } else if (lowerInput.match(/espalda|dolor|estrés|lesión|duele|cansad|relaj|dormir|insomnio|paz|calma|ansiedad/)) {
        botResponse = {
          id: responseId,
          text: "Entiendo perfectamente. Para liberar tensión y encontrar calma profunda, te recomiendo esta práctica restaurativa.",
          sender: 'bot',
          recommendation: {
            title: "Relax Profundo y Espalda",
            category: "Terapéutico & Relax",
            imageUrl: "https://images.unsplash.com/photo-1603988363607-e1e4a66962c6?q=80&w=1000&auto=format&fit=crop",
            videoUrl: "https://www.youtube.com/watch?v=sTANio_2E0Q"
          }
        };
      } else if (lowerInput.match(/sudar|fuerza|tonificar|peso|adelgazar|activo|energía|fitness|power/)) {
        botResponse = {
          id: responseId,
          text: "¡Esa es la actitud! Si buscas energía y tonificación, esta clase de Vinyasa Power te hará sudar y sentirte increíble.",
          sender: 'bot',
          recommendation: {
            title: "Power Yoga Energizante",
            category: "Fitness & Fuerza",
            imageUrl: "https://images.unsplash.com/photo-1599901860904-17e6ed7083a0?q=80&w=1000&auto=format&fit=crop",
            videoUrl: "https://www.youtube.com/watch?v=lDbJdJWX82M"
          }
        };
      } else if (lowerInput.match(/flexibilidad|estirar|principiante|empezar|iniciar/)) {
        botResponse = {
          id: responseId,
          text: "Excelente elección. Para ganar flexibilidad y aprender las bases correctamente, esta clase de Hatha Suave es ideal.",
          sender: 'bot',
          recommendation: {
            title: "Hatha para Flexibilidad",
            category: "Principiantes",
            imageUrl: "https://images.unsplash.com/photo-1552196563-55cd4e45efb3?q=80&w=1000&auto=format&fit=crop",
            videoUrl: "https://www.youtube.com/watch?v=vd1j1nqHhuY"
          }
        };
      } else {
        botResponse = {
          id: responseId,
          text: "¡Entendido! Cuéntame un poco más para personalizar mi ayuda: ¿Buscas relajación 🌙, energía 🔥 o flexibilidad 🧘‍♀️?",
          sender: 'bot'
        };
      }

      setMessages(prev => [...prev, botResponse]);
      setIsTyping(false);
    }, 1500);
  };

  return (
    <>
      {/* Botón Flotante (FAB) */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`fixed bottom-6 right-6 z-50 p-4 rounded-full shadow-lg transition-all duration-300 transform hover:scale-110 flex items-center justify-center
          ${isOpen ? 'bg-charcoal rotate-90' : 'bg-gradient-to-r from-primary to-forest animate-pulse shadow-green-200'}
          text-white
        `}
      >
        <span className="material-symbols-outlined text-3xl">
          {isOpen ? 'close' : 'smart_toy'}
        </span>
      </button>

      {/* Ventana de Chat */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 w-[90vw] md:w-[380px] h-[500px] bg-white dark:bg-gray-900 rounded-2xl shadow-2xl z-50 flex flex-col overflow-hidden border border-warm-beige dark:border-gray-700 animate-in slide-in-from-bottom-10 fade-in duration-300">

          {/* Header */}
          <div className="bg-gradient-to-r from-primary/20 to-sage/20 p-4 border-b border-warm-beige dark:border-gray-800 flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-white dark:bg-gray-800 flex items-center justify-center shadow-sm">
              <span className="material-symbols-outlined text-primary text-xl">auto_awesome</span>
            </div>
            <div>
              <h3 className="font-bold text-charcoal dark:text-white text-sm">YogaBot Assistant</h3>
              <div className="flex items-center gap-1">
                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                <span className="text-xs text-charcoal/60 dark:text-gray-400">En línea</span>
              </div>
            </div>
          </div>

          {/* Cuerpo de Mensajes */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-background-light dark:bg-background-dark/50">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex flex-col ${msg.sender === 'user' ? 'items-end' : 'items-start'}`}
              >
                <div
                  className={`max-w-[85%] p-3 rounded-2xl text-sm leading-relaxed shadow-sm
                    ${msg.sender === 'user'
                      ? 'bg-primary text-white rounded-br-none'
                      : 'bg-white dark:bg-gray-800 text-charcoal dark:text-gray-200 border border-warm-beige dark:border-gray-700 rounded-bl-none'
                    }`}
                >
                  {msg.text}
                </div>

                {/* Tarjeta de Recomendación (Rich Media) */}
                {msg.recommendation && (
                  <div className="mt-2 w-[85%] bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-md border border-warm-beige dark:border-gray-700 animate-in zoom-in-95 duration-500">
                    <div className="h-28 overflow-hidden relative">
                      <img
                        src={msg.recommendation.imageUrl}
                        alt="Clase"
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          e.currentTarget.src = "https://images.unsplash.com/photo-1545205566-3da8d86b9c93?q=80&w=1000&auto=format&fit=crop"; // Fallback safe image
                          e.currentTarget.onerror = null; // Prevent infinite loop
                        }}
                      />
                      <div className="absolute inset-0 bg-black/20"></div>
                      <span className="absolute bottom-2 left-2 bg-black/60 text-white text-[10px] px-2 py-0.5 rounded backdrop-blur-sm uppercase font-bold tracking-wider">
                        {msg.recommendation.category}
                      </span>
                    </div>
                    <div className="p-3">
                      <h4 className="font-bold text-charcoal dark:text-white text-sm mb-2">{msg.recommendation.title}</h4>
                      <a
                        href={msg.recommendation.videoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block w-full text-center bg-primary/10 hover:bg-primary hover:text-white text-primary text-xs font-bold py-2 rounded-lg transition-colors"
                      >
                        Ver Clase Ahora
                      </a>
                    </div>
                  </div>
                )}
              </div>
            ))}

            {/* Indicador de escritura */}
            {isTyping && (
              <div className="flex items-start">
                <div className="bg-white dark:bg-gray-800 border border-warm-beige dark:border-gray-700 p-3 rounded-2xl rounded-bl-none flex gap-1 shadow-sm">
                  <span className="w-2 h-2 bg-charcoal/40 rounded-full animate-bounce [animation-delay:-0.3s]"></span>
                  <span className="w-2 h-2 bg-charcoal/40 rounded-full animate-bounce [animation-delay:-0.15s]"></span>
                  <span className="w-2 h-2 bg-charcoal/40 rounded-full animate-bounce"></span>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input Area */}
          <form onSubmit={handleSendMessage} className="p-3 bg-white dark:bg-gray-900 border-t border-warm-beige dark:border-gray-800 flex gap-2">
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder="Escribe 'dolor de espalda'..."
              className="flex-1 bg-background-light dark:bg-gray-800 text-charcoal dark:text-white text-sm rounded-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary border-none"
            />
            <button
              type="submit"
              disabled={!inputValue.trim()}
              className="p-2 bg-primary text-white rounded-full disabled:opacity-50 disabled:cursor-not-allowed hover:bg-sage transition-colors shadow-sm"
            >
              <span className="material-symbols-outlined text-xl">send</span>
            </button>
          </form>
        </div>
      )}
    </>
  );
};
