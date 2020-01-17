let loaded = false;
let mark, tile = [];
let beginObjectNum = 1000;
let song;
let timer = 5000;
let uploadedImg = [], imgCount = 0;
let cameraZ = 0;

function preload(){


  for (let i = 0; i < 8; i++){
    uploadedImg[i] = loadImage('assets/background'+i+'.png');
  }
  song = loadSound('../assets/audio/eelsOS-hitstix.mp3');
}

function setup() {

  createCanvas(windowWidth, windowHeight, WEBGL);
  //body.innerHTML="";

  noStroke();

  for (let i = 0; i<beginObjectNum; i++){
    tile[i] = new FloorTile();
  }
 
  imgCount = tile.length;

  ambientLight(150);
  ambientMaterial(250);

  cursor('grab');
}

function draw(){
  background(20,120);
  
  camera(map(mouseX,0,width,-width/2,width/2), map(mouseY,0,height,-height/2,height/2), (height/2.0) / tan(PI*30.0 / 180.0)+cameraZ, 0, 0, 0, 0, 1, 0);

        orbitControl();
  keyController();

	rotateX(20);

	for (let i = 0; i < tile.length; i++){
          tile[i].display();
          tile[i].changeDir();
	}
}

function keyController(){
  if (keyIsDown(UP_ARROW)){
    cameraZ-=25;
  }
  if (keyIsDown(DOWN_ARROW)){
    cameraZ+=25;
  }
}

class FloorTile {
  constructor(){
    this.x = random(-width,width);
    this.y = random(-height,height);
    this.z = random(-width,width);
    this.potScale = random(0.5,2);
    this.xRot = random(0.05);
    this.yRot = random(0.05);
    this.timer = 3000;
    this.skin = uploadedImg[round(random(uploadedImg.length - 1))];
  }

  display(){
    push();  
    rotateX(this.xRot);
    rotateY(this.yRot);
    translate(this.x, this.y, this.z);

    scale(this.potScale);
    texture(this.skin);

     box(180,180,250);

    pop();
  }
  
  changeDir(){
   if (millis()>this.timer){
      this.xRot = random(0.005);
      this.yRot = random(0.005);
      this.timer+=random(500,1000);
    }
  }
}


function mousePressed(){
  if (!(song.isPlaying())){
    song.loop();
  }
}

setInterval(function(){
    tile[beginObjectNum] = new FloorTile();
    beginObjectNum++; 
},50);
