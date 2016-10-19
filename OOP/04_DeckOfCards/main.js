/*
Create a Deck object constructor. A deck should have the following functionality:
- The Deck should contain the 52 standard cards
- The Deck should be able to shuffle
- The Deck should be able to reset
- The Deck should be able to deal a random card
- Deal should return the card that was dealt and remove it from the deck

Now create a Player object constructor. A Player should have the following functionality:
- The Player should have a name
- The Player should have a hand
- The Player should be able to take a card (use the deck.deal method)
- The Player should be able to discard a card
*/


function Deck() {
	// Check to see if new was used, and if not, ensure it is
	if(!(this instanceof Deck)) {
		return new Deck();
	} // end if
	this.build();  // fill the deck with cards from build prototype
} // end DeckConstructor

// Build the deck of cards
Deck.prototype.build = function() {
	var suits = ['diamonds', 'clubs', 'hearts', 'spades'];
	var values = ['ace', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'jack', 'queen', 'king'];
	self = this;

	this.cards = [];  // will hold cards

	// For loop for suits and values that pushes to cards a new Card with a distinct value and suit
	suits.forEach(function(suit){
		values.forEach(function(value){
			self.cards.push(new CardConstructor(value, suit));
		});
	});
	return this;
} // end build


//Shuffle the deck
Deck.prototype.shuffle = function() {
	// Shuffle logic built from https://bost.ocks.org/mike/shuffle/ Fisher-Yates shuffle
	var unshuffled = this.cards.length;
	var cardToShuffleIndex;
	var temp;

	// while there are cards left to shuffle
	while (unshuffled > 0) {
		cardToShuffleIndex = Math.floor(Math.random() * unshuffled);
		unshuffled -= 1;

		temp = this.cards[cardToShuffleIndex]
		this.cards[cardToShuffleIndex] = this.cards[unshuffled]
		this.cards[unshuffled] = temp;
	}
	return this
} // end shuffle

// Reset
Deck.prototype.reset = function() {
	this.build().shuffle();
} // end reset

Deck.prototype.dealRandomCard = function() {
	if(this.cards.length > 0) {
		return this.cards.pop();
	} else {
		return null;
	}
} // end dealRandomCard

function PlayerConstructor(name) {
	// Check to see if new was used, and if not, ensure it is
	if(!(this instanceof PlayerConstructor)) {
		return new PlayerConstructor();
	} // end if

	// PRIVATE variable
	var self = this;  // set self = this

	// PUBLIC
	this.name = name; // When player is created, name is brought in from name parameter
	this.hand = [];
} // end PlayerConstructor

function CardConstructor(suit, value) {
	// Check to see if new was used, and if not, ensure it is
	if(!(this instanceof CardConstructor)) {
		return new CardConstructor();
	} // end if
	this.suit = suit;
	this.value = value;
} // end CardConstructor

PlayerConstructor.prototype.takeCard = function(deck) {
	this.hand.push(deck.dealRandomCard());
  	return this;
} // end takeCard prototype

PlayerConstructor.prototype.discard = function(cardIdx) {
  if (this.hand.length > cardIdx){
    this.hand.splice(cardIdx, 1);
  }
  return this;
} // end discard prototype

var player = new PlayerConstructor('Pat');  // Create player
var myDeck = new Deck();  // Create a new deck
console.log(myDeck); // Show deck in order
console.log(player); // Show player and hand
myDeck.shuffle(); // shuffle cards
console.log("Player name: " + player.name);  // Show player name
console.log("Shuffled ", myDeck); // Show shuffled deck
player.takeCard(myDeck); // take a card and give to player
console.log(player); // show player and card in hand
player.discard(0); // give card back to deck
console.log(player); // show player and empty hand



