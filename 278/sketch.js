let maxHair = 8
let maxSetOfEyes = 4
let maxFace = 3
let eyes = []
let hair = []
let face = []
let whichFace, whichHair, whichEyes

function preload(){

  for (let i=0;i<=maxSetOfEyes;i++){
    eyes[i] = loadImage("eyes" + i + ".png")
  }
  for (let i=0;i<=maxHair;i++){
    hair[i] = loadImage("hair"+i+".png");
  }
  for (let i=0;i<=maxFace;i++){
    face[i] = loadImage("face"+i+".png");
  }

}
function setup() {
  createCanvas(400, 400);


  whichFace = random(face)
   whichHair = random(hair)
   whichEyes = random(eyes)
}

function draw() {
  background(220);

  image(whichFace,0,0,60,120)
  image(whichHair,0,0,60,40)
  image(whichEyes,3,40)
}
