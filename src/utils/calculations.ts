import { Material, CalculationResult } from '../types';

export const liningMaterials: Material[] = [
  { 
    id: 'placa', 
    name: 'Placa ST', 
    unit: 'unidade', 
    coefficient: 0.486, 
    description: 'Placa ST 1,20m x 1,80m'
  },
  { 
    id: 'canaleta', 
    name: 'Canaleta', 
    unit: 'unidade', 
    coefficient: 0.6, 
    description: 'Perfil F530'
  },
  { 
    id: 'cantoneira', 
    name: 'Cantoneira', 
    unit: 'unidade', 
    coefficient: 0.3, 
    description: 'Cantoneira 25x30 ou Tábica Metálica'
  },
  { 
    id: 'regulador', 
    name: 'Regulador', 
    unit: 'unidade', 
    coefficient: 1.8, 
    description: 'Presilha F530'
  },
  { 
    id: 'tirante', 
    name: 'Arame 10mm', 
    unit: 'unidade', 
    coefficient: 1.8, 
    description: 'Arame 10mm'
  },
  { 
    id: 'parafuso', 
    name: 'Parafuso', 
    unit: 'unidade', 
    coefficient: 13, 
    description: 'Parafuso TA 25mm'
  },
  { 
    id: 'gesso', 
    name: 'Gesso', 
    unit: 'KG', 
    coefficient: 0.47, 
    description: 'Massa de Drywall ou Gesso'
  },
  { 
    id: 'fita', 
    name: 'Fita Tela', 
    unit: 'metros', 
    coefficient: 1, 
    description: 'Fita Telada para Drywall'
  },
];

// Calculate materials based on area
export const calculateMaterials = (
  area: number, 
  materials: Material[] = liningMaterials
): CalculationResult => {
  if (!area || area <= 0) {
    return { materials: [], totalArea: 0 };
  }

  return {
    materials: materials.map(material => ({
      id: material.id,
      name: material.name,
      quantity: parseFloat((material.coefficient * area).toFixed(2)),
      unit: material.unit,
      description: material.description
    })),
    totalArea: area
  };
};

// Convert square meters to square feet
export const sqMToSqFt = (sqM: number): number => {
  return sqM * 10.764;
};

// Convert square feet to square meters
export const sqFtToSqM = (sqFt: number): number => {
  return sqFt / 10.764;
};