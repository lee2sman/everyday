let eye = [];
let eyeImg, faceImg, dirtImg;
let totalEyes = 20;
let bldngX = 0, bldngY = 150, bldngZ = 300;
let f;
let sndtrk, soundLoaded = false;

function preload(){
  faceImg = loadImage('assets/face.jpg');
  eyeImg = loadImage('assets/eye.jpg');
  dirtImg = loadImage('assets/dirt.png');
  f = loadFont('assets/Aaargh.ttf');
}

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);

  let soundToggle = createButton('sndtrk on/off');
  soundToggle.style('backgroundColor','pink');
  soundToggle.position(width-soundToggle.width,0);
  soundToggle.mousePressed(switchSound);

  let sizer = createButton('RESPAWN');
  sizer.style('backgroundColor','aqua');
  sizer.position(width-sizer.width,soundToggle.height);
  sizer.mousePressed(reloader);

  sndtrk = loadSound('assets/banabila-vennik-bobby-untitled5.mp3');

  for (let i = 0; i < totalEyes; i++){
    eye[i] = new Eye();
  }

  textFont(f);
  textAlign(LEFT, TOP);
}


function startSound(){
  sndtrk.loop();
}

function draw() {
  background(200);
  orbitControl();

  //world
  push();
  translate(0,300,0);
  rotateX(radians(90));
  //fill(30,0,220);
  texture(dirtImg);
  plane(width,1000);
  pop();

  //eyes
for (let i=0; i<eye.length;i++){
  if (eye[i].alive){
    eye[i].display();
    eye[i].collide();
  }
}

  //head
  push();
    texture(faceImg);
    translate(bldngX, bldngY,bldngZ);
    scale(2);
    rotateY(map(mouseX,0,width,7,5));
    rotateX(map(mouseY,0,height,-PI/4,PI/4));
    box(120,220,30);
  pop();

  checkKeys();

  //credits
  textAlign(LEFT, TOP);
  fill(10);
  textSize(16);
  text('snd: Michel Banabila, Hannes Vennik & Bobby - Untitled 5',-width/2+8,-height/2);

//instructions
  textAlign(CENTER, TOP);
text('motion: <ARROW KEYS>',0,0-height/2);
text('grab w/ mouse and rotate world',0,0-height/2+20);
text('mini game engine built from scratch, more soon',0,0-height/2+40);
textSize(24)
fill(0,180,0);
rectMode(CENTER);
noStroke();
rect(0,0-height/3,140,40);
fill(0);
textAlign(CENTER, CENTER);
text('eat things',0,0-height/3);
stroke(0);
}

function checkKeys(){
  if (keyIsPressed){
      if (keyCode === UP_ARROW){bldngZ-=10};
      if (keyCode === DOWN_ARROW)(bldngZ+=10);
      if (keyCode === LEFT_ARROW)(bldngX-=10);
      if (keyCode === RIGHT_ARROW)(bldngX+=10);
    }
}


class Eye{
  constructor(){
    this.scale = random(1,3);
    this.x = random(-width/2,width/2);
    this.y = 300-56;
    this.z = random(-300,300);
    this.alive = true;
  }

  display(){
    push();
    translate(this.x,this.y,this.z);
    scale(this.scale)
    rotateY(radians(map(bldngX,-width/2,width/2,90,270)));
    rotateY(radians(map(bldngZ,-500,500,180,-130)));
    texture(eyeImg);
    ellipsoid(60,56);
    pop();
  }

  collide(){
    if ((this.x > bldngX-100)&&(this.x < bldngX+100)&&(this.z < bldngZ+100) && (this.z > bldngZ-100)){
      this.alive = false; 
    }
  }
}

function reloader(){
  for (let i=0; i<eye.length;i++){
    eye[i].alive = true;
    eye[i].scale = random(1,4);
    eye[i].x = random(-width/2,width/2);
    eye[i].y = 300-56;
    eye[i].z = random(-300,300);
  }
}


function switchSound(){
  if (!(sndtrk.isPlaying())){
      sndtrk.loop();
  } else {
      sndtrk.stop();
  }
}

function keyTyped(){
  return false;
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
