//sketch 63 which started as a dungeon generator, the most initial steps, but left as 'art' of the imagination
let player, npc = [], totalNPCs = 8
let f, worldColor, words, totalRooms = 9, room = []
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

  worldColor = color((random(150),random(50),random(120)))
  for (let i = 0; i < totalRooms; i++){
    room[i] = new Room() 
  }
  for (let i = 0; i < totalRooms; i++){
    room[i].connectRoom()
  }
  for (let i = 0; i < totalRooms; i++){
    room[i].drawRoom()
  }

  createPlayer()
  createNPCs()

  //----------------------------------------------EVENTS LOOP WILL BEGIN HERE
  nameRoom()

  drawSprites()
  //----------------------------------------------EVENTS LOOP END
}

function draw(){

  background(worldColor)
  for (let i = 0; i < totalRooms; i++){
    room[i].connectRoom()
  }
  for (let i = 0; i < totalRooms; i++){
    room[i].drawRoom()
  }

  checkKeys()
  checkOffScreen()

  drawSprites()
}

function nameRoom(){
//show a name
  fill(100)
  textFont(f)
  textSize(36)
	if (width < 700){textSize(24)} //barely mobile-responsive!
  let pickWord = int(random(words.objects.length))
  let biz = int(random(titles.length))
  text(words.objects[pickWord]+' '+titles[biz],20,40)
  //print (words.objects[pickWord])

}



class Room{
  constructor(){
    this.w = round(int(random(40,width/3))/10)*10
    this.h = round(int(random(40,height/3))/10)*10
    this.x = round(int(random(40,width))/10)*10
    this.y = round(int(random(40,height))/10)*10
    this.midcoordX = round((this.x + int(this.w)/2)/10)*10
    this.midcoordY = round((this.y + int(this.h)/2)/10)*10
    this.pickRoom = int(random(room.length))

  }

  drawRoom(){
    noStroke()
    fill(100)
    //fill(random(20,100))
    rect(this.x,this.y,this.w,this.h)
  }

  connectRoom(){
    stroke(100)
    strokeWeight(15)
    line(this.midcoordX,this.midcoordY,room[this.pickRoom].midcoordX,this.midcoordY)
    line(room[this.pickRoom].midcoordX,this.midcoordY,room[this.pickRoom].midcoordX,room[this.pickRoom].midcoordY)
  }
  
}

function createPlayer(){
    startRoom = int(random(totalRooms)) 
    tempX = room[startRoom].x + round(random(room[startRoom].w))
    tempY = room[startRoom].y + round(random(room[startRoom].h))
    player = createSprite(tempX,tempY,10,10)

}

function createNPCs(){
  for (let i = 0; i < totalNPCs;i++){
    startRoom = int(random(totalRooms)) 
    tempX = room[startRoom].x + round(random(room[startRoom].w))
    tempY = room[startRoom].y + round(random(room[startRoom].h))
    npc[i] = createSprite(tempX,tempY,10,10)
  }
}

function changeNPCpos(){
  for (let i = 0; i < totalNPCs;i++){
    startRoom = int(random(totalRooms)) 
    tempX = room[startRoom].x + round(random(room[startRoom].w))
    tempY = room[startRoom].y + round(random(room[startRoom].h))
    npc[i].position.x = tempX
    npc[i].position.y = tempY
  }
}

function checkOffScreen(){
  if (player.position.x>width ){
    player.position.x = 10
    createRooms()
    changeNPCpos()
  } 

  if (player.position.x<0){
    player.position.x = width - 10 
    createRooms()
    changeNPCpos()
  } 

  if (player.position.y>height){
    player.position.y = 10
    createRooms()
    changeNPCpos()
  } 

  if (player.position.y<0){
    player.position.y = height - 10 
    createRooms()
    changeNPCpos()
  } 
}

function createRooms(){
    for (let i = 0; i < totalRooms; i++){
      room[i] = new Room()
    }
  
  for (let i = 0; i < totalNPCs; i++){

    startRoom = int(random(totalRooms)) 
    tempX = room[startRoom].x + round(random(room[startRoom].w))
    tempY = room[startRoom].y + round(random(room[startRoom].h))

  }
}

function checkKeys(){
    if (keyIsDown(UP_ARROW)){
      player.position.y-=5
    } else if (keyIsDown(DOWN_ARROW)){
      player.position.y+=5
    } else if (keyIsDown(RIGHT_ARROW)){
      player.position.x+=5
    } else if (keyIsDown(LEFT_ARROW)){
      player.position.x-=5
    }
    return false 
}

