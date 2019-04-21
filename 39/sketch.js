let soundtrack, amplitude, myFont, lourded = false, lourdX = 50;

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
      text("LOURDING",0,0);
  }));

   soundtrack = loadSound('assets/twxxus.mp3', (function(){
    console.log('audio loaded');
    soundtrack.play();
    lourded = true;

  }));

  noCursor();

  amplitude = new p5.Amplitude();

}

function draw() {
  //background(0);
  if (!lourded){
    text('.',lourdX,0);
    lourdX+=10
  } else {
    background(255);
    fill(0);
    text('LOURDED',0,0);
  }
}



function windowResized(){
  resizeCanvas(windowWidth,windowHeight);
}

