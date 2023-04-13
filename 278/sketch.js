let maxHair = 8;
let maxSetOfEyes = 4;
let maxFace = 3;
let eyes = [];
let hair = [];
let face = [];
let whichFace, whichHair, whichEyes;

function preload() {
	for (let i = 0; i <= maxSetOfEyes; i++) {
		eyes[i] = loadImage("eyes" + i + ".png");
	}
	for (let i = 0; i <= maxHair; i++) {
		hair[i] = loadImage("hair" + i + ".png");
	}
	for (let i = 0; i <= maxFace; i++) {
		face[i] = loadImage("face" + i + ".png");
	}
}
function setup() {
	createCanvas(400, 400);

	imageMode(CENTER);
	chooseFeatures();
}

function draw() {
	background(248);

	image(whichFace, width / 2, height / 2, width / 2, height);
	image(whichHair, width / 2, height / 8, width / 2, height / 3);
	image(whichEyes, width / 2, height / 2, width / 2, height / 6);
	fill(0);
	text(npcName, 20, 20);
}

function chooseFeatures() {
	whichFace = random(face);
	whichHair = random(hair);
	whichEyes = random(eyes);
	npcName = randomName();
}

function mousePressed() {
	chooseFeatures();
}

function keyPressed() {
	chooseFeatures();
}
function randomName() {
	let characters = "abcdefghijklmnopqrstuvwxyz";
	let nameStr = characters
		.charAt(Math.floor(Math.random() * characters.length))
		.toUpperCase();
	let nameLength = floor(random(4, 8));
	for (let i = 0; i < nameLength; i++) {
		nameStr += characters.charAt(Math.floor(Math.random() * characters.length));
	}
	return nameStr;
}
