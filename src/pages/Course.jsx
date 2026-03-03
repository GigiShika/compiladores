// pages/Course.jsx
import React, { useEffect } from 'react';

const Course = ({ courseName, currentPeriod, onPeriodChange }) => {
  useEffect(() => {
    if (window.lucide) {
      window.lucide.createIcons();
    }
  }, [currentPeriod]);

  return (
    <div className="max-w-6xl mx-auto fade-in">
      {/* Navegación de Periodos */}
      <div className="flex border-b border-gray-200 mb-8">
        {[1, 2, 3].map((period) => (
          <button
            key={period}
            onClick={() => onPeriodChange(period)}
            className={`
              px-6 py-3 text-sm font-medium
              ${currentPeriod === period 
                ? 'border-b-2 border-[#6b2132] text-[#6b2132]' 
                : 'text-gray-500 hover:text-gray-700'
              }
            `}
          >
            {period === 1 && 'Primer Periodo'}
            {period === 2 && 'Segundo Periodo'}
            {period === 3 && 'Tercer Periodo'}
          </button>
        ))}
      </div>

      {/* Intro del Periodo */}
      <div className="bg-white rounded-xl p-6 mb-8 shadow-sm flex flex-col md:flex-row gap-6 items-center">
        <div className="w-full md:w-1/3 aspect-video bg-gray-100 rounded-lg relative flex items-center justify-center cursor-pointer group">
          <div className="absolute inset-0 bg-gray-900 rounded-lg opacity-10 group-hover:opacity-20 transition"></div>
          <i data-lucide="play-circle" className="w-12 h-12 text-[#6b2132]"></i>
        </div>
        <div className="w-full md:w-2/3">
          <h3 className="text-xl font-bold text-gray-800 mb-2">
            Resumen Ejecutivo: Periodo {currentPeriod}
          </h3>
          <p className="text-gray-600 text-sm mb-4">
            En este video de 5 minutos sintetizamos los conceptos clave de la unidad, 
            incluyendo análisis léxico y sintáctico. Ideal para repaso rápido antes de la evaluación.
          </p>
          <div className="flex gap-2">
            <span className="bg-gray-100 text-gray-600 text-xs px-2 py-1 rounded">
              Planeación Didáctica
            </span>
            <span className="bg-gray-100 text-gray-600 text-xs px-2 py-1 rounded">
              Acuerdos
            </span>
          </div>
        </div>
      </div>

      {/* GRID DE CONTENIDO */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        {/* Entendimiento */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden flex flex-col">
          <div className="bg-id-entendimiento h-2 w-full"></div>
          <div className="p-5 flex-1">
            <div className="flex items-center justify-between mb-3">
              <h4 className="font-bold text-gray-800 flex items-center gap-2">
                <i data-lucide="book-open" className="text-lime-600 w-4 h-4"></i> 
                Entendimiento
              </h4>
              <span className="text-xs bg-lime-100 text-lime-800 px-2 py-1 rounded-full">
                Teoría
              </span>
            </div>
            <p className="text-xs text-gray-500 mb-4">
              Material de lectura, guión didáctico y conceptos base.
            </p>
            <ul className="space-y-2">
              <li className="flex items-center gap-2 text-sm text-gray-700 hover:text-[#6b2132] cursor-pointer">
                <i data-lucide="file-text" className="w-4 h-4"></i> Apuntes de Unidad 1.pdf
              </li>
              <li className="flex items-center gap-2 text-sm text-gray-700 hover:text-[#6b2132] cursor-pointer">
                <i data-lucide="file-text" className="w-4 h-4"></i> Guión Didáctico.docx
              </li>
              <li className="flex items-center gap-2 text-sm text-gray-700 hover:text-[#6b2132] cursor-pointer">
                <i data-lucide="presentation" className="w-4 h-4"></i> Presentación Autómatas.pptx
              </li>
            </ul>
          </div>
        </div>

        {/* Aplicación */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden flex flex-col">
          <div className="bg-id-aplicacion h-2 w-full"></div>
          <div className="p-5 flex-1">
            <div className="flex items-center justify-between mb-3">
              <h4 className="font-bold text-gray-800 flex items-center gap-2">
                <i data-lucide="cpu" className="text-sky-600 w-4 h-4"></i> 
                Aplicación
              </h4>
              <span className="text-xs bg-sky-100 text-sky-800 px-2 py-1 rounded-full">
                Herramientas
              </span>
            </div>
            <p className="text-xs text-gray-500 mb-4">
              Ejercicios prácticos y software de apoyo.
            </p>
            
            <div className="bg-gray-50 p-3 rounded border border-gray-200 mb-3">
              <div className="flex items-center gap-2 mb-2">
                <i data-lucide="box" className="text-gray-600"></i>
                <span className="font-bold text-sm">Didacmáx 2000</span>
              </div>
              <p className="text-[10px] text-gray-500 mb-2">
                Compilador didáctico (16-bit). Requiere DOSBox o emulador.
              </p>
              <div className="flex gap-2">
                <button className="flex-1 bg-sky-500 text-white text-xs py-1 rounded hover:bg-sky-600">
                  Descargar
                </button>
                <button className="flex-1 bg-white border border-gray-300 text-xs py-1 rounded hover:bg-gray-50">
                  Guía PDF
                </button>
              </div>
            </div>
            <ul className="space-y-2">
              <li className="flex items-center gap-2 text-sm text-gray-700 hover:text-[#6b2132] cursor-pointer">
                <i data-lucide="download" className="w-4 h-4"></i> JFLAP Tool
              </li>
            </ul>
          </div>
        </div>

        {/* Creación */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden flex flex-col">
          <div className="bg-id-creacion h-2 w-full"></div>
          <div className="p-5 flex-1">
            <div className="flex items-center justify-between mb-3">
              <h4 className="font-bold text-gray-800 flex items-center gap-2">
                <i data-lucide="lightbulb" className="text-yellow-600 w-4 h-4"></i> 
                Creación
              </h4>
              <span className="text-xs bg-yellow-100 text-yellow-800 px-2 py-1 rounded-full">
                Proyectos
              </span>
            </div>
            <p className="text-xs text-gray-500 mb-4">
              Espacio colaborativo y portafolio de evidencias.
            </p>
            
            <button className="w-full border-2 border-dashed border-yellow-400 bg-yellow-50 text-yellow-700 py-2 rounded-lg text-sm font-medium hover:bg-yellow-100 mb-4 transition flex justify-center items-center gap-2">
              <i data-lucide="upload-cloud"></i> Subir a mi Portafolio
            </button>

            <div className="border-t pt-3">
              <p className="text-xs font-bold text-gray-500 mb-2">Repositorio de Estudiantes</p>
              <div className="flex -space-x-2 overflow-hidden mb-2">
                <img className="inline-block h-6 w-6 rounded-full ring-2 ring-white" src="https://ui-avatars.com/api/?name=Juan" alt=""/>
                <img className="inline-block h-6 w-6 rounded-full ring-2 ring-white" src="https://ui-avatars.com/api/?name=Ana" alt=""/>
                <img className="inline-block h-6 w-6 rounded-full ring-2 ring-white" src="https://ui-avatars.com/api/?name=Pedro" alt=""/>
                <div className="h-6 w-6 rounded-full bg-gray-100 ring-2 ring-white flex items-center justify-center text-[10px] text-gray-500">
                  +40
                </div>
              </div>
              <a href="#" className="text-xs text-blue-600 hover:underline">
                Ver proyectos destacados
              </a>
            </div>
          </div>
        </div>

        {/* Análisis */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden flex flex-col">
          <div className="bg-id-analisis h-2 w-full"></div>
          <div className="p-5 flex-1">
            <div className="flex items-center justify-between mb-3">
              <h4 className="font-bold text-gray-800 flex items-center gap-2">
                <i data-lucide="bar-chart-2" className="text-indigo-800 w-4 h-4"></i> 
                Análisis
              </h4>
            </div>
            <p className="text-xs text-gray-500 mb-2">Casos de estudio y comparativas.</p>
            <ul className="space-y-2">
              <li className="flex items-center gap-2 text-sm text-gray-700">
                <i data-lucide="file-bar-chart" className="w-4 h-4"></i> Comparativa de Lenguajes.pdf
              </li>
            </ul>
          </div>
        </div>

        {/* Evaluación & Recuerdo */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden md:col-span-2 flex flex-col">
          <div className="flex w-full">
            <div className="bg-id-evaluacion h-2 w-1/2"></div>
            <div className="bg-id-recuerdo h-2 w-1/2"></div>
          </div>
          <div className="p-5 flex-1">
            <div className="flex items-center justify-between mb-4">
              <h4 className="font-bold text-gray-800 flex items-center gap-2">
                <i data-lucide="clipboard-check" className="text-pink-600 w-4 h-4"></i> 
                Evaluación & Gamificación
              </h4>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Evaluación */}
              <div>
                <h5 className="text-sm font-bold text-pink-600 mb-2 uppercase">
                  5 Opciones de Evaluación
                </h5>
                <div className="space-y-2">
                  {['Examen Tradicional', 'Proyecto Integrador', 'Portafolio Evidencias', 'Exposición Oral', 'Investigación'].map((item, index) => (
                    <div key={index} className="flex items-center justify-between p-2 bg-pink-50 rounded border border-pink-100">
                      <span className="text-sm">{index + 1}. {item}</span>
                      <button className="text-pink-600 hover:text-pink-800">
                        <i data-lucide="download" className="w-4 h-4"></i>
                      </button>
                    </div>
                  ))}
                </div>
              </div>

              {/* Gamificación */}
              <div>
                <h5 className="text-sm font-bold text-fuchsia-600 mb-2 uppercase">
                  Recuerdo (Gamificación)
                </h5>
                <div className="grid grid-cols-2 gap-2">
                  <button className="p-3 bg-fuchsia-50 border border-fuchsia-100 rounded hover:bg-fuchsia-100 text-center flex flex-col items-center justify-center gap-2">
                    <i data-lucide="gamepad-2" className="text-fuchsia-600"></i>
                    <span className="text-xs font-medium">Kahoot! Repaso</span>
                  </button>
                  <button className="p-3 bg-fuchsia-50 border border-fuchsia-100 rounded hover:bg-fuchsia-100 text-center flex flex-col items-center justify-center gap-2">
                    <i data-lucide="layout-grid" className="text-fuchsia-600"></i>
                    <span className="text-xs font-medium">WordWall</span>
                  </button>
                  <button className="col-span-2 p-2 text-xs text-gray-500 hover:text-gray-800 underline">
                    Ver Rúbricas de Evaluación
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Course;