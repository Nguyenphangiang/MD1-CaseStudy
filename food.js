const fishImage = new Image();
fishImage.src="picture/fishleft.png"
const fishArray=[];
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
        ctx.drawImage(fishImage,this.frameX*this.spriteWidth,this.frameY*this.spriteHeight,this.spriteWidth+80,this.spriteHeight-80,this.x-60,this.y-45,this.spriteWidth/6,this.spriteHeight/6);

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
