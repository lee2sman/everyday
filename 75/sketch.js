let room = [];
let roomLoc = [];
let totalRooms = 100;
let fName;

function preload(){
  fName = loadFont('assets/Inconsolata-Bold.ttf');
}

function setup(){
  createCanvas(windowWidth,windowHeight);
  rectMode(CENTER);
  textFont(fName);

  //create Rooms and draw them
  for (let i = 0; i < totalRooms; i++){
    //create rooms
    room[i] = new Room();
    //bad code?
    //store each room's x, y, w, h in an array
    roomLoc[i] = room[i].returnRoom();
	//print(roomLoc[i][0]);
  }
	//print(roomLoc);
}

function draw(){
  background(0);
  //draw rooms
  for (let i = 0; i < room.length; i++){
    strokeWeight(1);
    room[i].drawRoom();
  }
  //connect them
  for (let i = 0; i < room.length-1; i++){
    //DRAW HALLWAYS HERE
    stroke(room[i].c);
    strokeWeight(10);
    line(roomLoc[i][0],roomLoc[i][1],roomLoc[i][0],roomLoc[i+1][1]);
    line(roomLoc[i][0],roomLoc[i][1],roomLoc[i+1][0],roomLoc[i][1]);
  }


  fill(220);
  textSize(48);
  text('d'+int(random(10,99))+'ngeon',100,100);

}


class Room {
  constructor(){
    this.w = random(width/16,width/4);
    this.x = random(width);
    this.h = random(height/16,height/4);
    this.y = random(height);
    this.c = color(random(255),random(255),random(255));
  }

   

  drawRoom(){
    fill(color(this.c));
    rect(this.x,this.y,this.w,this.h);
  }

  returnRoom(){
    return [this.x,this.y,this.w,this.h];
  }
}
