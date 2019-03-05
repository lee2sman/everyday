//lazygal
//
let quiltW, quiltH, step, gutterX, gutterY;

function setup(){
  createCanvas(windowWidth,windowHeight);

  reset();

  drawQuilt();
  setInterval(drawQuilt,5000);
}

function reset(){
  quiltW = width*2/3;
  quiltH = height*2/3;
  step = quiltW/12;

  gutterX = (width - quiltW)/2;
  gutterY = (height - quiltH)/2;

  background(5);
  noStroke();

  translate(gutterX,gutterY);

} 


function drawQuilt(){

  for (let x=0; x < quiltW; x+=step){
    for (let y=0; y < quiltH; y+=step){
      
      fill(random(width),random(255),random(255));
      rect(x,y,step,step);
  
      let pretest = random();
      if ((pretest > 0.8) && (y>gutterY) && (x>gutterX)){
        fill(random(height),random(255),random(255));
        rect(x-step,y-step,2*step,2*step); 
      }

      let firstflip = random();
      if (firstflip > 0.8){
        fill(random(width),random(255),random(255));
	triangle(x,y,x+step,y,x+step,y+step);
      }

    }
  }
}

function mouseMoved(){
  background(0);
  drawQuilt();
}

function mousePressed(){
  for (let x=0; x < quiltW; x+=step){
    for (let y=0; y < quiltH; y+=step){
      fill(20,random(205,255));
      rect(x,y,step,step);
   }
  }
}


function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  reset();
  background(0);
  drawQuilt();
}
