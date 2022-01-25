let maxHeart=15
let playerHeart=8;
let score = 0;
let gameFrame = 0;
let gameOver = false;
const winningScore=60;
let level= 1;
ctx.font = " 50px Orbitron";

function handleGameover(){
    if (playerHeart<=0){
        gameOver=true;
        ctx.fillStyle = "black";
        ctx.fillText("YOU LOSE",130,250);
    }
    if (score==winningScore){
        gameOver=true;
        ctx.fillStyle = "black";
        ctx.fillText("YOU WIN",130,250)
    }
}
function animate(){
    if (score<=20){
        ctx.clearRect(0,0,canvas.width,canvas.height);
        handleBackground()
        handleEnemy();
        player.update();
        player.draw();
        handleSmallFish1()
        ctx.fillStyle ="black";
        ctx.fillText("score: " + score,10,40)
        ctx.fillText("level: " + level,290,40)
        ctx.fillText("heart: " + playerHeart,550,40)
        gameFrame++;
        handleGameover()
        if (!gameOver)requestAnimationFrame(animate);
    }
    if(score>20){
        level=2;
        ctx.clearRect(0,0,canvas.width,canvas.height);
        handleBackground2()
        handleEnemy2();
        handleSmallFish2();
        handleFood();
        player.update();
        player.draw();
        ctx.fillStyle ="black";
        ctx.fillText("score: " + score,10,40)
        ctx.fillText("level: " + level,290,40)
        ctx.fillText("heart: " + playerHeart,550,40)
        gameFrame++;
        handleGameover()
        if (!gameOver)requestAnimationFrame(animate);
    }
    if (score>40){
        level=3;
        ctx.clearRect(0,0,canvas.width,canvas.height);
        handleBackground3()
        handleEnemy3();
        handleSmallFish3();
        handleFood2();
        player.update();
        player.draw();
        ctx.fillStyle ="black";
        ctx.fillText("score: " + score,10,40)
        ctx.fillText("level: " + level,290,40)
        ctx.fillText("heart: " + playerHeart,550,40)
        gameFrame++;
        handleGameover()
        if (!gameOver)requestAnimationFrame(animate);
    }
}
animate()