export interface Card {
  codigo: string;
  nome: string;
  foto: string;
  texto: string;
}

export const cards: Card[] = [
  {
    codigo: "Polimerização",
    nome: "Carta Mágica Polimerização",
    foto: "https://i.pinimg.com/1200x/31/73/a1/3173a1fa68fceb418be2da6825cf7318.jpg",
    texto: "Esta é uma carta mágica usada para realizar Invocações-Fusão. Com ela, você escolhe os monstros necessários que estão na sua mão ou no seu lado do campo e os envia para o Cemitério. Em seguida, você pode invocar especialmente do seu Deck Adicional um Monstro de Fusão que peça exatamente aqueles monstros como matérias. É uma das cartas mais importantes do jogo, pois permite criar monstros mais fortes ao unir dois ou mais monstros básicos em um único ser poderoso.",
  },
  {
    codigo: "Polimerização2",
    nome: "Outro Card",
    foto: "https://via.placeholder.com/150",
    texto: "2 Esta é uma carta mágica usada para realizar Invocações-Fusão. Com ela, você escolhe os monstros necessários que estão na sua mão ou no seu lado do campo e os envia para o Cemitério. Em seguida, você pode invocar especialmente do seu Deck Adicional um Monstro de Fusão que peça exatamente aqueles monstros como matérias. É uma das cartas mais importantes do jogo, pois permite criar monstros mais fortes ao unir dois ou mais monstros básicos em um único ser poderoso.",
  },
];
