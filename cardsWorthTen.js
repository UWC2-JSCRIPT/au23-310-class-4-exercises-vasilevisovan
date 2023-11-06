const cards = [
  { val: 2, displayVal: "2", suit: "hearts" },
  { val: 3, displayVal: "3", suit: "hearts" },
  { val: 4, displayVal: "4", suit: "hearts" },
  { val: 5, displayVal: "5", suit: "hearts" },
  { val: 6, displayVal: "6", suit: "hearts" },
  { val: 7, displayVal: "7", suit: "hearts" },
  { val: 8, displayVal: "8", suit: "hearts" },
  { val: 9, displayVal: "9", suit: "hearts" },
  { val: 10, displayVal: "10", suit: "hearts" },
  { val: 10, displayVal: "Jack", suit: "hearts" },
  { val: 10, displayVal: "Queen", suit: "hearts" },
  { val: 10, displayVal: "King", suit: "hearts" },
  { val: 11, displayVal: "Ace", suit: "hearts" },
  { val: 2, displayVal: "2", suit: "spades" },
  { val: 3, displayVal: "3", suit: "spades" },
  { val: 4, displayVal: "4", suit: "spades" },
  { val: 5, displayVal: "5", suit: "spades" },
  { val: 6, displayVal: "6", suit: "spades" },
  { val: 7, displayVal: "7", suit: "spades" },
  { val: 8, displayVal: "8", suit: "spades" },
  { val: 9, displayVal: "9", suit: "spades" },
  { val: 10, displayVal: "10", suit: "spades" },
  { val: 10, displayVal: "Jack", suit: "spades" },
  { val: 10, displayVal: "Queen", suit: "spades" },
  { val: 10, displayVal: "King", suit: "spades" },
  { val: 11, displayVal: "Ace", suit: "spades" },
  { val: 2, displayVal: "2", suit: "diamonds" },
  { val: 3, displayVal: "3", suit: "diamonds" },
  { val: 4, displayVal: "4", suit: "diamonds" },
  { val: 5, displayVal: "5", suit: "diamonds" },
  { val: 6, displayVal: "6", suit: "diamonds" },
  { val: 7, displayVal: "7", suit: "diamonds" },
  { val: 8, displayVal: "8", suit: "diamonds" },
  { val: 9, displayVal: "9", suit: "diamonds" },
  { val: 10, displayVal: "10", suit: "diamonds" },
  { val: 10, displayVal: "Jack", suit: "diamonds" },
  { val: 10, displayVal: "Queen", suit: "diamonds" },
  { val: 10, displayVal: "King", suit: "diamonds" },
  { val: 11, displayVal: "Ace", suit: "diamonds" },
  { val: 2, displayVal: "2", suit: "clubs" },
  { val: 3, displayVal: "3", suit: "clubs" },
  { val: 4, displayVal: "4", suit: "clubs" },
  { val: 5, displayVal: "5", suit: "clubs" },
  { val: 6, displayVal: "6", suit: "clubs" },
  { val: 7, displayVal: "7", suit: "clubs" },
  { val: 8, displayVal: "8", suit: "clubs" },
  { val: 9, displayVal: "9", suit: "clubs" },
  { val: 10, displayVal: "10", suit: "clubs" },
  { val: 10, displayVal: "Jack", suit: "clubs" },
  { val: 10, displayVal: "Queen", suit: "clubs" },
  { val: 10, displayVal: "King", suit: "clubs" },
  { val: 11, displayVal: "Ace", suit: "clubs" }
];
// Define a function to determine and format cards worth '10', 'Jack', 'Queen', and 'King'
const cardsWorthTen = cards => {
  const tenValueCards = cards
    .filter(card => ['10', 'Jack', 'Queen', 'King'].includes(card.displayVal))
    .sort((a, b) => {
      // Sort by display value, with numbers first
      if (a.displayVal < b.displayVal) return -1;
      if (a.displayVal > b.displayVal) return 1;
      // If display values are the same, sort by suit
      if (a.suit < b.suit) return -1;
      if (a.suit > b.suit) return 1;
      return 0;
    })
    .map(card => `${card.displayVal} of ${card.suit}`);

  if (tenValueCards.length === 0) {
    return 'No cards worth 10, Jack, Queen, or King';
  }

  return `Cards worth of 10:\n${tenValueCards.join('\n')}`;
};

console.log(cardsWorthTen(cards));
/**
 * Takes an array of cards and returns a string of the card display
 * values where the value is equal to 10
 *
 * @param {array} cards
 * @return {string} displayVal
 */
/* const cardsWorthTen = cards => {};

console.log(cardsWorthTen(cards));
// should return/log "10, Jack, Queen, King" */
