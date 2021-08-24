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
        },

        createBlock(word) {
          //  const randomWidth = Math.trunc(Math.random() * (300 - 100) + 100);
          //  const randomHeight = Math.trunc(Math.random() * (100 - 70) + 70);
            const width = 240
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
            this.ctx.fillText('Score: ' + this.score, 300, 40);
        },

        showLevel(){
            this.ctx.font = '25px Verdana';
            this.ctx.fillStyle = 'black';
            this.ctx.fillText('Level: ' + this.level, 20, 40)
        },

         drawLives(){
            this.imageLive1 = new Image()
            this.imageLive1.src = "/imagenes/iconGun.png"
            this.imageLive2 = new Image()
            this.imageLive2.src = "/imagenes/iconGun.png"
            this.imageLive3 = new Image()
            this.imageLive3.src = "/imagenes/iconGun.png"

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
 

    // Evento pulsar la tecla
         setListeners() {
             document.addEventListener('keydown', (e) => {
                 let pressedKey = e.key
                 console.log("pressedKey: "+ pressedKey)
                 if (pressedKey >= 'a' && pressedKey <= 'z'){
                    currentWord = this.currentBlock.word;
                    this.checkLetter(pressedKey, currentWord);
                    this.checkWord(currentWord);
                 }
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
            console.log("HighlightWord " + this.currentBlock.highlightWord)
    
        }, 
        
         checkWord(currentWord) {
            if (currentWord.length === this.wordPos) {
              /*   this.blocks.shift()
                this.currentBlock = this.blocks[0]
                this.wordPos = 0; */
                this.deleteBlock();
                this.updateScore();
                this.currentBlock.highlightWord = "";
           //     this.score += this.level * 10
             }
         }, 
         

       /*   drawPressedLetters(){
             this.ctx.fillText(pressedLetters,)
         } */

         deleteBlock(){
            this.blocks.shift()
            this.currentBlock = this.blocks[0]
            this.wordPos = 0; 
            this.levelUp();
            console.log(this.destroyedsBlock)
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
             console.log("gameOver")
             clearInterval(this.intervalId);
             this.gameOver();
             }
         },

         gameOver() {
            //Cambiar classe del elemento Div #screen de .pergaminoBg a .gameOverBg
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
            block.highlightWord = ""
        }
    
