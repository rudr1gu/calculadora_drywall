import React from 'react';
import Header from './components/Header';
import Calculator from './components/Calculator';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      <Header />
      
      <main className="flex-grow">
        <div className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
          <div className="mb-8 text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-2">
              Calculadora de Materiais para Construção
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Informe a área em metros quadrados (m²) e obtenha imediatamente uma estimativa 
              das quantidades necessárias de diversos materiais para sua obra.
            </p>
          </div>
          
          <Calculator />
        </div>
      </main>
      
      <Footer />
    </div>
  );
}

export default App;