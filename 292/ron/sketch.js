//tribute to AARON's 1972 BASIC code - version 0
let block;

function setup() {
  createCanvas(windowWidth, windowHeight);
  frameRate(0.5)
  frame()
}
function draw(){
  frame()
}
function frame(){
  background(255)

  block = width/random(2,8)
 
  for (let y=0;y<height;y+=block){
    for (let x=0;x<width;x+=block){
      let x1 = x+random(block)
      let y1 = y+random(block)
      let x2 = x + random(block)
      let y2 = y + random(block)
      let x3 = x+random(block)
      let y3 = y+random(block)
      strokeWeight(random(1,4))
      stroke(random(255),random(255),random(255))
      if (random()){
        line(x1,y1,x2,y2)  
      }
      if (random()){
      }
            strokeWeight(random(1,4))

      if (random()){
        line(x2,y2,x3,y3)
      }
    }
  } 
}
