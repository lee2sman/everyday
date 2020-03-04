let strategies, strategy, f

function preload(){
  strategies = loadStrings('oblique-strategies.txt')
  f = loadFont('Monoround.otf')
}

function setup() {
  createCanvas(windowWidth, windowHeight)
  textAlign(CENTER, CENTER)
  textFont(f)

  if (width > 400){
    textSize(16)
  } else {
    textSize(12)
  }
  
  strategy = int(random(strategies.length))
}

function draw() {
  background(255)
  text(strategies[strategy],width/2,height/2)
}

function windowResized(){
  if (width > 400){
    textSize(16)
  } else {
    textSize(12)
  }
}

function mousePressed(){
    strategy = int(random(strategies.length))
}
