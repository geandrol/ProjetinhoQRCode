import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="w-full bg-amber-800/70 backdrop-blur-md text-amber-50 shadow-inner ">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between p-6 gap-4">
        
        {/* Logo / Nome */}
        <h1 className="text-2xl font-bold tracking-wide">Yu-Gi-Oh</h1>

        {/* Links */}
        <div className="flex gap-6 text-lg">
         <p className="text-amber-50 text-xl hover:text-yellow-200 cursor-pointer transition-colors">
         <Link to={"/historia"}>História</Link> 
        </p>
        <p className="text-amber-50 text-xl hover:text-yellow-200 cursor-pointer transition-colors">
          <Link to= {"/geradorqr"}>GerarQR</Link> 
        </p>
        <p className="text-amber-50 text-xl hover:text-yellow-200 cursor-pointer transition-colors">
          <Link to={"/scanner"}>Scanner</Link> 
        </p>
        </div>

        {/* Direitos autorais */}
        <p className="text-sm text-amber-200">
          © {new Date().getFullYear()} Yu-Gi-Oh. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
