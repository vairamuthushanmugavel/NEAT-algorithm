//Initializing the global level
var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
//Loading the background Image.
var background = new Image();
background.src = "assets/background-night.png";
//Loading the base Image
var base = new Image();
base.src = "assets/base.png"
//Initializing the  bird and pipe class.
Pipe.init();
Bird.init();

// //taking the animation frame
var aniframe = window.requestAnimationFrame;
let pipes = [new Pipe(canvas)];
let bird = new Bird(canvas);



//Listening to the keydown event to make jump

document.addEventListener("keydown", function () {
    bird.up(0, canvas.height - base.height)
})






function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    //drawing the background Image.
    ctx.drawImage(background, 0, 0);
    pipes = pipes.filter(pipe => pipe.x > - 100);

    for (let pipe of pipes) {
        pipe.draw(ctx);
        pipe.update();
        if (pipe.isHit(bird,Bird.birdImg.width , Bird.birdImg.height ,canvas.height -base.height )) {
            console.log("collison");
        }

        if (pipe.x === 60) {
            pipes.push(new Pipe(canvas));
        }


    }

    bird.draw(ctx);
    //updating the gravity
    bird.update(0, canvas.height - base.height);
    //drawing the base Image
    ctx.drawImage(base, 0, canvas.height - base.height);
    aniframe(draw)
}

draw()



