//lee tusman 2023 cc4.0
let block;
const coolors = ["#606c38","#283618","#fefae0","#dda15e","#bc6c25"]
let coolor = 0;
let direction = "vertical";

function setup() {
  createCanvas(400, 400);
  block=width/5;
  noStroke()

  background(220);
  
  //pallette
  for (let i=0;i<5;i++){
    fill(coolors[i])
    rect(i*block,height-block,block,block)
  }
  
  strokeWeight(10)
  fill("#faedcd")
  rect(20,20,width-40,260)
 //direction
  fill(0)
  stroke(0)
  strokeWeight(1)
  noFill()
  rect(0,0,20,20)
  rect(0,20,20,20)
  textSize(16)
  text("↕",3,16)
  text("↔",3,36)
  noStroke()
}

function mousePressed(){
  //color selector
  if(mouseY>height-block){
    if (mouseX<width)(coolor=4)
    if (mouseX<4*block)(coolor=3)
    if (mouseX<3*block)(coolor=2)
    if (mouseX<2*block)(coolor=1)
    if (mouseX<block)(coolor=0)

  }  
  if(mouseX<20&&mouseY<20){
    direction="vertical"
  }
  if (mouseX<20&&mouseY>20&&mouseY<40){
    direction="horizontal"
  }
  
  //weave
  if(mouseX>20&&mouseX<width-40&&mouseY>20&&mouseY<280){
    fill(coolors[coolor])
    if (direction=="horizontal"){
        rect(20,mouseY-5,width-40,10)
    } else {
        rect(mouseX-5,20,10,260)
    }
  
  }

}
