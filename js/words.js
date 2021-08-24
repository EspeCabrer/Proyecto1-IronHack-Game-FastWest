
const oneLetterArr = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
const twoLetterArr = ["oa", "pu", "pi", "pe", "ox", "os", "oi", "oh", "oc", "no", "re", "ni", "ne", "na", "mu", "mi", "me", "lo", "le", "ra", "ro", "ju", "uh", "yo", "ye", "ya", "xi", "vi", "ve", "va", "un", "uf", "se", "tu", "to", "ti", "te", "ta", "su", "so", "si", "la", "jo", "be", "di", "de", "da", "cu", "ce", "ca", "ay", "eh", "ex", "as", "ar", "al", "aj", "ah", "ad", "ea", "el", "ji", "ha", "je", "ja", "id", "hu", "hi", "he", "ge", "en", "fu", "fo", "fi", "fe", "fa", "ex", "et", "es", "za"]
const threeLetterArr = ["feo", "dar", "ver", "uso", "kit", "rol", "don", "paz", "luz", "ser", "que", "rey", "fea", "por", "fin", "con", "pan", "vez", "amo", "set", "eje", "mal", "hoy", "mar", "ira", "par", "fan", "ola", "uva", "ave", "ley", "red", "pez", "voz", "muy", "era", "tan", "tal", "oro", "son", "web", "zen","pie", "eco", "uno", "sed", "pro", "oso", "mes", "ego", "ojo", "oda", "gas", "haz", "ala", "sal", "aro", "gym", "eso", "wey", "mil", "gol", "bus","sol", "upa", "way", "bar", "oye" ]
const fourLetterArr = ["acto", "baba", "bajo", "bala", "base", "caja", "cala", "dado", "deja", "edad", "ejem", "faja", "feos", "gato", "gafe", "haba", "hace", "idea", "idem", "java", "jazz", "laca", "loba", "mola", "mega", "nave", "nuez", "ogro", "onda", "plan", "pozo", "rape", "roca", "spot", "seta", "topo", "true", "uvis", "vaca", "vino", "yang", "yeso", "zinc"]
const fiveLetterArr = ["ancla", "avena", "ambar", "bacon", "blusa", "bucle", "cloro", "crepe", "ciego", "drama", "droga", "diana", "ebrio", "enano", "etapa","flora", "fideo", "flaco", "galgo", "grado", "gente", "hobby", "hucha", "hueso", "idear", "ileso", "india","jugar", "julio", "labor", "luces", "logos", "micro", "medio", "muero", "norte", "nueva", "norma", "ocupa", "oveja", "omega", "pagos", "plata", "puedo", "queja", "radar", "rifle", "riera", "sidra", "sudar", "sport", "tecla", "techo", "trapo", "vocal", "vuelo", "votan"]
const sixLetterArr = ["adapta", "atajar", "apagad", "blanca", "bocado", "bucles", "cabeza", "clavas", "cobaya", "diablo", "doblen", "dibujo", "efecto", "exacto", "equipo", "fabada", "fichad", "fiasco", "gofres", "grados", "global", "helado", "hocico", "hueles", "ignora", "idioma", "imitan", "jersey", "jirafa", "jugada", "llanto", "leches", "liando", "maceta", "muchos", "muecas", "nachos", "noches", "nombra", "ojitos", "oliera", "ondean", "pecado", "plagio", "psique", "guejas", "quemes", "reales", "robles", "suceso", "tiempo", "trampa", "tienda", "ubicar", "vacuno", "veinte", "volcad"]
const sevenLetterArr =  ["conmigo", "trabajo", "segunda", "informe", "sistema", "encanta", "parecer", "acuerdo", "persona", "biaxial", "bobadas", "columna", "cultivo", "chulada", "dividir", "detecta", "danzaba", "exceder", "emigrar", "escasea", "firmeza", "festeja", "felices", "guiaron", "ganado", "golosos", "honesta", "hundido", "hojeaba", "influir", "ingenio", "inversa", "jornada", "juraron", "jaqueca", "letargo", "lechuza", "librado", "momento", "modular", "moflete", "nulidad", "nativos", "ocupado", "ofuscar", "oscilan", "pintado", "pomposo", "piragua", "quijote", "quieren", "ruidoso", "repeler", "recorte", "sublime", "suspiro", "sicario", "tributo", "tablero", "tortazo", "ubicado", "usuario", "unifica", "ventaja", "volumen", "volaste", "yugular", "zumbido"        ]     
const eightLetterArr = ["asimismo", "absoluto", "bloquear", "brevedad", "complejo", "creativo", "desastre", "destacar", "esencial", "examinar", "fabricar", "frustrar", "generoso", "gratitud", "homenaje", "herencia", "infinito", "iluminar", "juventud", "jorobado", "kamikaze", "limpieza", "libertad", "magnitud", "motivado", "nebuloso", "nocturno", "original", "observar", "peculiar", "proyecto", "quedarse", "resolver", "respetar", "singular", "sostener", "tangible", "temprano", "universo", "utilidad", "voluntad", "variable", "zipizape"]
const nineLetterArr = ["agradable", "actividad", "bicicleta", "bienestar","conflicto", "construir", "descender", "demostrar" ,"ejercicio", "existente", "fragmento", "fortaleza", "grandioso", "gabardina", "humanidad", "habitante", "incidente", "inherente", "jocosidad", "kilogramo", "laberinto", "localizar", "mecanismo", "movilidad", "nutriente", "nostalgia", "optimista", "organismo", "paciencia", "propiedad", "respuesta", "referente", "sustancia", "severidad", "templanza", "taciturno", "utensilio", "usurpador", "verdadero", "vehemente", "zarandear"]
const tenLetterArr = ["argumentar", "apariencia", "barbaridad", "biblioteca", "componente", "consciente" ]
const elevenLetterArr = ["antecedente", "aprendizaje", "blanquecino", "benevolente", "competencia", "creatividad"]
const twelveLetterArr = ["ambivalencia", "bandolerismo" ]
const thirteenLetterArr = ["arbitrariedad","biodiversidad"]
const fourteenLetterArr = ["abastecimiento", "almacenamiento"]
const fifteenLetterArr = ["autoindulgencia", "aproximadamente", "bienaventuranza", "condescendiente", "cuestionamiento", "deslumbramiento", "desvalijamiento", "exhaustivamente", "excepcionalidad", "generalizaremos", "grandilocuencia", "honorificasteis", "inconmensurable", "jerarquizaremos", "microprocesador", "malacostumbrado", "posicionamiento", "patrimonialidad", "trastrocamiento", "volatilizasteis"]
const sixteenLetterArr = ["afrodescendiente", "aristocratizaban", "bienintencionado", "contraproducente", "comprensibilidad", "desproporcionado", "descentralizamos", "enflaquecimiento", "fanfarroneasteis", "homogeneizaremos", "infortunadamente", "incontrovertible", "mayoritariamente", "medioambientales", "obligatoriamente", "obtaculizaremos", "provisionalmente", "premeditadamente", "quintuplicasteis", "rejuvenecimiento", "sobrevenidamente", "singularizasteis", "vertiginosamente", "exorbitantemente", "inexpugnabilidad", "concluyentemente"]
const longWordsArr = ["aprovisionamiento", "desinteresadamente", "desaprovechamiento", "incondicionalmente", "acondicionamiento", "electroencefalografista", "esternocleidomastoideo", "electroencefalograma", "electrocardiograma", "anticonstitucionalmente", "antigubernamentalisticamente", "desproporcionadisimamente", "hiperesternocleidomastoideitis"]

