// Deck of cards example

// const suits = ['clubs', 'spades', 'diamonds', 'hearts'];
// const values = '2,3,4,5,6,7,8,9,10,J,Q,K,A';


// Old school
// function makeDeck() {
//     const deck = [];
//     const suits = ['clubs', 'spades', 'diamonds', 'hearts'];
//     const values = '2,3,4,5,6,7,8,9,10,J,Q,K,A';
//     for (let value of values.split(',')) {
//         for (let suit of suits) {
//             deck.push({
//                 value,
//                 suit
//             })
//         }
//     }
//     return deck;
// }

// function drawCard(deck){
//     return deck.pop();
// }

// The above approach is cumbersome to work with, limits the usage to a single deck,
// and is not very modular at all.  Good idea, but overall poor approach to the issue.

// Build it using OOP principals :D

const myDeck = {
    deck: [],  // deck to draw from
    drawnCards: [], // discard pile
    suits: ['clubs', 'spades', 'diamonds', 'hearts'],
    values: '2,3,4,5,6,7,8,9,10,J,Q,K,A',
    initializeDeck(){
        const { suits, values, deck } = this;
        for (let value of values.split(',')) {
            for (let suit of suits) {
                deck.push({
                    value,
                    suit
                })
            }
        }
    },
    drawCard() {
        const card = this.deck.pop();
        this.drawnCards.push(card);
        return card;
    },
    drawMultiple(numCards) {
        const hand = [];
        for (let i = 0; i < numCards; i++) {
            hand.push(this.drawCard());
        }
        return hand;
    },
    shuffle() {  // https://en.wikipedia.org/wiki/Fisher%E2%80%93Yates_shuffle
        const { deck } = this;
        // loop over array backwards
        for (let i = deck.length - 1; i > 0; i--) {
            // pick random index before current element
            let j = Math.floor(Math.random() * (i + 1));
            // swap deck[i] and deck[j]
            [deck[i], deck[j]] = [deck[j], deck[i]];
        }
    }
}

myDeck.initializeDeck();
myDeck.shuffle();
let h1 = myDeck.drawMultiple(2);
let h2 = myDeck.drawMultiple(2);
let p1 = myDeck.drawMultiple(5);