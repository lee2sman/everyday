let stuff = [];
let textObjs = [];
let whichFont;
let bed;

function preload(){
  stuff = loadStrings('do.txt');
  whichFont = loadFont('space-age.otf');
}

function setup(){
  createCanvas(windowWidth,windowHeight,WEBGL);


  textFont(whichFont);

  textAlign(LEFT);
  textSize(width/15);

  frameRate(1);

  for (let i = 0; i < stuff.length; i++){
    textObjs[i] = new Do(stuff[i]);
  }
}

function draw(){

  background(20);

  for (let i=0; i<stuff.length;i++){
	  textObjs[i].show();
  }

  fill(80,120,220);
  text("To Do",-windowWidth/2,-windowHeight/3);
}

function windowResized(){
  resizeCanvas(windowWidth,windowHeight);
}

class Do{

  constructor(wrds){
    this.phrase = wrds;
    this.c = color(random(255),random(255),random(255),random(100,200));
    this.y = random(-height/2,height/2);
    this.scale = random(0.5,2);
    this.rotation = random(1,10);
  }

  show(){
    push();
      rotateY(this.rotation);
      this.rotation++;
      fill(this.c);
      scale(this.scale);
      text(this.phrase,0,this.y);
     pop();
     if (mouseIsPressed){
    this.c = color(random(255),random(255),random(255),random(100,200));
    this.y = random(-height/2,height/2);
    this.scale = random(0.5,2);

     }
  }
}

