//lee tusman 2023 cc4.0
const coolors = ["#606c38", "#283618", "#fefae0", "#dda15e", "#bc6c25"];
function setup() {
  createCanvas(windowWidth,windowHeight)
  
  for (let y=0;y<windowHeight/200;y++){
  for (let x=0;x<windowWidth/200;x++){
  let g = createGraphics(200,200)
	g.noStroke();
        makePattern(g)
  image(g,x*200,y*200)
  }
 }

}

function makePattern(g) {
  //background
	g.background("#faedcd");
	//color selector

  let times = float(random(4,15))
  for (let i=0;i<times;i++){
  weave(g)
  }
  //frame
  g.fill("#faedcd");
  g.rect(0,0,g.width,10)
  g.rect(0,g.height-10,g.width,10)
  g.rect(0,0,10,g.height)
  g.rect(g.width-10,0,10,g.height)
}

function weave(g){
	g.fill(random(coolors));
	//weave
    let clickX = random(g.width)
    let clickY = random(g.height)
	if (random() < 0.5) {
		g.rect(0, clickY-5, width, 10);
	} else {
		g.rect(clickX-5, 0, 10, height);
	}

}
