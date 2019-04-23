let soundtrack, amplitude, myFont, lourded = false, lourdX = 50;
let faceW, faceH, faceD, faceX=0, faceY=0;

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);

  angleMode(DEGREES);

  myFont = loadFont('assets/zxx.otf',(function(){
     strokeWeight(8);
     line(-width/2,-height/2,width/2,height/2);
     line(-width/2,height/2,width/2,-height/2);

     textAlign(CENTER, CENTER);
     fill(0);
     textFont(myFont);
     textSize(96);
      text("lobing",0,0);
  }));
   soundtrack = loadSound('assets/paradise.mp3', (function(){
    console.log('audio loaded');
    soundtrack.play();

    

  }));

    faceImg = loadImage('assets/chum.jpg',(function(){lourded = true;
    console.log('faceImg loaded');
    }));

  amplitude = new p5.Amplitude();
}

function draw() {
  if (!lourded){
    text('.',lourdX,0);
    lourdX+=10
  } else {
	    

    level = amplitude.getLevel();

    let grayness = map(level,0,0.5,0,255);
    let rot = map(level,0,0.5,360,0);
    size = random(-200,200);
    faceW = map(level,0,0.5,300,450);
    faceH = map(level,0,0.5,200,400);
	  //print(size);
    let whichFace = floor(map(level,0,0.5,0,6));
	  if (whichFace>6){whichFace = 6};
	  faceX = random(-200,200);
	  faceY = random(-200,200);

	  if (random()<0.01){
background(grayness);
	  }
    rotateY(rot);

    fill(200,0,0);
    text('leebot',0,0); 
	  text(random(),random(-width/2,width/2),random(-height/2,height/2));

	  fill(0);

	   box(faceW,rot,faceH);
  }
}

function windowResized(){
  resizeCanvas(windowWidth,windowHeight);
}
