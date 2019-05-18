//Elementary Wave 11v2 by Erokia from Freesound.org cc
//
let loaded = false;
let mark, totalObjects = 20, teapot, pots = [], skins=[];
let song;
let timer = 5000;

function preload(){
	console.log('preloading');
  for (let i = 0; i < totalObjects; i++){
    skins[i] = loadImage('assets/rothko'+i+'.jpg');
	  console.log('loaded '+i);
  }
}

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);


  song = loadSound('assets/elementary_wave_11v2.mp3',function(){
    song.loop();
  });

  for (let i = 0; i<totalObjects; i++){
    pots[i] = new Teapot();
  }
 
  ambientLight(150);
  ambientMaterial(250);

}

function draw(){
	  background(0,0,0,220);

	for (let i = 0; i < totalObjects ; i++){
          pots[i].display();
          pots[i].changeDir();
	}


  if (random()<0.01){
    let b = select('body');
    b.style("background","linear-gradient(to bottom, rgba("+random(255)+","+random(255)+","+random(255)+","+random(255)+") "+random(100)+"%, rgba("+random(255)+","+random(255)+","+random(255)+","+random(255)+") "+random(100)+"%)").style("background-size"," 80% 75%");
  }

}


class Teapot{
  constructor(){
    this.x = random(-width/2,width/2,);
    //this.y = random(-height/2,height/2);
	  this.y = height/4+random(-height/8,height/8);
    this.potScale = random(0.5,2);
    this.size = random(width/4);
    this.xRot = random(0.05);
    this.yRot = random(0.05);
    this.timer = 3000;
    this.skin = skins[round(random(totalObjects - 1))];
    this.speed = 0.5;
  }

  display(){
    push();  
    rotateX(this.xRot);
    rotateY(this.yRot);
    translate(this.x, this.y);

    texture(this.skin);
    box(this.size);
    pop();
  }
  
  changeDir(){
	  this.x +=this.speed;
   if (millis()>this.timer){
	   this.speed = random(-0.25,0.25);
      //this.xRot = random(0.05);
      //this.yRot = random(0.05);
      this.timer+=random(2000,6000);
	  this.y+=this.speed;
    }
  }
}

