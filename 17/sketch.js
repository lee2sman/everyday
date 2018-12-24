let die1;
let rollSnd;

function preload(){
  rollSnd = loadSound('roll.wav');
}

function setup(){
  createCanvas(windowWidth,windowHeight);

  //defaults
  rectMode(CENTER);
  strokeWeight(6);
  stroke(20);

  mousePressed();
}

function mousePressed(){
 var num = ceil(random(10));

    for (let i = 0; i < num; i++){
      let die = new Die(mouseX+random(-300,300),mouseY+random(-300,300));
      die.rollDie();
    }
}

class Die {

  constructor(_x, _y, _w = 200, _dotW = 20){
    this.x = _x;
    this.y = _y;
    this.w = _w
    this.dotW = _dotW;
    this.roll;
  }

  rollDie(){
    rollSnd.play();

    this.roll = ceil(random(6));
    this.display();
    //print("rolled: "+this.roll);
  }

  display(){

    //shape
    fill(random(150,240));
    rect(this.x, this.y, this.w, this.w, 40);

    //draw dots
    fill(0);

    switch (this.roll){
      case 1:
	ellipse(this.x,this.y,this.dotW,this.dotW);
        break;
      case 2:
	ellipse(this.x-this.w/4,this.y-this.w/4,this.dotW,this.dotW);
	ellipse(this.x+this.w/4,this.y+this.w/4,this.dotW,this.dotW);
        break;
      case 3:
	ellipse(this.x,this.y,this.dotW,this.dotW);
	ellipse(this.x-this.w/3,this.y-this.w/3,this.dotW,this.dotW);
	ellipse(this.x+this.w/3,this.y+this.w/3,this.dotW,this.dotW);
        break;
      case 4:
	ellipse(this.x-this.w/4,this.y-this.w/4,this.dotW,this.dotW);
	ellipse(this.x+this.w/4,this.y-this.w/4,this.dotW,this.dotW);
	ellipse(this.x-this.w/4,this.y+this.w/4,this.dotW,this.dotW);
	ellipse(this.x+this.w/4,this.y+this.w/4,this.dotW,this.dotW);
        break;
      case 5:
	ellipse(this.x,this.y,this.dotW,this.dotW);
	ellipse(this.x-this.w/4,this.y-this.w/4,this.dotW,this.dotW);
	ellipse(this.x+this.w/4,this.y-this.w/4,this.dotW,this.dotW);
	ellipse(this.x-this.w/4,this.y+this.w/4,this.dotW,this.dotW);
	ellipse(this.x+this.w/4,this.y+this.w/4,this.dotW,this.dotW);
        break;
      case 6:
	ellipse(this.x-this.w/3,this.y-this.w/6,this.dotW,this.dotW);
	ellipse(this.x,this.y-this.w/6,this.dotW,this.dotW);
	ellipse(this.x+this.w/3,this.y-this.w/6,this.dotW,this.dotW);
	ellipse(this.x-this.w/3,this.y+this.w/6,this.dotW,this.dotW);
	ellipse(this.x,this.y+this.w/6,this.dotW,this.dotW);
	ellipse(this.x+this.w/3,this.y+this.w/6,this.dotW,this.dotW);
        break;
    }

  }
}
