import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./pages/footer/Footer";
import Home from "./pages/home/Home";
import Navbar from "./pages/navbar/Navbar";
import QRCodeReader from "./pages/qrcode/QRCodeIframePlayer";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <div
          className="flex justify-center min-h-screen bg-contain bg-cover items-center"
          style={{ backgroundImage: `url('https://i.imgur.com/F2t8KBA.jpeg')` }}
        >
          {/* Overlay para escurecer e dar contraste ao texto */}
          <div className="absolute inset-0 bg-black/60"></div>
          <Routes>
           <Route path="/" element={<Home/>}/>
           <Route path="/home" element={<Home/>}/>
           <Route path="/scanner" element={<QRCodeReader/>}/>
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
