let hidden, looping = true, imgs = [], totalImages = 6

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
    let which = int(random(3,totalImages))
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
  let _x = random(width/2)
  let _y = random(height/2)
  let _x2 = width/2+_x
  let _y2 = _y
  let _x4 = random(width/2)
  let _y4 = height/2+random(height/2)
  let _x3 = width/2+_x4
  let _y3 = _y4

  quad(_x,_y,_x2,_y2,_x3,_y3,_x4,_y4)

  quad(random(width/2),random(height/2),random(width/2),random(height/2,height),random(width/2,width),random(height/2,height),random(width/2,width),random(height/2))
  pop()
}
