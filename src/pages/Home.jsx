// pages/Home.jsx
import React from 'react';

const Home = ({ onNavigate }) => {
  React.useEffect(() => {
    if (window.lucide) {
      window.lucide.createIcons();
    }
  }, []);

  return (
    <div className="max-w-5xl mx-auto fade-in">
      <div className="bg-gradient-to-r from-[#6b2132] to-gray-800 rounded-2xl p-10 text-white mb-8 shadow-lg">
        <h1 className="text-4xl font-bold mb-4">Bienvenida al Portal de Aprendizaje</h1>
        <p className="text-lg opacity-90 max-w-2xl">
          Plataforma de Diseño Instruccional del IPN. Aquí encontrarás todos los recursos, 
          herramientas y evaluaciones para tus unidades de aprendizaje.
        </p>
        <div className="mt-6 flex gap-4">
          <button 
            onClick={() => onNavigate('Compiladores')}
            className="bg-white text-[#6b2132] px-6 py-2 rounded-full font-bold hover:bg-gray-100 transition"
          >
            Ir a mis cursos
          </button>
          <button className="bg-transparent border border-white px-6 py-2 rounded-full font-bold hover:bg-white hover:text-gray-900 transition">
            Ver tutorial
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Video Intro */}
        <div className="md:col-span-2 bg-white p-6 rounded-xl shadow-sm border border-gray-200">
          <h3 className="font-bold text-gray-700 mb-4 flex items-center gap-2">
            <i data-lucide="video" className="text-[#6b2132]"></i> 
            Introducción al Modelo Educativo
          </h3>
          <div className="aspect-video bg-gray-200 rounded-lg flex items-center justify-center relative cursor-pointer group">
            <img 
              src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
              className="absolute inset-0 w-full h-full object-cover rounded-lg opacity-80 group-hover:opacity-100 transition"
              alt="Video introductorio"
            />
            <div className="bg-white/90 p-4 rounded-full shadow-xl z-10 group-hover:scale-110 transition">
              <i data-lucide="play" className="w-8 h-8 text-[#6b2132] fill-current"></i>
            </div>
            <span className="absolute bottom-4 right-4 bg-black/70 text-white text-xs px-2 py-1 rounded">
              05:00
            </span>
          </div>
          <p className="text-sm text-gray-500 mt-3">
            Resumen de las competencias ONU: Aprender a aprender, ser y convivir.
          </p>
        </div>

        {/* Panel de Avisos */}
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
          <h3 className="font-bold text-gray-700 mb-4">Avisos Recientes</h3>
          <ul className="space-y-4">
            <li className="border-l-4 border-yellow-400 pl-3 py-1">
              <p className="text-sm font-semibold">Entrega de Proyecto P1</p>
              <p className="text-xs text-gray-500">Vence: 25 Octubre</p>
            </li>
            <li className="border-l-4 border-blue-400 pl-3 py-1">
              <p className="text-sm font-semibold">Actualización Didacmáx</p>
              <p className="text-xs text-gray-500">Versión parche disponible</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Home;