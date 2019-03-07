let cards = {suit:["Hearts", "Diamonds", "Clubs", "Spades"],
value:["Ace", "2", "3", "4", "5", "6", "7", "8", "9", "10", "Jack", "Queen", "King"]}

let deck = []
let user_hand = []
let dealer_hand = []
let userRecord = []
let currentScore
let suit = cards.suit
let value = cards.value
let user_value = 0
let dealer_value = 0

const body = document.body
const userCards = body.querySelector("#user-cards")
const userValue = body.querySelector("#user-card-value")
const dealerCards = body.querySelector("#dealer-cards")
const dealerValue = body.querySelector("#dealer-card-value")
const textUpdates = body.querySelector("#textUpdates")
//console.log(textUpdates);

document.addEventListener("DOMContentLoaded", e => {

const scoreURL = `http://localhost:3000/api/v1/scores` //LOCAL RAILS SERVER
////// BEGINNING OF FETCH //////
// fetch(scoreURL)
// .then(res => res.json())
// .then(data => {
//   userRecord = data
//   console.log(userRecord[0].hands_drawn, userRecord[0].hands_lost, userRecord[0].hands_played, userRecord[0].hands_won)
//   // tracker.innerHTML =
// })
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
    //console.log(user_hand);
    user_value = addedUserCards
    //console.log(user_value);
    checkForAcesUser(hand, user_value)
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
    dealer_value = addedDealerCards
    //console.log(dealer_value);
    if(dealer_value > 21){
    checkForAcesDealer(hand, dealer_value)
    }
    //console.log(dealer_value);
    showDealerValue(dealer_value)
    //dealerHitOrStay(dealer_value)// will show third dealer card on deal

    //console.log(dealer_value);
    //return addedDealerCards
  }
  function checkForAcesUser(user_hand, sumOfUserHand){
    //console.log(user_hand, sumOfUserHand);
    let newSumOfUserHand;
    user_hand.forEach(card => {
      //console.log(card.Value);
      if(card.Value.includes("Ace") && sumOfUserHand > 21){
          let valueOfAce = 1
          card.CardValue = valueOfAce
          //console.log(card);
          newSumOfUserHand = sumOfUserHand - 10
          //console.log(newSumOfUserHand);
          //showUserValue(newSumOfUserHand)
          //console.log("Ace Value", valueOfAce);//correct
          //console.log(card);
          //console.log("New Sum", newSumOfUserHand);//right what we want
        } else {
         newSumOfUserHand = sumOfUserHand
         //console.log("After Else SUm", sumOfUserHand);
         //console.log("After Else New Sum", newSumOfUserHand)
        }
      })
      //console.log("Sum of Hand", newSumOfUserHand);
      showUserValue(newSumOfUserHand)
  }  // end of checkForAcesUser function

  function checkForAcesDealer(dealer_hand, sumOfDealerHand){
    //console.log(dealer_hand, sumOfDealerHand);
    let newSumOfDealerHand;
    dealer_hand.forEach(card => {
      // console.log(sumOfDealerHand);
      if(card.Value.includes("Ace") && sumOfDealerHand > 21){
        //console.log("first log", sumOfDealerHand);
          let valueOfAce = 1
          card.CardValue = valueOfAce
          //console.log(card);
          newSumOfDealerHand = sumOfDealerHand - 10
          //console.log(newSumOfDealerHand);//right and what we want
          //console.log("Value of Ace", valueOfAce);
          //console.log(card);
          //dealerHitOrStay(newSumOfDealerHand)
        } else {
          //dealerHitOrStay(sumOfDealerHand)
           sumOfDealerHand
           //console.log("Reg Sum 192", sumOfDealerHand);
           //console.log("New Sum 193", newSumOfDealerHand);
        }
      })
      dealerHitOrStay(newSumOfDealerHand)
      //console.log("outSide Loop New Sum", newSumOfDealerHand);

  }// end of checkForAcesDealer
 //event listener
  function eventListener(){
    body.addEventListener('click', e => {
      if(e.target === body.querySelector("#hit-button")){
        //console.log(e.target);
        //console.log(deck);
        if(user_value === 21 && user_value > 21){
          textUpdates.innerText = "Can't hit!"
          compareValues(dealer_value, user_value)
        }
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
      //   if(dealer_value < 17){
        dealerHitOrStay(dealer_value)
      // } else {
        //compareValues(dealer_value, user_value)
      //}

      }
      if(e.target === body.querySelector("#deal-button")){
        shuffleDeck(deck)
        //console.log(e.target);
        //console.log(user_hand);
        //console.log(dealer_hand);
        showUserCards(user_hand)
        showDealerCards(dealer_hand)
      }
    })
  }
  eventListener()
 //append the Users Cards to The Page
  function showUserCards(user_hand){
    //console.log(user_hand);
    user_hand.forEach(card => {
      //console.log(card);
      return userCards.innerHTML +=  `
      <p>${card.Value} of ${card.Suit}</p>
      `
    })
  }
  function showNewUserCards(hand){
    //console.log(hand);
   userCards.innerText = ''
   hand.forEach(card => {
     //console.log(card);
     return userCards.innerHTML +=  `
     <p>${card.Value} of ${card.Suit}</p>
     `
   })
  }

  function showUserValue(sum){
    //console.log(sum);
    //userValue.innerText = ''
    userValue.innerHTML = `
    <p>${sum}</p>`
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
    //console.log(addedNewUserCards);
    //console.log(user_value);
    user_value = addedNewUserCards
    checkForAcesUser(user_hand, user_value)
    //console.log(addedNewUserCards);
    //console.log(user_value);

  }
  function showDealerCards(dealer_hand){
    //console.log(dealer_hand);
    dealerCards.innerText = ''
    dealer_hand.forEach(card => {
      //console.log(card);
      return dealerCards.innerHTML +=  `
      <p>${card.Value} of ${card.Suit}</p>
      `
    })
  }

  function showDealerValue(dealer_value){
    //console.log(dealer_value);
      dealerValue.innerHTML = `
      <p>${dealer_value}</p>`

  }
  function dealerHitOrStay(dealer_value){
    //console.log(deck);
    //console.log(dealer_value);
    if(dealer_value < 17){
      let newDealerCard = deck[Math.floor(Math.random()*deck.length)]
      dealer_hand.push(newDealerCard)
      let indexOfNewDealerCard = deck.indexOf(newDealerCard)
      deck.splice(indexOfNewDealerCard, 1)
      //console.log(deck);
      //console.log(newDealerCard);
      //console.log("Before the Else", dealer_hand);
      //console.log("Before Else", dealer_value, user_value);
      valueOfNewDealerHand(dealer_hand)
      showDealerCards(dealer_hand)
      //compareValues(dealer_value, user_value)

    } else {
      //console.log("After Else", dealer_hand);
      //console.log("After Else", dealer_value, user_value);
      //showDealerCards(dealer_hand)
      showDealerValue(dealer_value)
      compareValues(dealer_value, user_value)
    }
  }// end of dealerHitOrStay
  function valueOfNewDealerHand(dealer_hand){
    let totalValue = dealer_hand.map(card => {
      return card.CardValue
       //console.log(totalValue);
    })
    //console.log(totalValue);
    let addedDealerCards = totalValue.reduce((num1, num2) => num1 + num2)
    //console.log(addedDealerCards);
    dealer_value = addedDealerCards
    //console.log(dealer_value);
    if(dealer_value > 21){
    checkForAcesDealer(dealer_hand, dealer_value)
  } else {
    dealerHitOrStay(dealer_value)
  }
    //console.log(dealer_value);
    //showDealerValue(dealer_value)
    //dealerHitOrStay(dealer_value)// will show third dealer card on deal
    //console.log(dealer_value);
    //return addedDealerCards
  }
  function compareValues(dealer_value, user_value){
    if(user_value > dealer_value && user_value < 21){
      textUpdates.innerText = "Player Beats Dealer!"
      reset()
    }
    if(dealer_value > user_value && dealer_value < 21){
      textUpdates.innerText = "Dealer Beats Player!!"
      reset()
    }
    if(user_value === dealer_value && user_value < 21 && dealer_value < 21){
      textUpdates.innerText = "It's a draw. House Wins!"
      reset()
    }
    if(user_value === 21 && dealer_value !== 21){
      textUpdates.innerText = "Player has BlackJack! Player Wins!"
      reset()
    }
    if(dealer_value === 21){
      textUpdates.innerText = "Dealer has BlackJack! Dealer Wins!"
        reset()
    }
    if(user_value > 21 && dealer_value < 21){
      textUpdates.innerText = "Player Busts! Dealer Wins!"
      reset()
    }
    if(dealer_value > 21 && user_value < 21){
      textUpdates.innerText = "Dealer Busts! User Wins!"
       reset()
    }
    if(dealer_value > 21 && user_value > 21){
      textUpdates.innerText = "Everyone Busts! No One Wins!"
       reset()
    }

  }//end of compareValues
  function reset(){
  body.addEventListener("click", e => {
    if(e.target === body.querySelector("#deal-button"))
      userCards.innerHTML = ''
      userValue.innerHTML = ''
      dealerCards.innerHTML = ''
      dealerValue.innerHTML = ''
      textUpdates.innerText = ''
      //console.log(e.target);

     createDeck()
     console.log(deck);
     dealer_hand = []
     user_hand = []
     console.log(user_hand);
     console.log(dealer_hand);
     user_value = 0
     dealer_value = 0
     shuffleDeck(deck)
    })
  }



}) //end of DOMContentLoaded
