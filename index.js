
// Al clickar start que aparezca canvas


window.onload = () => {
    document.getElementById("start").onclick = () => {
        createCanvas()
        const canvas = document.querySelector("#canvas")
        game.init(canvas)
        game.setListeners();
        playInitAudio();
    }
};


// Crear canvas

 function createCanvas() {
    document.getElementById("screen").innerHTML = '<canvas id="canvas" widht = "400" height ="400"></canvas>'
    
}

function playInitAudio(){
    let audioElement = document.getElementById("music");
    audioElement.play()
}
function pauseInitAudio(){
    let initAudioElement = document.getElementById("music");

    initAudioElement.pause()
    initAudioElement.currentTime = 0
}

function playGunSound(){
    let gunSound = document.getElementById("gun-sound");
     gunSound.play()
}

function playFinalAudio(){
    let finalMusic = document.getElementById("final-music");
    finalMusic.currentTime = 9;
    finalMusic.play()
}

function pauseFinalAudio(){
    let finalMusic = document.getElementById("final-music");
    finalMusic.pause()
    finalMusic.currentTime = 1; 
}