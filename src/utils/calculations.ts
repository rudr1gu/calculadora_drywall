import { CalculationResult } from "../models/CalculationResult";
import { Material } from "../models/Material";

export const calculateMaterials = (
  area: number, 
  materials: Material[]
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

export const sqMToSqFt = (sqM: number): number => {
  return sqM * 10.764;
};

export const sqFtToSqM = (sqFt: number): number => {
  return sqFt / 10.764;
};