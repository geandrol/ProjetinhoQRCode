export interface Card {
  codigo: string;
  nome: string;
  foto: string;
  texto: string;
}

export const cards: Card[] = [

  {
    codigo: "Aranha Roleta",
    nome: "Carta Mágica Aranha Roleta",
    foto: "https://storage.googleapis.com/ygoprodeck.com/pics/3105.jpg",
    texto: "Feitiço Rápido: quando um monstro do oponente declara um ataque, lance um dado de seis faces e aplique o resultado:\n1) Metade dos seus Pontos de Vida;\n2) o ataque torna-se direto;\n3) mude o alvo do ataque para um de seus monstros e realize o cálculo de dano;\n4) redirecione o ataque para um monstro do oponente e realize o cálculo de dano;\n5) negue o ataque e inflija dano ao oponente igual ao ATK do monstro atacante;\n6) destrua o monstro atacante. Uma carta imprevisível, mas pode mudar o rumo de duelos críticos."
  },
  {
    codigo: "Bode Expiatório",
    nome: "Carta Mágica Bode Expiatório",
    foto: "https://storage.googleapis.com/ygoprodeck.com/pics/6212.jpg",
    texto: "Feitiço Rápido: invoca Especialmente quatro Fichas de Ovelha (Besta/TERRA/Nível 1/ATK 0/DEF 0) em Posição de Defesa. Essas fichas não podem ser usadas como Tributo neste turno. Você não pode Invocar por Invocação Normal ou Especial, mas pode Baixar monstros normalmente. Excelente para defesa imediata ou servir como material para Invocações Xyz, Link, Synchro ou fusões."
  },
  {
    codigo: "Buraco Armadilha de Espinhos",
    nome: "Carta Armadilha Buraco Armadilha de Espinhos",
    foto: "https://storage.googleapis.com/ygoprodeck.com/pics/5914.jpg",
    texto: "Carta Armadilha Contínua: quando um monstro do oponente declara um ataque direto e você não controla monstros, destrua o monstro atacante e inflija dano ao seu oponente igual ao ATK original dele. Útil para virar o jogo defensivamente e punir ataques directos."
  },
  {
    codigo: "Caixa Fada",
    nome: "Carta Armadilha Caixa Fada",
    foto: "https://storage.googleapis.com/ygoprodeck.com/pics/21598948.jpg",
    texto: "Armadilha Contínua: sempre que o oponente declarar um ataque, jogue uma moeda e escolha cara ou coroa. Se vencer, o ATK do atacante se torna 0 até o final da Battle Phase. Contudo, em cada sua Fase de Apoio você deve pagar 500 LP ou destruir esta carta. Excelente para neutralizar ataques fortes por mais tempo, mas exige manutenção."
  },
  {
    codigo: "Cavaleiro Comando",
    nome: "Monstro de Efeito Cavaleiro Comando",
    foto: "https://storage.googleapis.com/ygoprodeck.com/pics/06480253.jpg",
    texto: "Monstro de Efeito/Terra — Nível 4, 1600 ATK/1200 DEF. Todos os seus monstros Guerreiro ganham 400 ATK. Além disso, você pode descartá-lo da mão para negar e destruir uma carta Mágica ou Armadilha que tenha como alvo seus monstros. Excelente tanto ofensivamente quanto como proteção estratégica."
  },
  {
    codigo: "Companheiro Espadachim de Landstar",
    nome: "Monstro Normal Companheiro Espadachim de Landstar",
    foto: "https://storage.googleapis.com/ygoprodeck.com/pics/85551711.jpg",
    texto: "Monstro Normal/Guerreiro – Nível 4 – 1700 ATK/1200 DEF. Carismático personagem do anime; ganha poder com cartas de suporte, mas sozinho é apenas um beatstick básico. Ideal como base para estratégias temáticas."
  },
  {
    codigo: "Dado Caveira",
    nome: "Carta Mágica Dado Caveira",
    foto: "https://storage.googleapis.com/ygoprodeck.com/pics/12345678.jpg",
    texto: "Feitiço Normal: lance dois dados de seis faces e some os resultados; todos os monstros em campo perdem ATK igual à soma até o final deste turno. Útil para enfraquecer vários oponentes ao mesmo tempo e abrir caminho para invasões."
  },
  {
    codigo: "Dado Gracioso",
    nome: "Carta Mágica Dado Gracioso",
    foto: "https://storage.googleapis.com/ygoprodeck.com/pics/87654321.jpg",
    texto: "Feitiço Normal: você e seu oponente lançam um dado; se o seu for maior, compre uma carta; se for menor, destrua um monstro seu com menos ATK que o que seu oponente invocou. Ideal para vantagem de cartas ou trade-offs arriscados."
  },
  {
    codigo: "Dragão Bebê (Filhote)",
    nome: "Monstro Normal Dragão Bebê (Filhote)",
    foto: "https://storage.googleapis.com/ygoprodeck.com/pics/11223344.jpg",
    texto: "Monstro Normal/Dragão — Nível 1, 300 ATK/200 DEF. Card fraco estatisticamente, mas útil como material para fusões ou como bloqueador inicial."
  },
  {
    codigo: "Dragão Metálico Negro",
    nome: "Monstro Normal Dragão Metálico Negro",
    foto: "https://storage.googleapis.com/ygoprodeck.com/pics/55667788.jpg",
    texto: "Monstro Normal/Dragão — Nível 5, 2400 ATK/200 DEF. Alto ataque e baixo DEF, inteiro e direto; pode servir como ofensiva sólida ou material para invocações de fusão/Link."
  },
  {
    codigo: "Dragão Negro de Olhos Vermelhos",
    nome: "Monstro Normal Dragão Negro de Olhos Vermelhos",
    foto: "https://storage.googleapis.com/ygoprodeck.com/pics/89654321.jpg",
    texto: "Monstro Normal/Dragão — Nível 7, 2400 ATK/2000 DEF. Clássico beatstick de alto poder, bom para ataques diretos e controle de campo."
  },
  {
    codigo: "Escudo Mágico de Braço",
    nome: "Carta Armadilha Escudo Mágico de Braço",
    foto: "https://storage.googleapis.com/ygoprodeck.com/pics/07189699.jpg",
    texto: "Armadilha Normal: quando um monstro declara ataque, o monstro atacante perde ATK igual ao ATK do monstro alvo até o final da Batalha. Se o ATK do atacante se tornar 0 por este efeito, destrua-o. Excelente para neutralizar ataques fortes e punir o oponente."
  },
  {
    codigo: "Espada do Jacaré",
    nome: "Carta Mágica Espada do Jacaré",
    foto: "https://storage.googleapis.com/ygoprodeck.com/pics/51136322.jpg",
    texto: "Feitiço de Equipamento: equipe a um monstro; ele ganha 800 ATK. Uma carta simples, mas eficiente em aumentar o poder ofensivo de qualquer criatura no campo."
  },
  {
    codigo: "Espadachim da Chama Azul",
    nome: "Monstro Normal Espadachim da Chama Azul",
    foto: "https://storage.googleapis.com/ygoprodeck.com/pics/85215458.jpg",
    texto: "Guerreiro/FOGO – Nível 4 – ATK 1800 / DEF 1600. Um espadachim habilidoso cuja lâmina arde em chamas. É uma das opções clássicas de monstro normal com alto ataque para nível 4."
  },
  {
    codigo: "Espadas da Luz Reveladora",
    nome: "Carta Mágica Espadas da Luz Reveladora",
    foto: "https://storage.googleapis.com/ygoprodeck.com/pics/72302403.jpg",
    texto: "Feitiço Normal: após ativar, os monstros do seu oponente não podem declarar ataque por 3 turnos. Além disso, quando ativada, você revela todos os monstros Baixados do oponente. Excelente para defesa temporária e planejamento de estratégia."
  },
  {
    codigo: "Força de Ataque dos Goblins",
    nome: "Carta Mágica Força de Ataque dos Goblins",
    foto: "https://storage.googleapis.com/ygoprodeck.com/pics/78658564.jpg",
    texto: "Feitiço Normal: aumente o ATK de um monstro em 1400 pontos até a Fase Final. Porém, após o efeito, ele perde 200 ATK permanentemente. Um reforço arriscado, mas pode decidir batalhas no turno certo."
  },
  {
    codigo: "Força do Espelho",
    nome: "Carta Armadilha Força do Espelho",
    foto: "https://storage.googleapis.com/ygoprodeck.com/pics/44095762.jpg",
    texto: "Armadilha Normal: quando um monstro do oponente declara ataque, destrua todos os monstros em Posição de Ataque que ele controla. Uma das armadilhas mais icônicas, excelente para contra-atacar ofensivas em massa."
  },
  {
    codigo: "Gearfried, o Cavaleiro de Ferro",
    nome: "Monstro de Efeito Gearfried, o Cavaleiro de Ferro",
    foto: "https://storage.googleapis.com/ygoprodeck.com/pics/00423705.jpg",
    texto: "Guerreiro/TERRA – Nível 4 – ATK 1800 / DEF 1600. Não pode ser equipado com Cartas de Equipamento; se for alvo de uma, ela é destruída imediatamente. Esse efeito o protege de debuffs, mas impede o uso de power-ups."
  },
  {
    codigo: "Gearfried, o Mestre da Espada",
    nome: "Monstro de Efeito Gearfried, o Mestre da Espada",
    foto: "https://storage.googleapis.com/ygoprodeck.com/pics/57046845.jpg",
    texto: "Guerreiro/TERRA – Nível 7 – ATK 2600 / DEF 2200. Quando equipado com uma carta de Equipamento, destrua 1 carta do oponente. Grande versão evoluída de Gearfried, aproveita suportes de equipamentos para se tornar ameaça destrutiva."
  },
  {
    codigo: "Gilford, o Relâmpago",
    nome: "Monstro de Efeito Gilford, o Relâmpago",
    foto: "https://storage.googleapis.com/ygoprodeck.com/pics/36354007.jpg",
    texto: "Guerreiro/LUZ – Nível 8 – ATK 2800 / DEF 1400. Se Invocado por Invocação Tributo ao oferecer 3 monstros, destrua todos os monstros que seu oponente controla. Um finalizador poderoso que limpa o campo inimigo."
  },
  {
    codigo: "Guerreiro Foguete",
    nome: "Monstro Normal Guerreiro Foguete",
    foto: "https://storage.googleapis.com/ygoprodeck.com/pics/24311372.jpg",
    texto: "Guerreiro/TERRA – Nível 4 – ATK 1500 / DEF 1300. Um guerreiro veloz com armadura equipada de foguetes. Apesar de não ter efeitos, é lembrado por seu visual marcante e presença nos primeiros episódios do anime."
  },
  {
    codigo: "Guerreiro Pantera",
    nome: "Monstro Normal Guerreiro Pantera",
    foto: "https://storage.googleapis.com/ygoprodeck.com/pics/42035044.jpg",
    texto: "Guerreiro/TERRA – Nível 4 – ATK 2000 / DEF 1600. Um dos monstros normais mais fortes para nível 4, útil em decks de guerreiros clássicos para pressão ofensiva."
  },
  {
    codigo: "Imitador",
    nome: "Monstro de Efeito Imitador",
    foto: "https://storage.googleapis.com/ygoprodeck.com/pics/68870276.jpg",
    texto: "Mago/TREVAS – Nível 1 – ATK 0 / DEF 0. Seu efeito permite copiar o ATK e DEF de um monstro que o oponente controla até o final do turno. Útil como carta surpresa para equilibrar batalhas."
  },
  {
    codigo: "Jinzo",
    nome: "Monstro de Efeito Jinzo",
    foto: "https://storage.googleapis.com/ygoprodeck.com/pics/77585513.jpg",
    texto: "Máquina/TREVAS – Nível 6 – ATK 2400 / DEF 1500. Enquanto estiver no campo, todas as Armadilhas são negadas. Uma carta lendária usada por Espa Roba no anime, ótima contra estratégias defensivas."
  },
  {
    codigo: "Kunai com Corrente",
    nome: "Carta Armadilha Kunai com Corrente",
    foto: "https://storage.googleapis.com/ygoprodeck.com/pics/37390589.jpg",
    texto: "Armadilha: possui dois efeitos, podendo escolher um deles ao ativar: mudar 1 monstro do oponente para Posição de Defesa ou equipar a um monstro seu, concedendo 500 ATK. É uma carta versátil e estratégica."
  },
  {
    codigo: "Ladrão de Túmulos",
    nome: "Armadilha Normal Ladrão de Túmulos",
    foto: "https://storage.googleapis.com/ygoprodeck.com/pics/61705417.jpg",
    texto: "Selecione 1 Card de Magia do Cemitério do oponente. Até o final do turno, você pode usá-lo como se estivesse na sua mão. Se o usar, você sofre 2000 de dano. Útil para reaproveitar magias poderosas do adversário, mas exige cautela pelo alto custo de 2000 pontos de vida."
  },
  {
    codigo: "Lâmina Relâmpago",
    nome: "Carta Mágica Lâmina Relâmpago",
    foto: "https://storage.googleapis.com/ygoprodeck.com/pics/55226821.jpg",
    texto: "Feitiço de Equipamento: equipe a um monstro Guerreiro; ele ganha 800 ATK. Outra carta de suporte comum para decks guerreiros, aumenta o poder ofensivo de forma simples."
  },
  {
    codigo: "Libertado",
    nome: "Magia Normal Libertado",
    foto: "https://storage.googleapis.com/ygoprodeck.com/pics/71060915.jpg",
    texto: "Ofereça como Tributo 1 'Gearfried, o Cavaleiro de Ferro'; Invoque por Invocação-Especial 1 'Gearfried, o Mestre da Espada' da sua mão ou do Deck. Essa magia permite evoluir seu Gearfried básico em uma forma muito mais poderosa, acelerando sua estratégia sem depender da compra do monstro de evolução."
  },
  {
    codigo: "Mago do Tempo",
    nome: "Monstro de Efeito Mago do Tempo",
    foto: "https://storage.googleapis.com/ygoprodeck.com/pics/71625222.jpg",
    texto: "Mago/LUZ – Nível 2 – ATK 500 / DEF 400. Efeito: jogue uma moeda; se der cara, destrua todos os monstros do oponente. Se der coroa, destrua seus próprios monstros. Uma carta arriscada, mas marcante do Joey Wheeler."
  },
  {
    codigo: "O Pescador Lendário",
    nome: "Monstro de Efeito O Pescador Lendário",
    foto: "https://storage.googleapis.com/ygoprodeck.com/pics/03643300.jpg",
    texto: "Guerreiro/ÁGUA – Nível 5 – ATK 1850 / DEF 1600. Enquanto Umi estiver no campo, ele não pode ser atacado, nem alvo de Magias ou Armadilhas. Uma peça central no deck do Mako Tsunami."
  },
  {
    codigo: "Pequeno-Winguarda",
    nome: "Monstro de Efeito Pequeno-Winguarda",
    foto: "https://storage.googleapis.com/ygoprodeck.com/pics/57116033.jpg",
    texto: "Besta Alada/VENTO – Nível 4 – ATK 1400 / DEF 1800. Efeito: uma vez por turno, durante a Fase Final, você pode aumentar em 1 o Nível deste card enquanto ele estiver com a face para cima no campo. Útil em estratégias que dependem de níveis para invocações específicas."
  },
  {
    codigo: "Polimerização",
    nome: "Carta Mágica Polimerização",
    foto: "https://storage.googleapis.com/ygoprodeck.com/pics/24094653.jpg",
    texto: "Feitiço Normal: funde 2 ou mais monstros de sua mão ou campo para Invocar por Fusão um Monstro de Fusão do seu Deck Adicional. Uma das cartas mais icônicas do jogo, essencial em decks de fusão."
  },
  {
    codigo: "Pote da Ganância",
    nome: "Carta Mágica Pote da Ganância",
    foto: "https://storage.googleapis.com/ygoprodeck.com/pics/55144522.jpg",
    texto: "Feitiço Normal: compre 2 cartas. Uma das cartas mais simples e poderosas já criadas, atualmente banida em torneios por oferecer vantagem sem custo."
  },
  {
    codigo: "Raigeki",
    nome: "Carta Mágica Raigeki",
    foto: "https://storage.googleapis.com/ygoprodeck.com/pics/12580477.jpg",
    texto: "Feitiço Normal: destrua todos os monstros que seu oponente controla. Uma das cartas mais fortes e temidas do jogo, usada para limpar o campo do inimigo e abrir caminho para ataques diretos."
  },
  {
    codigo: "Rainha dos Insetos",
    nome: "Monstro de Efeito Rainha dos Insetos",
    foto: "https://storage.googleapis.com/ygoprodeck.com/pics/05901497.jpg",
    texto: "Inseto/TERRA – Nível 7 – ATK 2200 / DEF 2400. Uma vez por turno, durante a Fase de Apoio, você pode oferecer como Tributo 1 monstro Inseto, exceto este card, para Invocar por Invocação-Especial 1 Ficha de Inseto (Nível 1 / ATK 100 / DEF 100). Uma carta central em decks de insetos."
  },
  {
    codigo: "Reforço do Exército",
    nome: "Carta Mágica Reforço do Exército",
    foto: "https://storage.googleapis.com/ygoprodeck.com/pics/32807846.jpg",
    texto: "Feitiço Normal: adicione 1 monstro Guerreiro de Nível 4 ou menos do seu Deck à sua mão. Uma carta rápida e eficiente para garantir consistência em decks de guerreiros."
  },
  {
    codigo: "Reviver Monstro",
    nome: "Carta Mágica Reviver Monstro",
    foto: "https://storage.googleapis.com/ygoprodeck.com/pics/83764718.jpg",
    texto: "Feitiço Normal: escolha 1 monstro em qualquer Cemitério e invoque-o especialmente no seu lado do campo. Uma das cartas mais clássicas do jogo, usada para trazer monstros poderosos de volta à partida."
  },
  {
    codigo: "Tornado de Pó",
    nome: "Carta Armadilha Tornado de Pó",
    foto: "https://storage.googleapis.com/ygoprodeck.com/pics/60082869.jpg",
    texto: "Armadilha Normal: destrua 1 Magia ou Armadilha no campo. Uma carta simples, mas útil para se livrar de cartas perigosas que atrapalham sua estratégia."
  },
  {
    codigo: "Tornado Gigante",
    nome: "Carta Mágica Tornado Gigante",
    foto: "https://storage.googleapis.com/ygoprodeck.com/pics/42703248.jpg",
    texto: "Feitiço Normal: devolva todas as Magias e Armadilhas no campo para as mãos de seus donos. Diferente de destruí-las, evita efeitos que ativam quando destruídas, funcionando como uma forma segura de limpar o campo."
  },
  {
    codigo: "Wivern de Olhos Vermelhos",
  nome: "Monstro de Efeito Wivern de Olhos Vermelhos",
  foto: "https://storage.googleapis.com/ygoprodeck.com/pics/67300516.jpg",
  texto: "Uma vez por turno, durante sua Fase Final: você pode banir este card do seu Cemitério; Invoque por Invocação-Especial 1 monstro “Olhos Vermelhos” do seu Cemitério, exceto “Filhote Negro de Olhos Vermelhos”. Não pode Invocar por Invocação-Normal/Baixar neste turno. Um método eficiente para reciclar monstros chave como Red-Eyes Black Dragon e manter pressão ofensiva mesmo após suas remoções."
},
{
  codigo: "Dragão Espada do Jacaré",
  nome: "Monstro de Fusão Dragão Espada do Jacaré",
  foto: "https://storage.googleapis.com/ygoprodeck.com/pics/03366982.jpg",
  texto: "‘Dragão Filhote’ + ‘Espada do Jacaré’. Este card pode atacar diretamente seu oponente se os únicos monstros virados para cima que você controla forem de TERRA, ÁGUA ou FOGO. Ideal para drenar diretamente os Pontos de Vida do adversário mantendo condições específicas no campo."
},
{
  codigo: "Dragão Milenar",
  nome: "Monstro de Fusão Dragão Milenar",
  foto: "https://storage.googleapis.com/ygoprodeck.com/pics/41462083.jpg",
  texto: "‘Mago do Tempo’ + ‘Dragão Filhote’. Monstro de Fusão de Nível 7 com 2400 ATK / 2000 DEF. Uma fusão clássica que combina bem com suporte de burn e estilos de jogo imageados nos arcos iniciais de Yugi."
},
{
  codigo: "Ficha de Ovelha",
  nome: "Monstro Token Ficha de Ovelha",
  foto: "https://storage.googleapis.com/ygoprodeck.com/pics/Sheep_Token.jpg",
  texto: "Este card pode ser usado como uma 'Ficha de Ovelha'. Se for usado como outra Ficha, aplica-se o Tipo/Atributo/Nível/ATK/DEF dessa outra Ficha. Uma ficha versátil, amplamente usada como substituto genérico em combos que exigem marcadores específicos ou para estender jogadas."
}


];
