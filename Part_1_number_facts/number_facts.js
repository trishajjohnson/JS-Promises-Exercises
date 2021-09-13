let ul1 = $("#fav-num-fact");
let ul2 = $("#num-facts");
let ul3 = $("#mult-facts");

const url = "http://numbersapi.com/";

axios
    .get(`${url}11?json`)
    .then(res => {
        ul1.append(`<li>${res.data.text}</li>`)
    })
    .catch(err => console.log("Rejected", err));


let num1 = 25;
let num2 = 32;
let num3 = 47;
let num4 = 21;
let num5 = 83;


axios
    .get(`${url}${num1},${num2},${num3},${num4},${num5}?json`)
    .then(res => {
        for(let fact in res.data){
            ul2.append(`<li>${res.data[fact]}</li>`);
        }
    })
    .catch(err => console.log("Rejected", err));


axios
    .get(`${url}35?json`)
    .then(res => {
        ul3.append(`<li>${res.data.text}</li>`)
        return axios.get(`${url}35?json`)
    })
    .then(res => {
        ul3.append(`<li>${res.data.text}</li>`)
        return axios.get(`${url}35?json`)
    })
    .then(res => {
        ul3.append(`<li>${res.data.text}</li>`)
        return axios.get(`${url}35?json`)
    })
    .then(res => {
        ul3.append(`<li>${res.data.text}</li>`)
        return axios.get(`${url}35?json`)
    })
    .catch(err => console.log("Rejected", err));