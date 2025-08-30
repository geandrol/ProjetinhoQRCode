declare module "@yudiel/react-qr-scanner" {
  import * as React from "react";

  export interface QrScannerProps {
    /** Callback disparado quando o QR é decodificado */
    onDecode?: (result: string | { text?: string }) => void;

    /** Callback de erro (ex: sem permissão de câmera) */
    onError?: (error: Error) => void;

    /** Configuração da câmera */
    constraints?: {
      video?: {
        facingMode?: "environment" | "user";
        width?: number;
        height?: number;
      };
      audio?: boolean;
    };

    /** Estilo aplicado ao container */
    style?: React.CSSProperties;

    /** Tempo (ms) entre cada leitura do QR */
    scanDelay?: number;

    /** Pausar ou não a câmera */
    paused?: boolean;
  }

  const QrScanner: React.FC<QrScannerProps>;
  export default QrScanner;
}
