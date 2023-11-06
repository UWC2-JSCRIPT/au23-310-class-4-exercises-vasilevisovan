





// const blackjackDeck = getDeck();

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
};

class CardPlayer {
  constructor(name) {
    this.name = name;
    this.hand = [];
  }

  drawCard(deck) {
    const randomIndex = Math.floor(Math.random() * deck.length);
    const card = deck.splice(randomIndex, 1)[0];
    this.hand.push(card);
  }
}
undefined
const startGame = function() {
  // Create 'Player' and 'Dealer' instances of CardPlayer
  const player = new CardPlayer('Player');
  const dealer = new CardPlayer('Dealer');

  // Function to calculate points in a hand
  const calcPoints = (hand) => {
  let total = 0;
  let numAces = 0;

  for (const card of hand) {
    total += card.val;
    if (card.displayVal === 'Ace') {
      numAces++;
    }
  }

  // Handle Aces as either 1 or 11 based on the total points
  while (numAces > 0 && total > 21) {
    total -= 10; // Change the value of an Ace from 11 to 1
    numAces--;
  }

  return { total };
}

  // Function to show the current hand of a player
  const showHand = (player) => {
    console.log(`${player.name}'s hand:`);
    for (const card of player.hand) {
      console.log(`${card.displayVal} of ${card.suit}`);
    }
  }

  // Function to get a message based on player score and dealer's face-up card
  const getMessage = (playerScore, dealerCard) => {
  if (playerScore === 21) {
    return 'Blackjack!';
  } else if (playerScore > 21) {
    return 'Bust! You lose.';
  } else if (dealerCard.val === 11 && playerScore >= 17) {
    return 'Dealer has an Ace. Stand or draw?';
  } else {
    return 'Draw or stand.';
  }
}

  // Function to determine if the dealer should draw a card
 const dealerShouldDraw = (dealerHand) => {
  const dealerScore = calcPoints(dealerHand);
  return dealerScore.total < 17 || (dealerScore.total === 17 && dealerScore.isSoft);
}

  // Function to determine the winner
  const determineWinner = (playerScore, dealerScore) => {
  if (playerScore > 21) {
    return `Player Busts: Player ${playerScore}, Dealer ${dealerScore}. Dealer Wins!`;
  } else if (dealerScore > 21 || playerScore > dealerScore) {
    return `Player Wins: Player ${playerScore}, Dealer ${dealerScore}.`;
  } else if (playerScore === dealerScore) {
    return `It's a tie: Player ${playerScore}, Dealer ${dealerScore}.`;
  } else {
    return `Dealer Wins: Player ${playerScore}, Dealer ${dealerScore}.`;
  }
}

  // Initial game setup
  player.drawCard(getDeck());
  dealer.drawCard(getDeck());
  player.drawCard(getDeck());
  dealer.drawCard(getDeck());

  let playerScore = calcPoints(player.hand).total;
  while (playerScore < 17) {
    player.drawCard(getDeck());
    playerScore = calcPoints(player.hand).total;
  }

  let dealerScore = calcPoints(dealer.hand).total;
  while (dealerScore < 17) {
    dealer.drawCard(getDeck());
    dealerScore = calcPoints(dealer.hand).total;
  }

  return determineWinner(playerScore, dealerScore);
};

console.log(startGame());



// /**
//  * Represents a card player (including dealer).
//  * @constructor
//  * @param {string} name - The name of the player
//  */
// class CardPlayer {}; //TODO

// // CREATE TWO NEW CardPlayers
// const dealer; // TODO
// const player; // TODO

// /**
//  * Calculates the score of a Blackjack hand
//  * @param {Array} hand - Array of card objects with val, displayVal, suit properties
//  * @returns {Object} blackJackScore
//  * @returns {number} blackJackScore.total
//  * @returns {boolean} blackJackScore.isSoft
//  */
// const calcPoints = (hand) => {
//   // CREATE FUNCTION HERE

// }

// /**
//  * Determines whether the dealer should draw another card.
//  * 
//  * @param {Array} dealerHand Array of card objects with val, displayVal, suit properties
//  * @returns {boolean} whether dealer should draw another card
//  */
// const dealerShouldDraw = (dealerHand) => {
//   // CREATE FUNCTION HERE

// }

// /**
//  * Determines the winner if both player and dealer stand
//  * @param {number} playerScore 
//  * @param {number} dealerScore 
//  * @returns {string} Shows the player's score, the dealer's score, and who wins
//  */
// const determineWinner = (playerScore, dealerScore) => {
//   // CREATE FUNCTION HERE

// }

// /**
//  * Creates user prompt to ask if they'd like to draw a card
//  * @param {number} count 
//  * @param {string} dealerCard 
//  */
// const getMessage = (count, dealerCard) => {
//   return `Dealer showing ${dealerCard.displayVal}, your count is ${count}.  Draw card?`
// }

// /**
//  * Logs the player's hand to the console
//  * @param {CardPlayer} player 
//  */
// const showHand = (player) => {
//   const displayHand = player.hand.map((card) => card.displayVal);
//   console.log(`${player.name}'s hand is ${displayHand.join(', ')} (${calcPoints(player.hand).total})`);
// }

// /**
//  * Runs Blackjack Game
//  */
// const startGame = function() {
//   player.drawCard();
//   dealer.drawCard();
//   player.drawCard();
//   dealer.drawCard();

//   let playerScore = calcPoints(player.hand).total;
//   showHand(player);
//   while (playerScore < 21 && confirm(getMessage(playerScore, dealer.hand[0]))) {
//     player.drawCard();
//     playerScore = calcPoints(player.hand).total;
//     showHand(player);
//   }
//   if (playerScore > 21) {
//     return 'You went over 21 - you lose!';
//   }
//   console.log(`Player stands at ${playerScore}`);

//   let dealerScore = calcPoints(dealer.hand).total;
//   while (dealerScore < 21 && dealerShouldDraw(dealer.hand)) {
//     dealer.drawCard();
//     dealerScore = calcPoints(dealer.hand).total;
//     showHand(dealer);
//   }
//   if (dealerScore > 21) {
//     return 'Dealer went over 21 - you win!';
//   }
//   console.log(`Dealer stands at ${dealerScore}`);

//   return determineWinner(playerScore, dealerScore);
// }
// // console.log(startGame());

