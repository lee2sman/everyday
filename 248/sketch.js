//modified 163
//used in performance in 'i would die 2 u' at ARoS art museum 2022-08-11 18:00
//lee2sman 2022

let itemTotal = 51,
	started = false,
	fadingIn = false,
	song,
	talk = [],
	frame = false,
	startImg,
	player,
	roomObjs = [],
	roomImg = [],
	textSpeed = 48,
	players = 16,
	playerImg,
	playerImgs = [],
	totalSounds = 5,
	items = 51,
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
		"ever since i was a kid i've gone to bed late.",
		"staying up all hours of the night to read.",
		"since the start of the pandemic i've slept in maybe 6 bedrooms.",
		"when covid hit new york i was living with x.",
		"the apartment was loud. we lived above a mexican restaurant that played music til 4am on the street",
		"there was a competing mexican restaurant with a back patio behind our apartment, also playing loud music til 4am",
		"during the time of the pandemic lots of people report having peculiar dreams",
		"> all around the world, the pandemic provoked strange nocturnal visions",
		"i've always had trouble remembering my dreams when i wake up.",
		"in the first week the pandemic broke out in new york i had an exhibit. i didn't go to the opening but zoomed in.",
		"everyone seemed to think things would go back to normal soon.",
		"x and i thought this was wishful thinking",
		"it's a year later. i live alone.",
		"one of my closest friends passed away this year.",
		"a few times i've gone to visit my parents. i take the train down.",
		"they live in the suburbs. on the edge of the woods.",
		"at night it rains, owls call out, cats purr.",
		"i have no bedroom there. i sleep on a pile of blankets on the floor.",
		"i'm enjoying spending time with my parents as we all age.",
		"i appreciate the hell out of them.",
		"at night we watch documentaries. they go to bed at midnight.",
		"i raid the kitchen. they've bought me pretzels i like.",
		"for the past year i've had trouble falling asleep. i read too late.",
		"look at my phone. browse. program. hear animals. loud cars.",
		"i finally fall asleep at 4am.",
		"i see less and less of the day.",
		"in th esummer i am part of a residency in denmark with friends from my art collective.",
		"we're all part of an extended family.",
		"we're all weirdos in our own way. we stay up late in the hostel room talking, making noise, playing backgammon.",
		"jon and i snore, we are told.",
		"with my friends i'm the happiest i've been all pandemic.",
		"back home i throw myself into school. at night i don't want to go to bed.",
		"i want the world for myself. when i'm asleep i'll be missing out.",
		"when i wake it's late. i'm slow to leave bed. i head out to the world reluctantly.",
		"things are uncertain.",
		"where will i be sleeping next year?",
	];

let textX = 30,
	f,
	f2,
	overpass,
	roomText;

function preload() {
	for (let i = 0; i < items; i++) {
		roomImg[i] = loadImage("assets/background/" + i + ".png");
	}

	for (let i = 0; i < players; i++) {
		playerImgs[i] = loadImage("assets/player/" + i + ".png");
	}

	playerImg = random(playerImgs);

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
	title = "'I'm thinking I'll Phone a Friend'     Dreams: July/August 2022";

	initPlayer();
	initSprites();
	resetRoom();

	drawSprites();
	frameRate(100);
}

function draw() {
	if (started) {
		//noCursor();
		//background(226, 226, 216);
		background("purple");

		if (millis() > roomTimeout) {
			roomTimeout = millis() + random(8000, 14000);
			resetRoom();
		}

		playerController();

		camera.position.x = player.position.x;
		camera.position.y = player.position.y;

		drawItems();

		drawSprite(player);

		filter(THRESHOLD, 0.45);

		drawRoomText();

		background(frameCount, 0, frameCount, 100);
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

	rect(width / 2, height / 4, width  , 60);
	//TITLE
	textSize(60);
	fill(226, 226, 216);
	text(title, width / 2, height / 4);
	fill(0);
	rect(width / 2, (height * 3) / 4, 300, 50);
	fill(255);
	text("lee tusman", width / 2, (height * 3) / 4);
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

	playerImg = random(playerImgs);

	player.addImage(playerImg);

	player.scale = random(0.7, 2);
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
	textSize(168);
	textAlign(LEFT, TOP);
	rectMode(CORNER);
	fill(0);
	rect(
		player.position.x - width / 2,
		player.position.y + height / 2 - 200,
		width,
		200
	);
	//fill(200);
	fill("#99FF99");
	text(
		fortune[lineOfText],
		player.position.x - width / 2 + textX,
		player.position.y + height / 2 - 200
	);
	textX -= textSpeed;
	if (textX < -2.5*width) {
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
