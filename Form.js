

function Randomword(Ntry) {
    const chars = ["escapology", "brightwork", "verkrampte", "protectrix", "nudibranch", "grandchild", "newfangled", "flugelhorn", "mythologer", "pluperfect", "jellygraph", "quickthorn", "rottweiler", "technician", "cowpuncher", "middlebrow", "jackhammer", "triphthong", "wunderkind", "dazzlement", "jabberwock", "witchcraft", "pawnbroker", "thumbprint", "motorcycle", "cryptogram", "torchlight", "bankruptcy"];
    let result = "";
    for (i = 0; i < Ntry; i++) {

        result = chars[Math.floor(Math.random() * chars.length)]
        // console.log(result);
    
    }
    return result;
}


