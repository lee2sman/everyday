//some silences
//composed at godsbanen in aarhus denmark started thu aug 15 23:47

let sounds = [], sndAmt = 9, loaded = false

function preload(){
  for (let i = 0; i < sndAmt; i++){
    sounds[i] = loadSound('assets/'+i+'.mp3')
  }
}

function setup(){
  frameRate(3)
}

function draw(){
 if (loaded){
  background(255)
  fill(0)
  text('some silences',10,10)
  let rndSnd = int(random(sndAmt))
  if (random() < 0.3){
    sounds[rndSnd].play()
    let snd = createP(rndSnd)
    snd.style('font-family','cloudy')
    snd.position(random(windowWidth),random(windowHeight))
  }
 } else {
   background(0)
   fill(255)
   text('clk to strt snds',10,10)
 }
}

function mousePressed(){
  loaded = true
}
