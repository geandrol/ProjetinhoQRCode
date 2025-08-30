import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { Link } from "react-router-dom";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-amber-800/70 backdrop-blur-md flex items-center justify-between p-4 shadow-md">
      {/* Logo / Título */}
      <div>
        <h1 className="text-amber-50 text-3xl font-bold tracking-wide">
         <Link to={"/home"}>Yu-Gi-Oh</Link> 
          </h1>
      </div>

      {/* Menu Links para telas grandes */}
      <div className="hidden md:flex gap-6">
        <p className="text-amber-50 text-xl hover:text-yellow-200 cursor-pointer transition-colors">
         <Link to= {"/historia"}>História</Link> 
        </p>
        <p className="text-amber-50 text-xl hover:text-yellow-200 cursor-pointer transition-colors">
          <Link to= {"/geradorqr"}>GerarQR</Link> 
        </p>
        <p className="text-amber-50 text-xl hover:text-yellow-200 cursor-pointer transition-colors">
          <Link to={"/scanner"}>Scanner</Link> 
        </p>
      </div>

      {/* Botão Hambúrguer para telas pequenas */}
      <div className="md:hidden">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-amber-50 text-3xl focus:outline-none"
        >
          {isOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {/* Menu dropdown mobile */}
      {isOpen && (
        <div className="absolute top-full right-0 mt-2 w-40 bg-amber-800/90 backdrop-blur-md rounded-lg shadow-lg flex flex-col">
          <p className="px-4 py-2 text-amber-50 hover:bg-amber-700 cursor-pointer transition-colors">
            <Link to= "/historia">História</Link>
          </p>
          <p className="px-4 py-2 text-amber-50 hover:bg-amber-700 cursor-pointer transition-colors">
             <Link to= "/geradorqr">GerarQR</Link>
          </p>
          <p className="px-4 py-2 text-amber-50 hover:bg-amber-700 cursor-pointer transition-colors">
            <Link to={"/scanner"}>Scanner</Link> 
          </p>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
