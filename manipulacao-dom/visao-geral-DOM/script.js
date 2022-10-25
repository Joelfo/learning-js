let item1 = document.querySelector("li");
console.log(item1);
console.log(item1.innerHTML);
console.log(item1.innerText);
console.log(item1.outerHTML);

let items = document.querySelectorAll("li");
console.log(items);

const card1 = document.querySelector(".card");

const texto = document.createElement("p");
texto.innerHTML = "Hum, é mesmo?";

card1.appendChild(texto);
card1.classList.add("super-border");

const cards = document.getElementsByClassName("card");

console.log(cards);

cardsArray = Array.from(cards);
cardsArray.map(card => {
    console.log(card.innerHTML)
});
[...cards].map(card => {
    console.log(card.innerHTML);
})