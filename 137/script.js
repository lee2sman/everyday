//this code is lazy sorry it's just a rapid code sketch
let locations = [
	"ancient ruin",
	"town or village",
	"a woods/forest",
	"castle",
	"safe house",
	"place of worship",
	"battlefield",
	"barren landscape",
	"gardens",
	"coastline",
	"city",
	"palace",
	"an island",
	"library",
	"palace",
	"school",
	"slums",
	"hospital",
	"bazaar",
	"place of worship",
	"park",
	"river",
	"a new home",
	"a local treasure",
	"monument"
];
let beings = [
	"a new/old foe",
	"a wandering spirit",
	"a lone traveller",
	"a tyrant king",
	"a scholar",
	"an ancient evil",
	"an unknown presence",
	"a beast",
	"the plants",
	"a playful creature",
	"a new/old love",
	"a bandit leader",
	"a new species",
	"political leader",
	"worker",
	"celebrity",
	"artist",
	"wildlife",
	"religious leader",
	"homeless",
	"lost soul",
	"friend",
	"immigrant",
	"trader",
	"fortune teller",
	"citizens"
];
let events = [
	"natural disaster",
	"lost on way",
	"met an interesting stranger",
	"extreme weather",
	"cross dangerous terrain",
	"attacked at camp",
	"taken in by strangers",
	"saw death",
	"wild animal",
	"a vision",
	"an illness",
	"path blocked",
	"a sign",
	"festival",
	"crime",
	"party",
	"performance",
	"meal with strangers",
	"ceremony",
	"fire",
	"protest",
	"patrol",
	"local tradition",
	"injustice",
	"royal encounter",
	"a game"
];
let things = [
	"an ancient artefact",
	"an unknown object",
	"a book",
	"a curse or spell",
	"a lost treasure",
	"a trinket",
	"a mechanical contraption",
	"a map",
	"a small box",
	"a weapon",
	"a toy",
	"a new food",
	"the remains of a past visitor",
	"secret",
	"instrument",
	"book",
	"local delicacy",
	"story",
	"hidden door",
	"piece of history",
	"ornament",
	"art",
	"traditional clothing",
	"gift",
	"reminder of home",
	"occult symbol"
];
function setup() {
	noCanvas();

	createH1("the situation");
	createBr();
	createP("start here: " + newLocation());
	let p = selectAll("p");
	p[p.length - 1].style("background-color", "lightblue");
	createP("why are you here?");
	createP("how long have you been here?");
	createBr();

	//scene loop
	sceneLoop();

	let alternate = createButton("actually, no...");
	alternate.position(windowWidth-windowWidth/20, 10);
	alternate.mousePressed(alternative);
}
function sceneLoop() {
	eventBtn = createButton("what happens next");
	p = selectAll("p");
	p[p.length - 1].style("background-color", "lightgreen");

	createBr();
	eventBtn.mousePressed(triggerEvent);
}

function alternative() {
	newChoice = [
		"you reflect. make an entry about an event from the past",
		"what's happening in the world at large?",
		"what have you recently learned about survivial?"
	];
	createP(newChoice[int(random(newChoice.length - 1))]);
}
function triggerEvent() {
	createP("You decide to travel to: " + newLocation());
	createBr();
	createP("why are you traveling here?");
	createP("what happens along the way?: " + newEvent());

	createBr();
	let conjure = createButton("who's there? what do you find?");
	p = selectAll("p");
	p[p.length - 1].style("background-color", "#EB66D4");

	createBr();
	conjure.mousePressed(triggerBeingThing);
}
function triggerBeingThing() {
	createP("who's waiting for you?: " + newBeing());
	createBr();
	createP("what do you find there?: " + newThing());
	createBr();

	sceneLoop();
}
function newLocation() {
	return locations[int(random(locations.length - 1))];
}
function newEvent() {
	return events[int(random(events.length - 1))];
}
function newThing() {
	return things[int(random(things.length - 1))];
}
function newBeing() {
	return beings[int(random(beings.length - 1))];
}
