//dream B 'A penumbra' dreamt 11/01/2020
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
	lineOfText = 0,
	fortune = [
		"Someone tells me they researched how a cat eats a 'penumbra'",
		"note: I don't know what this means and will look it up.",
		"It's a small purple water bottle-looking thing.",
		"The cat plays very aggressively with me, scratching me.",
		"I wake up."
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

	playerImg = loadImage("assets/player.png");

	f2 = loadFont("assets/font/DS-TERM.TTF");
	overpass = loadFont("assets/font/overpass-mono-bold.ttf");

	soundtrack = loadSound("assets/snd/meat.mp3");

	soundtrack.playMode("untilDone");
}

function setup() {
	createCanvas(windowWidth, windowHeight);

	textX = width;
	background(226, 226, 216);

	rectMode(CENTER);
	title = "'A penumbra'     Dreamt: 11/01/2020";

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

		filter(THRESHOLD, 0.45);

  background(frameCount,0,frameCount,100);
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

	rect(width / 2, height / 4, (width * 2) / 3, 60);
	//TITLE
	textSize(60);
	fill(226, 226, 216);
	text(title, width / 2, height / 4);
	fill(0);
	rect(width / 2, (height * 3) / 4, 300, 50);
	fill(255);
	text("lee2sman", width / 2, (height * 3) / 4);
}

function initPlayer() {
	player = createSprite(400, 200);
	player.addImage(playerImg);

	//initial player velocity
	player.velocity.x = random(-5, 5);
	player.velocity.y = random(-5, 5);
}
function initSprites() {
	startImg = int(random(items));
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

	player.scale = random(0.4, 2);
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
	rect(
		player.position.x - width / 2,
		player.position.y + height / 2 - 50,
		width,
		50
	);
	fill(200);
	text(
		fortune[lineOfText],
		player.position.x - width / 2 + textX,
		player.position.y + height / 2 - 50
	);
	textX -= 10;
	if (textX + fortune[roomText].length * 25 < 0) {
		lineOfText++;
		if (lineOfText >= fortune.length) background(0);

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
