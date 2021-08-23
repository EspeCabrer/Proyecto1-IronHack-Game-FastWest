
// Al clickar start que aparezca canvas


window.onload = () => {
    document.getElementById("start").onclick = () => {
        createCanvas()
        const canvas = document.querySelector("#canvas")
        game.init(canvas)
    }
};
//No funciona//

/* document.getElementById("restart").onclick = () => {
        console.log("clic restart")
        createCanvas()
        const canvas = document.querySelector("#canvas")
        game.init(canvas)
     }  */


// Crear canvas

 function createCanvas() {
    document.getElementById("screen").innerHTML = '<canvas id="canvas" widht = "400" height ="400"></canvas>'
}




//Borrar screen

/* function deleteScreen(container) {
    let screenContainer = document.getElementsByClassName("screen") 
    screenContainer.innerHTML = container
}
  */