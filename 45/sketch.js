//glitchpots - apr 28 1am
//heartbleed sound by Ero Kia 
let leepots, teapot, pots = [];
let heartbleed;

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);

  teapot = loadModel('assets/teapot.obj', true, function(){model(teapot);},function(){console.log('failured');} );
  heartbleed = loadSound('assets/heartbleed.mp3',function(){heartbleed.loop()});

  leepots = round(random(5,50));
  normalMaterial(); // For effect
 
  for (let i = 0; i < leepots; i++){
    pots[i] = new Teapot();
  }

 
}

function draw(){
	rotateX(20);
	rotateY(mouseX/100);
	rotateZ(mouseY/100);

	if (random()<0.01){
	  background(random(255),random(255),random(255));
	}
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
