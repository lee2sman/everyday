let amt = 100, shapes = [];

function setup(){
  createCanvas(windowWidth,windowHeight,WEBGL);

  noStroke();

  for (let i = 0; i < amt; i++){
    shapes[i] = new Struggle();
  }

  frameRate(1);

  bg = color(random(255),random(255),random(255),random(255));

  cursor('grab');
}

function draw(){

  orbitControl();

  background(bg);

  for (let i = 0; i < shapes.length; i++){

  push();

    translate(shapes[i].translateX, shapes[i].translateY,shapes[i].translateZ);
    scale(shapes[i].size);

    shapes[i].displayShape();
    shapes[i].changeShape();
    shapes[i].checkOn();

  pop();
  }
}

class Struggle{
  constructor(){
    this.translateX = random(-width,width);
    this.translateY = random(-height,height);
    this.translateZ = random(-height,height);
    this.size = random(0.05,2);
    this.c = color(random(255),random(255),random(255));
    this.x2 = random(width);
    this.y2 = random(height);
    this.x3 = this.x2;
    this.y3 = this.y2*2;
    this.anchorX = random(width);
    this.anchorY = random(height);
  }

  displayShape(){
    fill(this.c);
    beginShape();
    vertex(this.anchorX,this.anchorY/2);
    bezierVertex(this.x2,this.y2,this.x3,this.y3,this.anchorX,this.anchorY);
    endShape();
  }

  changeShape(){
    this.anchorX+=20;
    this.anchorY+=20;
    this.x2++;
    this.y2--;
    this.x3 = this.x2;
    this.y2 = this.y2*2;
  }

  checkOn(){
    if ((this.x2 > width) || (this.x2 < 0)){
      this.x2 = random(width);
    }
    if ((this.y2 > height) || (this.y2 < 0)){
      this.y2 = random(height);
    }
  }
}

function mouseClicked(){
  for (let i = 0; i < shapes.length; i++){
    shapes[i].translateX = random(-width,width);
    shapes[i].translateY = random(-height,height);
    shapes[i].translateZ = random(-height,height);
    shapes[i].size = random(0.05,2);
    shapes[i].c = color(random(255),random(255),random(255));
    shapes[i].x2 = random(width);
    shapes[i].y2 = random(height);
    shapes[i].x3 = shapes[i].x2;
    shapes[i].y3 = shapes[i].y2*2;
    shapes[i].anchorX = random(width);
    shapes[i].anchorY = random(height);
  }
}
