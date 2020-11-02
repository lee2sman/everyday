let started = false,
	fadingIn = false,
	song,
	talk,
	frame = false;
let bird,
	mountainObjs = [],
	propObjs = [],
	mountainImg = [],
	propImg = [];
let mountains = 20,
	props = 17;
let title,
	titleWords = [
		"birth",
		"introduction",
		"reveal",
		"leaving",
		"exiting",
		"embarking",
		"parting",
		"delivery",
		"donation",
		"presentation",
		"endowment",
		"reveal",
		"exposure",
		"separation",
		"death",
		"abandonment",
		"awakening",
		"rise",
		"improvement",
		"learning",
		"education",
		"separation",
		"removal",
		"rejection",
		"elimination",
		"formal",
		"practiced",
		"routine",
		"wounding",
		"hurting",
		"insulting",
		"giving",
		"departure",
		"victory",
		"trickery",
		"involuntary"
	];
let talkTimer = 6000,
	talking = false,
	roomTimeout = 6000,
	timer = 3000,
	questNum = 0,
	questions = [
		"What am I saying to myself?",
		"What triggers these feelings?",
		"What can I say differently to myself?",
		"How can I change my thoughts?",
		"How can I change my behavior?",
		"What can I do next?",
		"Does this cause problems for others?",
		"What could you do instead?",
		"What changed inside you?",
		"What beliefs did you adopt?",
		"In what ways would your life change?",
		"what is stopping you?",
		"What beliefs contribute to your frustration?",
		"How often does this happen?",
		"Are you fulfilled?",
		"What is the pattern?",
		"What can you learn about yourself?",
		"What are your primary beliefs?",
		"What would you do?",
		"How are you feeling about yourself?",
		"Is this something within your power to change?",
		"Are they positive or negative memories?",
		"ERR0R"
	];

let textX = 30,
	f,
	f2,
	roomText,
	fortune = [
		"If everything seems to be going well, you have obviously overlooked something.",
		"Neither spread the germs of gossip nor encourage others to do so.",
		"Them that has, gets",
		"If you see a bright streak in the sky coming at you, remove.",
		"In which level of metalanguage are you now speaking?",
		"Delusions are usually functional",
		"You too can wear a nose mitten.",
		"Brain off-line, please wait",
		"BAD CRAZINESS, MAN!"
	];

function preload() {
	for (let i = 0; i < mountains; i++) {
		mountainImg[i] = loadImage("assets/background" + i + ".jpg");
	}

	for (let i = 0; i < props; i++) {
		propImg[i] = loadImage("assets/npc" + i + ".png");
	}

	f = loadFont("assets/false.otf");
	f2 = loadFont("assets/DS-TERM.TTF");

	song = loadSound("assets/wrongsong.mp3");
	talk = loadSound("assets/talk.mp3");
}

function setup() {
	createCanvas(windowWidth, windowHeight);

	background(226, 226, 216);

	rectMode(CENTER);
	title =
		titleWords[floor(random(titleWords.length))] +
		" && " +
		titleWords[floor(random(titleWords.length))];

	//controller
	bird = createSprite(400, 200);
	birdImg = propImg[floor(random(18))];
	bird.addImage(birdImg);

	//initial bird velocity
	bird.velocity.x = random(-5, 5);
	bird.velocity.y = random(-5, 5);

	initSprites();
	resetRoom();

	drawSprites();

	let url = getURL();
	if (url.endsWith("?frame")) {
		frame = true;
		main();
		noLoop();
	}
}

function draw() {
	if (!started && !frame) {
		startScreen();
	} else {
		main();
	}
}

function main() {
	noCursor();
	background(226, 226, 216);

	if (millis() > roomTimeout) {
		resetRoom();
	}

	birdController();
	drawSprites();
	drawSprite(bird);
	checkForConvo();
	haveConvo();
	drawRoomText();
}

function mousePressed() {
	if (!started) {
		song.loop();
		started = true;
	}
}

function startScreen() {
	image(mountainImg[0], 0, 0, width, height);
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

	rect(width / 2, height / 4, width / 2, 60);
	//NONSENSE TITLE
	textSize(60);
	fill(226, 226, 216);
	text(title, width / 2, height / 4);
}

function initSprites() {
	for (let i = 0; i < mountains; i++) {
		mountainObjs[i] = createSprite(400, 200);
		mountainObjs[i].addImage(mountainImg[i]);
	}
	//create props
	for (let i = 0; i < props; i++) {
		propObjs[i] = createSprite(400, 200);
		propObjs[i].addImage(propImg[i]);
	}
}

