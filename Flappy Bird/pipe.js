class Pipe {
    static topImg = null;
    static bottomImg = null;
    static gap = 80;
    static init() {
        Pipe.topImg = new Image()
        Pipe.topImg.src = "assets/pipeTop.png";
        Pipe.bottomImg = new Image();
        Pipe.bottomImg.src = "assets/pipeBottom.png"
    }
    constructor(canvas) {
        this.x = canvas.width;
        this.y = (Math.random() * Pipe.topImg.height) - Pipe.topImg.height;
    }

    isHit(bird, birdWidth = 0, birdHeight = 0, baseHeight) {
        if (((bird.x + birdWidth >= this.x && bird.x <= this.x + Pipe.topImg.width)
            && (bird.y <= this.y + Pipe.topImg.height || bird.y + birdHeight > this.y + Pipe.topImg.height + Pipe.gap))
            || (bird.y + birdHeight >= baseHeight)
        ) {
            return true
        }
        else {
            return false;
        }

    }


    draw(ctx) {
        ctx.drawImage(Pipe.topImg, this.x, this.y);
        ctx.drawImage(Pipe.bottomImg, this.x, this.y + Pipe.topImg.height + Pipe.gap);
    }
    update() {
        this.x--;
    }

}