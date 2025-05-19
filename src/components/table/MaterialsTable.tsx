import React from 'react';
import { CalculationResult } from '../../models/CalculationResult';


interface MaterialsTableProps {
  results: CalculationResult;
  material: string;
}

const MaterialsTable: React.FC<MaterialsTableProps> = ({ results, material }) => {
  if (!results || !results.materials || results.materials.length === 0) {
    return null;
  }

  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden animate-fade-in print:shadow-none">
      <div className="p-6 bg-gradient-to-r from-blue-600 to-blue-700 print:bg-blue-600">
        <h2 className="text-xl font-bold text-white">
          Materiais para {results.totalArea} m² de {material}
        </h2>
        <p className="text-blue-100">
          Estimativa baseada em coeficientes padrão de construção
        </p>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="bg-gray-50 border-b border-gray-200">
              <th className="px-6 py-4 text-left text-sm font-medium text-gray-500 uppercase tracking-wider">
                Material
              </th>
              <th className="px-6 py-4 text-left text-sm font-medium text-gray-500 uppercase tracking-wider">
                Quantidade
              </th>
              <th className="px-6 py-4 text-left text-sm font-medium text-gray-500 uppercase tracking-wider">
                Unidade
              </th>
              <th className="px-6 py-4 text-left text-sm font-medium text-gray-500 uppercase tracking-wider hidden md:table-cell">
                Descrição
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {results.materials.map((material, index) => (
              <tr
                key={material.id}
                className={`hover:bg-gray-50 transition-colors duration-150 ${index % 2 === 0 ? 'bg-white' : 'bg-gray-50'
                  }`}
              >
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800">
                  {material.name}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                  {material.quantity.toLocaleString('pt-BR')}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                  {material.unit}
                </td>
                <td className="px-6 py-4 text-sm text-gray-500 hidden md:table-cell">
                  {material.description}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="p-4 border-t border-gray-200 bg-gray-50 print:bg-white">
        <p className="text-sm text-gray-500">
          <strong>Nota:</strong> Esta é uma estimativa básica. Os valores podem variar dependendo do tipo de construção,
          técnicas utilizadas e desperdício. Consulte um profissional para projetos específicos.
        </p>
      </div>
    </div>
  );
};

export default MaterialsTable;