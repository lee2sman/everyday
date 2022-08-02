const s = ( sketch ) => {

  let x = 100;
  let y = 100;

  sketch.setup = () => {
    sketch.createCanvas(100, 100);

    sketch.noStroke();
    sketch.textSize(30);

    sketch.fill(sketch.random(255),sketch.random(255),sketch.random(255));
	  //occasionally it should be blacker
	  if (sketch.random()<0.07){
	    sketch.fill(sketch.random(25),sketch.random(25),sketch.random(25));
	  }

    sketch.rect(0,0,100,100);

    for (let x = 0; x < sketch.width; x+=50){
      for (let y = 0; y < sketch.height; y+=50){
        if (sketch.random()<0.15){
	  
	  //random add new mini color square
	    sketch.fill(sketch.random(255),sketch.random(255),sketch.random(255));
	  //occasionally it should be blacker
	  if (sketch.random()<0.025){
	    sketch.fill(sketch.random(25),sketch.random(25),sketch.random(25));
	  }
	    sketch.rect(x,y,50,50);
	    
	  //random add letter
	    if (sketch.random()<0.05){
	        sketch.fill(sketch.random(255),sketch.random(255),sketch.random(255));
	        let abc = 'abcdefghijklmnopqrstuvwxyz'
	        sketch.text(abc[sketch.ceil(sketch.random()*abc.length)],x+14,y-12);
	    }

	  //random add circle
	    if (sketch.random()<0.12){
	        sketch.fill(sketch.random(255),sketch.random(255),sketch.random(255));
                sketch.ellipse(x+25,y+25,50);
	    }
        }
      }
    }

  };

};

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

