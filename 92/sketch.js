//thesis demake - floor stub
let loaded = false;
let mark, beginObjectNum, tile = [];
let song;
let timer = 5000;
let uploadedImg = [], imgCount = 0;
let cameraZ = 0;

function preload(){
  for (let i = 0; i < 2; i++){
    uploadedImg[i] = loadImage('assets/dazzle'+i+'.jpg');
  }
  song = loadSound('assets/eno.mp3');
}

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);

  beginObjectNum = 2;

  for (let i = 0; i<beginObjectNum; i++){
    tile[i] = new FloorTile();
  }
 
  imgCount = tile.length;

  ambientLight(150);
  ambientMaterial(250);

  createUploader();
}

function draw(){
  noCursor();

  camera(map(mouseX,0,width,-width/2,width/2), map(mouseY,0,height,-height/2,height/2), (height/2.0) / tan(PI*30.0 / 180.0)+cameraZ, 0, 0, 0, 0, 1, 0);

        orbitControl();
  keyController();

	rotateX(20);

	for (let i = 0; i < tile.length; i++){
          tile[i].display();
          tile[i].changeDir();
	}

  if (random()<0.01){
    clear();
    let b = select('body');
    b.style("background","linear-gradient(to bottom, rgba("+random(255)+","+random(255)+","+random(255)+","+random(255)+") "+random(100)+"%, rgba("+random(255)+","+random(255)+","+random(255)+","+random(255)+") "+random(100)+"%)").style("background-size"," 80% 75%");
  }

}

function createUploader(){
  //file uploader
    input = createFileInput(handleFile, 'multiple')
    input.position(0, 0);

}

function handleFile(file) {
  if (file.type === 'image') {
    uploadedImg[imgCount] = createImg(file.data);
    uploadedImg[imgCount].hide();

    tile[imgCount] = new FloorTile();

    imgCount++
    
  //renderZine()
  } else {
    uploadedImg[imgCount] = null;
  }

  if (!(song.isPlaying())){
     song.play();
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
    this.x = random(-width/2,width/2,);
    this.y = random(-height/2,height/2);
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


