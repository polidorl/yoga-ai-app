import React, { useEffect, useRef, useState } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { supabase } from '../supabaseClient';
import { yogaData } from '../data';

interface ProfileModalProps {
  onClose: () => void;
}

type UserLevel = 'Principiante' | 'Intermedio' | 'Avanzado';

interface Routine {
  id: string;
  name: string;
  poses: string[];
  created_at: string;
}

export const ProfileModal: React.FC<ProfileModalProps> = ({ onClose }) => {
  const { user, signOut } = useAuth();
  const modalRef = useRef<HTMLDivElement>(null);

  // Auth States
  const [authMode, setAuthMode] = useState<'login' | 'register'>('login');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [authError, setAuthError] = useState<string | null>(null);
  const [authLoading, setAuthLoading] = useState(false);

  // App States
  const [activeTab, setActiveTab] = useState<'progress' | 'routines'>('progress');
  const [routines, setRoutines] = useState<Routine[]>([]);
  const [newRoutineName, setNewRoutineName] = useState('');
  const [selectedPoses, setSelectedPoses] = useState<string[]>([]);
  const [isCreatingRoutine, setIsCreatingRoutine] = useState(false);
  const [routineLoading, setRoutineLoading] = useState(false);

  // Existing Level Logic
  const [imageError, setImageError] = useState(false);
  const [userLevel, setUserLevel] = useState<UserLevel>('Principiante');

  const levelData = {
    Principiante: {
      label: "Yogi Principiante",
      classes: 0,
      minutes: 0,
      color: "text-charcoal/50 dark:text-gray-400"
    },
    Intermedio: {
      label: "Yogi Intermedio",
      classes: 12,
      minutes: 540,
      color: "text-primary"
    },
    Avanzado: {
      label: "Yogi Avanzado",
      classes: 45,
      minutes: 2700,
      color: "text-indigo-500"
    }
  };

  useEffect(() => {
    if (user) {
      fetchRoutines();
    }
  }, [user]);

  const fetchRoutines = async () => {
    if (!user) return;
    const { data, error } = await supabase
      .from('routines')
      .select('*')
      .order('created_at', { ascending: false });

    if (data) setRoutines(data);
  };

  const handleAuth = async (e: React.FormEvent) => {
    e.preventDefault();
    setAuthLoading(true);
    setAuthError(null);
    try {
      if (authMode === 'login') {
        const { error } = await supabase.auth.signInWithPassword({ email, password });
        if (error) throw error;
      } else {
        const { error } = await supabase.auth.signUp({ email, password });
        if (error) throw error;
        alert('Registro exitoso! Ya puedes iniciar sesión.');
        setAuthMode('login');
      }
    } catch (error: any) {
      setAuthError(error.message);
    } finally {
      setAuthLoading(false);
    }
  };

  const handleLogout = async () => {
    await signOut();
    onClose();
  };

  const handleCreateRoutine = async () => {
    if (!newRoutineName.trim() || selectedPoses.length === 0) return;
    setRoutineLoading(true);
    try {
      const { error } = await supabase.from('routines').insert({
        user_id: user!.id,
        name: newRoutineName,
        poses: selectedPoses
      });
      if (error) throw error;
      await fetchRoutines();
      setIsCreatingRoutine(false);
      setNewRoutineName('');
      setSelectedPoses([]);
    } catch (error: any) {
      alert('Error creando rutina: ' + error.message);
    } finally {
      setRoutineLoading(false);
    }
  };

  const handleDeleteRoutine = async (id: string) => {
    if (!confirm('¿Estás seguro de eliminar esta rutina?')) return;
    try {
      const { error } = await supabase.from('routines').delete().eq('id', id);
      if (error) throw error;
      setRoutines(prev => prev.filter(r => r.id !== id));
    } catch (error) {
      console.error(error);
    }
  };

  // Close Logic
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleEsc);
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

  // Render Logic
  const currentStats = levelData[userLevel];

  if (!user) {
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-charcoal/60 backdrop-blur-md animate-in fade-in duration-200" onClick={handleBackdropClick}>
        <div ref={modalRef} className="bg-white dark:bg-gray-900 w-full max-w-sm rounded-2xl shadow-2xl p-8 relative">
          <button onClick={onClose} className="absolute top-4 right-4 text-charcoal/40 hover:text-charcoal"><span className="material-symbols-outlined">close</span></button>

          <h2 className="text-2xl font-bold text-center mb-6 text-charcoal dark:text-white">
            {authMode === 'login' ? 'Bienvenido de nuevo' : 'Únete a YogaGuide'}
          </h2>

          <form onSubmit={handleAuth} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-charcoal/70 mb-1">Email</label>
              <input
                type="email"
                required
                value={email}
                onChange={e => setEmail(e.target.value)}
                className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/50"
                placeholder="tu@email.com"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-charcoal/70 mb-1">Contraseña</label>
              <input
                type="password"
                required
                value={password}
                onChange={e => setPassword(e.target.value)}
                className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/50"
                placeholder="••••••••"
              />
            </div>

            {authError && <p className="text-red-500 text-sm">{authError}</p>}

            <button
              type="submit"
              disabled={authLoading}
              className="w-full bg-primary text-white py-3 rounded-xl font-bold hover:bg-primary/90 transition-colors disabled:opacity-50"
            >
              {authLoading ? 'Procesando...' : (authMode === 'login' ? 'Iniciar Sesión' : 'Registrarse')}
            </button>
          </form>

          <div className="mt-4 text-center text-sm text-charcoal/60">
            {authMode === 'login' ? '¿No tienes cuenta? ' : '¿Ya tienes cuenta? '}
            <button
              onClick={() => setAuthMode(authMode === 'login' ? 'register' : 'login')}
              className="text-primary font-bold hover:underline"
            >
              {authMode === 'login' ? 'Regístrate' : 'Inicia Sesión'}
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-charcoal/60 backdrop-blur-md" onClick={handleBackdropClick}>
      <div ref={modalRef} className="bg-white dark:bg-gray-900 w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-3xl shadow-2xl p-8 relative flex flex-col">
        <button onClick={onClose} className="absolute top-6 right-6 text-charcoal/40 hover:text-charcoal dark:text-gray-500"><span className="material-symbols-outlined">close</span></button>

        {/* Header */}
        <div className="flex flex-col md:flex-row items-center gap-6 mb-8 pb-8 border-b border-gray-100 dark:border-gray-800">
          {!imageError ? (
            <img src="https://lh3.googleusercontent.com/ogw/AF2bZyiAZz7IWd1EecSdBxf2Qiv3QDLRb1oFLC8kgL_7rD3c8weP=s64-c-mo" alt="Avatar" className="w-20 h-20 rounded-full object-cover border-4 border-white shadow-lg" onError={() => setImageError(true)} />
          ) : (
            <div className="w-20 h-20 bg-primary/20 rounded-full flex items-center justify-center border-4 border-white shadow-lg">
              <span className="material-symbols-outlined text-3xl text-primary">person</span>
            </div>
          )}
          <div className="text-center md:text-left">
            <h2 className="text-2xl font-bold text-charcoal dark:text-white">{user.email?.split('@')[0]}</h2>
            <button onClick={() => setUserLevel(prev => prev === 'Principiante' ? 'Intermedio' : prev === 'Intermedio' ? 'Avanzado' : 'Principiante')} className={`text-sm font-medium ${currentStats.color} hover:opacity-80 transition-opacity`}>
              {currentStats.label} <span className="material-symbols-outlined text-[14px] align-middle">edit</span>
            </button>
          </div>
          <div className="ml-auto">
            <button onClick={handleLogout} className="text-sm text-red-500 hover:text-red-700 font-medium px-4 py-2 rounded-lg hover:bg-red-50 dark:hover:bg-red-900/10">Cerrar Sesión</button>
          </div>
        </div>

        {/* Tabs */}
        <div className="flex gap-4 mb-6 border-b border-gray-200 dark:border-gray-700">
          <button
            onClick={() => setActiveTab('progress')}
            className={`pb-2 px-1 font-medium text-sm transition-all ${activeTab === 'progress' ? 'text-primary border-b-2 border-primary' : 'text-charcoal/50 hover:text-charcoal'}`}
          >
            Mi Progreso
          </button>
          <button
            onClick={() => setActiveTab('routines')}
            className={`pb-2 px-1 font-medium text-sm transition-all ${activeTab === 'routines' ? 'text-primary border-b-2 border-primary' : 'text-charcoal/50 hover:text-charcoal'}`}
          >
            Mis Rutinas
          </button>
        </div>

        {/* Content */}
        {activeTab === 'progress' ? (
          <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-300">
            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-warm-beige/30 dark:bg-gray-800 p-5 rounded-2xl text-center">
                <span className="block text-3xl font-bold text-primary mb-1">{currentStats.classes}</span>
                <span className="text-xs font-bold text-charcoal/60 dark:text-gray-400 uppercase">Clases Completadas</span>
              </div>
              <div className="bg-warm-beige/30 dark:bg-gray-800 p-5 rounded-2xl text-center">
                <span className="block text-3xl font-bold text-primary mb-1">{currentStats.minutes}</span>
                <span className="text-xs font-bold text-charcoal/60 dark:text-gray-400 uppercase">Minutos Zen</span>
              </div>
            </div>

            {/* AI Suggestion */}
            <div className="bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-indigo-900/20 dark:to-purple-900/20 p-6 rounded-2xl border border-indigo-100 dark:border-indigo-800/30">
              <div className="flex items-center gap-2 mb-3">
                <span className="material-symbols-outlined text-indigo-500">auto_awesome</span>
                <h4 className="font-bold text-indigo-700 dark:text-indigo-300">Sugerencia Personalizada</h4>
              </div>
              <p className="text-charcoal/80 dark:text-gray-300 italic">"Basado en tu nivel {userLevel}, te recomiendo probar la clase de Vinyasa Flow de mañana a las 8:00 AM para energizar tu día."</p>
            </div>
          </div>
        ) : (
          <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-300 h-full">
            {!isCreatingRoutine ? (
              <>
                <button
                  onClick={() => setIsCreatingRoutine(true)}
                  className="w-full py-4 border-2 border-dashed border-gray-300 rounded-2xl text-charcoal/50 hover:border-primary hover:text-primary hover:bg-primary/5 transition-all flex items-center justify-center gap-2 font-medium"
                >
                  <span className="material-symbols-outlined">add_circle</span>
                  Crear Nueva Rutina
                </button>

                <div className="grid gap-4 max-h-[300px] overflow-y-auto pr-2">
                  {routines.length === 0 && (
                    <p className="text-center text-charcoal/40 py-8">No tienes rutinas guardadas aún.</p>
                  )}
                  {routines.map(routine => (
                    <div key={routine.id} className="bg-white border border-gray-100 dark:bg-gray-800 dark:border-gray-700 p-4 rounded-xl flex items-center justify-between shadow-sm hover:shadow-md transition-shadow">
                      <div>
                        <h4 className="font-bold text-lg text-charcoal dark:text-white">{routine.name}</h4>
                        <p className="text-xs text-charcoal/50 dark:text-gray-400">{routine.poses.length} posturas • {new Date(routine.created_at).toLocaleDateString()}</p>
                        <div className="flex -space-x-2 mt-2">
                          {routine.poses.slice(0, 5).map((poseId, i) => {
                            const pose = yogaData.find(d => d.id === poseId);
                            return pose ? (
                              <img key={i} src={pose.imageUrl} alt="" className="w-6 h-6 rounded-full border-2 border-white object-cover" title={pose.name} />
                            ) : null;
                          })}
                        </div>
                      </div>
                      <button onClick={() => handleDeleteRoutine(routine.id)} className="text-red-400 hover:text-red-600 p-2"><span className="material-symbols-outlined">delete</span></button>
                    </div>
                  ))}
                </div>
              </>
            ) : (
              <div className="bg-gray-50 dark:bg-gray-800/50 p-6 rounded-2xl border border-gray-100">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-bold text-lg">Nueva Rutina</h3>
                  <button onClick={() => setIsCreatingRoutine(false)} className="text-sm text-charcoal/50 hover:text-charcoal bg-white px-3 py-1 rounded-full border shadow-sm">Cancelar</button>
                </div>

                <div className="space-y-4">
                  <div>
                    <label className="block text-xs font-bold uppercase text-charcoal/50 mb-1">Nombre de la Rutina</label>
                    <input
                      value={newRoutineName}
                      onChange={e => setNewRoutineName(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-primary/50 outline-none"
                      placeholder="Ej: Rutina de Mañana..."
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase text-charcoal/50 mb-2">Selecciona Posturas ({selectedPoses.length})</label>
                    <div className="grid grid-cols-2 gap-2 max-h-[200px] overflow-y-auto p-1">
                      {yogaData.map(pose => (
                        <div
                          key={pose.id}
                          onClick={() => setSelectedPoses(prev => prev.includes(pose.id) ? prev.filter(id => id !== pose.id) : [...prev, pose.id])}
                          className={`cursor-pointer p-2 rounded-lg border transition-all flex items-center gap-2 ${selectedPoses.includes(pose.id) ? 'border-primary bg-primary/10' : 'border-gray-200 hover:border-primary/50'}`}
                        >
                          <img src={pose.imageUrl} className="w-8 h-8 rounded-md object-cover" alt="" />
                          <span className="text-sm font-medium truncate">{pose.name}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <button
                    onClick={handleCreateRoutine}
                    disabled={routineLoading || !newRoutineName || selectedPoses.length === 0}
                    className="w-full bg-primary text-white py-3 rounded-xl font-bold shadow-lg shadow-primary/30 hover:shadow-xl hover:-translate-y-0.5 transition-all disabled:opacity-50 disabled:transform-none"
                  >
                    {routineLoading ? 'Guardando...' : 'Guardar Rutina'}
                  </button>
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};