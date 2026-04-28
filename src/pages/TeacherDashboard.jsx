// pages/TeacherDashboard.jsx
import React, { useState, useEffect } from 'react';
import GradeTable from '../components/GradeTable';
import { obtenerGrupos, obtenerTodosUsuarios } from '../utils/auth';
import { guardarCalificacion } from '../utils/localStorage';
import { cerrarSesion } from '../utils/localStorage';

const TeacherDashboard = ({ usuario, onNavigate, onLogout }) => {
  const [grupoSeleccionado, setGrupoSeleccionado] = useState('');
  const [parcialSeleccionado, setParcialSeleccionado] = useState(1);
  const [grupos, setGrupos] = useState([]);

  useEffect(() => {
    const gruposDisponibles = obtenerGrupos();
    setGrupos(gruposDisponibles);
    if (gruposDisponibles.length > 0) {
      setGrupoSeleccionado(gruposDisponibles[0]);
    }
  }, []);

  const handleCerrarSesion = () => {
    cerrarSesion();
    if (onLogout) onLogout();
    if (onNavigate) onNavigate('Inicio');
  };

  const handleEditarCalificacion = (estudianteId, calificacion) => {
    guardarCalificacion(grupoSeleccionado, estudianteId, parcialSeleccionado, calificacion);
    alert('Calificación actualizada correctamente');
  };

  const obtenerEstudiantesGrupo = () => {
    const usuarios = obtenerTodosUsuarios();
    return usuarios.filter(u => u.grupo === grupoSeleccionado && u.tipo === 'estudiante').length;
  };

  return (
    <div className="max-w-7xl mx-auto fade-in">
      {/* ENCABEZADO */}
      <div className="bg-gradient-to-r from-[#6b2132] to-purple-700 text-white p-8 rounded-xl mb-8 shadow-lg">
        <div className="flex justify-between items-start">
          <div>
            <h1 className="text-4xl font-bold mb-2">Panel de Profesora</h1>
            <p className="text-lg opacity-90">Bienvenida, <span className="font-semibold">{usuario?.nombre} {usuario?.apellido}</span></p>
            <p className="text-sm opacity-75 mt-2">Gestiona las calificaciones y el seguimiento de tus estudiantes</p>
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

      {/* CONTROLES */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        {/* Selector de Grupo */}
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            <i data-lucide="users" className="inline w-4 h-4 mr-2"></i>
            Selecciona Grupo
          </label>
          <select
            value={grupoSeleccionado}
            onChange={(e) => setGrupoSeleccionado(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#6b2132]"
          >
            {grupos.map((grupo) => (
              <option key={grupo} value={grupo}>
                {grupo}
              </option>
            ))}
          </select>
          <p className="text-xs text-gray-500 mt-2">
            Estudiantes en este grupo: <strong>{obtenerEstudiantesGrupo()}</strong>
          </p>
        </div>

        {/* Selector de Parcial */}
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            <i data-lucide="calendar" className="inline w-4 h-4 mr-2"></i>
            Selecciona Parcial
          </label>
          <select
            value={parcialSeleccionado}
            onChange={(e) => setParcialSeleccionado(parseInt(e.target.value))}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#6b2132]"
          >
            <option value={1}>Parcial 1 (Marzo 2026)</option>
            <option value={2}>Parcial 2 (Mayo 2026)</option>
            <option value={3}>Parcial 3 (Junio 2026)</option>
          </select>
        </div>
      </div>

      {/* INFORMACIÓN DEL GRUPO */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
        <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
          <p className="text-sm text-blue-600 font-semibold">Grupo Seleccionado</p>
          <p className="text-2xl font-bold text-blue-800">{grupoSeleccionado}</p>
        </div>
        <div className="bg-purple-50 p-4 rounded-lg border border-purple-200">
          <p className="text-sm text-purple-600 font-semibold">Parcial Actual</p>
          <p className="text-2xl font-bold text-purple-800">Parcial {parcialSeleccionado}</p>
        </div>
        <div className="bg-green-50 p-4 rounded-lg border border-green-200">
          <p className="text-sm text-green-600 font-semibold">Total de Estudiantes</p>
          <p className="text-2xl font-bold text-green-800">{obtenerEstudiantesGrupo()}</p>
        </div>
      </div>

      {/* TABLA DE CALIFICACIONES */}
      <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-200">
        <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-2">
          <i data-lucide="list" className="w-6 h-6"></i>
          Lista de Calificaciones
        </h2>

        {grupoSeleccionado ? (
          <GradeTable
            grupo={grupoSeleccionado}
            parcial={parcialSeleccionado}
            onEditarCalificacion={handleEditarCalificacion}
          />
        ) : (
          <div className="text-center text-gray-500 py-8">
            <p>Selecciona un grupo para ver el listado de estudiantes</p>
          </div>
        )}
      </div>

      {/* INSTRUCCIONES */}
      <div className="mt-8 bg-yellow-50 p-6 rounded-xl border border-yellow-200">
        <h3 className="text-lg font-bold text-yellow-900 mb-3 flex items-center gap-2">
          <i data-lucide="alert-circle" className="w-5 h-5"></i>
          Instrucciones de Uso
        </h3>
        <ul className="space-y-2 text-sm text-yellow-800">
          <li>✓ Selecciona el grupo y parcial que deseas revisar</li>
          <li>✓ Haz clic en "Editar" para modificar una calificación</li>
          <li>✓ Ingresa la calificación (0-100) y haz clic en "Guardar"</li>
          <li>✓ Puedes descargar el listado en Excel o imprimirlo</li>
          <li>✓ Los promedios se calculan automáticamente</li>
        </ul>
      </div>
    </div>
  );
};

export default TeacherDashboard;
