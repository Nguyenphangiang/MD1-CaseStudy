let maxHeart=15
let playerHeart=8;
let score = 0;
let gameFrame = 0;
let gameOver = false;
const winningScore=45;
const eatSound = document.createElement('audio');
eatSound.src="sound/apple_bite.ogg";
const hurtSound = document.createElement('audio');
hurtSound.src='sound/hurt.ogg';
const levelUp=document.createElement('audio');
levelUp.src='sound/level_up.wav';
const winSound=document.createElement('audio');
winSound.src='sound/Win.ogg';
const loseSound=document.createElement('audio');
loseSound.src='sound/you_lose.wav';
let level= 1;
ctx.font = " 50px Orbitron";

function handleGameover(){
    if (playerHeart<=0){
        gameOver=true;
        loseSound.play();
        ctx.fillStyle = "black";
        ctx.fillText("YOU LOSE",130,250);
    }
    if (score==winningScore){
        gameOver=true;
        winSound.play();
        ctx.fillStyle = "black";
        ctx.fillText("YOU WIN",130,250)
    }
}
function animate(){
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
    if(score>15){
        level=2;
        if (score==16){levelUp.play()}
        ctx.clearRect(0,0,canvas.width,canvas.height);
        handleBackground2()
        handleEnemy2();
        handleFood();
        handleSmallFish2();
        player.update();
        player.draw();
        ctx.fillStyle ="black";
        ctx.fillText("score: " + score,10,40)
        ctx.fillText("level: " + level,290,40)
        ctx.fillText("heart: " + playerHeart,550,40)
        gameFrame++;
    }
    if (score>30){
        level=3;
        if (score==30){levelUp.play()};
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

    }handleGameover()
    if (!gameOver){
        requestAnimationFrame(animate);
    }
}
animate()