import React from 'react';
import MaterialsTable from './MaterialsTable';
import { useCalculator } from '../hooks/useCalculator';

const Calculator: React.FC = () => {

  const {
    area,
    tipoArea,
    results,
    isCalculating,
    error,
    setArea,
    setTipoArea,
    handleCalculate,
    handleReset,
    handlePrint
  } = useCalculator();



  return (
    <section className="max-w-4xl mx-auto px-4 py-8 print:py-2">
      <div className="bg-white rounded-lg shadow-lg p-6 mb-8 print:shadow-none">
        <form onSubmit={handleCalculate} className="space-y-6">
          <div>
            <label
              htmlFor="area"
              className="block text-gray-700 text-sm font-medium mb-2"
            >
              Área total (m²)
            </label>
            <div className="flex items-center space-x-4 mb-4">
              <label className="block text-gray-700 text-sm font-medium mb-2">Tipo de Área</label>
              <select
                value={tipoArea}
                onChange={(e) => setTipoArea(e.target.value as 'Forro' | 'Parede' | 'Contra Parede')}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg"
              >
                <option value="Forro">Forro</option>
                <option value="Parede">Parede</option>
                <option value="Contra Parede">Contra Parede</option>
              </select>
            </div>

            <div className="relative">
              <input
                id="area"
                type="number"
                step="0.01"
                min="0"
                value={area}
                onChange={e => setArea(e.target.value)}
                placeholder="Ex: 100"
                className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:outline-none transition-colors duration-200 ${error ? 'border-red-500 focus:ring-red-200' : 'border-gray-300 focus:ring-blue-100 focus:border-blue-500'
                  }`}
              />
              <span className="absolute right-3 top-3 text-gray-500">m²</span>
            </div>
            {error && <p className="mt-2 text-sm text-red-600">{error}</p>}
          </div>

          <div className="flex flex-col sm:flex-row sm:space-x-4 space-y-4 sm:space-y-0">
            <button
              type="submit"
              className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-lg transition-colors duration-200 flex items-center justify-center"
            >
              {isCalculating ? (
                <span className="flex items-center">
                  <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Calculando...
                </span>
              ) : (
                'Calcular Materiais'
              )}
            </button>
            {results && (
              <>
                <button
                  type="button"
                  onClick={handleReset}
                  className="w-full sm:w-auto bg-gray-200 hover:bg-gray-300 text-gray-800 font-medium py-3 px-6 rounded-lg transition-colors duration-200"
                >
                  Limpar
                </button>
                <button
                  type="button"
                  onClick={handlePrint}
                  className="w-full sm:w-auto bg-teal-600 hover:bg-teal-700 text-white font-medium py-3 px-6 rounded-lg transition-colors duration-200 print:hidden"
                >
                  Imprimir
                </button>
              </>
            )}
          </div>
        </form>
      </div>

      {results && <MaterialsTable results={results} material={tipoArea} />}
    </section>
  );
};

export default Calculator;