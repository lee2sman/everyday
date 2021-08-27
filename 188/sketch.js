//a fast lil script inspired by https://pixelfaces.io/
//a rework of 186,187
//organized crowd
let blockW=30, blockH=30;
let faceStyles = 4;
let faces = [
        "0000111111111111",
        "0110111111110110",
        "0110111111111111"
];
let hairs = [
        "0000000000000000",
        "0000000000000000",
        "0000000000000000",
        "0000000000000000",
        "0000000000000000",
        "1111000000000000",
        "0110100100010001",
        "0111100110001000",
        "1110100110011001",
        "0111000100000000",
        "0111100010000000",
        "1110000100000000",
        "0111100110011001",
        "0110000100000000",
        "1111100110011111",
        "0000000000000000",
        "0110100110011001",
        "0000000001101001",
        "0110100100000000",
        "0000000001100000"
];
let features = [
        "0000000000000000",
        "0000000000000000",
        "0000000000000000",
        "0000000000000000",
        "0000000000000000",
        "0000000000000000",
        "0000000000000000",
        "0000000000000000",
        "0000000000000000",
        "0000000000000000",
        "0000100100000000",
        "1001000000000000",
        "0000000010011111",
        "0000000000001001",
        "0000000000001000",
        "0000000000000001",
        "0000000000001111",
        "0000000010000000",
        "0000000010011111",
        "0000000010011001",
];
let faceColor = [
	"#A49393",
  "#fdf5e6","#deb887","#c3b091","#e5e4e2","#8d5524","#c68642","#e0ac69","#f1c27d","#ffdbac","#eebb99","#deaa88","#fffaf0","#fff0f5","#e6be8a","#ffcc99","#d2b48c","#f0ead6","#eae0c8","#f3e5ab","#efdfbb"
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
	//let can = createCanvas(windowWidth / 4, windowHeight / 4);
	//can.position(windowWidth / 2, windowHeight / 2);
	createCanvas(windowWidth,windowHeight)
	noStroke();

	createP("Avatar generator 0.2.2");

  for (let y = 0; y < height; y+=200){
    for (let x = 0; x < width; x+=200){
	let face = random(faces);
	let hair = random(hairs);
	let feature = random(features);


			buildFace(x,y,face,hair,feature);
    }
  }
}

function buildFace(_x, _y, _face, _hair,_feature) {
	//build face
	let counter = 0;
	let c = random(faceColor);
  print(_face)
	for (let y = 0; y < blockH*4; y += blockH) {
		for (let x = 0; x < blockW*4; x += blockW) {
			if (_face.charAt(counter) == "1") {
				fill(c);
			} else {
				fill(255);
			}

			rect(_x + x, _y + y, blockW, blockH);

			counter++;
		}
	}

	//add hair
	counter = 0;
	c = random(hairColor);
  print(_hair)
	for (let y = 0; y < blockH*4; y += blockH) {
		for (let x = 0; x < blockW*4; x += blockW) {
			if (_hair.charAt(counter) == "1") {
				fill(c);
				rect(_x+x,_y+y, blockW, blockH);
			}
			counter++;
		}
	}

	//sprinkle features
	counter = 0;
	c = random(featureColor);
  print(_feature)
	for (let y = 0; y < blockH*4; y += blockH) {
		for (let x = 0; x < blockW*4; x += blockW) {
			if (_feature.charAt(counter) == "1") {
				fill(c);
				rect(_x+x,_y+y, blockW, blockH);
			}
			counter++;
		}
	}

}
