let merzbau = []
let totalImg = 12
function preload(){
  for (let i = 0; i < totalImg; i++){
    merzbau[i] = loadImage('assets/'+i+'.png')
  }
}
function setup(){
  //createCanvas(windowWidth,windowHeight)
		//createCanvas(4921, 7360); //resize for 300dpi!
  createCanvas(1500,900) // 5 in wide x 3 in high, 300dpi
  imageMode(CENTER)
  background(255)
  screenprint()
}
function screenprint(){
  for (let i = 0; i < 4; i++){
    push()
    let w = random(width/3,2*width)
    translate(random(width),random(height))
    scale(random(1,5))
    rotate(radians(random(-25,25)))
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

