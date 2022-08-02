const cube = 200;
function setup(){
  createCanvas(windowWidth,windowHeight);
  noStroke()
  textSize(30)
  background(0);
  frameRate(0.5)
}
function draw(){
  fill(random(255),random(255),random(255))

  if(random()<0.07){
      fill(random(25),random(25),random(25))
  }
  rect(0,0,cube,cube);

    for (let x = 0; x < width; x+=50){
      for (let y = 0; y < height; y+=50){

	if (random()<0.15){

	  //randomly add new mini color square
             fill(random(255),random(255),random(255))
          //occasionally it should be blacker
	  if (random()<0.025){
	    fill(random(25),random(25),random(25));
	  }
	    rect(x,y,cube/2,cube/2);
	}

	  //random add letter
	    if (random()<0.05){
	      fill(random(255),random(255),random(255))
	      let abc = 'abcdefghijklmnopqrstuvwxyz'
	      text(abc[ceil(random()*abc.length)],x+cube/4,y-cube/4);
	    }

	  //random add circle
	    if (random()<0.12){
	        fill(random(255),random(255),random(255));
                ellipse(x+25,y+25,50);
	    }

      }
    }

}

          
/*
let myp5 = [];

//import text file
var req = new XMLHttpRequest();
req.open('GET', 'thingsilike.txt');
req.onreadystatechange = function() {
  if (req.readyState == 4) {
    if (req.status == 200) {
      var lines = req.responseText.split(/\n/g);
      lines.forEach(function(line, i) {
        // 'line' is a line of your file, 'i' is the line number (starting at 0)
	// debug
	//console.log(lines[i]);

        myp5[i] = new p5(s);
  
	//create the paragraph
	var p = document.createElement('p');
        p.innerHTML = lines[i];

	//add to the document
        document.body.appendChild(p);


      });
    } else {
      // (something went wrong with the request)
    }
  }
}

req.send();

*/
