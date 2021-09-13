const url = "http://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1";

axios
    .get("http://deckofcardsapi.com/api/deck/new/draw/?count=1")
    .then(res => {
        console.log(res.data.cards[0].value, res.data.cards[0].suit);
    })
    .catch(err => console.log("Rejected", err));


let cards = [];

axios
    .get("http://deckofcardsapi.com/api/deck/new/draw/?count=1")
    .then(res => {
        
        let card = {
            value: res.data.cards[0].value,
            suit:  res.data.cards[0].suit
        };

        cards.push(card);

        return axios.get(`http://deckofcardsapi.com/api/deck/${res.data.deck_id}/draw/?count=1`);
    })
    .then(res => {
        
        let card = {
            value: res.data.cards[0].value,
            suit:  res.data.cards[0].suit
        };

        cards.push(card);

        for(card in cards) {
            console.log(cards[card]["value"], cards[card]["suit"]);
        };
    })
    .catch(err => console.log("Rejected", err));


// Draw a Card 

let new_deck_id;
let count = 0;
const newDeckURL = "http://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1";
let deck = $("#deck");

function shuffleDeck() {
    
    axios
        .get(newDeckURL)
        .then(res => {
            new_deck_id = res.data.deck_id;
            console.log("deck id: ", new_deck_id);
            $("#drawn-card").src = "/Part_2_deck_of_cards/static/card-deck.jpeg";
            
        })
        .catch(err => console.log("Rejected", err));

}
$("#new-deck").on("click", shuffleDeck);
// $("#new-card").on("click", drawCard);
    

