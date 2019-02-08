let totalParts = 8;
let parts = [];

function preload(){
  for (let i=0; i <= totalParts; i++){
    parts[i] = loadImage('assets/'+i+'.png');
  }
}

function setup(){
  createCanvas(windowWidth,windowHeight);

 background(5);
  noStroke();
 
  for (let i = 0; i<=round(random(2*totalParts)) ; i++){
    push();
    translate(random(width),random(height));
    //rotate(degrees(random(180));

    scale(random(3));
    image(parts[round(random(totalParts))],0,0);
    pop();
  }


    setInterval(mouseMoved,1000);
}

function mouseMoved(){

  background(5);

  for (let i = 0; i<=round(random(2*totalParts)) ; i++){
    push();
    translate(random(width),random(height));
    rotate(degrees(random(180)));

    scale(random(3));
    image(parts[round(random(totalParts))],0,0);
    pop();
  }


}


