var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
ctx.fillStyle = 'aqua';
ctx.fillRect(0,0,200,200);
ctx.fill();
function arc(x,y,radius,color){
ctx.beginPath();
ctx.fillStyle = color;
ctx.arc(x,y,radius,0,2*Math.PI);
ctx.fill();
ctx.stroke();
}
arc(100,100,100)//big one
//mid size
arc(100,50,50)//upper
arc(100,150,50)//down
arc(50,100,50)//left
arc(150,100,50)//right
//smal size
arc(100,50,25)//upper
arc(100,150,25)//down
arc(50,100,25)//left
arc(150,100,25)//right
arc(100,100,25)//centre
