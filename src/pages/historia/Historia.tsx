const Historia = () => {
  return (
    <section className="flex flex-col bg-transparent items-center justify-center text-center min-h-screen w-full relative ">
      {/* Conteúdo */}
      <div className="relative z-10 px-6">
        <h1 className="text-amber-200 text-5xl md:text-7xl font-extrabold tracking-widest drop-shadow-lg">
          A História dos Duelos Yu-Gi-Oh!
        </h1>
        <p className="text-amber-50 text-xl md:text-2xl mt-6 max-w-3xl mx-auto drop-shadow-md leading-relaxed">
          Tudo começou no Japão, nos anos 90, quando o mangá <span className="font-bold">Yu-Gi-Oh!</span> apresentou ao mundo 
          um jogo de cartas que logo se tornaria uma febre mundial.  
          Entre duelos emocionantes e monstros lendários, a magia tomou conta dos fãs.
        </p>
        <p className="text-amber-50 text-lg md:text-xl mt-6 max-w-2xl mx-auto drop-shadow-md leading-relaxed">
          Desde então, milhões de duelistas ao redor do mundo revivem essa experiência, 
          colecionando cartas, desafiando amigos e mergulhando em estratégias que unem 
          nostalgia e emoção.  
        </p>
        <p className="text-amber-100 text-xl md:text-2xl mt-8 italic font-semibold">
          Relembre a origem, reviva os duelos e descubra porque jogar Yu-Gi-Oh! é mais do que um passatempo:  
          é fazer parte de uma lenda.
        </p>
      </div>
    </section>
  );
};

export default Historia;
