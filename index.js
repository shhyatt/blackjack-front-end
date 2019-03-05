let cards = {suit:["Hearts", "Diamonds", "Clubs", "Spades"],
value:["Ace", "2", "3", "4", "5", "6", "7", "8", "9", "10", "Jack", "Queen", "King"]}

let deck = []
let user_hand = []
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
    // console.log(userCard1, userCard2, dealerCard1, dealerCard2)
    // console.log(indexOfUserCard1, indexOfUserCard2, indexOfDealerCard1, indexOfDealerCard2);
    // console.log(deck);
    dealUserCards(userCard1, userCard2)
    //console.log(userCard1);
    dealDealerCards(dealerCard1, dealerCard2)
    return deck
    //console.log(deck);

  }//end shuffleDeck
  // console.log(shuffleDeck(deck));
  shuffleDeck(deck)


 // adding shuffled user cards to our user card array
  function dealUserCards(card1, card2){
    //console.log(card1);
    user_hand.push(card1, card2)
    //console.log(user_hand[0].CardValue);
    //return user_hand
    valueOfUserHand(user_hand)
    //console.log(user_hand);
  }
  //console.log(user_hand)

  // adding the shuffled cards to our dealer card array
  function dealDealerCards(card1, card2){
    dealer_hand.push(card1, card2)
    //console.log(dealer_hand);
    //return dealer_hand
    valueOfDealerHand(dealer_hand)
  }

  // adding the total value of the Users Hand
  function valueOfUserHand(hand){
    //console.log(hand);
    let totalValue = hand.map(card => {
      return card.CardValue

       //console.log(totalValue);
    })
    //console.log(totalValue);
    //return totalValue
    let addedUserCards = totalValue.reduce((num1, num2) => num1 + num2)
    //console.log(addedUserCards);
    return addedUserCards
  }
  // ading the value of the dealers hand
  function valueOfDealerHand(hand){
    console.log(hand);
    let totalValue = hand.map(card => {
      return card.CardValue
       //console.log(totalValue);
    })
    //console.log(totalValue);

    let addedDealerCards = totalValue.reduce((num1, num2) => num1 + num2)
    //console.log(addedDealerCards);
    return addedDealerCards
  }


}) //end of DOMContentLoaded
