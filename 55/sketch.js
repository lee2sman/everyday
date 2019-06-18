//it's been a min hasn't it?
//traveling in taiwan
//featuring sections of Yu Peng's 5 Women and Dwelling in the Fuchan Mountains
//A Wanderer Between Heaven and Earth

let mountainObjs = [], propObjs = [], mountainImg = [], propImg = [];

function preload(){
  for (let i = 0; i<21;i++){
    mountainImg[i] = loadImage('assets/mountain'+i+'.png');
  }
  for (let i = 0; i<5;i++){
    propImg[i] = loadImage('assets/prop'+i+'.png');
  }
}

function setup() {
  createCanvas(windowWidth,windowHeight);
  background(226,226,216);

  //create mountainObjs
  for (let i = 0;i<20;i++){
    mountainObjs[i] = createSprite(400,200);
    mountainObjs[i].addImage(mountainImg[i]);
  }
  //create props
  for (let i = 0;i<5;i++){
    propObjs[i] = createSprite(400,200);
    propObjs[i].addImage(propImg[i]);
  }

	//draw stuff
	
}

function draw(){
	for (let i = 0; i < 5; i++){

                mountainObjs[i].position.x = random(width);
                mountainObjs[i].position.y = random(height);
	}

  drawSprites();

}
