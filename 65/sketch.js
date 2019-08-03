function setup(){
  createCanvas(windowWidth,windowHeight)
  rectMode(CORNERS)
  textFont('Monaco')
  textSize(18)
  background(0)
}

function mousePressed(){
  x = mouseX
  y = mouseY
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
	fill(200,100,80)
	//draw to screen
for (let i=y;i<y+h;i+=txtH){
    if (w < 0){
      text(txt,mouseX,i)
    } else {
      text(txt,x,i)
    }
  }

}

