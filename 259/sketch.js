let timer = 5000
function setup() {
    createCanvas(windowWidth, 4800) //height of all photos together
    reroll()
}
function reroll(){
  clear()
  const photos = selectAll('img')

    fill(200, 0, 0);
    const lines = photos.length;

    let x_array = [];
    for (let i = 0; i < lines; i++) {
	    x_array[i] = random(width);
    }
    let y_array = [];
    y_array[0] = 40;
    for (let i = 1; i < lines; i++) {
	    y_array[i] = y_array[i - 1] + 800;
    }

    strokeWeight(random(30,80))
    fill(255)


    for (let i = 0; i < lines ; i++) {

	    line(x_array[i], y_array[i]+400, x_array[i + 1], y_array[i + 1]+400)
            photos[i].position(x_array[i]-photos[i].width/2,y_array[i]-photos[i].height/2+400)
    }

  //first line from 'offpage' to middle of first image
    line(random(width),0,x_array[0],y_array[0]+400)
  //last line to 'offpage' below
    line(x_array[x_array.length-1],y_array[y_array.length-1]+400,random(width),height+400)
}
function mousePressed(){
 reroll()
}
function draw(){
  if (millis()>timer){
    reroll()
    timer+=5000
  }
}
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
