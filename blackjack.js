// const blackjackDeck = getDeck();

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
    function calcPoints(hand) {
      // Implement this function to calculate points based on the rules of your game.
    }
  
    // Function to show the current hand of a player
    function showHand(player) {
      console.log(`${player.name}'s hand:`);
      for (const card of player.hand) {
        console.log(`${card.displayVal} of ${card.suit}`);
      }
    }
  
    // Function to get a message based on player score and dealer's face-up card
    function getMessage(playerScore, dealerCard) {
      // Implement this function to provide appropriate messages based on game rules.
    }
  
    // Function to determine if the dealer should draw a card
    function dealerShouldDraw(dealerHand) {
      // Implement this function to determine if the dealer should draw a card based on game rules.
    }
  
    // Function to determine the winner
    function determineWinner(playerScore, dealerScore) {
      // Implement this function to determine the winner based on game rules.
    }
  
    // Initial game setup
    player.drawCard(getDeck());
    dealer.drawCard(getDeck());
    player.drawCard(getDeck());
    dealer.drawCard(getDeck());
  
    let playerScore = calcPoints(player.hand).total;
    showHand(player);
    while (playerScore < 21 && confirm(getMessage(playerScore, dealer.hand[0]))) {
      player.drawCard(getDeck());
      playerScore = calcPoints(player.hand).total;
      showHand(player);
    }
    if (playerScore > 21) {
      return 'You went over 21 - you lose!';
    }
    console.log(`Player stands at ${playerScore}`);
  
    let dealerScore = calcPoints(dealer.hand).total;
    while (dealerScore < 21 && dealerShouldDraw(dealer.hand)) {
      dealer.drawCard(getDeck());
      dealerScore = calcPoints(dealer.hand).total;
      showHand(dealer);
    }
    if (dealerScore > 21) {
      return 'Dealer went over 21 - you win!';
    }
    console.log(`Dealer stands at ${dealerScore}`);
  
    return determineWinner(playerScore, dealerScore);
  };
  
  console.log(startGame());