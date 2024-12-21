

let nAccount = document.querySelector('#newaccount');
let login = document.querySelector('#login');

// console.log(nAccount);

//this fucntion change the color of the bottom to red when user click

function cChange(e) {
    e.target.style.backgroundColor = 'red';
    return e
}

document.body.style.backgroundColor = 'green'
let rword = document.querySelector('.btm');

//console.log(rword.textContent);
let wordbox = document.querySelector('wordform');

//this function generate random word for the array chars

function Randomword(e) {
    const chars = ["escapology", "brightwork", "verkrampte", "protectrix", "nudibranch", "grandchild", "newfangled", "flugelhorn", "mythologer", "pluperfect", "jellygraph", "quickthorn", "rottweiler", "technician", "cowpuncher", "middlebrow", "jackhammer", "triphthong", "wunderkind", "dazzlement", "jabberwock", "witchcraft", "pawnbroker", "thumbprint", "motorcycle", "cryptogram", "torchlight", "bankruptcy"];
    let result = "";
    // for (i = 0; i < Ntry; i++) {

    result = chars[Math.floor(Math.random() * chars.length)]
    
    return result;

}

//this function hide some string for the player to guess
function hideword(e) {
    let newword = [];
    let word = [];
    word = Randomword();
    console.log(word);
    newword = word.slice(0, 3);
    newword = newword.toUpperCase();
    console.log(newword);
    e.target.textContent = newword;

    return e

}

// function checkword() {
// let guessword=''
// Randomword();

//     for (i=0; i<3; i++){
//         if (guessword==word),



//     }


// }





rword.addEventListener('click', hideword);
nAccount.addEventListener('click', cChange);
login.addEventListener('click', cChange);


