let loaded = false;
let mark, totalObjects, teapot, pots = [], skins=[];
let song;
let timer = 5000;

function preload(){
  for (let i = 0; i < 7; i++){
    skins[i] = loadImage('assets/dazzle'+i+'.jpg');
  }
  song = loadSound('assets/eno.mp3');
}

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);

  totalObjects = 8;

  for (let i = 0; i<totalObjects; i++){
    pots[i] = new Teapot();
  }
 
  ambientLight(150);
  ambientMaterial(250);

}

function draw(){
	if (millis()>timer){
	  song.play();
          timer+=random(4000,8000);
	}
	rotateX(20);

	for (let i = 0; i < totalObjects ; i++){
          pots[i].display();
          pots[i].changeDir();
	}

  if (random()<0.02){
    clear();
    let b = select('body');
    b.style("background","linear-gradient(to bottom, rgba("+random(255)+","+random(255)+","+random(255)+","+random(255)+") "+random(100)+"%, rgba("+random(255)+","+random(255)+","+random(255)+","+random(255)+") "+random(100)+"%)").style("background-size"," 80% 75%");
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
    this.skin = skins[round(random(totalObjects - 1))];
  }

  display(){
    push();  
    rotateX(this.xRot);
    rotateY(this.yRot);
    translate(this.x, this.y);

    texture(this.skin);
    plane(900);
    pop();
  }
  
  changeDir(){
   if (millis()>this.timer){
      this.xRot = random(0.05);
      this.yRot = random(0.05);
      this.timer+=random(500,1000);
    }
  }
}


