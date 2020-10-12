let totalDrawings = 21; //um but it's 0 to 20 whatever
let hidden, looping = true, imgs = []

function preload(){
  for (let i = 0; i < totalDrawings; i++){
    imgs[i] = loadImage('assets/'+i+'.png');
  }
}

function setup(){
  createCanvas(windowWidth,windowHeight,WEBGL)
  hidden = createGraphics(windowWidth,windowHeight);
  imageMode(CENTER)
background(0)
  manyShape()
}

function draw(){
  manyShape()
  if (millis()> 1200){
    frameRate(1)
  }
}
function createShape(){
    let which = int(random(totalDrawings))
    hidden.image(imgs[which],0,0)
  }

function mousePressed(){
if (isLooping()) {
  noLoop()
}
}

function manyShape(){
  //many shape
  for (let i = 0; i < 10; i++){
  createShape()

  noStroke()
  texture(hidden)
  push()
  translate(random(-width/2,width/2),random(-height/2,height/2))
  quad(random(width/2),random(height/2),random(width/2),random(height/2,height),random(width/2,width),random(height/2,height),random(width/2,width),random(height/2))
  pop()
}
}
