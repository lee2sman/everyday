let hidden, f, looping = true;

function preload(){
  f = loadFont('Jost-Medium.ttf')
}
function setup(){
  createCanvas(windowWidth,windowHeight,WEBGL)

  hidden = createGraphics(windowWidth,windowHeight);
  colorMode(HSL)

 // frameRate(2)
}

function draw(){

  createShape()

  noStroke()
  texture(hidden)
  translate(random(-width,width),random(-height,height))
  quad(random(width/2),random(height/2),random(width/2),random(height/2,height),random(width/2,width),random(height/2,height),random(width/2,width),random(height/2))
  //sphere(random(100))
  drawText()
}

function drawText(){
  fill(0)
  textFont(f,36)
  text('thank you for waiting',0,0)
}

function createShape(){
  let x1 = random(width)
  let x2 = random(width)

  let sw = random(100)

  if (random()<0.5){
    hidden.background(255)
  } else {
    hidden.background(0)
  }

  hidden.stroke(random(360),100,100)
  for (let i = 0; i < 8; i++){
     hidden.strokeWeight(sw)
     hidden.line(x1+(i*sw)+(i*20),0,x2+(i*sw)+(i*20),height)
  }
}

function mousePressed(){
  if (looping){
    noLoop() 
  } else {
    loop()
  }

  looping=!looping;
}
