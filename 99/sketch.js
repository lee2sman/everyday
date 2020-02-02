//rework 57 - rove mountain 2
//lee2sman
//i have a cold or the flu, definitely a fever
//on the couch at home
//xin across from, playing tickets to ride on the phone
//listening to Tim Hecker - Dropped Pianos
let started = false, fadingIn = false, song;
let bird, mountainObjs = [], propObjs = [], mountainImg = [], propImg = [];
let leftDir = 0.2;
let rightDir = 0.2;

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

  rectMode(CENTER);

  //controller
  bird = createSprite(400,200); 
  let birdAnim = bird.addAnimation('flying','assets/bird1.png','assets/bird8.png');


  initSprites();
  resetRoom();

  drawSprites();

}

function draw(){
  if (!started){
    background(255);
    fill(0);
    strokeWeight(5);
    fill(255);   
    rect(width/2,height/2,80,40);
    fill(0);
    text("Images from Yu Peng's 5 Women and Dwelling in the Fuchun Mountains",10,10);
    textAlign(CENTER);
    textSize(30);
    text("Play",width/2,height/2,30,30);
  }
  else {
  background(226,226,216);

    //

if (random() < 0.001){
  leftDir = random();
  rightDir = random();
}

if (leftDir < 0.33){
   bird.velocity.x = 5;
}
else if (leftDir < 0.66){
   bird.velocity.x = -5;
}
else {
  bird.velocity.x = 0;
}
//move Y of bird depending on mouseY
if (rightDir < 0.33){
   bird.velocity.y = 5;
}
else if (rightDir < 0.66){
   bird.velocity.y = -5;
}
else {
  bird.velocity.y = 0;
}

  //flip or unflip bird depending on direction of movement
  if (leftDir<0.33){
    bird.mirrorX(-1);
  } 
  else {
    bird.mirrorX(1);
  }

  //limit the ghost movements
  if(bird.position.x < 50){
    bird.position.x = width-100;
    resetRoom();
  }
  if(bird.position.y < 50){
    bird.position.y = height-100;
    resetRoom();
  }
  if(bird.position.x > width-50){
    bird.position.x = 100;
    resetRoom();
  }
  if(bird.position.y > height-50){
    bird.position.y = 100;
    resetRoom();
  }

  drawSprites();

  //bird on top!
   if(keyIsDown(UP_ARROW))
    bird.scale += 0.05;
  if(keyIsDown(DOWN_ARROW))
    bird.scale -= 0.05;

  drawSprite(bird);

}}

function mousePressed(){
  if (!started){
     song.loop();
     started = true;
  }
}

function initSprites(){
  for (let i = 0;i<20;i++){
    mountainObjs[i] = createSprite(400,200);
    mountainObjs[i].addImage(mountainImg[i]);
    
  }
  //create props
  for (let i = 0;i<5;i++){
    propObjs[i] = createSprite(400,200);
    propObjs[i].addImage(propImg[i]);
  }


}

function resetRoom(){

  //create mountainObjs
  for (let i = 0;i<20;i++){
	  if (!mountainObjs[i].removed){
    mountainObjs[i].remove();
	  }
    mountainObjs[i] = createSprite(400,200);
    mountainObjs[i].addImage(mountainImg[i]);
    
  }
  //create props
  for (let i = 0;i<5;i++){
	  if (!propObjs[i].removed){
    propObjs[i].remove();
	  }
    propObjs[i] = createSprite(400,200);
    propObjs[i].addImage(propImg[i]);
  }

	//draw stuff
	
	for (let i = 0; i < 20; i++){
           if (random()<0.5){
                mountainObjs[i].position.x = random(width);
                mountainObjs[i].position.y = random(height);

                //if it's colliding with something bump it over
		for (let j = 0; j < i; j++){
			mountainObjs[i].collide(mountainObjs[j]);

		}
	   } else {
                mountainObjs[i].remove();
	   }

		//uncomment next line to print which mountain sprites removed
                //if (mountainObjs[i].removed){print("mountain sprite "+i+" removed");}
		//
	}
	for (let i = 0; i < 5; i++){

	  if (random()<0.2){
                propObjs[i].position.x = random(width);
                propObjs[i].position.y = random(height);

                //if it's colliding with something bump it over
		for (let j = 0; j < i; j++){
			propObjs[i].collide(propObjs[j]);

		}
	  } else {
               propObjs[i].remove();
	  }
    }
}
