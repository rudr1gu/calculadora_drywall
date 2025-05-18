import { useState } from "react";
import { Material } from "../models/Material";
import { calculateMaterials } from "../utils/calculations";
import { contraParedeMaterials } from "../utils/contraParedeMaterials";
import { forroMaterials } from "../utils/forroMaterials";
import { paredeMaterials } from "../utils/paredeMaterials";
import { CalculationResult } from "../models/CalculationResult";

export const useCalculator = () => {
    const [area, setArea] = useState<string>('');
    const [tipoArea, setTipoArea] = useState<'Forro' | 'Parede' | 'Contra Parede'>('Forro');
    const [results, setResults] = useState<CalculationResult | null>(null);
    const [isCalculating, setIsCalculating] = useState<boolean>(false);
    const [error, setError] = useState<string>('');


    const handleCalculate = (e: React.FormEvent) => {
        e.preventDefault();

        const areaValue = parseFloat(area);

        if (!areaValue || isNaN(areaValue) || areaValue <= 0) {
            setError('porfavor, insira um valor válido para a área.');
            setResults(null);
            return;
        }

        setError('');
        setIsCalculating(true);

        setTimeout(() => {
            const calculationResults = calculateMaterials(areaValue, getMaterialsByType(tipoArea));
            setResults(calculationResults);
            setIsCalculating(false);
        }, 600);
    };

    const getMaterialsByType = (tipo: string): Material[] => {
        switch (tipo) {
            case 'Parede':
                return paredeMaterials;
            case 'Contra Parede':
                return contraParedeMaterials;
            default:
                return forroMaterials;
        }
    };

    const handleReset = () => {
        setArea('');
        setResults(null);
        setError('');
    };

    const handlePrint = () => {
        window.print();
    };

    return {
        area,
        setArea,
        tipoArea,
        setTipoArea,
        results,
        isCalculating,
        error,
        handleCalculate,
        handleReset,
        handlePrint
    };
}
