let colorPicker
let penSizeBtn, sw = 2

function setup() {
  createCanvas(windowWidth,windowHeight)
  colorPicker = createColorPicker('#228CED')
  colorPicker.size(70,30)
  colorPicker.position(0,0)

  penSizeBtn= createButton("")
  penSizeBtn.size(70,30).style('background-image','url("assets/pensize_small.jpg")').style('background-repeat','no-repeat').style('border-radius','3px');
  penSizeBtn.mousePressed(changeSize)
  penSizeBtn.position(0,40)


  background(255)
}

function draw() {
  noStroke()
  fill(255)
  rect(0,0,70,70)

  strokeWeight(sw)
  stroke(colorPicker.color())
  if (mouseIsPressed){
    line(mouseX,mouseY,pmouseX,pmouseY)
  }
}

function changeSize(){
  if (sw == 2){
    sw = 5
    penSizeBtn.style('background-image','url("assets/pensize_medium.jpg")')
  } else if (sw == 5){
    sw = 10
    penSizeBtn.style('background-image','url("assets/pensize_large.jpg")')
  } else {
    sw = 2
    penSizeBtn.style('background-image','url("assets/pensize_small.jpg")')
  }
}
