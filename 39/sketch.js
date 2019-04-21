let soundtrack, amplitude, myFont, lourded = false, lourdX = 50, stuffImg = [], stuff=[];

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

//  noCursor();
	
  for (let i = 0; i < 5; i++){
    stuffImg[i] = loadImage('assets/'+i+'.png',(function(){
    
      if(stuffImg[4]){
        console.log('all loaded');
        
	for (let i = 0; i < 5; i++){
          stuff[i] = new Stuff();
	}

      } else {console.log('not yet loaded')}
    })
    
    
    );
  }

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
    text('TWENTY-XX',0,0);



  for (let i = 0; i<5; i++){
    stuff[i].display();
    stuff[i].changeImage();
    stuff[i].wander();
  }
	  
  }
}



function windowResized(){
  resizeCanvas(windowWidth,windowHeight);
}

class Stuff{
  constructor(){
    this.x = random(-width/2,width/2);
    this.y = random(-height/2,height/2);
    this.whichImg = floor(random(0,stuffImg.length));
    this.level;
    this.size;
  }

  display(){
    push();

    translate(this.x,this.y);

    texture(stuffImg[this.whichImg]);

    this.level = amplitude.getLevel();

    this.size = map(this.level, 0, 1, 0, 2000);

    ellipsoid(this.size,this.size,this.size);
    pop();
    }

    changeImage(){
       if (this.level>0.2){
         this.whichImg = floor(random(0,stuffImg.length));
       }
    }
    wander(){
       if(this.level>0.2){
         this.x+=random(-0.5,0.5);
         this.y+=random(-0.5,0.5);
       }
    }

}
