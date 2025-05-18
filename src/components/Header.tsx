import React from 'react';
import { HardHat } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <header className="bg-gradient-to-r from-blue-700 to-blue-900 text-white shadow-md print:hidden">
      <div className="max-w-7xl mx-auto px-4 py-6 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center">
        <div className="flex items-center mb-4 md:mb-0">
          <HardHat size={32} className="mr-3 text-blue-200" />
          <div>
            <h1 className="text-2xl font-bold tracking-tight">Calculadora de Materiais</h1>
            <p className="text-blue-200 text-sm">Calcule rapidamente os materiais para sua obra</p>
          </div>
        </div>
        
        <div className="flex space-x-4">
          <a 
            href="#como-usar" 
            className="text-blue-100 hover:text-white text-sm font-medium transition-colors duration-200"
          >
            Como Usar
          </a>
          <a 
            href="#sobre" 
            className="text-blue-100 hover:text-white text-sm font-medium transition-colors duration-200"
          >
            Sobre
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;