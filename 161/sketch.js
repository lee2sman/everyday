//dream A 'The Bridge' dreamt 10/10/2020
let itemTotal = 18,
	started = false,
	fadingIn = false,
	song,
	talk = [],
	frame = false,
  startImg,
	player,
	playerImg,
	roomObjs = [],
	roomImg = [],
	totalSounds = 5,
	items = 18,
	currentItems,
	title,
	talkTimer = 6000,
	talking = false,
	roomTimeout = 6000,
	timer = 3000,
	roomTimer = 3000,
	questNum,
  lineOfText=0,
	fortune = [
		"I'm in a board game store. Or maybe more general but there is a board game section.",
		"I am looking at the board games. Perhaps I am traveling so I don't want to buy something I'd have to haul around.",
		"Have I played these before?",
		"Maybe my sister will like it.",
		"I am in a small town, pretty remote area, in the mountains.",
		"I am near a bridge, possibly on it.",
		"There is an ambulance on the other side of the bridge.",
		"We're in a somewhat remote area.",
		"The ambulance drives across the bridge, they are possibly looking for how to get down under.",
		"It appears that maybe down and out people with addiction problems get off the train and get drunk and have an emergency.",
		"Same location.",
		"I am with someone in a car looking at the ambulance and talking about it.",
		"Who am I with? Shane? No.",
		"Someone is walking by.",
		"I'm in the left seat, but I wasn't driving.",
		"The person I'm with sees someone outside.",
		"He daps him, but the person recognizes me too and shakes.",
		"We had met once before. Where?",
		"They comment on the ambulance.",
		"I am meeting up with a group. We're having a retreat.",
		"It's a get-together of those that did a study abroad retreat.",
		"We drove somewhere and parked.",
		"We're in the meetup location.",
		"It turns out some of the people don't do the trip (study abroad?) every year.",
		"I thought everyone did it twice, but there's a different group the second time.",
		"I was a little dissapointed (incensed?) that some folks only go once.",
		"But still many do go to the retreat and I am joining them.",
		"I have been driven and walk from the car.",
		"I'm with some women, maybe a guy too. Something is wrong.",
		"I am disappointed in some people.",
		"A younger person who will be doing the trip with a group after me (they are going to go on the trip I've done) somehow gets disappointed in me too?",
		"Or at least, I'm frustrated with other people and I think some are frustrated with me.",
		"I decide I'll walk home, but it's far out.",
		"Where's my car? Oh yeah, I don't have one.",
		"I'll ....it's coming to me somewhat. Oh yeah, I'll walk pretty far...it's coming to me somewhat.",
		"As I leave someone is there, a woman, Amanda?, and I tell her my plans as I am talking them out loud and thinking what I'll do.",
		"Oh yeah, I'll walk pretty far, how far?, to like Market St or the area by the river and then take a train out to the suburbs or where I'm supposed to return to.",
		"The woman who is going to do the trip in the future has heard about my traveling and from the stories has learned a lot about how to do it.",
		"I start walking, I don't want to take the train because of the disease.",
		"I am wandering out walking.",
		"I wake up"
	];

let textX = 30,
	f,
	f2,
	overpass,
	roomText;

function preload() {
	for (let i = 0; i < items; i++) {
		roomImg[i] = loadImage("assets/background/" + i + ".jpg");
	}

	playerImg = loadImage("assets/guston.png");

	f2 = loadFont("assets/font/DS-TERM.TTF");
	overpass = loadFont("assets/font/overpass-mono-bold.ttf");

	soundtrack = loadSound("assets/snd/deep-burn.mp3");

	soundtrack.playMode("untilDone");
}

function setup() {
	createCanvas(windowWidth, windowHeight);

  textX=width;
	background(226, 226, 216);

	rectMode(CENTER);
	title = "'The Bridge'     Dreamt: 11/10/2020";

	initPlayer();
	initSprites();
	resetRoom();

	drawSprites();
}

function draw() {
	if (started) {
		//noCursor();
		background(226, 226, 216);

		if (millis() > roomTimeout) {
			roomTimeout = millis() + random(8000, 14000);
			resetRoom();
		}

		playerController();

		camera.position.x = player.position.x;
		camera.position.y = player.position.y;

		drawItems();

		drawSprite(player);

	drawRoomText();

		filter(THRESHOLD,0.65);

		detectSave();
	} else {
		startScreen();

		filter(THRESHOLD);
	}
}

