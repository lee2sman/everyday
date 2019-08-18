//buddha mondrian machine
//composed on a plane
//ultra mini variation on 70

let sounds = [], sndAmt = 4, loaded = false, f

function preload(){
  for (let i = 0; i < sndAmt; i++){
    sounds[i] = loadSound('assets/'+i+'.mp3')
  }
 f = loadFont('assets/cloudy.ttf')
}

function setup(){
  createCanvas(windowWidth, windowHeight)
  frameRate(3)
  textFont(f)
  noStroke()
}

function draw(){
 if (loaded){

  fill(0)
  let rndSnd = int(random(sndAmt))
  if (random() < 0.05){
    sounds[rndSnd].play()
    createRects()
  }
 } else {
   background(255)
   fill(5)
   text('clk to strt snds',width/2,height/2)
 }
}

function mousePressed(){
  loaded = true
  createRects()
}

function createRects(){
  //background(255)
//  for (let i = 0; i < 10; i++){
    //pick damn color, mostly black
    let c = random()
    if (c < 0.1){
      fill(255,255,0)
    } else if (c < 0.2){
      fill(255,0,0)
    } else if (c < 0.3){
      fill(0,0,255)
    } else if (c < 0.37){
      fill(255)
    } else {
      fill(0)
    }
	  //draw the rect
    rect(random(windowWidth),random(windowHeight),random(windowWidth)/2,random(windowHeight)/2)
 // }
}
