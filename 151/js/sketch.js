let canvas;
let textureImgs = [];
let customers = [];
let fonttype;
let current

preload = () => {
	for (let i = 0; i < 8; i++) {
		textureImgs[i] = loadImage("assets/textures/" + i + ".jpg");
	}
//	fonttype = loadFont("assets/font/Multicolore Pro.otf");
	fonttype = loadFont("assets/font/Florsn13.ttf");
};

setup = () => {
	canvas = createCanvas(windowWidth, windowHeight, WEBGL);

	noStroke();

	textFont(fonttype);
	textAlign(CENTER);

	fill(0);
	textSize(24);

	//load customers
	for (let i = 0; i < 20; i++) {
		customers[i] = new Customer();
	}

	//test
  //
	current=int(random(customers.length))
	print(
		customers[0].name +
			" of " +
			customers[0].place +
			" desires a " +
			customers[0].item
	);
};

draw = () => {
  background('#d0c8b1')
	customers[current].shopkeeper();
	customers[current].talk();
};

windowResized = () => {
	resizeCanvas(windowWidth, windowHeight);
};

mousePressed = () => {
	current=int(random(customers.length))
};

keyPressed = () => {};

capFirst = string => {
	return string.charAt(0).toUpperCase() + string.slice(1);
};

getName = () => {
	let cons = "bcdfghjklmnpqrstvwxz";
	let vowel = "aeiouy";
	let namelength = int(random(3, 7));
	let name = "";
	for (i = 0; i < namelength; i++) {
		name += cons.charAt(int(random(cons.length)));
		name += vowel.charAt(int(random(vowel.length)));
	}
	name = capFirst(name);
	return name;
};

getObject = () => {
	//let category = int(random(6))
	let item;
	switch (int(random(6))) {
		case 0:
			item = random(items) + " of " + capFirst(random(materials));
			break;
		case 1:
			item = random(herbs);
			break;
		case 2:
			item = random(plants);
			break;
		case 3:
			item = random(liquids);
			break;
		case 4:
			item = random(scents);
			break;
		case 5:
			item = random(materials) + " " + random(artifacts);
	}
	return capFirst(item);
};

class Customer {
	constructor() {
		this.name = getName();
		this.place = getName();
		this.item = getObject();
		this.tex = random(textureImgs);

		//face
	  this.faceW=random(30,40)
	  this.faceH=random(40,55)
		this.eyeH = random(7, 14);
		this.hairC = color(random(100), random(100), random(34));
		this.hairW = random(15, 55);
		this.hairVolume = random(-30, -80);
	}

	talk() {
		//print("hi i'm " + this.name);
		fill(0);
	  push()
	  translate(0,100)
		text(this.name + " of " + this.place + " desires a " + this.item, 0, 0);
	  pop()
	}
	shopkeeper = () => {
		//loc
		//translate(-width/4,0)

		//ellipsoid(30, 40, 40);
		//texture(textureImgs[0]);
		texture(this.tex);

		ellipsoid(this.faceW, this.faceH, 40);

		//eyes
		fill(255);
		//left eye
		push();
		translate(-15, -15, 40);
		ellipse(0, 0, 10, this.eyeH);
		fill(0);
		ellipse(0, 0, 5);
		pop();

		fill(255);
		//right eye
		push();
		translate(15, -15, 40);
		ellipse(0, 0, 10, this.eyeH);
		fill(0);

		ellipse(0, 0, 5);
		pop();

		//mouth
		push();
		translate(0, 15, 40);
		fill(100, 0, 0, 205);
		ellipse(0, 0, 30, 10);
		pop();

		//hair
		push();
		fill(this.hairC);
		beginShape();
		curveVertex(-this.hairW, -15);
		curveVertex(-this.hairW, -15);
		curveVertex(-35, this.hairVolume);
		curveVertex(25, this.hairVolume);
		curveVertex(this.hairW, -15);
		curveVertex(this.hairW, -15);

		endShape();
		pop();
	};
}
