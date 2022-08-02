let cube = 400;
let result;

function preload() {
  influences = loadStrings('peoplestuff.txt');
}

function setup(){
  createCanvas(cube,cube);
  noStroke()
  background(0);
  frameRate(0.25)
  textSize(cube/4);
}

function draw(){
  fill(random(255),random(255),random(255))

  if(random()<0.07){
      fill(random(25),random(25),random(25))
  }
  rect(0,0,cube,cube);

    for (let x = 0; x < width; x+=cube/2){
      for (let y = 0; y < height; y+=cube/2){

	if (random()<0.15){

	  //randomly add new mini color square
             fill(random(255),random(255),random(255))
          //occasionally it should be blacker
	  if (random()<0.025){
	    fill(random(25),random(25),random(25));
	  }
	    rect(x,y,cube/2,cube/2);
	}

	  //random add letter
	    if (random()<0.5){
	      fill(random(255),random(255),random(255))
	      let abc = 'abcdefghijklmnopqrstuvwxyz'
	      text(abc[ceil(random()*abc.length)],x+cube,y-cube);
	    }

	  //random add circle
	    if (random()<0.12){
	        fill(random(255),random(255),random(255));
                ellipse(x+cube/4,y+cube/4,cube/2);
	    }

      }

    }

  removeElements()
  createP(random(influences))

}

