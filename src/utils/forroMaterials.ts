import { Material } from "../types";

export const forroMaterials: Material[] = [
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