// Arrays seleccionados según nivel

  const wordsL1Arr = [oneLetterArr, twoLetterArr, threeLetterArr]
  const wordsL2Arr = [oneLetterArr, twoLetterArr, threeLetterArr, fourLetterArr, fiveLetterArr, sixLetterArr]
  const wordsL3Arr = [fourLetterArr, fiveLetterArr, sixLetterArr, sevenLetterArr, eightLetterArr]
  const wordsL4Arr = [fiveLetterArr, sixLetterArr, sevenLetterArr, eightLetterArr, nineLetterArr, tenLetterArr]
  const wordsL5Arr = [sixLetterArr, sevenLetterArr, eightLetterArr, nineLetterArr, tenLetterArr, elevenLetterArr, twelveLetterArr]
  const wordsL6Arr = [sevenLetterArr, eightLetterArr, nineLetterArr, tenLetterArr, elevenLetterArr, twelveLetterArr, thirteenLetterArr, fourteenLetterArr]
  const wordsL7Arr = [tenLetterArr, elevenLetterArr, twelveLetterArr, thirteenLetterArr, fourteenLetterArr, fifteenLetterArr, sixLetterArr]
  const wordsL8Arr = [elevenLetterArr, twelveLetterArr, thirteenLetterArr, fourteenLetterArr, fifteenLetterArr, sixLetterArr, longWordsArr]
  const wordsL9Arr = [thirteenLetterArr, fourteenLetterArr, fifteenLetterArr, sixLetterArr, longWordsArr]
  const wordsL10Arr = [fifteenLetterArr, sixLetterArr, longWordsArr]


// Función para seleccionar una palabra al azar

function randomWord(wordsLevelArr) {
    let randomArray = wordsLevelArr[Math.floor(Math.random() * wordsLevelArr.length)];
    let randomWord = randomArray[Math.floor(Math.random() * randomArray.length)];
    /* console.log(randomWord) */
    return randomWord
  }

  function randomWordLevel() {
    switch(game.level) {
      case 1:
        return randomWord(wordsL1Arr);
      case 2:
        return randomWord(wordsL2Arr);
      case 3:
        return randomWord(wordsL3Arr);
      case 4:
        return randomWord(wordsL4Arr);
      case 5:
        return randomWord(wordsL5Arr);
      case 6:
       return randomWord(wordsL6Arr);
      case 7:
        return randomWord(wordsL7Arr);
      case 8:
        return randomWord(wordsL8Arr);
      case 9:
        return randomWord(wordsL9Arr);
      default:
        return randomWord(wordsL10Arr);
    }
    
    } 
    

 /* function randomWordLevel(){
  if (game.level === 1) {
     randomWord(wordsL1Arr);  
  } else if (game.level === 2) {
    randomWord(wordsL2Arr);
  } else if (game.level === 3) {
    randomWord(wordsL3Arr);
  } else if (game.level === 4) {
    randomWord(wordsL4Arr)
  } else if (game.level === 5) {
    randomWord(wordsL5Arr)
  } else if (game.level === 6) {
    randomWord(wordsL6Arr)
  } else {console.log("proba proba")}
} 
 */

  
