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

axios
    .get(newDeckURL)
    .then(res => {
        new_deck_id = res.data.deck_id;
        console.log(new_deck_id);
        $("#drawn-card").attr("src", "https://s3.amazonaws.com/images.penguinmagic.com/images/products/original/5075a.jpg");
        
    })
    .catch(err => console.log("Rejected", err));
    

function drawCard() {
    
    const newCardURL = `http://deckofcardsapi.com/api/deck/${new_deck_id}/draw/?count=1`;

    axios
        .get(newCardURL)
        .then(res => {
            console.log(res.data)
            $("#drawn-card").attr("src", res.data.cards[0].image);
        })
        .catch(err => console.log("Rejected", err));
}


$("#new-card").on("click", drawCard);
    

