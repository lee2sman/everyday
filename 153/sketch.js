//holds pip images
let pips = []

//array of dice
let dice = []

let totalDice = 1

looping = false

function preload(){
  for (let i = 1; i <= 6; i++){
    pips[i] = loadImage('assets/pips/'+i+'.jpg')
  }

}

function setup(){
  createCanvas(windowWidth, windowHeight, WEBGL)

//  debugMode()
imageMode(CENTER)

  for (let i = 0; i < totalDice; i++){
    dice[i] = new Dice()
  }
}
function draw(){
  background(255)

  orbitControl()

  for (let i = 0; i < dice.length; i++){
    push()
    rotateY(millis()/80)
    rotateX(millis()/30)
    dice[i].display()
    pop()
  }
}
function mousePressed(){
  if (!(looping)) {
    noLoop()
  } else {
    loop()
  }

  looping = !looping
}

class Dice{
  constructor(x = 0, y = 0, z = 0){
    this.x = x;
    this.y = y;
    this.z = z;
  }

  display(){
//1
    push()
      translate(this.x,this.y,this.z+50)
      image(pips[1],0,0,100,100)
    pop()
//2
    push()
      translate(this.x,this.y-50,this.z)
      rotateX(-PI/2)
      image(pips[2],0,0,100,100)
    pop()
//3
    push()
      translate(this.x-50,this.y,this.z)
      rotateY(PI/2)
      image(pips[3],0,0,100,100)
    pop()
//4
    push()
      translate(this.x+50,this.y,this.z)
      rotateY(PI/2)
      image(pips[4],0,0,100,100)
    pop()
//5
    push()
      translate(this.x,this.y+50,this.z)
      rotateX(-PI/2)
      image(pips[5],0,0,100,100)
    pop()
//6
    push()
      translate(this.x,this.y,this.z-50)
      image(pips[6],0,0,100,100)
    pop()
  }

}

