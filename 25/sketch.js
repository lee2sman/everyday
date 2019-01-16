//flatgame template by github/Lee2sman 2018
//MIT License

let me, meImg, emuImg, quitImg, exitImg, room = 0, slimemoldImg, unknownImg, welcomeImg, pathImg, diedImg, goldImg, missedImg, mysteryImg, scrollImg, scrollnameImg, paths, soundtrack;
let stuff = [];

//default
let SCENE_W = 1600;
let SCENE_H = 800;
let totalRooms = 6;

function preload(){
	meImg = loadImage('assets/me.png');
	emuImg = loadImage('assets/emu.png');
	quitImg = loadImage('assets/quit.png');
	exitImg = loadImage('assets/exit.png');
	roomImg = loadImage('assets/room.png');
	slimemoldImg = loadImage('assets/slimemold.png');
	unknownImg = loadImage('assets/unknown.png');
	welcomeImg = loadImage('assets/welcome.png');
	pathImg = loadImage('assets/path.png');
	diedImg = loadImage('assets/died.png');
	goldImg= loadImage('assets/gold.png');
	missedImg = loadImage('assets/missed.png');
	mysteryImg = loadImage('assets/mystery.png');
	scrollImg = loadImage('assets/scroll.png');
	scrollnameImg = loadImage('assets/scrollname.png');

	soundFormats('mp3');
	soundtrack = loadSound('assets/Caked-Cream-Paints.mp3');
}

function setup() {
  createCanvas(windowWidth,windowHeight);
  SCENE_W = 2*windowWidth;
  SCENE_H = 2*windowHeight;

  //font size
  textSize(24);

  soundtrack.play();

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

paths = new Group();

  me = createSprite(width/2, height/2, 50, 100);
	me.addImage(meImg);
}

function draw() {
  background(5, 5, 5);
  movePlayer();
  drawRoom();

  drawSprites();
  drawSprites(paths);
  drawSprite(me);
}

function drawRoom(){
    switch (room){
	case 0:
            image(welcomeImg,200,40);
            image(mysteryImg,300,240);
	    break;
	case 1:
            image(emuImg,100,40);
            //image(mysteryImg,300,240);
	    break;
	case 2:
            image(roomImg,220,40);
            image(scrollImg,300,240);
            image(scrollnameImg,50,10);
	    break;
	case 3:
            image(slimemoldImg,230,40);
            image(goldImg,30,340);
	    break;
	case 4:
            image(unknownImg,102,40);
            image(missedImg,30,340);
	    break;
	case 5:
            image(exitImg,180,40);
            image(quitImg,300,240);
            image(diedImg,20,300);
	    break;
	default:
	    image(quit,200,40);
    }
}

function movePlayer(){

 if (keyIsDown(LEFT_ARROW)) {
    me.position.x -= 5;
	 if (me.position.x % 50 == 0) {
    		path = createSprite(me.position.x-100, me.position.y, 50, 100);
    		path.addImage(pathImg);
	  	paths.add(path);
	 }
  }
  if (keyIsDown(RIGHT_ARROW)) {
    me.position.x += 5;
	 if (me.position.x % 50 == 0) {
    		path = createSprite(me.position.x+100, me.position.y, 50, 100);
    		path.addImage(pathImg);
	  	paths.add(path);
	 }
    
  }
  if (keyIsDown(UP_ARROW)) {
    me.position.y -= 5;
    		path = createSprite(me.position.x, me.position.y-100, 50, 100);
    		path.addImage(pathImg);
	  	paths.add(path);

  }
  if (keyIsDown(DOWN_ARROW)) {
    me.position.y += 5;
    		path = createSprite(me.position.x, me.position.y+100, 50, 100);
    		path.addImage(pathImg);
	  	paths.add(path);
  }

   //if you move offscreen to R or L draw next or prev room 
  if(me.position.x < 0){
    me.position.x = width;
    room--; //select previous room
    paths.removeSprites();
    if (room<0){
	room = totalRooms-1;
    }
  }
  if(me.position.x > width) { //if you walk to the right of the room (visible screen) then...
    me.position.x = 0; //move player to left
    room++ //advance room
    paths.removeSprites();
    if (room>=totalRooms){ //if you walked past the last room
	room = 0;  //then jump to room 0
    }
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
