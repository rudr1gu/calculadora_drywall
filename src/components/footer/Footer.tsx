import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-gray-300 py-8 print:hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Calculadora de Materiais</h3>
            <p className="text-sm text-gray-400">
              Uma ferramenta prática para estimar materiais de construção com base na área do projeto.
            </p>
          </div>

          <div id="como-usar">
            <h3 className="text-lg font-semibold text-white mb-4">Como Usar</h3>
            <ol className="text-sm text-gray-400 space-y-2 list-decimal pl-4">
              <li>Selecione o tipo da Área</li>
              <li>Insira a área total em metros quadrados (m²)</li>
              <li>Clique em "Calcular Materiais"</li>
              <li>Visualize a tabela com as quantidades estimadas</li>
              <li>Imprima ou salve os resultados para referência</li>
            </ol>
          </div>

          <div id="sobre">
            <h3 className="text-lg font-semibold text-white mb-4">Sobre</h3>
            <p className="text-sm text-gray-400">
              As estimativas são baseadas em coeficientes padrão da indústria de construção civil. Os valores podem
              variar dependendo do tipo de construção e técnicas utilizadas.
            </p>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-700">
          <p className="text-sm text-gray-400 text-center">
            &copy; {new Date().getFullYear()} Calculadora de Materiais. Todos os direitos reservados.
            <br />
            Desenvolvido por{' '}
            <a
              href="https://rudr1gu.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline text-blue-500"
            >
              Rudr1gu
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;