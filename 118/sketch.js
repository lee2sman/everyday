let hidden, looping = true;

function setup(){
  createCanvas(windowWidth,windowHeight,WEBGL)
//  background(0)
  hidden = createGraphics(windowWidth,windowHeight);
  //colorMode(HSB)

 // frameRate(2)
}

function draw(){

  createShape()

  noStroke()
  texture(hidden)
  translate(random(-width,width),random(-height,height))
  quad(random(width/2),random(height/2),random(width/2),random(height/2,height),random(width/2,width),random(height/2,height),random(width/2,width),random(height/2))
  //sphere(random(100))
}

function createShape(){
  let x1 = random(width)
  let x2 = random(width)

  let sw = random(100)

  hidden.background(255)

  //hidden.stroke(random(255),random(255),random(255))
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
