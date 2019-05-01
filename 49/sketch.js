let song;
let heads = [], level,numHeads=20;

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);

  teapot = loadModel('assets/bust.obj', true, function(){model(teapot);},function(){console.log('failured to load model');} );
  song = loadSound('assets/smerz.mp3',function(){song.loop()});

  amplitude = new p5.Amplitude();

  normalMaterial(); // For effect
 // ambientLight(200);
//  ambientMaterial(70, 130, 230);

  for (let i = 0;i<numHeads;i++){
    heads[i] = new BigHead();
  }
 
}

function draw(){
	background(0);
	rotateX(20);

  for (let i = 0;i<numHeads;i++){
    heads[i].display();
    heads[i].changeDir();
  }


}


class BigHead{
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
    rotateX(PI/2);
    rotateY(PI);
    translate(this.x, this.y);

level = amplitude.getLevel();
  var size = map(level, 0, 0.5, 1, 8);

	  scale(size);

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


