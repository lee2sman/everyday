//some growls
//composed at godsbanen in aarhus denmark started friday aug 16 13:26-31
//same software different sounds as 69

let sounds = [], sndAmt = 7, loaded = false, f

function preload(){
  for (let i = 0; i < sndAmt; i++){
    sounds[i] = loadSound('assets/'+i+'.mp3')
  }
 f = loadFont('assets/cloudy.ttf')
}

function setup(){
  frameRate(3)
  textFont(f)
}

function draw(){
 if (loaded){
  background(255)
  fill(0)
  text('some growls',10,10)
  let rndSnd = int(random(sndAmt))
  if (random() < 0.3){
    sounds[rndSnd].play()
    let snd = createP(rndSnd)
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
