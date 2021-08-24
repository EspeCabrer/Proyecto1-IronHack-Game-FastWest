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
            let wordPositionX = (this.blockPosition.x + 20);
            let wordPositionY = (this.blockPosition.y + 27);

             this.ctx.drawImage(
                 this.imageInstance,
                 this.blockPosition.x,
                 this.blockPosition.y,
                 this.blockSize.w,
                 this.blockSize.h
                 ); 

            // Palabras asignadas a los bloques
             this.ctx.fillStyle = "white",
             this.ctx.font = "40px"
             this.ctx.fillText(this.word, wordPositionX, wordPositionY)
             
             // Letras pulsadas que coinciden con la palabra del bloque.
             // Color verde => #73FE69
             // Color naranja => #FFAF46

             this.ctx.fillStyle = "#FFAF46"
             this.ctx.font = "40px"
             this.ctx.fillText(this.highlightWord, wordPositionX, wordPositionY) 
             this.move();
        }

        move() {
            this.blockPosition.y += this.speed;
        }
    }
