let totalDrawings = 7;
let hidden, looping = true, imgs = []

function preload(){
  for (let i = 0; i < totalDrawings; i++){
    imgs[i] = loadImage('assets/'+i+'.jpg');
  }
}

function setup(){
  createCanvas(windowWidth,windowHeight,WEBGL)
  hidden = createGraphics(windowWidth,windowHeight);
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
    let which = int(random(totalDrawings))
    hidden.image(imgs[which],0,0)
  }

function mousePressed(){
  if (looping){
    noLoop() 
  } else {
    loop()
  }
  looping=!looping;
}
