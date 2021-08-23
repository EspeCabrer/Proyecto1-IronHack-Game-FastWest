const game = {
        ctx: undefined,
        canvasSize: {
            w: undefined,
            h: undefined
            },
        blocks: [],
        currentBlock: undefined,
        wordPos: 0,               // Posición de la letra que se chequea
        intervalId: undefined,
        framesCounter: 0,
        speed: 2,
        score: 0,
        level: 1,
        lives: 1,
        imageLive1: undefined,
        imageLive2: undefined,
        imageLive3: undefined,

    

        init(canvas){
            this.setContext(canvas);
            this.setCanvasDimensions(canvas);
          //  this.imageLives = new Image()
          //  this.imageLives.src = "/imagenes/iconGun.png"
            this.setListeners()
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

                console.log("lives: " + this.lives)
                this.clearCanvas()
                this.drawAll()

                this.framesCounter ++

                if(this.framesCounter % 100 === 0) {
                    this.createBlock(randomWord(twoLetter))
                
                }    
            }, 1000/60 );
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
            const width = 150
            const height = 40
            const xRandomPosition = Math.trunc(Math.random() * (this.canvasSize.w - 100))
        
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
                 if (pressedKey >= 'a' && pressedKey <= 'z'){
                    let currentWord = this.currentBlock.word;
                    this.checkLetter(pressedKey, currentWord);
                    this.checkWord(currentWord)
                 }
             })
         },

         checkLetter(pressedKey, currentWord){
             if (pressedKey === currentWord[this.wordPos]) {
                this.wordPos += 1;
            } else {
                this.wordPos = 0;
            }
        }, 
        
         checkWord(currentWord) {
            if (currentWord.length === this.wordPos) {
              /*   this.blocks.shift()
                this.currentBlock = this.blocks[0]
                this.wordPos = 0; */
                this.deleteBlock();
                this.updateScore();
                console.log(this.score)
           //     this.score += this.level * 10


             }
         },

         deleteBlock(){
            this.blocks.shift()
            this.currentBlock = this.blocks[0]
            this.wordPos = 0; 
         },

         updateScore(){
             this.score += this.level * 10
         },

         checkIfCollision(){
             if(this.currentBlock !== undefined){
                  if (this.currentBlock.blockPosition.y === this.canvasSize.h) {
                     this.blocks.shift()
                     this.currentBlock = this.blocks[0]
                     this.wordPos = 0; 
                     this.lives -= 1 
                     this.checkLives()
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
            let elementScreen = document.getElementById("screen")

            elementScreen.className = "gameOverBg";
            elementScreen.innerHTML =  '<div class="gameOver"> <h4>GAME OVER</h4>  </div> <div class ="score">  Score=</p></div> <div class= "restart-btn"><button id="restart" type="button">Play Again</button></div>'


           /*  document.getElementById("screen").innerHTML =
            '<div class="gameOver"> <h4>GAME OVER</h4>  </div> <div class ="score">  Score=</p></div> <div class= "start-btn"><button id="restart" type="button">REINTENTAR</button></div>' */
        }


}

