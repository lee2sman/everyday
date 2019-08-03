//starting with sketch 63 --> converting to a runner/game let's see how it goes
let f, words, totalRooms = 9, room = []
const titles = [
  'fort',
  'base',
  'institute',
  'foundation',
  'museum',
  'outpost',
  'mission',
  'mall',
  'limited',
  'exchange',
  'provisions',
  'economic Zone',
  'center',
  'bank',
  'union'
]

function preload(){
  words = loadJSON('objects.json')
  f = loadFont('cocogoose_ultralight_italic.ttf')
}

function setup(){
  createCanvas(windowWidth, windowHeight)
  noStroke()

  background(random(150),random(50),random(120))
  for (let i = 0; i < totalRooms; i++){
    room[i] = new Room() 
  }
  for (let i = 0; i < totalRooms; i++){
    room[i].connectRoom()
  }
  for (let i = 0; i < totalRooms; i++){
    room[i].drawRoom()
  }

  roomName()
}

function roomName(){
  fill(100)
  textFont(f)
  textSize(36)
	if (width < 700){textSize(24)} //barely mobile-responsive!
  let pickWord = round(random(words.objects.length-1))
  let biz = round(random(titles.length-1))
  text(words.objects[pickWord]+' '+titles[biz],20,40)
}

class Room{
  constructor(){
    this.w = random(40,width/3)
    this.h = random(40,height/3)
    this.x = random(40,width) 
    this.y = random(40,height) 
    this.midcoordX = this.x + (this.w)/2
    this.midcoordY = this.y + (this.h)/2

  }

  drawRoom(){
    noStroke()
    fill(100)
    //fill(random(20,100))
    rect(this.x,this.y,this.w,this.h)
  }

  connectRoom(){
    stroke(random(50,120))
    strokeWeight(15)
    //draw Horiz line
    this.pickRoom = round(random(room.length-1))
    //room[pickRoom].x
    line(this.midcoordX,this.midcoordY,room[this.pickRoom].midcoordX,this.midcoordY)
    line(room[this.pickRoom].midcoordX,this.midcoordY,room[this.pickRoom].midcoordX,room[this.pickRoom].midcoordY)
    //line(room[this.pickRoom].x,room[this.pickRoom].y,room[this.pickRoom].x,this.midCoordY)
  }
  
}
