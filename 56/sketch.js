//it's been a min hasn't it?
//traveling in taiwan
//featuring sections of Yu Peng's 5 Women and Dwelling in the Fuchan Mountains
//A Wanderer Between Heaven and Earth
//this is part 2 - "er"

let started = false, song;
let bird, mountainObjs = [], propObjs = [], mountainImg = [], propImg = [];
var SCENE_W = 1600;
var SCENE_H = 800;

function preload(){
  for (let i = 0; i<21;i++){
    mountainImg[i] = loadImage('assets/mountain'+i+'.png');
  }
  for (let i = 0; i<5;i++){
    propImg[i] = loadImage('assets/prop'+i+'.png');
  }
  song = loadSound('assets/hulusi.mp3');
}

function setup() {
  createCanvas(windowWidth,windowHeight);

  background(226,226,216);

  //controller
  bird = createSprite(400,200); 
  let birdAnim = bird.addAnimation('flying','assets/bird1.png','assets/bird8.png');

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
	
	for (let i = 0; i < 20; i++){
           if (random()<0.3){
                mountainObjs[i].position.x = random(width);
                mountainObjs[i].position.y = random(height);

                //if it's colliding with something bump it over
		for (let j = 0; j < i; j++){
			mountainObjs[i].collide(mountainObjs[j]);

		}
	   } else {
                mountainObjs[i].remove();
	   }

	}
	for (let i = 0; i < 5; i++){

                propObjs[i].position.x = random(width);
                propObjs[i].position.y = random(height);

                //if it's colliding with something bump it over
		for (let j = 0; j < i; j++){
			propObjs[i].collide(propObjs[j]);

		}

	}


  drawSprites();

}

function draw(){
  if (!started){
    background(255);
    fill(0);
    strokeWeight(5);
    fill(255);   
    rectMode(CENTER);
    rect(width/2,height/2,80,40);
    fill(0);
    text("Images from Yu Peng's 5 Women and Dwelling in the Fuchun Mountains",10,10);
    textAlign(CENTER);
    textSize(30);
    text("Play",width/2,height/2,30,30);
  }
  else {
  background(226,226,216);

  //mouse trailer, the speed is inversely proportional to the mouse distance
  bird.velocity.x = (camera.mouseX-bird.position.x)/20;
  bird.velocity.y = (camera.mouseY-bird.position.y)/20
	
    //set the camera position to the bird position
  camera.position.x = bird.position.x;
  camera.position.y = bird.position.y;

  //flip or unflip bird depending on direction of movement
  if (mouseX < bird.position.x){
    bird.mirrorX(1);
  } 
  else {
    bird.mirrorX(-1);
  }

  //limit the ghost movements
  if(bird.position.x < 0)
    bird.position.x = 0;
  if(bird.position.y < 0)
    bird.position.y = 0;
  if(bird.position.x > SCENE_W)
    bird.position.x = SCENE_W;
  if(bird.position.y > SCENE_H)
    bird.position.y = SCENE_H;

  drawSprites();

  //bird on top!
   if(keyIsDown(UP_ARROW))
    bird.scale += 0.05;
  if(keyIsDown(DOWN_ARROW))
    bird.scale -= 0.05;

  drawSprite(bird);

}} //second is because we have test at beginning to see if clicked

function mousePressed(){
  if (!started){
     song.loop();
     started = true;
  }
}
