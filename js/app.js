let punchlines = ["Un jour, Chuck Norris a perdu son alliance. Depuis, c est le bordel dans les Terres du Milieu.",
"Quand la tartine de Chuck Norris tombe, la confiture change de côté.",
"Si Chuck Norris avait été dans « Lost », il aurait ramené l île à la rame, jusqu au Texas.",
"Une larme de Chuck Norris peut guérir du cancer, malheureusement Chuck Norris ne pleure pas.",
"Chuck Norris est capable de laisser un message avant le bip sonore.",
"Chuck Norris a gagné un tournoi de poker avec des cartes Pokémon.",
"Un jour, Chuck Norris a couru si vite qu il a failli se rentrer dedans.",
"Chuck Norris peut claquer des doigts de pied.",
"Un aigle peut lire un journal à 1400 mètres de distance. Chuck Norris peut tourner la page.",
"Un jour, Chuck Norris a fait la blague « j ai volé ton nez » à Mickael Jackson."];

let punchlines = document.getElementById("id")

function revealHiddenMessage() {
    let punchlines = document.querySelector("#sentence");
    punchlines.classList.toggle("sentence");
    console.log(punchlines);
}

let button = document.querySelector("button");
button.addEventListener("click", revealHiddenMessage);

function getRandomColor() {
    let letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }