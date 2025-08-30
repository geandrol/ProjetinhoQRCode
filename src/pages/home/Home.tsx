function Home() {
  return (
    <section className="flex flex-col items-center justify-center text-center min-h-screen w-full bg-cover bg-center relative">
      {/* Conteúdo */}
      <div className="relative z-10 px-6">
        <h1 className="text-amber-200 text-5xl md:text-7xl font-extrabold tracking-widest drop-shadow-lg">
          Bem-vindo ao Universo Yu-Gi-Oh!
        </h1>
        <p className="text-amber-50 text-xl md:text-2xl mt-6 max-w-2xl mx-auto drop-shadow-md">
          Entre no duelo das cartas, reviva a história e descubra os segredos
          por trás desse mundo incrível.
        </p>
      </div>
    </section>
  );
}

export default Home;
