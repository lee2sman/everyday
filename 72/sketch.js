//composed on the couch at new place, first day, postponing finishing work!
//using brian eno music for airports samples
//rest of code similar to 71
let sounds = [], sndAmt = 15, loaded = false, imgs = [], picAmt = 4

function preload(){
  for (let i = 0; i < sndAmt; i++){
    sounds[i] = loadSound('assets/'+i+'.mp3')
  }
  for (let i = 0; i < picAmt; i++){
    imgs[i] = loadImage('assets/'+i+'.png')
  }
}

function setup(){
  createCanvas(windowWidth, windowHeight)
  frameRate(3)
  noStroke()
}

function draw(){
 if (loaded){

  fill(0)
  let rndSnd = int(random(sndAmt))
  if (random() < 0.05){
    sounds[rndSnd].play()
    print('start '+rndSnd)
    createBlock()
  }
 } else {
   background(255)
   fill(100)
   textSize(14)
   text('click to start flying',width/2,height/2)
 }
}

function mousePressed(){
 if (!(loaded)){
  loaded = true
  background(0)
  pic = round(random(picAmt))
  image(imgs[pic],0,0,width,height)
  anotherPic = round(random(picAmt))
  image(imgs[anotherPic],imgs[pic].width,0)
 }
}

function createBlock(){

  let pic = round(random(picAmt))
  let x = random(width)-imgs[pic].width
  let y = random(height)-imgs[pic].height

  fill(random(255),random(255),random(255),random(255))
  rect(x,y,imgs[pic].width,imgs[pic].height)

  image(imgs[pic],x,y)
  
}
