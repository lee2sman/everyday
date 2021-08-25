//a fast lil script inspired by https://pixelfaces.io/
let blockW, blockH;
let faceStyles = 4;
let faces = [
	"0000011011101110",
	"0110011011111111",
	"0000011001100110",
	"0000011011101110",
	"0000011111111111",
	"0110011011111111",
	"0110111111110110"
];
let hairs = [
	"0111100100010001",
	"01101000000000000",
	"0000100100000000",
	"1001100110011001",
	"0110000000000000",
	"1111100000000000"
];
let features = [
	"1000000100000000",
	"1001000000000000",
	"0000000000001001",
	"0000000000000001",
	"0000011100000000",
	"0000000000001111",
	"0000000001100000"
];
let faceColor = [
	"#A49393",
	"#eed6d3",
	"#e8b4b8",
	"#67595e",
	"#e7d2cc",
	"#eeede7",
	"#13292A"
];
let hairColor = [
	"#b9b7bd",
	"#868b8e",
	"#4d0011",
	"#4b443c",
	"#914955",
	"#212223",
	"#d5c1b9"
];
let featureColor = ["#c44b4f", "#e4e5e8", "#adb3bc", "#04d3bc", "#00e0eb"];

function setup() {
	let can = createCanvas(windowWidth / 4, windowHeight / 4);
	can.position(windowWidth / 2, windowHeight / 2);
	//createCanvas(windowWidth,windowHeight)
	noStroke();

	blockW = width / 4;
	blockY = height / 4;

	createP("Avatar generator 0.2.1");

	let avatarName = "";
	for (let i = 0; i < 6; i++) {
		avatarName += "&#96" + floor(random(22) + 10);
	}

	createP("Name: " + avatarName);

	let occupation = "";
	for (let i = 0; i < 6; i++) {
		occupation += "&#96" + floor(random(92) + 10);
	}
	createP("Occupation: " + occupation);

	for (let y = 0; y < height; y += blockH) {
		for (let x = 0; x < width; x += blockW) {
			buildFace(x, y);
		}
	}
}

function buildFace(_x, _y) {
	let face = random(faces);
	let hair = random(hairs);
	let feature = random(features);

	//build face
	let counter = 0;
	let c = random(faceColor);
	for (let y = 0; y < height; y += blockY) {
		for (let x = 0; x < width; x += blockW) {
			if (face.charAt(counter) == "1") {
				fill(c);
			} else {
				fill(255);
			}

			rect(_x + x, _y + y, blockW, blockY);

			counter++;
		}
	}

	//add hair
	counter = 0;
	c = random(hairColor);
	for (let y = 0; y < height; y += blockY) {
		for (let x = 0; x < width; x += blockW) {
			if (hair.charAt(counter) == "1") {
				fill(c);
				rect(x, y, blockW, blockY);
			}
			counter++;
		}
	}

	//sprinkle features
	counter = 0;
	c = random(featureColor);
	for (let y = 0; y < height; y += blockY) {
		for (let x = 0; x < width; x += blockW) {
			if (feature.charAt(counter) == "1") {
				fill(c);
				rect(x, y, blockW, blockY);
			}
			counter++;
		}
	}
}
