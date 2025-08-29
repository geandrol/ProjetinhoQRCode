import { useEffect, useRef, useState } from "react";
import QrScanner from "qr-scanner";
import qrScannerWorkerPath from "qr-scanner/qr-scanner-worker.min.js?url";
import { cards, type Card } from "../../model/Card";

QrScanner.WORKER_PATH = qrScannerWorkerPath;

const QRCodeReader = () => {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const scannerRef = useRef<QrScanner | null>(null);

  const [qrResult, setQrResult] = useState<Card | null>(null);
  const [isScanning, setIsScanning] = useState(true);
  const [cameras, setCameras] = useState<{ id: string; label: string }[]>([]);
  const [selectedCamera, setSelectedCamera] = useState<string | null>(null);

  const [voices, setVoices] = useState<SpeechSynthesisVoice[]>([]);
  const [selectedVoice, setSelectedVoice] =
    useState<SpeechSynthesisVoice | null>(null);

  // Listar câmeras
  useEffect(() => {
    QrScanner.listCameras(true).then((devices) => {
      const mapped = devices.map((d) => ({
        id: d.id,
        label: d.label || `Câmera ${d.id}`,
      }));
      setCameras(mapped);
      if (mapped.length > 0) setSelectedCamera(mapped[0].id);
    });
  }, []);

  // Listar vozes disponíveis
  useEffect(() => {
    const loadVoices = () => {
      const v = window.speechSynthesis.getVoices();
      setVoices(v);
      if (v.length > 0) setSelectedVoice(v[0]);
    };

    loadVoices();
    window.speechSynthesis.onvoiceschanged = loadVoices;
  }, []);

  // Iniciar scanner
  useEffect(() => {
    if (!videoRef.current || !selectedCamera) return;

    if (scannerRef.current) scannerRef.current.stop();

    const scanner = new QrScanner(
      videoRef.current,
      (result) => {
        const text = (result as any).data || String(result);
        const foundCard = cards.find((c) => c.codigo === text);

        if (foundCard) {
          setQrResult(foundCard);
          setIsScanning(false);
          scanner.stop();
        } else {
          setQrResult(null);
        }
      },
      { highlightScanRegion: true, highlightCodeOutline: true }
    );

    scannerRef.current = scanner;
    scannerRef.current
      ?.start()
      .then(() => {
        if (selectedCamera) scannerRef.current?.setCamera(selectedCamera);
      })
      .catch(console.error);

    return () => {
      scanner.stop();
      scannerRef.current = null;
    };
  }, [selectedCamera]);

  const handleScanAgain = () => {
    setQrResult(null);
    setIsScanning(true);

    if (scannerRef.current) {
      scannerRef.current
        .start()
        .then(() => {
          if (selectedCamera) scannerRef.current?.setCamera(selectedCamera);
        })
        .catch(console.error);
    }
  };

  const handlePlay = () => {
    if (!qrResult || !selectedVoice) return;
    const utterance = new SpeechSynthesisUtterance(qrResult.texto);
    utterance.voice = selectedVoice;
    utterance.lang = selectedVoice.lang;
    utterance.rate = 1;
    utterance.pitch = 1;
    window.speechSynthesis.speak(utterance);
  };

  return (
    <div className="flex flex-col items-center gap-4 mt-28 p-4">
      {/* Scanner */}
      {!qrResult && (
       <div className="relative w-80 h-[28rem] bg-[#e4cfa3] border-4 border-yellow-700 rounded-xl shadow-2xl flex flex-col">
  {/* Título */}
  <div className="bg-[#8b0000] text-yellow-200 text-center font-bold text-lg px-2 py-1 border-b-2 border-yellow-700 tracking-wide">
    Scanner QR Code
  </div>

  {/* Área da câmera */}
  <div className="flex-1 bg-black/90 border-2 border-yellow-700 m-2 rounded-md overflow-hidden flex items-center justify-center">
    <video
      ref={videoRef}
      className="w-full h-full object-cover"
    />
  </div>

  {/* Texto de instrução */}
  {isScanning && (
    <div className="bg-[#f5f2dc] border-t-2 border-yellow-700 m-2 rounded-sm p-2 text-xs text-black font-serif leading-snug text-center">
      Aponte a câmera para um QR Code...
    </div>
  )}

  {/* Select de câmeras */}
  {cameras.length > 1 && (
    <select
      value={selectedCamera ?? ""}
      onChange={(e) => setSelectedCamera(e.target.value)}
      className="mx-2 mb-2 py-1 px-2 border border-yellow-700 rounded bg-black text-yellow-300 text-xs w-[95%] text-center"
    >
      {cameras.map((cam) => (
        <option key={cam.id} value={cam.id}>
          {cam.label}
        </option>
      ))}
    </select>
  )}
</div>

      )}

      {/* Card resultado */}
      {qrResult && (
       <div className="relative w-80 h-[28rem] bg-[#e4cfa3] border-4 border-yellow-700 rounded-xl shadow-2xl flex flex-col">
  {/* Cabeçalho (nome da carta) */}
  <div className="bg-[#8b0000] text-yellow-200 text-center font-bold text-lg px-2 py-1 border-b-2 border-yellow-700 tracking-wide">
    {qrResult?.nome || "Nome da Carta"}
  </div>

  {/* Área da imagem */}
  <div className="flex-1 bg-black/90 border-2 border-yellow-700 m-2 rounded-md overflow-hidden flex items-center justify-center">
    {qrResult?.foto ? (
      <img
        src={qrResult.foto}
        alt={qrResult.nome}
        className="w-full h-full object-cover"
      />
    ) : (
      <p className="text-yellow-300 text-sm italic">[Imagem]</p>
    )}
  </div>

  {/* Caixa de descrição */}
  <div className="bg-[#f5f2dc] border-t-2 border-yellow-700 m-2 rounded-sm p-2 text-xs text-black font-serif leading-snug overflow-y-auto max-h-24">
    {qrResult?.texto || "Descrição ou efeito da carta vai aqui..."}
  </div>

  {/* Rodapé estilo ATK/DEF */}
  <div className="flex justify-between items-center px-3 py-1 text-[0.7rem] font-bold text-black border-t border-yellow-700">
  
  </div>

  {/* Controles extras (select + botões) */}
  {voices.length > 0 && (
    <select
      className="mx-2 mb-2 py-1 px-2 border border-yellow-700 rounded bg-black text-yellow-300 text-xs w-[95%] text-center"
      value={selectedVoice?.name}
      onChange={(e) =>
        setSelectedVoice(
          voices.find((v) => v.name === e.target.value) || null
        )
      }
    >
      {voices.map((v) => (
        <option key={v.name} value={v.name}>
          {v.name} ({v.lang})
        </option>
      ))}
    </select>
  )}

  <div className="flex gap-2 justify-center mb-2">
    <button
      onClick={handlePlay}
      className="px-3 py-1 bg-yellow-500 text-black font-bold rounded shadow hover:bg-yellow-400 transition text-sm"
    >
      ▶ Play
    </button>
    <button
      onClick={handleScanAgain}
      className="px-3 py-1 bg-blue-600 text-white rounded shadow hover:bg-blue-700 transition text-sm"
    >
      Escanear novamente
    </button>
  </div>
</div>

      )}
    </div>
  );
};

export default QRCodeReader;
