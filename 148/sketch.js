let hidden, looping = true, imgs = [], totalImages = 4

function preload(){
  for (let i = 0; i < totalImages; i++){
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
  if (millis()> 2000){
    //frameRate(5)
    noLoop()
  }
}
function createShape(){
    let which = int(random(totalImages))
    hidden.image(imgs[which],0,0)
  }

function mousePressed(){
  manyShape()
}

function manyShape(){
  //many shape
  createShape()

  noStroke()
  texture(hidden)
  push()
  translate(random(-width,width/2),random(-height,height/2))
  quad(random(width/2),random(height/2),random(width/2),random(height/2,height),random(width/2,width),random(height/2,height),random(width/2,width),random(height/2))
  pop()
}