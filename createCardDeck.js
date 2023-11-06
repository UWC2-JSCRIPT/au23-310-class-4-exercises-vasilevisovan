/**
 * Returns an array of 52 Cards
 * @returns {Array} deck - a deck of cards
 */
const getDeck = () => {
  const suits = ['hearts', 'spades', 'clubs', 'diamonds'];
  const values = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'Jack', 'Queen', 'King', 'Ace'];
  const deck = [];

  for (let i = 0; i < suits.length; i++) {
    const suit = suits[i];
    for (let j = 0; j < values.length; j++) {
      const value = values[j];
      let val;

      if (value === 'Ace') {
        val = 11;
      } else if (['Jack', 'Queen', 'King'].includes(value)) {
        val = 10;
      } else {
        val = parseInt(value, 10);
      }

      const card = {
        val: val,
        displayVal: value,
        suit: suit,
      };
      deck.push(card);
    }
  }

  return deck;
}

// Call the getDeck function to create a deck of 52 cards
const deck = getDeck();

// Log all properties of every card in the deck
for (let i = 0; i < deck.length; i++) {
  const card = deck[i];
  for (const property in card) {
    console.log(`${property}: ${card[property]}`);
  }
}

// Check if the deck has a length of 52
console.log(`Deck length equals 52? ${deck.length === 52}`);