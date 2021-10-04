let merzbau
function preload(){
  merzbau = loadImage('merzbau-hannover.jpg')
}
function setup(){
  //createCanvas(windowWidth,windowHeight)
		createCanvas(4921, 7360); //resize for 300dpi!
  background(120)
  //image(merzbau,0,0)
}
function draw(){
  //translate(width / 2, height / 2);
  //rotate(radians(random(360)))
  image(merzbau,random(-width/2,width/2),random(-height/2,height/2),random(width/8,width*2),random(width/8,width*2))
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

