// App.jsx
import React, { useState, useEffect } from 'react';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import Home from './pages/Home';
import Course from './pages/Course';
import Contact from './pages/Contact';
import GenericPage from './pages/GenericPage';
import SearchResults from './pages/SearchResults';
import { mockFiles } from './data/mockData';
import './index.css';

function App() {
  const [currentView, setCurrentView] = useState('Inicio');
  const [currentPeriod, setCurrentPeriod] = useState(1);
  const [searchQuery, setSearchQuery] = useState('');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Inicializar iconos Lucide
  useEffect(() => {
    if (window.lucide) {
      window.lucide.createIcons();
    }
  }, [currentView]);

  const renderContent = () => {
    switch (currentView) {
      case 'Inicio':
        return <Home onNavigate={setCurrentView} />;
      
      case 'Ambientes de Prog.':
      case 'Compiladores':
      case 'Contexto Nacional':
      case 'Sistemas Operativos':
      case 'SO en Red':
      case 'Teoría de la Comp.':
      case 'Teoría Leng. y Comp.':
      case 'Maestría Educación':
        return (
          <Course 
            courseName={currentView}
            currentPeriod={currentPeriod}
            onPeriodChange={setCurrentPeriod}
          />
        );
      
      case 'Contacto':
        return <Contact />;
      
      case 'Presentaciones':
      case 'Sobre Mi':
      case 'Tesis':
        return <GenericPage pageName={currentView} />;
      
      case 'Resultados':
        return <SearchResults query={searchQuery} files={mockFiles} />;
      
      default:
        return <Home onNavigate={setCurrentView} />;
    }
  };

  const handleSearch = (query) => {
    setSearchQuery(query);
    setCurrentView('Resultados');
  };

  return (
    <div className="flex h-screen overflow-hidden text-gray-800 bg-gray-50">
      <Sidebar 
        currentView={currentView}
        onNavigate={setCurrentView}
        isMobileOpen={isMobileMenuOpen}
        onMobileClose={() => setIsMobileMenuOpen(false)}
      />
      
      <main className="flex-1 flex flex-col relative min-w-0 bg-gray-50">
        <Header 
          title={currentView}
          onSearch={handleSearch}
          onMenuToggle={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        />
        
        <div id="contentArea" className="flex-1 overflow-y-auto p-6 md:p-8">
          {renderContent()}
        </div>
      </main>
    </div>
  );
}

export default App;