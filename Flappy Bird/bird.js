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
    }
    draw(ctx) {
        ctx.drawImage(Bird.birdImg, this.x, this.y);
    }
    up(minHeight, maxHeight){
        if(this.y > minHeight){
            this.y -= 25;
        }
    }
    update(minHeight, maxHeight) {
        if (this.y + Bird.birdImg.height > minHeight && this.y + Bird.birdImg.height < maxHeight) {
            this.y += Bird.gravity;
        }
    }

}