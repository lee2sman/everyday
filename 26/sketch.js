//flatgame template by github/Lee2sman 2018
//MIT License

let me, myAnimation, soundtrack, room = 0, totalRooms = 0, items = [], bg, roomItems = [], itemImages = [];

// Normally you would put this in a .json file, but I'm putting it here
// for example purposes
let itemInfo = [
  {'file':'assets/monster.png', 'x':750, 'y': 300, 'room': 0},
  {'file':'assets/beardo.png', 'x':84, 'y': 95, 'room': 1},
  {'file':'assets/smiley-joe.png', 'x':364, 'y': 95, 'room': 1},
  {'file':'assets/yeti.png', 'x':71, 'y': 300, 'room': 1},
  {'file':'assets/confused.png','x':120, 'y': 150, 'room': 2},
  {'file':'assets/nobody.png','x':142, 'y': 300, 'room': 2},
  {'file':'assets/susan.png', 'x':0, 'y': 95, 'room': 2},
  {'file':'assets/catso.png', 'x':71, 'y': 95, 'room': 3},
  {'file':'assets/trash.png', 'x':142, 'y': 95, 'room': 4},
  {'file':'assets/bridge.png', 'x':213, 'y': 300, 'room': 5},
  {'file':'assets/scroll.png', 'x':284, 'y': 300, 'room': 6},
  {'file':'assets/tech.png', 'x':213, 'y': 295, 'room': 6},
  {'file':'assets/tech2.png', 'x':275, 'y': 295, 'room': 6},
  {'file':'assets/electric-tree.png', 'x':355, 'y': 0, 'room': 6},
  {'file':'assets/hut.png', 'x':384, 'y': 95, 'room': 7},
  {'file':'assets/hut2.png', 'x':24, 'y': 95, 'room': 7},
  {'file':'assets/antenna.png', 'x':104, 'y': 95, 'room': 7},
  {'file':'assets/exit.png', 'x':180, 'y': 95, 'room': 8}
];

function preload(){
	
	//load soundtrack - caution, not too big
	soundFormats('mp3');
	soundtrack = loadSound('assets/soundtrack.mp3');

	//if you have many items, use an external json file
	//itemInfo = loadJSON('items.json');

	//load all item Images

	for (let i=0; i<=itemInfo.length-1; i++){

		itemImages[i] = loadImage(itemInfo[i].file);

		//how many rooms? if an item's room number is higher than current totalRooms, then change it!
		if(itemInfo[i].room>totalRooms){
			totalRooms = itemInfo[i].room;
		}
	}
}

function setup() {
//  createCanvas(windowWidth,windowHeight);
	createCanvas(1088,612);

  //font size
  textSize(24);

  //start soundtrack
  soundtrack.loop();

//create an animation from a sequence of numbered images
//pass the first and the last file name and it will try to find the ones in between
//or just specify image files in a list separated by commas
  me = createSprite(width/2, height/2, 50, 100);
  me.addAnimation('myAnimation', 'assets/me01.png','assets/me02.png' );
  me.scale = 0.5;
  me.animation.frameDelay = 30;

  setupHammerJS();

  bg = new Group();

loadRoom();
}

function draw() {
  background(5, 5, 5);
  movePlayer();

  drawSprites(bg);
  drawSprite(me);
}

function loadRoom(){

	//get rid of all items from the previous room, which are part of the group called bg aka background
	bg.removeSprites();

	let itemIndex = 0;

	for (i=0; i < itemInfo.length; i++){
		//check if item is in Room		
		if (itemInfo[i].room == room){
			roomItems[itemIndex] = createSprite(itemInfo[i].x,itemInfo[i].y);
			roomItems[itemIndex].addImage(itemImages[i]);
			roomItems[itemIndex].scale = 0.5;
			roomItems[itemIndex].addToGroup(bg);

			itemIndex++ // Problem? ADDS 1 to itemIndex last time, when there are no more items to add!
		}
	}
}

function movePlayer(){

 if (keyIsDown(LEFT_ARROW)) {
    me.position.x -= 2;
  }
  if (keyIsDown(RIGHT_ARROW)) {
    me.position.x += 2;
  }
  if (keyIsDown(UP_ARROW)) {
    me.position.y -= 2;
    }
  if (keyIsDown(DOWN_ARROW)) {
    me.position.y += 2;
  }

   //if you move offscreen to R or L draw next or prev room 
  if(me.position.x < 0){
    me.position.x = width; //if you walk off to the left, appear on the right
    room--; //select previous room

    if (room<0){  //if you walk to left of first room, appear at the end
	room = totalRooms;
	//alternately, prevent people from shortcutting/wrapping to last room by commenting out above line and uncommenting below
	//room = 0;
    }
    loadRoom();
  }
  if(me.position.x > width) { //if you walk to the right of the room (visible screen) then...
    me.position.x = 0; //move player to left
    room++ //advance room

    if (room>totalRooms){ //if you walked past the last room
	room = 0;  //then jump to room 0
    }
    loadRoom();
  }
}

//function windowResized(){
    //resize screen if you drag window larger/smaller
   // resizeCanvas(windowWidth,windowHeight);
//}

//--------------------- HammerJS config --------------------------------

function setupHammerJS(){
	//hammerjs setup
	// set options to prevent default behaviors for swipe, pinch, etc
	let options = {
		preventDefault: true
	};

// document.body registers gestures anywhere on the page
	let hammer = new Hammer(document.body, options);

	hammer.get('swipe').set({
		direction: Hammer.DIRECTION_ALL
	});

	hammer.on("swipe", swiped);
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
