let face, eye;
let eyes = 20;
let eyeX = [], eyeY = [];
let amplitude;
let stuff = [], stuffImg = [];
let soundtrack;
let amountOfStuff = 100;
let displaySplash = true;

function preload(){
  soundtrack = loadSound('assets/hba.mp3');

  for (let i = 0; i < 22; i++){
   stuffImg[i] = loadImage('assets/'+i+'.png');
  }
}

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);

  soundtrack.play();
  noCursor();

  amplitude = new p5.Amplitude();

  for (let i = 0; i<amountOfStuff; i++){
    stuff[i] = new Stuff();
  }
}

function draw() {
  background(0);

  for (let i = 0; i<amountOfStuff; i++){
    stuff[i].display();
    stuff[i].changeImage();
    stuff[i].wander();
  }
}

class Stuff{
  constructor(){
    this.x = random(-width/2,width/2);
    this.y = random(-height/2,height/2);
    this.whichImg = floor(random(0,stuffImg.length));  
    this.level;
    this.size;
  }
  
  display(){
    push();

    translate(this.x,this.y);

    texture(stuffImg[this.whichImg]);
    
    this.level = amplitude.getLevel();  

    this.size = map(this.level, 0, 1, 0, 2000);

    ellipsoid(this.size,this.size,this.size);
    pop();
    }
    
    changeImage(){
       if (this.level>0.2){
         this.whichImg = floor(random(0,stuffImg.length));    
       }
    }
    wander(){
       if(this.level>0.2){
         this.x+=random(-0.5,0.5);
         this.y+=random(-0.5,0.5);
       }
    }

}

function windowResized(){
  resizeCanvas(windowWidth,windowHeight);
}

