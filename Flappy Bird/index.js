//Initializing the global level
var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
var background = new Image();
background.src = "assets/background-night.png";
// background.onload = function () {
//     ctx.drawImage(background, 0, 0);
// }
Pipe.init();

// //taking the animation frame
var aniframe = window.requestAnimationFrame;
let pipe =  new Pipe(canvas);
function draw() {
    ctx.clearRect(0,0,canvas.width,canvas.height);
    ctx.drawImage(background, 0, 0);
    pipe.update();
    pipe.draw(ctx);


    aniframe(draw)
}

draw()



