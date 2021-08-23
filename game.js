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
        live: 3,

    

        init(canvas){
            this.setContext(canvas);
            this.setCanvasDimensions(canvas);
            this.imageLives = new Image()
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
                this.clearCanvas()
                this.drawAll()

                this.framesCounter ++

                if(this.framesCounter % 100 === 0) {
                    this.createBlock(randomWord(twoLetter))
                
                }    
            }, 100 );
        },

        clearCanvas() {
            this.ctx.clearRect(0, 0, this.canvasSize.w, this.canvasSize.h)
        },

        drawAll(){
            this.blocks.forEach(block => block.draw());

         

            this.showScores();
            this.showLevel();
         //   this.drawLives();
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

        /*  drawLives(){
            this.ctx.drawImage(this.drawLives, 500, 500)
        }, */
 

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
            console.log("currentWord", currentWord)
            console.log("currentBlockWord", this.currentBlock.word)
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
         }
}

