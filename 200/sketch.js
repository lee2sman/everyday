let merzbau = []
let totalImg = 38
function preload(){
  for (let i = 0; i < totalImg; i++){
    merzbau[i] = loadImage('../199/assets/'+i+'.png')
  }
}
function setup(){
  //createCanvas(windowWidth,windowHeight)
		createCanvas(4921, 7360); //resize for 300dpi!
  background(255)
}
function draw(){
  for (let i = 0; i < 45; i++){
    push()
    let w = random(width/8,width/3)
    translate(random(width),random(height))
    rotate(radians(random(-15,15)))
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

