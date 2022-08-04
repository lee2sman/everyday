let cube;
let snds = [];
let playSounds = false;
function preload(){
  for (let i = 1;i<7;i++){
   snds[i]=loadSound('./amelia'+i+'.mp3');
  }

}
function setup(){
  createCanvas(windowWidth,windowHeight);
  noStroke()
  textSize(80)
  background(0);
  cube=width/2;
  textAlign(CENTER,CENTER);
  //textSize(48);
}
function draw(){
  fill(random(255),random(255),random(255),random(200,255))

  if(random()<0.07){
      fill(random(25),random(25),random(25),random(255))
  }
  rect(0,0,cube*4,cube*4);

    for (let x = 0; x < width; x+=cube/2){
      for (let y = 0; y < height; y+=cube/2){

	if (random()<0.15){

	  //randomly add new mini color square
             fill(random(255),random(255),random(255),random(255))
          //occasionally it should be blacker
	  if (random()<0.025){
	    fill(random(25),random(25),random(25),random(255));
	  }
	    rect(x,y,cube/2,cube/2);
	}

	  //random add letter
	    if (random()<0.05){
	      fill(random(255),random(255),random(255))
	      let abc = 'amelia'
	      text(abc[ceil(random()*abc.length)],x+cube/4,y-cube/4);
	    }

	  //random add circle
	    if (random()<0.12){
	        fill(random(255),random(255),random(255),random(255));
                ellipse(x+cube/4,y+cube/4,cube/2);
	    }

      }
    }


  fill(0);

  if (playSounds){
     snds[floor(random(1,7))].play();
  } else {
    fill(255)
      text('click to start',width/2,height/2);
  }

  frameRate(0.2)
}

function mousePressed(){
  background(0);
  playSounds = true;
  redraw();
}


