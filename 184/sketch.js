let sw = 2
let strokes = []
let bgON = true 
let bgToggle, colorPicker, penSizeBtn, undoBtn

function setup() {
  createCanvas(windowWidth,windowHeight)

//background toggle
  bgToggle= createButton("")
  bgToggle.size(70,30).style('background-image','url("assets/img/bgON.jpg")').style('background-repeat','no-repeat').style('border-radius','3px');
  bgToggle.mousePressed(toggleBG)
  bgToggle.position(0,0)

  //color picker
  colorPicker = createColorPicker('#228CED')
  colorPicker.size(70,30)
  colorPicker.position(0,40)

  //pen width
  penSizeBtn= createButton("")
  penSizeBtn.size(70,30).style('background-image','url("assets/img/pensize_small.jpg")').style('background-repeat','no-repeat').style('border-radius','3px');
  penSizeBtn.mousePressed(changeSize)
  penSizeBtn.position(0,80)
}

function draw() {

  clear()


  if (bgON){
    background(255)

    noStroke()
    fill(255)
    rect(0,0,70,120)
  } 

  for (segment in strokes){
    strokeWeight(strokes[segment].sw)
    stroke(strokes[segment].c)
    line(strokes[segment].x1,strokes[segment].y1,strokes[segment].x2,strokes[segment].y2)
  }

      if (mouseIsPressed){ 

	strokes.push(
	  {
	    "x1":mouseX, 
	    "y1":mouseY,
	    "x2":pmouseX,
	    "y2":pmouseY,
	    "sw":sw,
	    "c": colorPicker.color()
	  }
	)


  }
}

function changeSize(){
  if (sw == 2){
    sw = 5
    penSizeBtn.style('background-image','url("assets/img/pensize_medium.jpg")')
  } else if (sw == 5){
    sw = 10
    penSizeBtn.style('background-image','url("assets/img/pensize_large.jpg")')
  } else {
    sw = 2
    penSizeBtn.style('background-image','url("assets/img/pensize_small.jpg")')
  }
}

function toggleBG(){
  if (bgON){ //toggle button images
    bgToggle.style('background-image','url("assets/img/bgOFF.jpg")')
    select('canvas').style('background-color','lightgrey');

  } else {
    bgToggle.style('background-image','url("assets/img/bgON.jpg")')
  }

    bgON = !bgON //toggle background ON/OFF 
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

