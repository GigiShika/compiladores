// pages/AdminDashboard.jsx
import React, { useState, useEffect } from 'react';
import { obtenerTodosUsuarios, actualizarUsuario, eliminarUsuario, obtenerGrupos } from '../utils/auth';
import { cerrarSesion, exportarBackup, importarBackup } from '../utils/localStorage';

const AdminDashboard = ({ usuario, onNavigate, onLogout }) => {
  const [tabActiva, setTabActiva] = useState('usuarios');
  const [usuarios, setUsuarios] = useState([]);
  const [editando, setEditando] = useState(null);
  const [camposEdit, setCamposEdit] = useState({});
  const [grupos, setGrupos] = useState([]);

  useEffect(() => {
    setUsuarios(obtenerTodosUsuarios());
    setGrupos(obtenerGrupos());
  }, []);

  const handleCerrarSesion = () => {
    cerrarSesion();
    if (onLogout) onLogout();
    if (onNavigate) onNavigate('Inicio');
  };

  const handleEditarInicio = (id) => {
    const usuario = usuarios.find(u => u.id === id);
    setCamposEdit(usuario);
    setEditando(id);
  };

  const handleGuardarEdicion = () => {
    actualizarUsuario(editando, camposEdit);
    setUsuarios(obtenerTodosUsuarios());
    setEditando(null);
  };

  const handleEliminar = (id) => {
    if (window.confirm('¿Estás seguro/a de que deseas eliminar este usuario?')) {
      eliminarUsuario(id);
      setUsuarios(obtenerTodosUsuarios());
    }
  };

  const handleExportar = () => {
    exportarBackup();
    alert('Backup exportado correctamente');
  };

  const handleImportar = (e) => {
    const archivo = e.target.files[0];
    if (archivo) {
      importarBackup(archivo).then(() => {
        alert('Backup importado correctamente');
        setUsuarios(obtenerTodosUsuarios());
        setGrupos(obtenerGrupos());
      }).catch(() => {
        alert('Error al importar backup');
      });
    }
  };

  const obtenerEstadisticas = () => {
    const stats = {
      totalUsuarios: usuarios.length,
      estudiantes: usuarios.filter(u => u.tipo === 'estudiante').length,
      profesores: usuarios.filter(u => u.tipo === 'profesor').length,
      admins: usuarios.filter(u => u.tipo === 'admin').length,
      activos: usuarios.filter(u => u.estado === 'activo').length,
      inactivos: usuarios.filter(u => u.estado === 'inactivo').length
    };
    return stats;
  };

  const stats = obtenerEstadisticas();

  return (
    <div className="max-w-7xl mx-auto fade-in">
      {/* ENCABEZADO */}
      <div className="bg-gradient-to-r from-[#6b2132] to-purple-700 text-white p-8 rounded-xl mb-8 shadow-lg">
        <div className="flex justify-between items-start">
          <div>
            <h1 className="text-4xl font-bold mb-2">Panel de Administrador</h1>
            <p className="text-lg opacity-90">Bienvenido/a, <span className="font-semibold">{usuario?.nombre}</span></p>
            <p className="text-sm opacity-75 mt-2">Gestiona usuarios, grupos y sistema</p>
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

      {/* ESTADÍSTICAS */}
      <div className="grid grid-cols-2 md:grid-cols-6 gap-4 mb-8">
        <div className="bg-blue-50 p-4 rounded-lg border border-blue-200 text-center">
          <p className="text-sm text-blue-600 font-semibold">Total Usuarios</p>
          <p className="text-2xl font-bold text-blue-800">{stats.totalUsuarios}</p>
        </div>
        <div className="bg-green-50 p-4 rounded-lg border border-green-200 text-center">
          <p className="text-sm text-green-600 font-semibold">Estudiantes</p>
          <p className="text-2xl font-bold text-green-800">{stats.estudiantes}</p>
        </div>
        <div className="bg-purple-50 p-4 rounded-lg border border-purple-200 text-center">
          <p className="text-sm text-purple-600 font-semibold">Profesores</p>
          <p className="text-2xl font-bold text-purple-800">{stats.profesores}</p>
        </div>
        <div className="bg-orange-50 p-4 rounded-lg border border-orange-200 text-center">
          <p className="text-sm text-orange-600 font-semibold">Admins</p>
          <p className="text-2xl font-bold text-orange-800">{stats.admins}</p>
        </div>
        <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200 text-center">
          <p className="text-sm text-yellow-600 font-semibold">Activos</p>
          <p className="text-2xl font-bold text-yellow-800">{stats.activos}</p>
        </div>
        <div className="bg-red-50 p-4 rounded-lg border border-red-200 text-center">
          <p className="text-sm text-red-600 font-semibold">Inactivos</p>
          <p className="text-2xl font-bold text-red-800">{stats.inactivos}</p>
        </div>
      </div>

      {/* TABS */}
      <div className="mb-8 border-b border-gray-200 flex gap-0">
        {[
          { id: 'usuarios', label: 'Gestionar Usuarios', icon: 'users' },
          { id: 'grupos', label: 'Gestionar Grupos', icon: 'folder' },
          { id: 'copias', label: 'Copias de Seguridad', icon: 'download' }
        ].map((tab) => (
          <button
            key={tab.id}
            onClick={() => setTabActiva(tab.id)}
            className={`px-6 py-3 font-semibold transition-all border-b-4 flex items-center gap-2 ${
              tabActiva === tab.id
                ? 'border-[#6b2132] text-[#6b2132]'
                : 'border-transparent text-gray-600 hover:text-gray-800'
            }`}
          >
            <i data-lucide={tab.icon} className="w-5 h-5"></i>
            {tab.label}
          </button>
        ))}
      </div>

      {/* CONTENIDO DE TABS */}
      <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-200">
        {/* TAB: USUARIOS */}
        {tabActiva === 'usuarios' && (
          <div>
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Gestión de Usuarios</h2>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-[#6b2132] text-white">
                    <th className="px-4 py-3 text-left text-sm">Nombre</th>
                    <th className="px-4 py-3 text-left text-sm">Email</th>
                    <th className="px-4 py-3 text-left text-sm">Tipo</th>
                    <th className="px-4 py-3 text-left text-sm">Grupo</th>
                    <th className="px-4 py-3 text-left text-sm">Estado</th>
                    <th className="px-4 py-3 text-center text-sm">Acciones</th>
                  </tr>
                </thead>
                <tbody>
                  {usuarios.map((u, idx) => (
                    <React.Fragment key={u.id}>
                      <tr className={idx % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                        <td className="px-4 py-3 text-sm font-semibold">
                          {editando === u.id ? (
                            <input
                              type="text"
                              value={camposEdit.nombre}
                              onChange={(e) => setCamposEdit({ ...camposEdit, nombre: e.target.value })}
                              className="w-full px-2 py-1 border rounded"
                            />
                          ) : (
                            `${u.nombre} ${u.apellido}`
                          )}
                        </td>
                        <td className="px-4 py-3 text-sm">{u.email}</td>
                        <td className="px-4 py-3 text-sm">
                          {editando === u.id ? (
                            <select
                              value={camposEdit.tipo}
                              onChange={(e) => setCamposEdit({ ...camposEdit, tipo: e.target.value })}
                              className="px-2 py-1 border rounded"
                            >
                              <option>estudiante</option>
                              <option>profesor</option>
                              <option>admin</option>
                            </select>
                          ) : (
                            <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                              u.tipo === 'admin' ? 'bg-red-100 text-red-800' :
                              u.tipo === 'profesor' ? 'bg-purple-100 text-purple-800' :
                              'bg-blue-100 text-blue-800'
                            }`}>
                              {u.tipo}
                            </span>
                          )}
                        </td>
                        <td className="px-4 py-3 text-sm">{u.grupo || '-'}</td>
                        <td className="px-4 py-3 text-sm">
                          {editando === u.id ? (
                            <select
                              value={camposEdit.estado}
                              onChange={(e) => setCamposEdit({ ...camposEdit, estado: e.target.value })}
                              className="px-2 py-1 border rounded"
                            >
                              <option>activo</option>
                              <option>inactivo</option>
                            </select>
                          ) : (
                            <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                              u.estado === 'activo' ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'
                            }`}>
                              {u.estado}
                            </span>
                          )}
                        </td>
                        <td className="px-4 py-3 text-center text-sm">
                          {editando === u.id ? (
                            <div className="flex gap-2 justify-center">
                              <button
                                onClick={handleGuardarEdicion}
                                className="bg-green-600 text-white px-2 py-1 rounded text-xs hover:bg-green-700"
                              >
                                Guardar
                              </button>
                              <button
                                onClick={() => setEditando(null)}
                                className="bg-gray-400 text-white px-2 py-1 rounded text-xs hover:bg-gray-500"
                              >
                                Cancelar
                              </button>
                            </div>
                          ) : (
                            <div className="flex gap-2 justify-center">
                              <button
                                onClick={() => handleEditarInicio(u.id)}
                                className="bg-[#6b2132] text-white px-2 py-1 rounded text-xs hover:bg-opacity-90"
                              >
                                Editar
                              </button>
                              {u.tipo !== 'admin' && (
                                <button
                                  onClick={() => handleEliminar(u.id)}
                                  className="bg-red-600 text-white px-2 py-1 rounded text-xs hover:bg-red-700"
                                >
                                  Eliminar
                                </button>
                              )}
                            </div>
                          )}
                        </td>
                      </tr>
                    </React.Fragment>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* TAB: GRUPOS */}
        {tabActiva === 'grupos' && (
          <div>
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Gestión de Grupos</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {grupos.map((grupo) => {
                const estudiantesEnGrupo = usuarios.filter(u => u.grupo === grupo && u.tipo === 'estudiante').length;
                return (
                  <div key={grupo} className="bg-gradient-to-br from-[#6b2132] to-purple-700 text-white p-6 rounded-lg shadow">
                    <h3 className="text-lg font-bold mb-2">{grupo}</h3>
                    <p className="text-sm opacity-90">
                      <strong>{estudiantesEnGrupo}</strong> estudiante{estudiantesEnGrupo !== 1 ? 's' : ''}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* TAB: COPIAS DE SEGURIDAD */}
        {tabActiva === 'copias' && (
          <div className="space-y-6">
            <div>
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Copias de Seguridad</h2>
              <div className="bg-blue-50 p-6 rounded-lg border border-blue-200 mb-6">
                <p className="text-sm text-blue-800 mb-4">
                  Realiza copias de seguridad de toda la base de datos para evitar pérdida de datos.
                </p>
                <button
                  onClick={handleExportar}
                  className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition flex items-center gap-2"
                >
                  <i data-lucide="download" className="w-5 h-5"></i>
                  Descargar Backup
                </button>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-bold text-gray-800 mb-4">Restaurar desde Backup</h3>
              <div className="bg-yellow-50 p-6 rounded-lg border border-yellow-200">
                <p className="text-sm text-yellow-800 mb-4">
                  ⚠️ Advertencia: Restaurar un backup reemplazará todos los datos actuales.
                </p>
                <label className="bg-orange-600 text-white px-6 py-3 rounded-lg hover:bg-orange-700 transition flex items-center gap-2 cursor-pointer inline-block">
                  <i data-lucide="upload" className="w-5 h-5"></i>
                  Seleccionar Archivo
                  <input
                    type="file"
                    accept=".json"
                    onChange={handleImportar}
                    className="hidden"
                  />
                </label>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminDashboard;
