const background1 = new Image();
background1.src="picture/background1.png";
const background2= new Image();
background2.src="picture/background2.png";
const background3= new Image();
background3.src="picture/background3.png";
function handleBackground(){
    ctx.drawImage(background1,0,0,canvas.width,canvas.height);
}
function handleBackground2(){
    ctx.drawImage(background2,0,0,canvas.width,canvas.height);
}
function handleBackground3(){
    ctx.drawImage(background3,0,0,canvas.width,canvas.height);
}