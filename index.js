let cards = {suit:["Hearts", "Diamonds", "Clubs", "Spades"],
value:["Ace", "2", "3", "4", "5", "6", "7", "8", "9", "10", "Jack", "Queen", "King"]}

let player_hand = []
let dealer_hand = []
let suit = cards.suit
let value = cards.value
let deck = []


// creates the deck for the game and sets the value of each card!!!!!
function createDeck(){
  deck = []
  for (i = 0; i < suit.length; i ++) {
    for (j = 0; j < value.length; j ++) {
      if(value[j] === "Ace"){
        let cardValue = 1
      } else if (value[j] === "Jack" || value[j] === "Queen" || value[j] === "King") {
          let cardValue = 10
        } else {
          let cardValue = parseInt(value[j])
      }
      let card = {Value: value[j], Suit: suit[i]}
      deck.push(card)
    }
  }
  return deck
}

createDeck()

// function dealCards(){
// }
// console.log(suit);

// let pickSuit = suit => {
// suit[Math.floor(Math.random() * suit.length)]
// }
