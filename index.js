let cards = {suit:["Hearts", "Diamonds", "Clubs", "Spades"],
value:["Ace", "2", "3", "4", "5", "6", "7", "8", "9", "10", "Jack", "Queen", "King"]}

let deck = []
let user_hand = []
let dealer_hand = []
let userRecord = []
let currentScore
let suit = cards.suit
let value = cards.value
const body = document.body
const userCards = body.querySelector("#user-cards")
const userValue = body.querySelector("#user-card-value")

document.addEventListener("DOMContentLoaded", e => {

const scoreURL = `http://localhost:3000/api/v1/scores` //LOCAL RAILS SERVER
////// BEGINNING OF FETCH //////
fetch(scoreURL)
.then(res => res.json())
.then(data => {
  userRecord = data
  console.log(userRecord[0].hands_drawn, userRecord[0].hands_lost, userRecord[0].hands_played, userRecord[0].hands_won)
  // tracker.innerHTML =
})
////// END OF FETCH //////

// creates the deck for the game and sets the value of each card!!!!!
  function createDeck(){
    deck = []
    for (i = 0; i < suit.length; i ++) {
      for (j = 0; j < value.length; j ++) {
        if(value[j] === "Ace"){
          let cardValue = 11
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
    //showUserCards(userCard1, userCard2)
    dealDealerCards(dealerCard1, dealerCard2)
    return deck
    //console.log(deck);
  }//end shuffleDeck
  // console.log(shuffleDeck(deck));
  //shuffleDeck(deck)


 // adding shuffled user cards to our user card array
  function dealUserCards(card1, card2){
    //console.log(card1);
    user_hand.push(card1, card2)
    //console.log(user_hand[0].CardValue);
    //return user_hand
    valueOfUserHand(user_hand)
    //console.log(user_hand);
    //showUserCards(user_hand)
  }
  //console.log(user_hand)

  // adding the shuffled cards to our dealer card array
  function dealDealerCards(card1, card2){
    dealer_hand.push(card1, card2)
    //console.log(dealer_hand);
    //return dealer_hand
    //valueOfDealerHand(dealer_hand)
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
    //console.log(user_hand);
    checkForAcesUser(hand, addedUserCards)
    //console.log(addedUserCards);
    //return addedUserCards
  }
  // adding the value of the dealers hand
  function valueOfDealerHand(hand){
    //console.log(hand);
    let totalValue = hand.map(card => {
      return card.CardValue
       //console.log(totalValue);
    })
    //console.log(totalValue);
    let addedDealerCards = totalValue.reduce((num1, num2) => num1 + num2)
    //console.log(addedDealerCards);
    checkForAcesDealer(hand, addedDealerCards)
    return addedDealerCards
  }
  function checkForAcesUser(user_hand, sumOfUserHand){
    //console.log(user_hand, sumOfUserHand);
    user_hand.forEach(card => {
      //console.log(card.Value);
      if(card.Value.includes("Ace") && sumOfUserHand > 21){
          let valueOfAce = 1
          card.CardValue = valueOfAce
          //console.log(card);
          let newSumOfUserHand = sumOfUserHand - 10
          //console.log(newSumOfUserHand);
          showUserValue(newSumOfUserHand)
          //console.log(valueOfAce);
          //console.log(card);
          console.log(newSumOfUserHand);
        } else {
          showUserValue(sumOfUserHand)
          console.log(sumOfUserHand);
        }
      })
  }  // end of checkForAcesUser function

  function checkForAcesDealer(dealer_hand, sumOfDealerHand){
    //console.log(dealer_hand, sumOfDealerHand);
    dealer_hand.forEach(card => {
      //console.log(card.Value);
      if(card.Value.includes("Ace") && sumOfDealerHand > 21){
          let valueOfAce = 1
          card.CardValue = valueOfAce
          //console.log(card);
          let newSumOfDealerHand = sumOfDealerHand - 10
          //console.log(newSumOfDealerHand);
          //console.log(valueOfAce);
          //console.log(card);
         }
      })

  }// end of checkForAcesDealer
//event listener
  function eventListener(){
    body.addEventListener('click', e => {
      //console.log(e.target);
      if(e.target === body.querySelector("#hit-button")){
        //console.log(e.target);
        //console.log(deck);
        let newCard = deck[Math.floor(Math.random()*deck.length)]
        //console.log(newCard)
        user_hand.push(newCard)
        let indexOfNewCard = deck.indexOf(newCard)
        deck.splice(indexOfNewCard, 1)
        //console.log(deck);
        //valueOfUserHand(user_hand)
        valueOfNewUserHand(user_hand)
        //showUserCards(user_hand)
        showNewUserCards(user_hand)


      }
      if(e.target === body.querySelector("#stay-button")){
        //console.log(e.target);
      }
      if(e.target === body.querySelector("#deal-button")){
        shuffleDeck(deck)
        //console.log(e.target);
        //console.log(user_hand);
        //console.log(dealer_hand);
        showUserCards(user_hand)
      }
    })
  }
  eventListener()
//append the Users Cards to The Page
  function showUserCards(user_hand){
    //console.log(user_hand);
    user_hand.forEach(card => {
      //console.log(card);
      return userCards.innerText +=  `
      ${card.Value} of ${card.Suit}
      `
    })
  }
  function showNewUserCards(hand){
    //console.log(hand);
   userCards.innerText = ''
   hand.forEach(card => {
     //console.log(card);
     return userCards.innerText +=  `
     ${card.Value} of ${card.Suit}
     `
   })
  }

  function showUserValue(sum){
    //console.log(sum);
    //userValue.innerText = ''

    userValue.innerText = `${sum}`
    //console.log(sum);
  }
  function valueOfNewUserHand(user_hand){
    let totalValue = user_hand.map(card => {
      //console.log(totalValue);
       //console.log(card.CardValue)
       return card.CardValue

    })
    //console.log(totalValue);
    //return totalValue
    let addedNewUserCards = totalValue.reduce((num1, num2) => num1 + num2)
    //console.log(user_hand);
    checkForAcesUser(user_hand, addedNewUserCards)
    //console.log(addedNewUserCards);

  }


}) //end of DOMContentLoaded