function mousePressed() {
	if (!started) {
		started = true;
		audioController();
	}
}

function startScreen() {
	image(roomImg[startImg], 0, 0, width, height);
	textFont(f2);

	if (width < 600) {
		background(0);
	}
	//background(255);
	fill(0);
	strokeWeight(5);
	fill(255);
	rect(width / 2, height / 2, 110, 40);
	fill(0);
	textSize(30);
	textAlign(CENTER, CENTER);

	text("Play?", width / 2, height / 2);

	rect(width / 2, height / 4, width * 2/ 3, 60);
	//TITLE
	textSize(60);
	fill(226, 226, 216);
	text(title, width / 2, height / 4);
        fill(0)
        rect(width/2,height*3/4,300,50)
  fill(255)
        text('lee2sman',width/2,height*3/4)
}

function initPlayer() {
	player = createSprite(400, 200);
	player.addImage(playerImg);

	//initial player velocity
	player.velocity.x = random(-5, 5);
	player.velocity.y = random(-5, 5);
}
function initSprites() {
  startImg = int(random(items))
	for (let i = 0; i < itemTotal; i++) {
		roomObjs[i] = createSprite(400, 200);
		roomObjs[i].position.x = random(width);
		roomObjs[i].position.y = random(height);
	}
}

function playerController() {
	//occasional flip or unflip player depending on direction of movement
	if (random() < 0.01) {
		player.mirrorX(1);
	}
	if (random() < 0.2) {
		player.mirrorX(-1);
	}

	//limit the player movements
	if (player.position.x < player.width / 2) {
		player.velocity.x = 0;
	}
	if (player.position.y < player.height / 2) {
		player.velocity.y = 0;
	}
	if (player.position.x > width - player.width / 2) {
		player.velocity.x = 0;
	}
	if (player.position.y > height - player.height / 2) {
		player.velocity.y = 0;
	}

	//hidden resizer
	if (keyIsDown(UP_ARROW)) player.scale += 0.05;
	if (keyIsDown(DOWN_ARROW)) player.scale -= 0.05;
}

function drawItems() {
	for (let i = 0; i < currentItems; i++) {
		drawSprite(roomObjs[i]);
	}
}

function audioController() {
	soundtrack.loop();
}

function resetRoom() {
	roomTimer = millis() + 2500;

	player.scale = random(0.4, 6);
	//pick a new text to display
	roomText = floor(random(fortune.length));
  	//next convo text

	//change player position and velocity
	player.position.x = random(width);
	player.position.y = random(height);
	player.velocity.x = random(-5, 5);
	player.velocity.y = random(-5, 5);
	//make sure it's not agonizingly slow
	while (
		player.velocity.x > -1 &&
		player.velocity.x < 1 &&
		player.velocity.y > -1 &&
		player.velocity.y < 1
	) {
		player.velocity.x = random(-5, 5);
		player.velocity.y = random(-5, 5);
	}

	//
	currentItems = int(random(2, 7));

	for (let i = 0; i < roomObjs.length; i++) {
		roomObjs[i].addImage(roomImg[int(random(items))]);
		//	roomObjs[i].scale = random(0.5, 1.5);

		roomObjs[i].position.x = random(width);
		roomObjs[i].position.y = random(height);
	}
}

function drawRoomText() {
	textFont(overpass);
	fill(200);
	textSize(36);
	textAlign(LEFT, TOP);
	rectMode(CORNER);
        fill(0);
  rect(player.position.x-width/2,player.position.y+height/2-50,width,50);
	fill(200);
	text(fortune[lineOfText], player.position.x-width/2+textX, player.position.y+height/2 - 50);
	textX-=20;
	if (textX + fortune[roomText].length * 25 < 0) {

lineOfText++;
  if (lineOfText>=fortune.length)(lineOfText=0)



		textX = width;
	}
//refix alignment
	rectMode(CENTER);
}


function detectSave() {
	if (keyIsPressed && key == "s") {
		noLoop();
		saveCanvas("self-doubting-system", "png");
	}
}

function windowResized() {
	resizeCanvas(windowWidth, windowHeight);
}
