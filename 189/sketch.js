//demake of 188
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
  if (windowWidth>windowHeight){ 
	createCanvas(windowWidth/2,windowHeight,WEBGL);
    select('canvas').position(windowWidth/4,0)
  } else {
	createCanvas(windowWidth,windowHeight,WEBGL);
}
  select('body').style('background-color','black')
	noStroke();

  translate(-width/2,-height/2)
  drawFace()
  drawFeatures()
  drawHair()
}

function drawFace(){
  let _color = random(faceColor)

  fill(_color);
  ellipse(width/2,height/2,width/2,height*3/4)
}

function drawHair(){
  let _color = random(hairColor)

  fill(_color);
  beginShape()
  for (let i = 0; i < 80; i++){
  vertex(random(width/4,width*3/4),random(height/16,height/3))
  }
  endShape()
}

function drawFeatures(){

  let _color = random(hairColor)

  //eyes
  fill(_color);
  ellipse(width/2-40,height/3,40,40)
  ellipse(width/2+40,height/3,40,40)
  //mouth
  ellipse(width/2,height*3/4,80,40)
}
