const playerLeft = new Image();
playerLeft.src = "picture/fishswiml.png"
const playerRight= new Image();
playerRight.src = "picture/fishswimr.png"
class Player{
    constructor() {
        this.x = canvas.width;
        this.y = canvas.height/2;
        this.radius = 50;
        this.angle = 0;
        this.frameX= 0;
        this.frameY=0;
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