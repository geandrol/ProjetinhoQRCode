import React, { useState } from 'react';
import { QRCodeSVG } from 'qrcode.react';
import Papa from 'papaparse';

// Definindo o tipo para os dados do CSV
type CSVData = string[];

const GeradorQr: React.FC = () => {
  const [nomes, setNomes] = useState<CSVData>([]);

  // Função para ler o arquivo CSV
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      Papa.parse(file, {
        complete: (result) => {
          const nomesDaLista = (result.data as string[][]).map((row) => row[0]);
          setNomes(nomesDaLista);
        },
        header: false,
      });
    }
  };

  return (
    <div className="min-h-screen bg-transparent p-4 sm:p-6 lg:p-8 flex flex-col items-center justify-center">
      
      {/* Container principal com a estética de "Scanner" */}
      <div className="relative w-full max-w-2xl bg-[#e4cfa3] border-4 border-yellow-700 rounded-xl shadow-2xl flex flex-col p-2">
        
        {/* Título do "Dispositivo" */}
        <div className="bg-[#8b0000] text-yellow-200 text-center font-bold text-lg px-2 py-1 border-b-2 border-yellow-700 tracking-wide mb-4">
          Gerador de QR Codes
        </div>

        {/* Input de Arquivo CSV */}
        <div className="flex flex-col items-center mb-6">
            <label htmlFor="csv-upload" className="block text-base font-semibold text-gray-800 mb-2">
              Carregar Lista de Nomes (CSV):
            </label>
            <input
              id="csv-upload"
              type="file"
              accept=".csv"
              onChange={handleFileChange}
              className="block w-full max-w-sm text-sm text-gray-700
                file:mr-4 file:py-2 file:px-4
                file:rounded-full file:border-0
                file:text-sm file:font-semibold
                file:bg-[#8b0000] file:text-yellow-200
                hover:file:bg-red-800 cursor-pointer"
            />
        </div>

        {/* Área de exibição dos QR Codes */}
        <div className="flex-1 bg-black/90 border-2 border-yellow-700 m-2 rounded-md overflow-hidden p-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 justify-items-center">
          
          {nomes.length > 0 ? (
            // Exibindo os QR Codes gerados
            nomes.map((nome, index) => (
              <div 
                key={index} 
                className="bg-[#f5f2dc] rounded-lg border border-yellow-700 p-3 flex flex-col items-center justify-center text-center shadow-md transform hover:scale-105 transition duration-300"
              >
                <h3 className="text-md font-semibold text-gray-800 mb-2">{nome}</h3>
                <QRCodeSVG value={nome} size={150} className="rounded-sm border border-gray-400" /> 
              </div>
            ))
          ) : (
            // Texto de instrução quando nenhum arquivo é carregado
            <div className="col-span-full bg-[#f5f2dc] border-t-2 border-yellow-700 rounded-sm p-4 text-sm text-black font-serif leading-snug text-center flex items-center justify-center h-full">
              <p>Carregue um arquivo CSV para visualizar os QR Codes gerados aqui.</p>
            </div>
          )}
        </div>

        {/* Rodapé ou área de status (opcional, adicionei uma instrução extra) */}
        <div className="bg-[#8b0000] border-t-2 border-yellow-700 mt-4 rounded-b-lg p-2 text-center">
            <p className="text-yellow-200 text-xs font-serif tracking-wide">
                Gere seus QR Codes mágicos!
            </p>
        </div>

      </div>
    </div>
  );
};

export default GeradorQr;