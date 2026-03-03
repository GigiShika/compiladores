
import React from 'react';

const Sidebar = ({ currentView, onNavigate, isMobileOpen, onMobileClose }) => {
  const courses = [
    { name: 'Ambientes de Programacion.', icon: 'server' },
    { name: 'Compiladores', icon: 'code-2' },
    { name: 'Contexto Nacional III', icon: 'globe' },
    { name: 'Sistemas Operativos', icon: 'cpu' },
    { name: 'SO en Red', icon: 'network' },
    { name: 'Teoría de la Computacion.', icon: 'book-open' },
    { name: 'Teoría de Lenguajes', icon: 'terminal' },
    { name: 'UDF Maestria', icon: 'graduation-cap' },
  ];

  const generalPages = [
    { name: 'Contacto', icon: 'mail' },
    { name: 'Presentaciones', icon: 'presentation' },
    { name: 'Sobre Mi', icon: 'user' },
    { name: 'Tesis', icon: 'file-text' },
  ];

  const handleNavigation = (view) => {
    onNavigate(view);
    onMobileClose();
  };

  return (
    <>
      {/* Overlay para cel */}
      {isMobileOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-30 lg:hidden"
          onClick={onMobileClose}
        />
      )}
      
      <aside className={`
        w-72 bg-gray-900 text-white flex flex-col shadow-2xl transition-all duration-300 z-40 flex-shrink-0
        ${isMobileOpen ? 'fixed left-0 top-0 h-full' : 'hidden lg:flex'}
      `}>
        {/* Perfil de la profa*/}
        <div 
          className="p-6 bg-gray-800 border-b border-gray-700 cursor-pointer hover:bg-gray-700 transition-colors"
          onClick={() => handleNavigation('Inicio')}
        >
          <div className="flex items-center gap-4">
            <div className="h-12 w-12 rounded-full bg-gray-300 overflow-hidden border-2 border-[#6b2132]">
              <img 
                src="https://ui-avatars.com/api/?name=Sara+Mendez&background=random" 
                alt="Sara Méndez" 
                className="h-full w-full object-cover"
              />
            </div>
            <div>
              <h2 className="font-bold text-lg leading-tight text-gray-100">Sara Méndez García</h2>
              <p className="text-xs text-gray-400">Docente IPN</p>
            </div>
          </div>
        </div>

        {/* Menú de Navegación */}
        <nav className="flex-1 overflow-y-auto custom-scroll py-4">
          <div className="px-4 mb-2 text-xs font-semibold text-gray-500 uppercase tracking-wider">
            Cursos
          </div>
          <ul className="space-y-1">
            {courses.map((course) => (
              <li key={course.name}>
                <button
                  onClick={() => handleNavigation(course.name)}
                  className={`
                    w-full text-left px-6 py-3 hover:bg-[#6b2132] hover:bg-opacity-80 
                    transition flex items-center gap-3 text-sm
                    ${currentView === course.name ? 'bg-gray-800 border-l-4 border-[#6b2132]' : ''}
                  `}
                >
                  <i data-lucide={course.icon} className="w-4 h-4"></i>
                  {course.name}
                </button>
              </li>
            ))}
          </ul>

          <div className="px-4 mt-6 mb-2 text-xs font-semibold text-gray-500 uppercase tracking-wider">
            General
          </div>
          <ul className="space-y-1">
            {generalPages.map((page) => (
              <li key={page.name}>
                <button
                  onClick={() => handleNavigation(page.name)}
                  className="w-full text-left px-6 py-3 hover:bg-gray-700 transition flex items-center gap-3 text-sm text-gray-300"
                >
                  <i data-lucide={page.icon} className="w-4 h-4"></i>
                  {page.name}
                </button>
              </li>
            ))}
          </ul>
        </nav>
      </aside>
    </>
  );
};

export default Sidebar;