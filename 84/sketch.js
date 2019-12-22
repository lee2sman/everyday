let sheets = []
let sheetW, sheetH

function preload(){
  sheets[0] = loadImage('sheets/art.jpg')
  sheets[1] = loadImage('sheets/professional.jpg')
  sheets[2] = loadImage('sheets/publishing.jpg')
  sheets[3] = loadImage('sheets/life.jpg')
  sheets[4] = loadImage('sheets/teaching.jpg')

}

function setup() {
  createCanvas(windowWidth,windowHeight)
}

function draw(){
  
  if (width > height){
    sheetW = width/5
    sheetH = sheetW * 1.5
  } else {
    sheetH = height/5
    sheetW = sheetH / 1.5
  }
  
  for (let i = 0; i < sheets.length; i++){
    push()

    if (width>height){
      translate(sheetW*i,height/3)
    } else {
      translate(width/2,sheetH*i)
    }

    image(sheets[i],0,0,sheetW,sheetH)
    pop()
  }
}

function windowResized(){
  resizeCanvas(windowWidth, windowHeight)
}
