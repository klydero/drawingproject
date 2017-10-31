var canvas = document.querySelector('canvas');
var ctx = canvas.getContext('2d');

var xPos = 0;
var yPos = 0;

function resizeCanvas(){

  canvas.width = innerWidth;
  canvas.height = innerHeight;

}

ctx.rect(xPos, yPos, canvas.width,canvas.height);
ctx.stroke();


function move(e){
//alert(e.keycode);

if (e.keyCode == 39){
xPos += 3;

}
if (e.keyCode == 37){

xPos -= 2;

}
if (e.keyCode == 38){
yPos -= 2;

}
if (e.keyCode == 40){

yPos += 2;

}
canvas.width = canvas.width;
canvas.height = canvas.height;
ctx.rect(xPos, yPos, 50, 50);
ctx.stroke();

}

document.onkeydown = move;
