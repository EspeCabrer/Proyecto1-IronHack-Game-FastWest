class block {
    constructor(ctx, width, height, canvasSize, position, speed, word) {
        this.ctx = ctx
        this.blockSize = { w: width, h: height }
        this.canvasSize = canvasSize
        this.blockPosition = { x: position, y: -100 }
        this.speed = speed
        this.imageInstance = new Image();
        this.imageInstance.src = "/imagenes/textura madera.jpeg"
        this.word = word
        this.highlightWord = "" // Letras pulsadas que coinciden con las letras asignadas al bloque.
        
     }

        draw() {
            let wordPositionX = (this.blockPosition.x + (this.blockSize.w/3));
            let wordPositionY = (this.blockPosition.y + 27);

            this.ctx.drawImage(
                 this.imageInstance,
                 this.blockPosition.x,
                 this.blockPosition.y,
                 this.blockSize.w,
                 this.blockSize.h
                 );

            // Palabras asignadas a los bloques
             this.ctx.fillStyle = 'orange',
             this.ctx.fillText(this.word, wordPositionX, wordPositionY)
             
             // Letras pulsadas que coinciden con la palabra del bloque
             this.ctx.fillStyle = "green"
             this.ctx.fillText(this.highlightWord, wordPositionX, wordPositionY) 
             this.move();
        }

        move() {
            this.blockPosition.y += this.speed;
        }
    }
