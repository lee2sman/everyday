let soundtrack, amplitude, myFont, lourded = false, lourdX = 50, faceImg;
let faces = [];
let faceW, faceH, faceD, faceX, faceY;

function preload(){
  for (let i = 0; i<7; i++){
    faces[i] = loadImage('assets/'+i+'.jpg');
  }
}

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);

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
   soundtrack = loadSound('assets/lco.mp3', (function(){
    console.log('audio loaded');
    soundtrack.play();
    

  }));

    faceImg = loadImage('assets/0.jpg',(function(){lourded = true;
    console.log('faceImg loaded');
    }));

  amplitude = new p5.Amplitude();
}

function draw() {
  if (!lourded){
    text('.',lourdX,0);
    lourdX+=10
  } else {
	    
   let rot = degrees(map(mouseX,0,width,0,180));

    level = amplitude.getLevel();

    size = map(level, 0, 1, 0, 90);
    let whichFace = floor(map(level,0,0.1,0,7));

    rotateY(degrees(size));

    background(255);
    fill(0);
    text('LEEB0T',0,0); 
    texture(faces[whichFace]);
    ellipsoid(width/4,100*size,100*size);
  }
}

function windowResized(){
  resizeCanvas(windowWidth,windowHeight);
}
