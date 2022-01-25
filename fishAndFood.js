const fishImage1 = new Image();
fishImage1.src="picture/smallfish1.png"
const fishImage2 = new Image();
fishImage2.src="picture/smallfish2.png"
const fishImage3 = new Image();
fishImage3.src="picture/smallfish3.png"
const foodImage = new Image();
foodImage.src="picture/food2.png"
const foodImage1 = new Image();
foodImage1.src="picture/food3.png"
const fishArray=[];
const foodArray=[];
class Fish {
    constructor() {
        this.x = canvas.width + 200;
        this.y = Math.random()*canvas.height;
        this.radius = 30;
        this.speed = Math.random()*5 + 1;
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
        ctx.drawImage(fishImage1,this.frameX*this.spriteWidth,this.frameY*this.spriteHeight,this.spriteWidth+80,this.spriteHeight-80,this.x-60,this.y-45,this.spriteWidth/6,this.spriteHeight/6);
    }
    draw1(){
        ctx.drawImage(fishImage2,this.frameX*this.spriteWidth,this.frameY*this.spriteHeight,this.spriteWidth+80,this.spriteHeight-80,this.x-60,this.y-45,this.spriteWidth/7,this.spriteWidth/7);
    }
    draw2(){
        ctx.drawImage(fishImage3,this.frameX*this.spriteWidth,this.frameY*this.spriteHeight,this.spriteWidth+80,this.spriteHeight-80,this.x-60,this.y-45,this.spriteWidth/8,this.spriteWidth/8)
    }
    update(){
        this.x -= this.speed;
        const dx = this.x - player.x;
        const dy = this.y - player.y;
        this.distance= Math.sqrt(dx*dx + dy*dy);
    }
}
class Food {
    constructor() {
        this.x = Math.random()*canvas.width+100;
        this.y = canvas.height - 600;
        this.radius = 5;
        this.speed = Math.random()*2+1;
        this.distance = 0;
        this.counted =false;
    }
    draw(){
        ctx.drawImage(foodImage,this.x,this.y,this.radius*5,this.radius*5);
    }
    draw1(){
        ctx.drawImage(foodImage1,this.x,this.y,this.radius*4,this.radius*4)
    }
    update(){
        this.y += this.speed;
        const dx = this.x - player.x;
        const dy = this.y - player.y;
        this.distance = Math.sqrt(dx*dx + dy*dy);
    }
}
function handleSmallFish1(){
    if(gameFrame %100== 0){
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
function handleSmallFish2(){
    if(gameFrame %90== 0){
        fishArray.push(new Fish());
    }
    for (let i = 0; i < fishArray.length; i++) {
        fishArray[i].update();
        fishArray[i].draw1();
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
function handleSmallFish3(){
    if(gameFrame %80== 0){
        fishArray.push(new Fish());
    }
    for (let i = 0; i < fishArray.length; i++) {
        fishArray[i].update();
        fishArray[i].draw2();
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
function handleFood(){
    if (gameFrame%250==0){
        foodArray.push(new Food())
        console.log(foodArray.length)
    }
    for (let i = 0; i < foodArray.length; i++) {
        foodArray[i].update();
        foodArray[i].draw();
    }
    for (let i = 0; i < foodArray.length; i++) {
        if (foodArray[i].y>600){
            foodArray.splice(i,1);
        }
        if (foodArray[i].distance < foodArray[i].radius+player.radius){
            playerHeart++;
            if (!foodArray[i].counted){
                foodArray[i].counted=true;
                foodArray.splice(i,1);
            }
        }
    }
}
function handleFood2(){
    if (gameFrame%350==0){
        foodArray.push(new Food())
        console.log(foodArray.length)
    }
    for (let i = 0; i < foodArray.length; i++) {
        foodArray[i].update();
        foodArray[i].draw();
    }
    for (let i = 0; i < foodArray.length; i++) {
        if (foodArray[i].y>600){
            foodArray.splice(i,1);
        }
        if (foodArray[i].distance < foodArray[i].radius+player.radius){
            playerHeart= maxHeart;
            if (!foodArray[i].counted){
                foodArray[i].counted=true;
                foodArray.splice(i,1);
            }
        }
    }
}