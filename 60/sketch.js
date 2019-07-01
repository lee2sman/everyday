//code 60
//talking heads
//coded on the plane from taipei to nagoya then finished on tokyo to nyc june 30
// to jul1 post 2nd dinner / brkfast (so-so)
//

let heads = [], f, started = false, timer, faceReady = [],
eyeballReady = false, eyeX = 0, eyeY = 180, noseX = 0, noseY = 0, faceImg = [],
 eyeballImg, bangsModel, bangsReady = false, bangsTexture, coneModel,
 noseTexture, coneReady = false, mic, micLevel;

function setup(){
  createCanvas(windowWidth,windowHeight,WEBGL);

  faceReady[0] = false;
  faceReady[1] = false;

	f = loadFont('assets/DS-TERM.TTF',startScreen);
  faceImg[0] = loadImage('assets/background1.jpg',function(){faceReady[0] = true;});
  faceImg[1] = loadImage('assets/background2.jpg',function(){faceReady[1] = true;});
  eyeballImg = loadImage('assets/eyeball.jpg',function(){eyeballReady = true;});
  coneModel = loadModel('assets/traffic_cone.obj',true,function(){
    noseTexture = loadImage('assets/background5.jpg',function(){
      coneReady = true;
      startButton();
    })
  });
  bangsModel = loadModel('assets/bangs.obj', true, function(){
    bangsTexture = loadImage('assets/background6.jpg',function(){
      bangsReady = true;});
    })
  mic = new p5.AudioIn()

  angleMode(DEGREES);

//instantiate heads here - x, y, headYRotation, scale, skinTextureNum
  heads[0] = new TalkingHead(-width/4,0,35,1,0);
  heads[1] = new TalkingHead(width/4,0,-35,1,1);

}

function draw(){
  if (started){
    background(0);

    micLevel = mic.getLevel();

    heads[0].headController();
    heads[1].headController();
    }
}

function startScreen(){
  background(255);
  textFont(f);
  textAlign(LEFT, TOP);
  text("LOADING",-400,-300+10);
};

function startButton(){
    fill(120);
    text("LOADINGED",-400,-300+10);
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
  if (!started){
    //song.play();

    mic.start();
    started = true;
  }
}


class TalkingHead {
  constructor(x, y, rot, headScale, skinTextureNum){
     this.x = x; //center is 0
     this.y = y; //center is 0
     this.rot = rot;
     this.headScale = headScale;
     this.skinTextureNum = skinTextureNum;
     this.eyeX = 0, this.eyeY = 180, this.noseX = 0, this.noseY = 0;
  }

  headController(){
    push();
    translate(this.x,this.y,0);
    rotateY(this.rot);
    scale(this.headScale);
    this.head();
    this.eyeballs();
    this.nose();
    this.lips();
    this.hair();
    pop();
  }

  head(){
    fill(250, 150, 130);
    if (faceReady[this.skinTextureNum]){
      texture(faceImg[this.skinTextureNum]);
    }
    push();
    rotateY(frameCount/30);
    ellipsoid(200,266,200);
    pop();
}

  eyeballs(){
    if (eyeballReady){
      texture(eyeballImg);
    }
    //left eye
    push();
    translate(-50,-40,230);
    rotateY(constrain(this.eyeX,160,200));
    rotateX(constrain(this.eyeY,-20,20));
    sphere(23);
    pop();
    //right eye
    push();
    translate(50,-40,230);
    rotateY(constrain(this.eyeX,160,200));
    rotateX(constrain(this.eyeY,-20,20));
    sphere(23);
    pop();

    if (random()<0.01){
      this.eyeX=random(-5,5);
      this.eyeY=random(-10,10);
    }
  }

  nose(){
    push();
    rotateY(constrain(this.noseX,-15,15));
    push();
    rotateX(constrain(this.noseY,-10,10));
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

    if (random()<0.001){
      this.noseX = random(-3,3);
      this.noseY = random(-3,3);
    }
  }

  lips(){
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

  hair(){
    push();
    rotateX(180);
    rotateY(45);
    translate(0,40,0);
    scale(2.2);
    texture(bangsTexture);
    model(bangsModel);
    pop();
  }

}
