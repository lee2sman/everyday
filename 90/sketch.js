let player;
let thebody;
let f;
let sndtrk, soundLoaded = false;

function preload(){
  f = loadFont('assets/Aaargh.ttf');
  thebody = loadModel('assets/head.obj', true);
}

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);

  textFont(f);
  fill(0);
  textSize(48)
  textAlign(CENTER, CENTER);
  text('looooooooooading...',0,0);

  let soundToggle = createButton('sndtrk on/off');
  soundToggle.size(100,100);
  soundToggle.style('backgroundColor','pink');
  soundToggle.position(width-soundToggle.width,0);
  soundToggle.mousePressed(switchSound);

  sndtrk = loadSound('assets/banabila-vennik-bobby-untitled7.mp3');

  player = new Player();

  textAlign(LEFT, TOP);
}


function startSound(){
  sndtrk.loop();
}

function draw() {
  background(200)

  orbitControl()

  //world
  drawPlatform()

  //aka PLAYER
  player.display()
  player.checkKeys()
  player.physics()

  //credits
  textAlign(LEFT, TOP);
  fill(10);
  textSize(16);
  text('snd: Michel Banabila, Hannes Vennik & Bobby - Untitled 7',-width/2+8,-height/2);

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
text('phyzicz sym',0,0-height/3);
stroke(0);
}

function drawPlatform(){
  push();
  translate(0,300,0)
  rotateX(radians(90))
  fill(130,0,220);
  plane(width/2,1000);
  pop();
}

class Player{
  constructor(){
    this.x = 0;
    this.y = 80;
    this.z = 300;
    this.scale = 3;
  }

  display(){
    push();
      translate(this.x, this.y,this.z);
      scale(this.scale);
      rotateX(radians(180));
      rotateY(radians(180));
      rotateY(map(mouseX,0,width,9,3));
      rotateX(map(mouseY,0,height,-PI/4,PI/4));
      fill(0,200,0,127);
      model(thebody);
    pop();
  }


  physics(){

    //if ya too far left or 2 far right, ya falls off
    //same if ya too fars fo'ward or back
    if ((this.x < -width/4) || (this.x > width/4)||(this.y < 80)||
      (this.z > 500) || (this.z < -700)) {
      this.y+=40
    }

    //if fall off screen, wrap around and pop ya at the top
    if (this.y > height/2)(this.y = -height/2)

    //but if you're slightly sunk below platform, raise ya up
    //checks to make sure you're within platform 
     if (((this.x > -width/3) && (this.x < width/3)&&(this.y > 100)) && (this.z < 500) && (this.z > -700))
    {
      this.y = 80
     }

    //if you go offscreen left or right, you're limited
       if(this.x<(-width/2)){this.x = -width/2}

       if(this.x>width/2)(this.x = width/2)
    } 

  iLikeToMoveItMoveIt(){
    this.newX = (mouseX,0,width,-width/2,width/2);
    //LATERRRRRS
    //this.newY = (mouseY,0,height,-
    //let lerpX = lerp(this.x,this.newX,
  }

  checkKeys(){
    if (keyIsPressed){
	if (keyCode === UP_ARROW)   { this.z-=40 }
	if (keyCode === DOWN_ARROW) { this.z+=40 }
	if (keyCode === LEFT_ARROW) { this.x-=40 }
	if (keyCode === RIGHT_ARROW){ this.x+=40 }
      }
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
