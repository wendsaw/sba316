

// function createRandomString(length) 
// { const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"; 
//     let result = ""; 
//     for (let i = 0; i < length; i++) 
//         { result += chars.charAt(); } 
//     return result; 
// } 

// // let word=''
// // word=createRandomString(5);
// // console.log(word);

// var NumberOfWords = 28

// var words = new BuildArray(NumberOfWords)

// // Use the following variables to 
// // define your random words:
// words[1] = "escapology"
// words[2] = "brightwork"
// words[3] = "verkrampte"
// words[4] = "protectrix"
// words[5] = "nudibranch"
// words[6] = "grandchild"
// words[7] = "newfangled"
// words[8] = "flugelhorn"
// words[9] = "mythologer"
// words[10] = "pluperfect"
// words[11] = "jellygraph"
// words[12] = "quickthorn"
// words[13] = "rottweiler"
// words[14] = "technician"
// words[15] = "cowpuncher"
// words[16] = "middlebrow"
// words[17] = "jackhammer"
// words[18] = "triphthong"
// words[19] = "wunderkind"
// words[20] = "dazzlement"
// words[21] = "jabberwock"
// words[22] = "witchcraft"
// words[23] = "pawnbroker"
// words[24] = "thumbprint"
// words[25] = "motorcycle"
// words[26] = "cryptogram"
// words[27] = "torchlight"
// words[28] = "bankruptcy"

// function BuildArray(size){
// this.length = size
// for (var i = 1; i <= size; i++){
// this[i] = null}
// return this
// }

// function PickRandomWord(frm) {
// // Generate a random number between 1 and NumberOfWords
// var rnd = Math.ceil(Math.random() * NumberOfWords)

// // Display the word inside the text box
// frm.WordBox.value = words[rnd]
// }

function Randomword(length) 
{ const chars = ["escapology","brightwork","verkrampte","protectrix","nudibranch","grandchild","newfangled","flugelhorn","mythologer","pluperfect","jellygraph","quickthorn", "rottweiler","technician","cowpuncher","middlebrow","jackhammer" ,"triphthong", "wunderkind", "dazzlement","jabberwock" ,"witchcraft","pawnbroker","thumbprint","motorcycle", "cryptogram", "torchlight","bankruptcy"]; 
    let result = ""; 
    
        result=chars[Math.floor(Math.random() * chars.length)]


    return result; 
} 

let result=Randomword(5);
console.log(result);
