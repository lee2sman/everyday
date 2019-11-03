//add delete mode??
let button = [];
let buttonCount = 0;
let mode="create";

function setup(){
  createCanvas(windowWidth,windowHeight);
}

function draw(){
  background(255); 
  if (mode=="create"){
    text("create",50,50);
  } else if (mode == "play"){
    text("play",50,50);
  }	
}

function mousePressed(){

  if (mode == 'create'){
    button[buttonCount]=createButton(buttonCount);
    button[buttonCount].position(mouseX-50,mouseY-50);
    button[buttonCount].size(100,100);
    button[buttonCount].style('background-color','rgb('+random(255)+','+random(255)+','+random(255)+')');
    button[buttonCount].style('border-radius','20%');
    buttonCount++;
  }
}


function keyPressed(){
  if (key=='c'){
    mode="create";
  } else if (key=='p'){
    mode="play";
  }
}
