
// Al clickar start que aparezca canvas


window.onload = () => {
    document.getElementById("start").onclick = () => {
        createCanvas()
        const canvas = document.querySelector("#canvas")
        game.init(canvas)
        game.setListeners();
        playAudio();
    }
};


// Crear canvas

 function createCanvas() {
    document.getElementById("screen").innerHTML = '<canvas id="canvas" widht = "400" height ="400"></canvas>'
    
}

function playAudio(){
    let audioElement = document.getElementById("music");

    audioElement.play()
}

function playGunSound(){
    let gunSound = document.getElementById("gun-sound");
     gunSound.play()
}