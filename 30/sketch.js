//lazygal
//
let quiltW, quiltH, step, gutterX, gutterY;

function setup(){
  createCanvas(windowWidth,windowHeight);

  quiltW = width*2/3;
  quiltH = height*2/3;
  step = quiltW/12;

  gutterX = (width - quiltW)/2;
  gutterY = (height - quiltH)/2;

  translate(gutterX,gutterY);

  background(5);
  noStroke();

  drawQuilt();
  setInterval(drawQuilt,5000);
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
