// pages/StudentDashboard.jsx
import React, { useState } from 'react';
import { obtenerChecklistParcial } from '../data/checklistData';
import ChecklistPartial from '../components/ChecklistPartial';
import { cerrarSesion } from '../utils/localStorage';

const StudentDashboard = ({ usuario, onNavigate, onLogout }) => {
  const [parcialActivo, setParcialActivo] = useState(1);

  const handleCerrarSesion = () => {
    cerrarSesion();
    if (onLogout) onLogout();
    if (onNavigate) onNavigate('Inicio');
  };

  const checklist = obtenerChecklistParcial(parcialActivo);

  return (
    <div className="max-w-6xl mx-auto fade-in">
      {/* ENCABEZADO */}
      <div className="bg-gradient-to-r from-[#6b2132] to-purple-700 text-white p-8 rounded-xl mb-8 shadow-lg">
        <div className="flex justify-between items-start">
          <div>
            <h1 className="text-4xl font-bold mb-2">Dashboard del Estudiante</h1>
            <p className="text-lg opacity-90">Bienvenido/a, <span className="font-semibold">{usuario?.nombre} {usuario?.apellido}</span></p>
            <div className="flex gap-6 mt-3 text-sm">
              <span className="flex items-center gap-2">
                <i data-lucide="mail" className="w-4 h-4"></i>
                {usuario?.email}
              </span>
              <span className="flex items-center gap-2 bg-white bg-opacity-20 px-3 py-1 rounded-full">
                <i data-lucide="users" className="w-4 h-4"></i>
                Grupo: {usuario?.grupo}
              </span>
            </div>
          </div>
          <button
            onClick={handleCerrarSesion}
            className="bg-red-600 text-white px-6 py-2 rounded-lg hover:bg-red-700 transition flex items-center gap-2"
          >
            <i data-lucide="log-out" className="w-5 h-5"></i>
            Cerrar Sesión
          </button>
        </div>
      </div>

      {/* TABS - PARCIALES */}
      <div className="mb-8">
        <div className="flex gap-4 border-b border-gray-200">
          {[1, 2, 3].map((parcial) => (
            <button
              key={parcial}
              onClick={() => setParcialActivo(parcial)}
              className={`px-6 py-3 font-semibold transition-all border-b-4 ${
                parcialActivo === parcial
                  ? 'border-[#6b2132] text-[#6b2132]'
                  : 'border-transparent text-gray-600 hover:text-gray-800'
              }`}
            >
              <div className="flex items-center gap-2">
                <i data-lucide="calendar" className="w-5 h-5"></i>
                Parcial {parcial}
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* CONTENIDO DEL PARCIAL */}
      {checklist && (
        <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-200">
          <div className="mb-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-2">{checklist.nombre}</h2>
            <p className="text-gray-600">{checklist.descripcion}</p>
          </div>

          <ChecklistPartial
            checklist={checklist}
            parcial={parcialActivo}
            grupo={usuario?.grupo}
            estudianteId={usuario?.id}
            onArchivoSubido={() => {
              // Aquí puedes agregar lógica para actualizar la vista
            }}
          />
        </div>
      )}

      {/* SECCIÓN DE INFORMACIÓN */}
      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-blue-50 p-6 rounded-xl border border-blue-200">
          <h3 className="text-lg font-bold text-blue-900 mb-3 flex items-center gap-2">
            <i data-lucide="info" className="w-5 h-5"></i>
            Información Importante
          </h3>
          <ul className="space-y-2 text-sm text-blue-800">
            <li>✓ Asegúrate de entregar todos tus trabajos en las fechas indicadas</li>
            <li>✓ Los archivos pueden ser PDF, Word, Excel, ZIP, TXT o imágenes</li>
            <li>✓ Tamaño máximo de archivo: 10 MB</li>
            <li>✓ Tu calificación se actualizará automáticamente</li>
          </ul>
        </div>

        <div className="bg-green-50 p-6 rounded-xl border border-green-200">
          <h3 className="text-lg font-bold text-green-900 mb-3 flex items-center gap-2">
            <i data-lucide="check-circle" className="w-5 h-5"></i>
            Próximas Fechas Importantes
          </h3>
          <ul className="space-y-2 text-sm text-green-800">
            <li>📅 Parcial 1: 11 de Marzo de 2026</li>
            <li>📅 Parcial 2: 6 de Mayo de 2026</li>
            <li>📅 Parcial 3: Junio de 2026</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default StudentDashboard;
