//using printwobbler to create the posters first
//maybe this should be added back into printwobbler
let totalPosters = 20
let posters = []
let posterW,posterH 

function preload(){
  for (let i = 0; i <= totalPosters; i++){
    posters[i] = loadImage('assets/poster'+i+'.jpg')
  }
}

function setup() {
  createCanvas(windowWidth,windowHeight)
  render()
}

function draw(){}

function render(){
  background(255)
  if (width > height){
    posterW= width/5
    posterH = posterW* 1.5
  } else {
    posterH= height/5
    posterW = posterH/ 1.5
  }
  
  for (let y = 0; y < width; y+=posterW){
    for (let x = 0; x < width; x+=posterW){
      let pic = int(random(posters.length))
      image(posters[pic],x,y,posterW,posterW)
    }
  }
}

function windowResized(){
  resizeCanvas(windowWidth, windowHeight)
  render()
}

function mousePressed(){
  render()
}

function mouseMoved(){
  render()
}
