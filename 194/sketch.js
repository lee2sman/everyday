let merzbau = []
function preload(){
  for (let i = 0; i < 28; i++){
    merzbau[i] = loadImage('assets/'+i+'.png')
  }
}
function setup(){
  //createCanvas(windowWidth,windowHeight)
		createCanvas(4921, 7360); //resize for 300dpi!
  background(0)
}
function draw(){
  for (let i = 0; i < 8; i++){
    image(random(merzbau),random(-width/2,width/2),random(-height/2,height/2),random(width/8,width*2),random(width/8,width*2))
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

