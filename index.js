let cards = {suit:["Hearts", "Diamonds", "Clubs", "Spades"],
value:["Ace", "2", "3", "4", "5", "6", "7", "8", "9", "10", "Jack", "Queen", "King"]}

let deck = []
let player_hand = []
let dealer_hand = []
let suit = cards.suit
let value = cards.value

document.addEventListener("DOMContentLoaded", e => {



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
        //console.log(cardValue);
    }
  }
  //console.log(deck);
  return deck
}//end of createDeck
createDeck()
//console.log(deck);
function shuffleDeck(deck){
  let userCard1 = deck[Math.floor(Math.random()*deck.length)]
  let indexOfUserCard1 = deck.indexOf(userCard1)
  deck.splice(indexOfUserCard1, 1)
  // console.log(deck);
  let userCard2 = deck[Math.floor(Math.random()*deck.length)]
  let indexOfUserCard2 = deck.indexOf(userCard2)
  deck.splice(indexOfUserCard2, 1)
  let dealerCard1 = deck[Math.floor(Math.random()*deck.length)]
  let indexOfDealerCard1 = deck.indexOf(dealerCard1)
  deck.splice(indexOfDealerCard1, 1)
  let dealerCard2 = deck[Math.floor(Math.random()*deck.length)]
  let indexOfDealerCard2 = deck.indexOf(dealerCard2)
  deck.splice(indexOfDealerCard2, 1)
  // console.log(userCard1, indexOfUserCard1);
  console.log(userCard1, userCard2, dealerCard1, dealerCard2)
  console.log(indexOfUserCard1, indexOfUserCard2, indexOfDealerCard1, indexOfDealerCard2);
  console.log(deck);
  return deck
}//end shuffleDeck
// console.log(shuffleDeck(deck));
shuffleDeck(deck)



})
//console.log(deck);



// function dealCards(){
// }
// console.log(suit);

// let pickSuit = suit => {
// suit[Math.floor(Math.random() * suit.length)]
// }
