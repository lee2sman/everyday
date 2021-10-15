let merzbau = []
let totalImg = 10
function preload(){
  for (let i = 0; i < totalImg; i++){
    merzbau[i] = loadImage('assets/'+i+'.png')
  }
}
function setup(){
  //createCanvas(windowWidth,windowHeight)
		createCanvas(4921, 7360); //resize for 300dpi!
  imageMode(CENTER)
  background(255)
}
function draw(){
  for (let i = 0; i < 5; i++){
    push()
    let w = random(width/3,2*width)
    translate(random(width),random(height))
    rotate(radians(random(-5,5)))
    image(random(merzbau),0,0,w,w)
    pop()
  }
  filter(THRESHOLD)
  noLoop()
}
function mousePressed(){
  redraw()
}
function keyPressed(){
  if (key == 's'){
    save()
  }
}

