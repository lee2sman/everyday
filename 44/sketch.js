//Leepot
let leepots, teapot, pots = [];

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);

  teapot = loadModel('assets/teapot.obj', true, function(){model(teapot);},function(){console.log('failured');} );

  leepots = round(random(5,50));
  normalMaterial(); // For effect
 
  for (let i = 0; i < leepots; i++){
    pots[i] = new Teapot();
  }

 
}

function draw(){
  background(200);

  for (let i = 0; i < leepots; i++){
    pots[i].display();
    pots[i].changeDir();
  }
  
}


class Teapot{
  constructor(){
    this.x = random(-width/2,width/2,);
    this.y = random(-height/2,height/2);
    this.potScale = random(0.5,2);
    this.xRot = random(0.05);
    this.yRot = random(0.05);
    this.timer = 3000;
  }

  display(){
    push();  
    rotateX(frameCount * this.xRot);
    rotateY(frameCount * this.yRot);
    translate(this.x, this.y);
    scale(this.potScale);
    model(teapot);
    pop();
  }
  
  changeDir(){
   if (millis()>this.timer){
      this.xRot = random(0.05);
      this.yRot = random(0.05);
      this.timer+=random(3000,10000);
    }
  }
}
