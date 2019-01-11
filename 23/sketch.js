//flatgame template by github/Lee2sman 2018
//MIT License

let me, meImg, blob1, blob2, blob3;
let stuff = [];

//default
var SCENE_W = 1600;
var SCENE_H = 800;

function preload(){
  meImg = loadImage('me.png');
  blob1 = loadImage('blob1.png');
  blob2 = loadImage('blob2.png');
  blob3 = loadImage('blob3.png');
}

function setup() {
  createCanvas(windowWidth,windowHeight);
  SCENE_W = 2*windowWidth;
  SCENE_H = 2*windowHeight;

  //font size
  textSize(24);

  //hammerjs setup
  // set options to prevent default behaviors for swipe, pinch, etc
var options = {
  preventDefault: true
};
// document.body registers gestures anywhere on the page
var hammer = new Hammer(document.body, options);
hammer.get('swipe').set({
direction: Hammer.DIRECTION_ALL
});

hammer.on("swipe", swiped);

	for (let i =0;i<12;i++){

		stuff[i] = createSprite(random(width),random(height));

		  if(random()<0.5)
		    stuff[i].addImage(blob1);
		  else if (random()<0.9)
		    stuff[i].addImage(blob2);
		  else
		    stuff[i].addImage(blob3);

		stuff[i].scale = 0.2;
	}

  me = createSprite(width/2, height/2, 50, 100);
	me.addImage(meImg);
	me.scale = 0.2;
}

function draw() {
  background(5, 5, 5);
  movePlayer();

  //limit the me movements
  if(me.position.x < 0)
    me.position.x = 0;
  if(me.position.y < 0)
    me.position.y = 0;
  if(me.position.x > SCENE_W)
    me.position.x = SCENE_W;
  if(me.position.y > SCENE_H)
    me.position.y = SCENE_H;

	drawSprites();
}

function movePlayer(){

 if (keyIsDown(LEFT_ARROW)) {
    me.position.x -= 25;
  }
  if (keyIsDown(RIGHT_ARROW)) {
    me.position.x += 25;
  }
  if (keyIsDown(UP_ARROW)) {
    me.position.y -= 25;
  }
  if (keyIsDown(DOWN_ARROW)) {
    me.position.y += 25;
  }
}

function swiped(event) {
  console.log(event);
  if (event.direction == 4) {
    me.position.x += 250;
  } else if (event.direction == 8) {
    me.position.y -= 250;
  } else if (event.direction == 16) {
    me.position.y += 250;
  } else if (event.direction == 2) {
    me.position.x -= 250;
  }
}

function windowResized(){
    resizeCanvas(windowWidth,windowHeight);
}
