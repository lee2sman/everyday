let merzbau = []
let totalImg = 38
function preload(){
  for (let i = 0; i < totalImg; i++){
    merzbau[i] = loadImage('./assets/'+i+'.png')
  }
}
function setup(){
  //createCanvas(windowWidth,windowHeight)
		createCanvas(4921, 7360); //resize for 300dpi!
  background(255)
}
function draw(){
  for (let i = 0; i < 15; i++){
    image(random(merzbau),random(width),random(height),random(width/8,width*2),random(width/8,width*2))
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

