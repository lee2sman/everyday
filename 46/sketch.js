//words variation on 45
let leepots, teapot, pots = [];
let heartbleed, f;
let loadedUp = false;
let words = ['how','we','are','so','tired','awake','joyful','sleepy','fresh','resistant','dreaming','full','empty'];

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);

  heartbleed = loadSound('assets/heartbleed2.mp3',function(){heartbleed.loop()});

  leepots = round(random(5,50));
  normalMaterial(); // For effect
 
  for (let i = 0; i < leepots; i++){
    pots[i] = new Teapot();
  }

	f = loadFont('assets/zxxnoise.otf',function(){
	  textAlign(CENTER,CENTER);
	  textFont(f);
	  textSize(96);
	  loadedUp = true;
	});
 
}

function draw(){
	background(0);
	rotateX(20);
	rotateY(mouseX/100);
	rotateZ(mouseY/100);

  for (let i = 0; i < leepots; i++){
    pots[i].display();
    pots[i].changeDir();
    pots[i].changeWord();
  }
  
}


class Teapot{
  constructor(){
    this.x = random(-width/2,width/2,);
    this.y = random(-height/2,height/2);
    this.potScale = random(0.5,2);
    this.xRot = random(0.05);
    this.yRot = random(0.05);
    this.timer = 3000;
    this.word = words[round(random(words.length-1))];
  }

  display(){
    push();  
    rotateX(frameCount * this.xRot);
    rotateY(frameCount * this.yRot);
    translate(this.x, this.y);
    scale(this.potScale);
    text(this.word,this.x,this.y);
    pop();
  }
  
  changeDir(){
   if (millis()>this.timer){
      this.xRot = random(0.05);
      this.yRot = random(0.05);
      this.timer+=random(3000,10000);
    }
  }
  
  changeWord(){
    if (mouseIsPressed){
      this.word = words[round(random(words.length-1))];
    }
  }
}
