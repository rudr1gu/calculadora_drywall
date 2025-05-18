export interface Material {
  id: string;
  name: string;
  unit: string;
  coefficient: number;
  description: string;
}

export interface CalculationResult {
  materials: Array<{
    id: string;
    name: string;
    quantity: number;
    unit: string;
    description: string;
  }>;
  totalArea: number;
}