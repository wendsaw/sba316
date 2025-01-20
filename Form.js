

//this function generate random word for the array chars
const guessword=document.querySelector('#wordbox')
console.log(guessword);


 guessword.addEventListener('click',e=>{
    e.target
    console.log(e.target.value);
    word = Randomword();
    console.log(`the word is ${word}`);
    const c=word.split("")
    c[0]=''
    c[2]=''
    c[3]=''
    word=c.join('').toUpperCase()
    e.target.value=word;
    
    // console.log(c);
    // console.log(word
 })

function Randomword() {
    const chars = ["escapology", "brightwork", "verkrampte", "protectrix", "nudibranch", "grandchild", "newfangled", "flugelhorn", "mythologer", "pluperfect", "jellygraph", "quickthorn", "rottweiler", "technician", "cowpuncher", "middlebrow", "jackhammer", "triphthong", "wunderkind", "dazzlement", "jabberwock", "witchcraft", "pawnbroker", "thumbprint", "motorcycle", "cryptogram", "torchlight", "bankruptcy"];

    i = chars[Math.floor(Math.random() * chars.length)]
    console.log(i);
    return i
    
}

// function hideword(word) {
    
    
    // return word

// }

// hideword();
