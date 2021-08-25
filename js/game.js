const game = {
        ctx: undefined,
        canvasSize: {
            w: undefined,
            h: undefined
            },
        blocks: [],
        currentBlock: undefined,
        currentWord: undefined, 
        destroyedsBlock: 0,
        wordPos: 0,               // Posición de la letra que se comprueba
        intervalId: undefined,
        framesCounter: 0,
        speed: 2,
        score: 0,
        level: 1,
        lives: 3,
        imageLive1: undefined,
        imageLive2: undefined,
        imageLive3: undefined,
        helpBomb: 3,
        imageBomb1: undefined,
        imageBomb2: undefined,
        imageBomb3: undefined,



        init(canvas){
            this.setContext(canvas);
            this.setCanvasDimensions(canvas);
            this.gameStart();
            console.log("initCanvas")
        },


        setContext(canvas){
            this.ctx = canvas.getContext('2d');
        },

        setCanvasDimensions(canvas){
            this.canvasSize.w = 500;
            this.canvasSize.h = 700;
            canvas.setAttribute('width', this.canvasSize.w);
            canvas.setAttribute('height', this.canvasSize.h);
        },

        gameStart(){
            this.intervalId = setInterval(() => {
                this.checkIfCollision()
                this.clearCanvas()
                this.drawAll()

                this.framesCounter ++

                if(this.framesCounter % 100 === 0) {
                     this.createBlock(randomWordLevel()) 
                }    
            }, 1000 / 60 );
        },

        clearCanvas() {
            this.ctx.clearRect(0, 0, this.canvasSize.w, this.canvasSize.h)
        },

        drawAll(){
            this.blocks.forEach(block => block.draw());

         

            this.showScores();
            this.showLevel();
            this.drawLives();
            this.drawHelpBombs();
        },

        createBlock(word) {
          //  const randomWidth = Math.trunc(Math.random() * (300 - 100) + 100);
          //  const randomHeight = Math.trunc(Math.random() * (100 - 70) + 70);
            const width = 420
            const height = 40
            const xRandomPosition = Math.trunc(Math.random() * (this.canvasSize.w - width))
        
            const newBlock = new block(
              this.ctx,
              width,
              height,
              this.canvasSize,
              xRandomPosition,
              this.speed,
              word 
            );
        
            this.blocks.push(newBlock);

            if (this.currentBlock === undefined) {
                this.currentBlock = this.blocks[0];
              
            }
        },


        showScores() {
           // show scores
            this.ctx.font = '25px Verdana';
            this.ctx.fillStyle = 'black';
            this.ctx.fillText('Score: ' + this.score, 20, 40);
        },

        showLevel(){
            this.ctx.font = '25px Verdana';
            this.ctx.fillStyle = 'black';
            this.ctx.fillText('Level: ' + this.level, 370, 40)
        },

         drawLives(){
            this.imageLive1 = new Image()
            this.imageLive1.src = "https://especabrer.github.io/Proyecto1-IronHack-Game-FastWest/imagenes/iconGun.png"
            this.imageLive2 = new Image()
            this.imageLive2.src = "https://especabrer.github.io/Proyecto1-IronHack-Game-FastWest/imagenes/iconGun.png"
            this.imageLive3 = new Image()
            this.imageLive3.src = "https://especabrer.github.io/Proyecto1-IronHack-Game-FastWest/imagenes/iconGun.png"

             if (this.lives === 1) {
            this.ctx.drawImage(this.imageLive1, 30, 630)
            };

            if (this.lives === 2) {
                this.ctx.drawImage(this.imageLive1, 30, 630)
                this.ctx.drawImage(this.imageLive2, 80, 630)
            }

            if(this.lives === 3) {
                this.ctx.drawImage(this.imageLive1, 30, 630)
                this.ctx.drawImage(this.imageLive2, 80, 630)
                this.ctx.drawImage(this.imageLive3, 130, 630)
            }
        }, 

        drawHelpBombs(){
            this.imageBomb1 = new Image()
            this.imageBomb1.src = "https://especabrer.github.io/Proyecto1-IronHack-Game-FastWest/imagenes/iconBomb.png"
            this.imageBomb2 = new Image()
            this.imageBomb2.src = "https://especabrer.github.io/Proyecto1-IronHack-Game-FastWest/imagenes/iconBomb.png"
            this.imageBomb3 = new Image()
            this.imageBomb3.src = "https://especabrer.github.io/Proyecto1-IronHack-Game-FastWest/imagenes/iconBomb.png"

            if (this.helpBomb === 1) {
                this.ctx.drawImage(this.imageBomb1, 430, 630)
                };
    
            if (this.helpBomb === 2) {
                this.ctx.drawImage(this.imageBomb1, 430, 630)
                this.ctx.drawImage(this.imageBomb2, 380, 630)
                }
    
            if(this.helpBomb === 3) {
                this.ctx.drawImage(this.imageBomb1, 430, 630)
                this.ctx.drawImage(this.imageBomb2, 380, 630)
                this.ctx.drawImage(this.imageBomb3, 330, 630)
                }
        },
 

    // Evento pulsar la tecla
         setListeners() {
             document.addEventListener('keydown', (e) => {
                 let pressedKey = e.key
                 console.log("presedkeydeahora: "+ e.keyCode)
                 if (pressedKey >= 'a' && pressedKey <= 'z'){
                    currentWord = this.currentBlock.word;
                    this.checkLetter(pressedKey, currentWord);
                    this.checkWord(currentWord); 
                    } 
                if (e.keyCode === 32) {
                     console.log("bomba")
                        this.activateHelpBomb()
                 };
            })
         },

         checkLetter(pressedKey, currentWord){
            this.currentBlock.highlightWord += `${pressedKey}`

             if (pressedKey === currentWord[this.wordPos]) {
                this.wordPos += 1;
            } else {
                this.wordPos = 0;
                this.currentBlock.highlightWord = "";
            }
    
        }, 
        
         checkWord(currentWord) {
            if (currentWord.length === this.wordPos) {
                this.deleteBlock();
                this.updateScore();
                this.currentBlock.highlightWord = "";
             }
         }, 
         
         deleteBlock(){
            this.blocks.shift()
            this.currentBlock = this.blocks[0]
            this.wordPos = 0; 
            this.levelUp();
         },

         updateScore(){
             this.score += this.level * 10
         },

         checkIfCollision(){
             if(this.currentBlock !== undefined){
                  if (this.currentBlock.blockPosition.y === this.canvasSize.h) {
                     this.blocks.shift()
                     this.blocks.shift()
                     this.blocks.shift()
                     this.blocks.shift()
                     this.blocks.shift()
                     this.currentBlock = this.blocks[0]
                     this.blocks = [ ]
                     this.wordPos = 0; 
                     this.lives -= 1 
                     this.checkLives()
                     playGunSound()
                    }
              }
         },

         checkLives(){
             if (this.lives === 0){
             clearInterval(this.intervalId);
             this.gameOver();
             }
         },

         activateHelpBomb(){
             if (this.helpBomb > 0){
             this.helpBomb -= 1,
             this.blocks.shift()
             this.currentBlock = this.blocks[0]
             currentWord = this.currentBlock.word;
             this.wordPos = 0;
             console.log("atun")
             playBombSound();
             }
         },

         gameOver() {
            //Cambio clase del elemento Div #screen de .pergaminoBg a .gameOverBg
            let screenElement = document.getElementById("screen")

            screenElement.className = "gameOverBg";
            screenElement.innerHTML =  '<div class="gameOver"> <h4>GAME OVER</h4>  </div> <div id ="score">  Score=</p></div> <div class= "restart-btn"><button id="restart" type="button">TRY AGAIN</button></div>'

            let scoreElement = document.getElementById("score")
            scoreElement.innerHTML = "Score: "+ this.score;
            restart();
            pauseInitAudio();
            playFinalAudio();
        },

         levelUp(){
            this.destroyedsBlock +=1;

            if (this.destroyedsBlock % 10 === 0) {
                this.level +=1
            }
        },
}

 function restart() {
     document.getElementById("restart").onclick = () => {
         let screenElement = document.getElementById("screen") 
         screenElement.className = "pergaminoBg";
         resetValues();
         createCanvas();
         const canvas = document.querySelector("#canvas")
         game.init(canvas)
         pauseFinalAudio()
         playInitAudio();
     }
 }

 function resetValues() {
        game.ctx = undefined,
        game.canvasSize.w = undefined,
        game.canvasSize.y = undefined,
        game.blocks = [],
        game.currentBlock = undefined,
        game.currentWord = undefined, 
        game.destroyedsBlock = 0,
        game.wordPos = 0,               // Posición de la letra que se comprueba
        game.intervalId = undefined,
        game.framesCounter = 0,
        game.speed = 2,
        game.score = 0,
        game.level = 1,
        game.lives = 3,
        game.imageLive1 = undefined,
        game.imageLive2 = undefined,
        game.imageLive3 = undefined,
        game.helpBomb = 3,
        game.imageBomb1 = undefined,
        game.imageBomb2 = undefined,
        game.imageBomb3 = undefined,
        block.highlightWord = ""
        }
    
