let soundtrack, amplitude, myFont, lourded = false, lourdX = 50, faceImg;
let faces = [];
let faceW, faceH, faceD, faceX=0, faceY=0;

function preload(){
  for (let i = 0; i<7; i++){
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
      text("gloading",0,0);
  }));
   soundtrack = loadSound('assets/rushup.mp3', (function(){
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
	  print(rot);
    size = map(level, 0, 1, 200, 1000);
    faceW = map(level,0,0.5,300,450);
    faceH = map(level,0,0.5,200,400);
	  //print(size);
    let whichFace = floor(map(level,0,0.5,0,6));
	  if (whichFace>6){whichFace = 6};
	  faceX = map(rot,360,0,-width/2,width/2);
	  faceY = map(rot,0,360,-height/2,height/2);

    rotateY(rot);

    background(map(rot,360,0,255,0));
    fill(0);
    text('LEEB0T',0,0); 
	  text(random(),random(-width/2,width/2),random(-height/2,height/2));
    texture(faces[whichFace]);

    translate(faceX,faceY);
    ellipsoid(faceW,faceH,size);
  }
}

function windowResized(){
  resizeCanvas(windowWidth,windowHeight);
}
