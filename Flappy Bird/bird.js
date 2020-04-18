class Bird {
    static birdImg = null;
    static gravity = 1;
    static init() {
        Bird.birdImg = new Image();
        Bird.birdImg.src = "assets/bird.png";
    }
    constructor(canvas) {
        this.x = 10;
        this.y = canvas.height / 2;
        this.brain = new NeuralNetwork(4, 4, 1);
    }

    think(pipes) {
        //finding the closet pipe.
        let closetDistance = Infinity;
        let closetPipe = null;
        for (let i = 0; i < pipes.length; i++) {
            if ((pipes[i].x - this.x) < closetDistance) {
                closetPipe = pipes[i];
                closetDistance = pipes[i] - this.x;
            }
        }

        let inputs = [];
        inputs[0] = this.y / canvas.height;
        inputs[1] = (closetPipe.y +Pipe.topImg.height ) / canvas.height ;
        inputs[2] = (closetPipe.y + Pipe.topImg.height + Pipe.gap) /canvas.height;
        inputs[3] =  closetPipe.x /canvas.width
        let output = this.brain.feedForward(inputs)
        if(output[0] > 0.4){
            this.up();
        }

    }

    draw(ctx) {
        ctx.drawImage(Bird.birdImg, this.x, this.y);
    }
    up(minHeight =  Bird.birdImg.height , maxHeight) {
        if (this.y > minHeight) {
            this.y -= 25;
        }
    }
    update(minHeight, maxHeight) {
        if (this.y + Bird.birdImg.height > minHeight && this.y + Bird.birdImg.height < maxHeight) {
            this.y += Bird.gravity;
        }
    }

}