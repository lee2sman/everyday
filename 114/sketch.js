let spin
let spinnerW

function preload(){
  spin = loadImage('spinning.gif')
}

function setup(){
  createCanvas(windowWidth,windowHeight)

  spinnerW = width/10
}

function draw(){
    image(spin,width/2-spinnerW/2,height/2-spinnerW/2,spinnerW,spinnerW)
}
