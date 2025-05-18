import { Material } from "../types";

export const contraParedeMaterials: Material[] = [
  { 
    id: 'placa', 
    name: 'Placa ST', 
    unit: 'unidade', 
    coefficient: 0.48, 
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
    coefficient: 1.3, 
    description: 'Fita Telada para Drywall'
  },
];