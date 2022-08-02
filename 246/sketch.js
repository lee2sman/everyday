const adjs = ["Action","Alex","Andre","Apathy","Arms","Averick","Bad","Bean","Big","Bizzy","Black","Bobby","Boosie","Brotha","Brother","Bun","Bushwick","Busta","Camron","Canibus","Chief","Chip","Chris","Chubby","Chuck","Cole","Common","Coolio","Craig","Crooked","Darth","Dirty","Dopey","Dr.","Earl","Elbow","Fabulous","Fat","Fence","Fifteen","Freddie","Garage","Ghostface","Giant","Good","Great","Green","Guns","Guru","Height","Hoppy","Ice","Immortal","Inspectah","Iron","Itchy","Jaded","Jay","Joey","Jump","Kendrick","Kid","Killer","King","Knife","Kool","Krayzie","Lanky","Lauryn","Layzie","Legs","Love","Lovely","Lupe","Mac","Masta","MC","Mean","Medium","Meek","Meet","Method","Moons","Mos","Nas","Nate","Notorious","Paul","Pimp","Pisco","Presence","Prince","Prodigy","Pusha","Quantity","Ravine","Regal","Rick","Rittz","Rotten","Royce","Saint","Sault","Scarface","Sedge","Sheen","Sick","Sixteen","Skinny","Slick","Slug","Smelly","Smuth","Snoop","Sour","Spleen","Structure","Suns","Talib","Tall","Tech","Toadally","Toaday","Tons","Tread","Twisted","Tyler","Usual","Utter","Vinnie","Wally","Wealth","Wiz"]
let cube = 100;
let result;

function preload() {
  influences = loadStrings('peoplestuff.txt');
}

function setup(){
  createCanvas(cube,cube);
  noStroke()
  background(0);
  frameRate(1)
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

  removeElements()
  createP(random(influences))

}

