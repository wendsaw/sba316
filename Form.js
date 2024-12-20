

let rword = document.querySelector('.btm');
//    console.log(rword.textContent);
let wordbox = document.querySelector('wordform');







function Randomword(e) {
    const chars = ["escapology", "brightwork", "verkrampte", "protectrix", "nudibranch", "grandchild", "newfangled", "flugelhorn", "mythologer", "pluperfect", "jellygraph", "quickthorn", "rottweiler", "technician", "cowpuncher", "middlebrow", "jackhammer", "triphthong", "wunderkind", "dazzlement", "jabberwock", "witchcraft", "pawnbroker", "thumbprint", "motorcycle", "cryptogram", "torchlight", "bankruptcy"];
    let result = "";
    // for (i = 0; i < Ntry; i++) {

    result = chars[Math.floor(Math.random() * chars.length)]





    //hide character to display

    // textContent = result

    // rword.textContent = result



    // }

   
    return result;



}

let word = [];
word = Randomword();
console.log(word);
word=word.slice(0, 3);
word=word.toUpperCase();
console.log(word);


function hideword(e) {

    let word = [];
    word = Randomword();
    console.log(word);
    word=word.slice(0, 3);
    word=word.toUpperCase();
    console.log(word);
    
    e.target.textContent = word;



}

function checkword() {

    hideword()
}





rword.addEventListener('click', hideword);

