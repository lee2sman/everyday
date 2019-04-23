let soundtrack, amplitude, myFont, lourded = false, lourdX = 50, faceImg;
let faces = [];
let faceW, faceH, faceD, faceX=0, faceY=0;

function preload(){
  for (let i = 0; i<12; i++){
    faces[i] = loadImage('assets/'+i+'.jpg');
  }
  
}

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
      text("bloading",0,0);
  }));
   soundtrack = loadSound('assets/amnesia-scanner-seagullz.mp3', (function(){
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

    let rot = map(level,0,0.5,360,0);
    size = random(-200,200);
    faceW = map(level,0,0.5,300,450);
    faceH = map(level,0,0.5,200,400);
	  //print(size);
    let whichFace = floor(map(level,0,0.5,0,6));
	  if (whichFace>6){whichFace = 6};
	  faceX = random(-200,200);
	  faceY = random(-200,200);

	  if (random()<0.02){
background(0);
	  }
    rotateY(rot);

    fill(0);
    text('leebot',0,0); 
	  text('leebot',random(-width/2,width/2),random(-height/2,height/2));
    texture(faces[whichFace]);

    translate(faceX,faceY);
    ellipsoid(faceW,faceH,size);
  }
}

function windowResized(){
  resizeCanvas(windowWidth,windowHeight);
}
