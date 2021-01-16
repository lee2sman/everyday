//lee2sman
//for use as a starter for title / intertitle sequences for generative self-playing story-animation-vids for an exhibition 
const generalPlaces = [
	"warehouse",
	"dock",
	"field",
	"lot",
	"swamp",
	"zone",
	"autonomous region",
	"port",
	"alley",
	"unit",
	"territory",
	"room",
	"space",
	"area"
];
const themes = [
	"Birth",
	"Introduction",
	"Reveal",
	"Leaving",
	"Exiting",
	"Embarking",
	"Parting",
	"Delivery",
	"Donation",
	"Presentation",
	"Endowment",
	"Reveal",
	"Exposure",
	"Separation",
	"Death",
	"Abandonment",
	"Awakening",
	"Rise",
	"Improvement",
	"Learning",
	"Education",
	"Separation",
	"Removal",
	"Rejection",
	"Elimination",
	"Formal",
	"Practiced",
	"Routine",
	"Wounding",
	"Hurting",
	"Insulting",
	"Giving",
	"Departure",
	"Victory",
	"Trickery",
	"Involuntary"
];
let properPlace = "ABCDEFGHIJKLMNOPQRSTUVXYZ1234567890";
let f, f2;
let textX, situations, situation, theme;
let placeNameTimer, themeNameTimer;
function preload() {
	f = loadFont("assets/overpass-mono-bold.ttf");
	f2 = loadFont("assets/DS-TERM.TTF");
	situations = loadStrings("assets/situations.txt");
}

function setup() {
	createCanvas(windowWidth, windowHeight);

	situation = random(situations);
	textX = width;
	title =
		random(generalPlaces) +
		" " +
		properPlace.charAt(int(random(properPlace.length)));
	theme = random(themes);
	placeNameTimer = 3000;
	themeNameTimer = 6000;
}

function draw() {
	background(226, 226, 216);
	//
	//CENTER STATIC
	textAlign(CENTER, CENTER);
	textFont(f);
	textSize(144);
	text(title, width / 2, height / 2);

	//BOTTOM SCROLL TEXT
	textAlign(LEFT);
	textFont(f2);
	textSize(68);
	text(situation, textX, height - 50);
	textX -= 5;
	if (textX < 0) {
		textX = width;
		title =
			random(generalPlaces) +
			" " +
			properPlace.charAt(int(random(properPlace.length)));
	}

	//TOP LEFT
	textSize(88);
	text(theme, 20, 20);

	if (millis() > placeNameTimer) {
		situation = random(situations);
		placeNameTimer += 6000;
	}
	if (millis() > themeNameTimer) {
		theme = random(themes);
		themeNameTimer += 6000;
	}
}
