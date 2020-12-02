let headings = 
[

  "What is code sketching (to me)?",
  "Everyday code sketching",
  "Tools",
  "Platforms",
  "Daily Practice",
  "Community",
  "Variations",
  "Problems"
]
let slideImgs = []
let slideIndex = 0
let font

function preload(){
  for (let i=0; i <headings.length;i++){
    slideImgs[i]=loadImage('assets/'+i+'.png')
  }
  font = loadFont('assets/primer.ttf')
}

function setup(){
  createCanvas(windowWidth,windowHeight)
  rectMode(CENTER)
  textFont(font)
  textAlign(CENTER,CENTER)
  textSize(48)
  noStroke()
}
function draw(){
  slide(slideIndex)
  buttons()
}
function mousePressed(){
  if (mouseX<100&&mouseY>height-100){       //click left
     slideIndex--     
  }
  if (mouseX>width-100&&mouseY>height-100){ //click right
     slideIndex++
  }

  slideIndex=constrain(slideIndex,0,headings.length-1)
}
function keyPressed() {
  if (keyCode === LEFT_ARROW) {
    slideIndex--
  } else if (keyCode === RIGHT_ARROW) {
    slideIndex++
  }
  slideIndex=constrain(slideIndex,0,headings.length-1)
}
function windowResized(){
  resizeCanvas(windowWidth, windowHeight)
}

function buttons(){
  noStroke()
  fill(255)

  //highlight on hover
  if (mouseX<100&&mouseY>height-100){
    fill(180)
  } else {
    fill(180,120)
  }
     rect(50,height-50,100,100)
  if (mouseX>width-100&&mouseY>height-100){
    fill(180)
  } else {
    fill(180,120)
  }
  rect(width-50,height-50,100,100)

  //arrows
  fill(0)
  text("<",50,height-50)
  text(">",width-50,height-50)
}

function slide(slideIndex){
  let msg = headings[slideIndex]
  //background img
  //
  background(255)
  image(slideImgs[slideIndex],0,0,width,height)

  //heading
  if (msg.length>48){
    textSize(36)
  } else {
    textSize(72)
  }

  //textBox
  let r = map(slideIndex,0,headings.length,0,255)
  let g = map(slideIndex,0,headings.length,255,0)
  let b = map(slideIndex,0,headings.length,150,250)
  fill(r,g,b)
//  rect(width/2,height/8,width/2,map(msg.length,0,25,height/6,height/4)) //TOP position
  rect(width/2,height/2,map(msg.length,0,25,width/4,width/2),map(msg.length,0,25,height/6,height/4)) //TOP position
  //text
  fill(0)
  //text(msg,width/2,height/8,width/2,height/2) //TOP POSITION
  text(msg,width/2,height/2,width/2,height/2) //TOP POSITION
}

