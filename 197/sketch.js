let merzbau = []
let totalImg = 12
function preload(){
  for (let i = 0; i < totalImg; i++){
    merzbau[i] = loadImage('../195/assets/'+i+'.png')
  }
}
function setup(){
  //createCanvas(windowWidth,windowHeight)
		createCanvas(4921, 7360); //resize for 300dpi!
  background(0)
}
function draw(){
  for (let i = 0; i < 15; i++){
    push()
    translate(random(-width/2,width/2),random(-height/2,height/2))
    rotate(radians(360))

    image(random(merzbau),0,random(width/8,width*2),random(width/8,width*2))
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

