//words variation on 46
//contains audio recording 'Walking Home' by Charel Sytze
let leepots, teapot, pots = [];
let orientation;
let heartbleed, f;
let loadedUp = false;
let rooms = [ "aerary", "aircraft cabin", "airport lounge", "alcove", "anatomical theatre", "anechoic chamber", "antechamber", "anteroom", "armory", "assembly room", "atelier", "attic", "auditorium", "backroom", "ballroom", "basement", "bathroom", "bedroom", "billiard room", "boardroom", "boiler room", "boudoir", "breakfast nook", "breezeway", "cabin", "cafeteria", "caldarium", "cellar", "changing room", "chapel", "classroom", "clean room", "cloakroom", "closet", "cold room", "common room", "computer lab", "conference room", "conservatory", "control room", "conversation pit", "corner office", "courtroom", "cry room", "darkroom", "den", "dining room", "dormitory", "drawing room", "dressing room", "electrical room", "emergency room", "engine room", "equipment room", "fallout shelter", "family room", "fitting room", "foyer", "game room", "garage", "guest room", "gym", "hotel room", "kitchen", "laundry room", "library", "living room", "lobby", "locker room", "loft", "lounge", "mailroom", "map room", "motel room", "mud room", "newsroom", "nursery", "office", "panic room", "pantry", "parlor", "playroom", "pool room", "print room", "rec room", "salon", "sauna", "schoolroom", "showroom", "sitting room", "staff room", "stockroom", "storm cellar", "studio", "study", "sunroom", "tearoom", "throne room", "transmission control room", "tv room", "utility room", "waiting room", "washroom", "water closet", "weight room", "wine cellar", "wiring closet", "workshop" ]

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);

  heartbleed = loadSound('assets/walk.mp3',function(){heartbleed.loop()});

  leepots = 10;
  normalMaterial(); // For effect
 
  for (let i = 0; i < leepots; i++){
    pots[i] = new Teapot();
  }

	f = loadFont('assets/Abandon.ttf',function(){
	  //textAlign(RIGHT);
	  textFont(f);
	  textSize(96);
	  loadedUp = true;
	});
 
}

function draw(){
	background(0);

  for (let i = 0; i < leepots; i++){
    pots[i].display();
    pots[i].move();
  }
  
}


class Teapot{
  constructor(){
    this.x = random(-width/2,width/2,);
    this.y = random(-height/2,height/2);
    this.potScale = random(0.5,2);
    this.xRot = random(0.05);
    this.yRot = random(0.05);
    this.word = rooms[round(random(rooms.length-1))];
    this.w = random(200,500);
    this.h = random(200,500);
  }

  display(){
    push();  
    rotateX(this.xRot);
    rotateY(this.yRot);
    translate(this.x, this.y);
    scale(this.potScale);
    text(this.word,this.x,this.y,this.w, this.h);

	  //ADDITIONAL WORD at 90 DEG
    push();
    translate(this.x+this.w,this.y);
    rotateY(PI/2);
    text(this.word,0,0,this.w,this.h);
    pop();
//END ADDITIONAL WORD

    pop();
  }

  move(){
    this.x--;
 
    if(this.x<-(width/2)){
      this.x = width/2;
      this.y = random(-height/2,height/2);
      this.word = rooms[round(random(rooms.length-1))];
    }
  }
  
}
  

