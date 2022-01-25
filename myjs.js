//canvas setup
const canvas = document.getElementById("canvas1");
const ctx = canvas.getContext("2d");
canvas.width = 800;
canvas.height = 500;

let playerHeart=3;
let score = 0;
let gameFrame = 0;
let gameOver = false;
const winningScore=50;
ctx.font = " 50px Orbitron";

//Mouse interactivity
let canvasPosition = canvas.getBoundingClientRect();
const mouse = {
    x: canvas.width/2,
    y: canvas.height/2,
    click: false
}
canvas.addEventListener("mousedown",function (event){
    mouse.click=true;
    mouse.x= event.x - canvasPosition.left;
    mouse.y= event.y - canvasPosition.top;
});
canvas.addEventListener("mouseup",function (){
    mouse.click=false;
})
//Player
const playerLeft = new Image();
playerLeft.src = "fishswiml.png"
const playerRight= new Image();
playerRight.src = "fishswimr.png"
class Player{
    constructor() {
        this.x = canvas.width;
        this.y = canvas.height/2;
        this.radius = 50;
        this.angle = 0;
        this.frameX= 0;
        this.frameY=0;
        this.frame = 0;
        this.spriteWidth = 498;
        this.spriteHeight = 327;
    }
    update(){
        const dx = this.x - mouse.x;
        const dy = this.y - mouse.y;
        let theta = Math.atan2(dy,dx);
        this.angle = theta;
        if (mouse.x != this.x){
            this.x -= dx/20;
        }
        if (mouse.y != this.y){
            this.y-= dy/20;
        }
    }
    draw(){
        if (mouse.click){
            ctx.lineWidth = 0.2;
            ctx.beginPath();
            ctx.moveTo(this.x,this.y);
            ctx.lineTo(mouse.x,mouse.y);
            ctx.stroke();
        }
        // ctx.fillStyle = "red"
        // ctx.beginPath();
        // ctx.arc(this.x,this.y,this.radius,0,Math.PI*2);
        // ctx.fill();
        // ctx.closePath();
        // ctx.fillRect(this.x,this.y,this.radius,10);

        ctx.save();
        ctx.translate(this.x,this.y);
        ctx.rotate(this.angle)
        if (this.x> mouse.x){
            ctx.drawImage(playerLeft,this.frameX * this.spriteWidth,
                this.frameY * this.spriteHeight,this.spriteWidth,this.spriteHeight,
                0-60,0-45,this.spriteWidth/4,this.spriteHeight/4);
        } else {
            ctx.drawImage(playerRight,this.frameX * this.spriteWidth,
                this.frameY * this.spriteHeight,this.spriteWidth,this.spriteHeight,
                0-60,0-45,this.spriteWidth/4,this.spriteHeight/4);
        }
        ctx.restore();
    }
}
const player = new Player()
//Enemies
const enemyUp = new Image();
enemyUp.src =  "splat.png";
const enemyArray = [];
class Enemy{
    constructor() {
        this.x = Math.random()* canvas.width +100;
        this.y = canvas.height+100;
        this.radius = 5;
        this.speed = Math.random()*2 ;
        this.distance = 0;
        this.counted = false;

    }
    update(){
        this.y -= this.speed;
        const dx = this.x - player.x;
        const dy = this.y - player.y;
        this.distance = Math.sqrt(dx*dx + dy*dy);
    }
    draw(){
        // ctx.fillStyle = "blue";
        // ctx.beginPath();
        // ctx.arc(this.x,this.y,this.radius,0,Math.PI*2);
        // ctx.fill();
        // ctx.closePath();
        // ctx.stroke();
        ctx.drawImage(enemyUp,this.x,this.y,this.radius*10,this.radius*10);
    }
}
function handleEnemy(){
    if(gameFrame %100== 0){
        enemyArray.push(new Enemy());
    }
    for (let i = 0; i < enemyArray.length; i++) {
        enemyArray[i].update();
        enemyArray[i].draw();
        }
    for (let i = 0; i < enemyArray.length; i++){
        if (enemyArray[i].y<0 - enemyArray[i].radius*2){
            enemyArray.splice(i,1);
        }
        if (enemyArray[i]){
            if (enemyArray[i].distance < enemyArray[i].radius + player.radius){
                playerHeart--;
                if (!enemyArray[i].counted){
                    enemyArray[i].counted = true;
                    enemyArray.splice(i,1);
                }
            }
        }
    }
}

//BackGrounds
const background = new Image();
background.src="background2.png";

function handleBackground(){
    ctx.drawImage(background,0,0,canvas.width,canvas.height);
}
//Fish
const enemyImage = new Image();
enemyImage.src="fishleft.png"
const fishArray=[];
class Fish {
    constructor() {
        this.x = canvas.width + 200;
        this.y = Math.random()*canvas.height;
        this.radius = 30;
        this.speed = Math.random()*5 + 1;
        this.frame = 0;
        this.frameX =0;
        this.frameY = 0;
        this.spriteWidth = 418;
        this.spriteHeight= 397;
        this.distance = 0;
        this.counted = false;
    }
    draw(){
        // ctx.fillStyle="red";
        // ctx.beginPath();
        // ctx.arc(this.x,this.y,this.radius,0,Math.PI*2);
        // ctx.fill();
        ctx.drawImage(enemyImage,this.frameX*this.spriteWidth,this.frameY*this.spriteHeight,this.spriteWidth+80,this.spriteHeight-80,this.x-60,this.y-45,this.spriteWidth/6,this.spriteHeight/6);

    }
    update(){
        this.x -= this.speed;
        const dx = this.x - player.x;
        const dy = this.y - player.y;
        this.distance= Math.sqrt(dx*dx + dy*dy);
        if(this.x <0- this.radius*2){
            this.x = canvas.width +200;
            this.y = Math.random()*(canvas.height-150) +90;
        }
    }
}
const smallFish = new Fish();
function handleSmallFish(){
    if(gameFrame %50== 0){
        fishArray.push(new Fish());
    }
    for (let i = 0; i < fishArray.length; i++) {
        fishArray[i].update();
        fishArray[i].draw();
    }
    for (let i = 0; i < fishArray.length; i++){
        if (fishArray[i].y<0 - fishArray[i].radius*2){
            fishArray.splice(i,1);
        }
        if (fishArray[i]){
            if (fishArray[i].distance < fishArray[i].radius + player.radius){
                score++;
                if (!fishArray[i].counted){
                    fishArray[i].counted = true;
                    fishArray.splice(i,1);
                }
            }
        }
    }
}

function handleGameover(){
   if (playerHeart==0){
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
//Animation loop
function animate(){
    ctx.clearRect(0,0,canvas.width,canvas.height);
    handleBackground()
    handleEnemy();
    player.update();
    player.draw();
    handleSmallFish()
    ctx.fillStyle ="black";
    ctx.fillText("score: " + score,10,40)
    ctx.fillText("heart: " + playerHeart,500,40)
    gameFrame++;
    handleGameover()
    if (!gameOver)requestAnimationFrame(animate);
}
animate()