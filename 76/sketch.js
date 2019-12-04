//brutal ugly mode
//add delete mode??
let button = [];
let buttonCount = 0;
let mode="create";
let createImg, playImg;
let glitchFont;

function preload(){
  createImg=loadImage("create.png");
  playImg=loadImage("play.png");
  glitchFont=loadFont('dirty.ttf');
}

function setup(){
  createCanvas(windowWidth,windowHeight);
  textFont(glitchFont);
  createFlair();
  }

  function createFlair(){
  for (let i = 0; i < 1000; i++){
    strokeWeight(random(1,8));
    stroke(random(255),random(255),random(255),random(255));
    point(random(width),random(height));
  }
  strokeWeight(1);
  stroke(0);
  }

function draw(){
  //background(255); 

  whichCursor();
  buttons();
}

function buttons(){
  noFill();
  strokeWeight(8);
  //create
  image(createImg,0,height*3/4,width/2,height/4);
  if (mode=='create'){
    fill(120,220);
  }
  rect(0,height*3/4,width/2,height/4);
  //play
  noFill();
  image(playImg,width/2,height*3/4,width/2,height/4);
  if (mode=='play'){
    fill(120,220);
  }
  rect(width/2,height*3/4,width/2,height/4);

  //text
  fill(255);
  textAlign(CENTER);
  textSize(96);
  text("create",width/4,height*3/4+width/16);
  text("play",width/2+width/4,height*3/4+width/16);

}

function whichCursor(){
  if (mouseY > (height*3/4)){
    cursor(HAND);
  } else {
    cursor(ARROW);
  }
}

function mousePressed(){

 if (mouseY < height*3/4) {
  if (mode == 'create'){
    button[buttonCount]=createButton(buttonCount);
    button[buttonCount].position(mouseX-50,mouseY-50);
    button[buttonCount].size(random(100,300),random(100,300));
    button[buttonCount].style('background-image',"url('bgbutton.png')");
    button[buttonCount].style('background-color','rgb('+random(255)+','+random(255)+','+random(255)+')');
    button[buttonCount].style('border-radius','20%');
    buttonCount++;
  }
 } else {
   if (mouseX < width/2){
     //start create mode   
    mode="create";
   } else {
     //start play mode
    mode="play";
   }
 }
}


function keyPressed(){
  if (key=='c'){
    mode="create";
  } else if (key=='p'){
    mode="play";
  }
}

function windowResized(){
  resizeCanvas(windowWidth, windowHeight);
  createFlair();
}
