import { Material } from "../types";

export const paredeMaterials: Material[] = [
  { 
    id: 'placa', 
    name: 'Placa ST', 
    unit: 'unidade', 
    coefficient: 1, 
    description: 'Placa ST 1,20m x 1,80m'
  },
  { 
    id: 'montante', 
    name: 'Montante', 
    unit: 'unidade', 
    coefficient: 0.83, 
    description: 'Montante 48mm/70mm/90mm'
  },
  { 
    id: 'guia', 
    name: 'Cantoneira',
    unit: 'unidade', 
    coefficient: 0.3, 
    description: 'Guia 48mm/70mm/90mm'
  },
  { 
    id: 'parafuso', 
    name: 'Parafuso', 
    unit: 'unidade', 
    coefficient: 22, 
    description: 'Parafuso TA 25mm'
  },
  { 
    id: 'gesso', 
    name: 'Gesso', 
    unit: 'KG', 
    coefficient: 0.94, 
    description: 'Massa de Drywall ou Gesso'
  },
  { 
    id: 'fita', 
    name: 'Fita Tela', 
    unit: 'metros', 
    coefficient: 2.8, 
    description: 'Fita Telada para Drywall'
  },
];