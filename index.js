let cards = {suit:["Hearts", "Diamonds", "Clubs", "Spades"],
value:["Ace", "2", "3", "4", "5", "6", "7", "8", "9", "10", "Jack", "Queen", "King"]}

let deck = []
let player_hand = []
let dealer_hand = []
let suit = cards.suit
let value = cards.value

// creates the deck for the game and sets the value of each card!!!!!
function createDeck(){
  deck = []
  for (i = 0; i < suit.length; i ++) {
    for (j = 0; j < value.length; j ++) {
      if(value[j] === "Ace"){
        let cardValue = 1
          let card = {Value: value[j], Suit: suit[i], CardValue: cardValue}
            deck.push(card)
        //console.log(cardValue);
      } else if (value[j] === "Jack" || value[j] === "Queen" || value[j] === "King") {
          let cardValue = 10
          let card = {Value: value[j], Suit: suit[i], CardValue: cardValue}
          deck.push(card)
          //console.log(cardValue);
        } else {
           let cardValue = parseInt(value[j])
          //console.log(cardValue);
          let card = {Value: value[j], Suit: suit[i], CardValue: cardValue}
          //console.log(card);
          deck.push(card)
          //console.log(deck);
        }
    }
  }
  return deck
}//end of createDeck
createDeck()

function shuffleDeck(deck){
  let card1 = deck[Math.floor(Math.random()*deck.length)]
  let card2 = deck[Math.floor(Math.random()*deck.length)]
  console.log(card1, card2)
}//end shuffleDeck

// console.log(shuffleDeck(deck));

shuffleDeck(deck)

// function dealCards(){
// }
// console.log(suit);

// let pickSuit = suit => {
// suit[Math.floor(Math.random() * suit.length)]
// }