function birdController() {
	//flip or unflip bird depending on direction of movement
	if (random() < 0.01) {
		bird.mirrorX(1);
	}
	if (random() < 0.2) {
		bird.mirrorX(-1);
	}

	//limit the bird movements
	if (bird.position.x < 50) {
		bird.position.x = width - 100;
		resetRoom();
	}
	if (bird.position.y < 50) {
		bird.position.y = height - 100;
		resetRoom();
	}
	if (bird.position.x > width - 50) {
		bird.position.x = 100;
		resetRoom();
	}
	if (bird.position.y > height - 50) {
		bird.position.y = 100;
		resetRoom();
	}

	//hidden resizer
	if (keyIsDown(UP_ARROW)) bird.scale += 0.05;
	if (keyIsDown(DOWN_ARROW)) bird.scale -= 0.05;
}

function drawRoomText() {
	textFont(f);
	fill(200);
	textSize(36);
	textAlign(LEFT, TOP);
	fill(5);
	rectMode(CORNER);
	rect(0, height - 50, width, 50);
	fill(0, 200, 0);
	text(fortune[roomText], textX, height - 50);
	textX--;
	if (textX + fortune[roomText].length * 25 < 0) {
		textX = 30;
	}
	//text(fortune[roomText],10,31);

	//refix alignment
	rectMode(CENTER);
}

function checkForConvo() {
	textFont(f2);

	for (let i = 0; i < props; i++) {
		//run through for every npc

		if (bird.overlap(propObjs[i])) {
			//if overlapping
			if (!talking) {
				//if not already in talking mode
				talkTimer = millis() + 6000;
				talking = true;

				//play talk
				audioController();

				bird.scale = 4;
				birdImg.filter(ERODE);
			}
		}
	}
}

function haveConvo() {
	if (talking) {
		if (millis() < talkTimer) {
			//show talk text
			textSize(36);
			fill(0);
			rect(width / 2, height / 2, width / 3, height / 3);
			fill(0, 255, 0);
			textAlign(LEFT, TOP);

			if (questNum >= questions.length - 1) {
				questNum = 0;
			}

			text(questions[questNum], width / 2, height / 2, width / 4, height / 4);
		} else {
			talking = false;
			bird.scale = 1;
		}
	}
}

//
// 		 if (millis()>timer){
// 			 questNum++;
// 			 timer+=6000;
// 		 bird.scale = 1;
// 		 }
//
// 	 } else {
// 		 //not overlapping
// 		 bird.scale = 1;
// 	 }
//  }
// }

function audioController() {
	if (!talk.isPlaying()) {
		talk.play();
	}
}

function resetRoom() {
	roomTimeout = millis() + 8000;

	//pick a new text to display
	roomText = floor(random(fortune.length));
	//reset text x position
	textX = 30;
	//next convo text
	questNum++;

	//change bird velocity
	bird.velocity.x = random(-5, 5);
	bird.velocity.y = random(-5, 5);
	//make sure it's not agonizingly slow
	while (
		bird.velocity.x > -1 &&
		bird.velocity.x < 1 &&
		bird.velocity.y > -1 &&
		bird.velocity.y < 1
	) {
		bird.velocity.x = random(-5, 5);
		bird.velocity.y = random(-5, 5);
	}

	//create mountainObjs
	for (let i = 0; i < mountains; i++) {
		if (!mountainObjs[i].removed) {
			mountainObjs[i].remove();
		}
		mountainObjs[i] = createSprite(400, 200);
		mountainObjs[i].addImage(mountainImg[i]);
	}
	//create props
	for (let i = 0; i < props; i++) {
		if (!propObjs[i].removed) {
			propObjs[i].remove();
		}
		propObjs[i] = createSprite(400, 200);
		propObjs[i].addImage(propImg[i]);
		propObjs[i].velocity.x = random(-1.5, 1.5);
		propObjs[i].velocity.y = random(-1.5, 1.5);
		//propObjs[i].scale = random(0.75,1.75);
	}

	//draw stuff

	for (let i = 0; i < mountains; i++) {
		if (random() < 0.2) {
			mountainObjs[i].position.x = random(width);
			mountainObjs[i].position.y = random(height);
		} else {
			mountainObjs[i].remove();
		}
	}
	for (let i = 0; i < props; i++) {
		if (random() < 0.2) {
			propObjs[i].position.x = random(width);
			propObjs[i].position.y = random(height);

			//if it's colliding with something bump it over
			for (let j = 0; j < i; j++) {
				propObjs[i].collide(propObjs[j]);
			}
		} else {
			propObjs[i].remove();
		}
	}
}

function windowResized() {
	resizeCanvas(windowWidth, windowHeight);
}
