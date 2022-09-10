let redblue, blueyellow,wallSize;
function preload(){
  redblue=loadImage('redblue.jpg')
  blueyellow=loadImage('blueyellow.jpg')
}
function setup(){
  createCanvas(windowWidth,windowHeight)
  makeGrid()
}
function draw(){

}
function mousePressed(){
  makeGrid()
}
function makeGrid(){
  background(0);
  for (let i=0;i<height;i+=400){
    for (let j=0;j<width;j+=400){
      if (random()<0.5){
        image(redblue,j,i);
      } else {
        image(blueyellow,j,i);
      }
    }
  }
}
