let step = 250;
let player, x, y, enemyX, enemyY, enemyHealth = 255;

function setup(){
  createCanvas(windowWidth,windowHeight);

  x = round(random(round(windowWidth/step)))*step;
  y = round(random(round(windowHeight/step)))*step;

  enemyX = round(random(round(windowWidth/step)))*step;
  enemyY = round(random(round(windowHeight/step)))*step;

  noStroke();
 
  frameRate(2);

  update();

//just show at startup
drawControls();
}

function keyPressed(){

  switch(key) {

    case 'ArrowLeft':
      x-=step;
      update();
    break;

    case "ArrowRight":
      x+=step;
      update();
    break;

    case "ArrowUp":
      y-=step;
      update();
    break;

    case "ArrowDown":
      y+=step;
      update();
    break;
  }
  
  checkOffscreen();
  
  drawPlayer();
 
  return false;
}

function checkOffscreen(){
  if (x<0){x+=step;}
  if (x>width){x-=step;}
  if (y<0){y+=step;}
  if (y>height){y-=step;}
}

function update(){
  background(0);
  drawBoard();
  moveEnemy();
  drawPlayer();
  drawEnemy();
  checkCollision();
}

function drawBoard(){
  for (let y=0; y < height; y+=step){
    for (let x=0; x < width; x+=step){
      fill(random(180,230));
      rect(x,y,step,step);
    }
  }
}

function moveEnemy(){
if (random()>0.3){  //30% chance it doesn't chase each move
  if (x > enemyX){ enemyX+=step;}
    else if (x < enemyX){ enemyX-=step;}
  }
  if (random()>0.3){
    if (y > enemyY){ enemyY+=step;}
    else if (y < enemyY){ enemyY-=step;}
  }
}

function drawEnemy(){
  fill(0,enemyHealth,enemyHealth/2);
  rect(enemyX,enemyY,step,step);

  fill(220);
//left eye
  ellipse(enemyX+step/4,enemyY+step/4,step/4,step/4);
  fill(20);
  ellipse(enemyX+step/4,enemyY+step/4,step/8,step/4);
//right eye
  fill(220);
  ellipse(enemyX+step*3/4,enemyY+step/4,step/4,step/4);
  fill(20);
  ellipse(enemyX+step*3/4,enemyY+step/4,step/8,step/4);
//mouth
  ellipse(enemyX+step/2,enemyY+step*3/4,step,step/4);
}

function drawPlayer(){
  fill(255,0,0);
  rect(x,y,step,step);

  fill(220);
//left eye
  ellipse(x+step/4,y+step/4,step/4,step/4);
  fill(20);
  ellipse(x+step/4,y+step/4,step/8,step/8);
//right eye
  fill(220);
  ellipse(x+step*3/4,y+step/4,step/4,step/4);
  fill(20);
  ellipse(x+step*3/4,y+step/4,step/8,step/8);
}
 
function checkCollision(){
  if ((x == enemyX)&&(y == enemyY)){
      background(20,0,0,200);
      drawControls();
  }
}

function windowResized() {
  tempX = x/step;
  tempY = y/step;

  resizeCanvas(windowWidth, windowHeight);

  x = tempX*step;
  y = tempY*step;
}


function drawControls(){

fill(255,255,0);
rect(step,step/2,step/2,step/2);
rect(step/2,step,step*3/2,step/2);
textSize(step/2);
fill(0);
textAlign(LEFT, BOTTOM);
text('^',step,step);
text('<',step/2,step+step/2);
text('>',step+step/2,step+step/2);

}
