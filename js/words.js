
const oneLetterArr = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
const twoLetterArr = ["oa", "pu", "pi", "pe", "ox", "os", "oi", "oh", "oc", "no", "re", "ni", "ne", "na", "mu", "mi", "me", "lo", "le", "ra", "ro", "ju", "uh", "yo", "ye", "ya", "xi", "vi", "ve", "va", "un", "uf", "se", "tu", "to", "ti", "te", "ta", "su", "so", "si", "la", "jo", "be", "di", "de", "da", "cu", "ce", "ca", "ay", "eh", "ex", "as", "ar", "al", "aj", "ah", "ad", "ea", "el", "ji", "ha", "je", "ja", "id", "hu", "hi", "he", "ge", "en", "fu", "fo", "fi", "fe", "fa", "ex", "et", "es", "za"]

const wordListsArr = [
  oneLetterArr,
   twoLetterArr
]

// Función para seleccionar una palabra al azar

// function randomWord(numLetters) {
//     let randomWord = numLetters[Math.floor(Math.random() * numLetters.length)];
//     return randomWord
//   }

function randomWord(maxLength) {
    let randomArray = wordListsArr[Math.floor(Math.random() * maxLength)];
    let randomWord = randomArray[Math.floor(Math.random() * randomArray.length)];
    return randomWord
  }

// *Funciona!


  
