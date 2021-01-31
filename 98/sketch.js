//faces and then
//revisit sketch 59

let f;
let started = false, timer, faceReady = false, eyeballReady = false, eyeX = 0, eyeY = 180, noseX = 0, noseY = 0;
let faceImg, eyeballImg, bangsModel, bangsReady = false, bangsTexture, coneModel, noseTexture, coneReady = false;
let mic, micLevel, rot = 0;

function setup(){
  createCanvas(windowWidth,windowHeight,WEBGL);

  noStroke();
	f = loadFont('assets/DS-TERM.TTF',startScreen);

  faceImg = loadImage('assets/background1.jpg',function(){faceReady = true;});
  eyeballImg = loadImage('assets/eyeball.jpg',function(){eyeballReady = true;});
  coneModel = loadModel('assets/traffic_cone.obj',true,function(){
    noseTexture = loadImage('assets/background5.jpg',function(){
      coneReady = true;
    })
  });
  bangsModel = loadModel('assets/bangs.obj', true, function(){
    bangsTexture = loadImage('assets/background6.jpg',function(){
      bangsReady = true;});
    })
  mic = new p5.AudioIn()

  angleMode(DEGREES);
}

function draw(){
  if (started){
     if (random()<0.01){
    //clear();
    let b = select('body');
    b.style("background","linear-gradient(to bottom, rgba("+random(255)+","+random(255)+","+random(255)+","+random(255)+") "+random(100)+"%, rgba("+random(255)+","+random(255)+","+random(255)+","+random(255)+") "+random(100)+"%)").style("background-size"," 80% 75%");
  }

//    background(0);
clear();
    micLevel = mic.getLevel();

    //left head
    push();
    scale(1.5);
    rotateY(rot); 
    head();
    eyeballs();
    nose();
    lips();
    hair();
    pop();
  }
}

function startScreen(){
  background(255);
  textFont(f);
  textAlign(LEFT, TOP);
  fill(0);
  text("LOADING",-400,-300+10);

    fill(0);
    strokeWeight(5);
    fill(255);
    rectMode(CENTER);
    rect(0,0,110,40);
    fill(0);
    textSize(30);
    textAlign(CENTER, CENTER);

    text("Play?",0,0);
}

function mousePressed(){
  rot = 0;
  if (!started){

    mic.start();
    started = true;
  }
}
function head(){
    fill(250, 150, 130);
    if (faceReady){
      texture(faceImg);
    }
    push();
    rotateY(frameCount/30);
    ellipsoid(200,266,200);
    pop();
}

function eyeballs(){
    if (eyeballReady){
      texture(eyeballImg);
    }
    //left eye
    push();
    translate(-50,-40,230);
    rotateY(constrain(eyeX,160,200));
    rotateX(constrain(eyeY,-20,20));
    sphere(23);
    pop();
    //right eye
    push();
    translate(50,-40,230);
    rotateY(constrain(eyeX,160,200));
    rotateX(constrain(eyeY,-20,20));
    sphere(23);
    pop();

    if (random()<0.01){
      eyeX=random(-5,5);
      eyeY=random(-10,10);
    }
}

function nose(){
    push();
    rotateY(constrain(noseX,-15,15));
    push();
    rotateX(constrain(noseY,-10,10));
    push();
    scale(.7);
    translate(0,10,305);
    rotateZ(180);
    rotateX(90);
    texture(noseTexture);
    model(coneModel);
    pop();
    pop();
    pop();

    if (random()<0.01){
      rot+=random(-5,5);
    }
    if (random()<0.001){
      noseX = random(-3,3);
      noseY = random(-3,3);
    }
}

function lips(){
    fill(255,0,0);
    //top lip
    push();
    translate(0,50,50);
    rotateX(map(micLevel,0,0.05,445,435));
    torus(150, 8);
    pop();

    //bottom lip
    push();
    translate(0,50,50);
    rotateX(map(micLevel,0,0.05,435,445)-10);
    //fill(0,0,200);
    torus(150, 8);
    pop();
}

function hair(){
    push();
    rotateX(180);
    rotateY(45);
    translate(0,40,0);
    scale(2.2);
    texture(bangsTexture);
    model(bangsModel);
    pop();
}
