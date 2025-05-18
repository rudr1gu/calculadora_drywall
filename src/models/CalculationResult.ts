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