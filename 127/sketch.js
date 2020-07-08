let hand, timer

function setup(){
  createCanvas(windowWidth,windowHeight)
  imageMode(CENTER)
  hand = createImg('assets/hand.png','wacky hand')
  //hand.style('position','relative')
  noCursor()
  timer = millis()+1000
}
function draw(){
  hand.position(winMouseX-50,winMouseY-20,'fixed')
  console.log(winMouseY)
  if(millis()>timer){
    clear()
    timer+=5000
  }
}
function mouseMoved(){
  stroke(196,147,158)
  strokeWeight(50)

  clear()
  line(100,0,300,mouseY/3)
  line(300,winMouseY/3,350,2*winMouseY/3)
  if (winMouseX > 900){
    line(350,2*winMouseY/3,850,4*winMouseY/5)
    line(850,4*winMouseY/5,winMouseX,winMouseY)
  } else {
    line(350,2*winMouseY/3,winMouseX,winMouseY)
    line(winMouseX,winMouseY,pwinMouseX,pwinMouseY)
  }
}
