//accidentally sliced my thumb open a few min ago, typing half handed
let merzbau = []
let totalImg = 15
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
  screenprint()
}
function screenprint(){
  for (let i = 0; i < 2; i++){
    push()
    let w = random(width/3,2*width)
    translate(random(width),random(height))
    rotate(radians(random(-5,5)))
    image(random(merzbau),0,0,w,w)
    pop()
    filter(THRESHOLD)
  }

}
function mousePressed(){
  screenprint();
}
function keyPressed(){
  if (key == 's'){
    save()
  }
}

