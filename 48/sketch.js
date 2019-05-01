let leepots, teapot, pots = [];
let song;

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);

  teapot = loadModel('assets/Laptop.obj', true, function(){model(teapot);},function(){console.log('failured');} );
  song = loadSound('assets/irsol_drill.mp3',function(){song.loop()});

  leepots = round(random(2,3));
  //normalMaterial(); // For effect
  ambientLight(200);
  ambientMaterial(70, 130, 230);

  for (let i = 0; i < leepots; i++){
    pots[i] = new Teapot();
  }

 
}

function draw(){
  push();
  scale(4);
  normalMaterial(); // For effect
  rotateX(frameCount/100);
  background(0);
  model(teapot);
  pop();

	rotateX(20);
	rotateY(mouseX/100);
	rotateZ(mouseY/100);

  for (let i = 0; i < leepots; i++){
    pots[i].display();
    pots[i].changeDir();
  }
  
if (random() < 0.2){
  ambientLight(random(255));
  ambientMaterial(random(255), random(255),random(255));
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


