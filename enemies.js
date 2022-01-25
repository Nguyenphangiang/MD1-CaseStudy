const enemyUp = new Image();
enemyUp.src =  "picture/enemy1.png";
const enemyUp2= new Image();
enemyUp2.src = "picture/enemy2.png";
const enemyUp3= new Image();
enemyUp3.src = "picture/enemy3.png";
const enemyArray = [];
class Enemy{
    constructor() {
        this.x = Math.random()*canvas.width+100
        this.y = canvas.height+100
        this.radius = 5;
        this.speed = Math.random()*2
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
    draw1(){
        ctx.drawImage(enemyUp2,this.x,this.y,this.radius*10,this.radius*10);
    }
    draw2(){
        ctx.drawImage(enemyUp3,this.x,this.y,this.radius*20,this.radius*20);
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
function handleEnemy2(){
    if(gameFrame %50== 0){
        enemyArray.push(new Enemy());
    }
    for (let i = 0; i < enemyArray.length; i++) {
        enemyArray[i].update();
        enemyArray[i].draw1();
    }
    for (let i = 0; i < enemyArray.length; i++){
        if (enemyArray[i].y<0 - enemyArray[i].radius*2){
            enemyArray.splice(i,1);
        }
        if (enemyArray[i]){
            if (enemyArray[i].distance < enemyArray[i].radius + player.radius){
                playerHeart-=2;
                if (!enemyArray[i].counted){
                    enemyArray[i].counted = true;
                    enemyArray.splice(i,1);
                }
            }
        }
    }
}
function handleEnemy3(){
    if(gameFrame %60== 0){
        enemyArray.push(new Enemy());
    }
    for (let i = 0; i < enemyArray.length; i++) {
        enemyArray[i].update();
        enemyArray[i].draw2();
    }
    for (let i = 0; i < enemyArray.length; i++){
        if (enemyArray[i].y<0 - enemyArray[i].radius*2){
            enemyArray.splice(i,1);
        }
        if (enemyArray[i]){
            if (enemyArray[i].distance < enemyArray[i].radius + player.radius){
                playerHeart-=3;
                if (!enemyArray[i].counted){
                    enemyArray[i].counted = true;
                    enemyArray.splice(i,1);
                }
            }
        }
    }
}
