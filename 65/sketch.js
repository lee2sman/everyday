function setup(){
  createCanvas(windowWidth,windowHeight)
  rectMode(CORNERS)
  textFont('Monaco')
  background(0)
  textSize(18)
	fill(200,100,80)
  push()
  translate(100,100)
  angleMode(DEGREES)
  rotate(random(360))
  text('draw a door',0,0)
  pop()
}

function mousePressed(){
  x = mouseX
  y = mouseY
  fill(random(255),random(255),random(255),random(255))
}


function mouseReleased(){
  if ((pmouseX > 50)&&(mouseX > 50)) drawSquare()
}

function drawSquare(){
  w = mouseX - x
  h = mouseY - y
  txtW = int(w / 12)
  txtH = int(h / 12)
	print(txtH)
  let txt='0'
  for (let i = 0; i < abs(txtW); i++){
    txt = txt + '0'
  }
	//draw to screen
for (let i=y;i<y+h;i+=txtH){
    if (w < 0){
      text(txt,mouseX,i)
    } else {
      text(txt,x,i)
    }
  }

}
