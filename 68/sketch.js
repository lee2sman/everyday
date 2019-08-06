//big up you
let face, hair = [], hairs = 10, whichNose, whichHair, hairSize, f
let amplitude, level, song
let x = 0,y = 0,z = 0
let actor = ['we','he','she','they','i','you']
let action = ['transgressed','rejected','critiqued','forgot','realized','rewarded','remembered','rethought','considered','reconsidered','understood','speculated','meditated on','laughed at','tried','sought','comforted','removed','welcomed']
let acted = ['them','her','him','us','you']
let loaded = false

function preload(){
  face = loadImage('assets/baldo.png')
  for (let i = 0; i < hairs; i++){
    hair[i] = loadImage('assets/hair'+i+'.png')
  }
 f = loadFont('assets/dingy_bird.ttf')
	song = loadSound('assets/less_human.mp3')
}

function setup(){
  createCanvas(windowWidth,windowHeight,WEBGL)
  textFont(f)

  whichNose = int(random(hairs))
  whichHair = int(random(hairs))
  hairSize = random(1,1.4)
  amplitude = new p5.Amplitude()
}

function draw(){
	level = amplitude.getLevel()
  //background(0)
	
	if (loaded){
  textSize(36)
  fill(100)
translate(x,y,z)
  drawFace()
  drawHair()
  nose()
  lips()

	x+=random(-10,10)
	y+=random(-10,10)
	z+=random(-10,10)
	
	if (random()<0.01){x=0;y=0;z=0}
	if (random()<0.01){background(255,0,0)}

	fill(200)
	text(actor[int(random(actor.length))]+' '+action[int(random(action.length))]+' '+acted[int(random(acted.length))],x,y)
  } else {
    background(255)
    fill(50,100,150)
    textSize(100)
    text('clicky',0,0)
  }
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
  //translate(0,-height/5,0)
  translate(0,map(mouseX,0,width,-height/2,0),0)
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

function mousePressed(){
  if (!song.isPlaying()){
	  song.play();
	  loaded = true
	  background(255,0,0)
  }
}
