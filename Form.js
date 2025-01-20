

//this function generate random word for the array chars
const guessword=document.querySelector('#wordbox')
const btm=document.querySelector('#btm')
const CorrectWord=document.querySelector('#gword')
const smt=document.querySelector('#smt')
const res=document.querySelector('.list-group')



console.log(CorrectWord);


// console.log(guessword);
// console.log(btm);

 guessword.addEventListener('click',e=>{
    e.target
    let word = Randomword();
    wordTrunk= hideword(word)
    e.target.value=wordTrunk;
    
        smt.addEventListener('click',e =>{
            
   
            e.preventDefault()
            console.log(CorrectWord.value);
            result=cWord(word,CorrectWord.value)
            if (result=='won'){
                res.innerHTML=`<li class="list-group-item list-group-item-primary">CORRECT WORD:${word}</li>
        <li class="list-group-item list-group-item-secondary">GUESS WORD:${CorrectWord.value}</li>
        <li class="list-group-item list-group-item-secondary">RESULT:${result}</li>`
                
                console.log(`you are a winner`);
                
            }if (result=='lost'){
                res.innerHTML=`<li class="list-group-item list-group-item-primary">CORRECT WORD:${word}</li>
        <li class="list-group-item list-group-item-secondary">GUESS WORD:${CorrectWord.value}</li>
        <li class="list-group-item list-group-item-secondary">RESULT:${result}</li>`
                console.log(`you have lost play again`);
            
            }
    
   })
    
    
 })


function Randomword() {
    const chars = ["escapology", "brightwork", "verkrampte", "protectrix", "nudibranch", "grandchild", "newfangled", "flugelhorn", "mythologer", "pluperfect", "jellygraph", "quickthorn", "rottweiler", "technician", "cowpuncher", "middlebrow", "jackhammer", "triphthong", "wunderkind", "dazzlement", "jabberwock", "witchcraft", "pawnbroker", "thumbprint", "motorcycle", "cryptogram", "torchlight", "bankruptcy"];
    i = chars[Math.floor(Math.random() * chars.length)]
    console.log(i);
    return i
}

function hideword(word) {
const c=word.split("")
    c[0]=''
    c[2]=''
    c[3]=''
    word=c.join('').toUpperCase()
    return word
}
function cWord(word,guessword){
    

    if (word==guessword){
        return "won"
    
    }
    else 
   return "lost"
    
}

