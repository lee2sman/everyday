let loaded = false;
let leepots, teapot, pots = [];
let song;
let level;

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);

  teapot = loadModel('assets/barrel.obj', true, function(){model(teapot);},function(){console.log('failured');} );
  song = loadSound('assets/afx-crying-in-yr-face.mp3',function(){
	  song.loop(); 
	  amplitude = new p5.Amplitude();
          loaded = true;
  });

  leepots = round(random(2,3));
  normalMaterial(); // For effect

  for (let i = 0; i < leepots; i++){
    pots[i] = new Teapot();
  }

 
}

function draw(){
	rotateX(20);
	rotateY(mouseX/100);
	rotateZ(mouseY/100);
if (loaded){
  for (let i = 0; i < leepots; i++){
    pots[i].display();
    pots[i].changeDir();
  }
}

  if (random()<0.02){
    clear();
    let b = select('body');
    b.style("background","linear-gradient(to right, rgba("+random(255)+","+random(255)+","+random(255)+","+random(255)+") "+random(100)+"%, rgba("+random(255)+","+random(255)+","+random(255)+","+random(255)+") "+random(100)+"%)").style("background-size"," 50% 5%");
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

level = amplitude.getLevel();
  var size = map(level, 0, 0.5, 1, 4);

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


