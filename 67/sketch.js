//speculative baldness simulator
let face, hair = [], hairs = 10, whichNose, whichHair, hairSize, f

function preload(){
  face = loadImage('assets/baldo.png')
  for (let i = 0; i < hairs; i++){
    hair[i] = loadImage('assets/hair'+i+'.png')
  }
 f = loadFont('assets/dingy_bird.ttf')
}

function setup(){
  createCanvas(windowWidth,windowHeight,WEBGL)
  textFont(f)

  whichNose = int(random(hairs))
  whichHair = int(random(hairs))
  hairSize = random(1,1.4)
}

function draw(){
  background(0)
  textSize(36)
  fill(100)
  text('speculative baldness sim',0,height/3)

  drawFace()
  drawHair()
  nose()
  lips()
}

function drawFace(){
  texture(face)
  ellipsoid(150,220)
}

function drawHair(){

  texture(hair[whichHair])
  push()
  scale(hairSize)
  rotateY(frameCount/100)
  translate(0,-height/5,0)
  ellipsoid(125,80)
  pop()
}

function lips(){
    fill(255,0,0);
    //top lip
    push();
    translate(0,0,80);
    rotateX(180)
    torus(100, 8);
    pop();

    //bottom lip
    push();
    translate(0,50,0);
    rotateX(430)
    //fill(0,0,200);
    //torus(150, 8);
    pop();
}

function nose(){
  texture(hair[whichNose])
  push()
  translate(0,0,200)
  sphere(30)
  pop()
}
