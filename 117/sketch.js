//HELLTH
let boardStep
let boardW = 15
let boardH = 1
let boardwidth
let pX = 2, pY = 0
let pHealth = 3
let pImg
let bImgs = []
let enemyImg = []
let offset = []
let enemy = []
let eCounter = 0
let stairImg, heartImg, trophyImg
let sfx = []
let level = 0
let f1, f2
let showHelp = false

function preload(){
  pImg = loadImage('https://cdn.glitch.com/5881c0e1-9576-465a-b37c-4895f6dadadd%2Fplayer.png?v=1576813451087') 
  bImgs[0] = loadImage('https://cdn.glitch.com/5881c0e1-9576-465a-b37c-4895f6dadadd%2Fbg0.png?v=1576811337919')
  bImgs[1] = loadImage('https://cdn.glitch.com/5881c0e1-9576-465a-b37c-4895f6dadadd%2Fbg1.png?v=1576811341000')
  bImgs[2] = loadImage('https://cdn.glitch.com/5881c0e1-9576-465a-b37c-4895f6dadadd%2Fbg2.png?v=1576811346265')

  //load font
  f1 = loadFont('https://cdn.glitch.com/5881c0e1-9576-465a-b37c-4895f6dadadd%2FRuohomatto.ttf?v=1576909446666')
  f2 = loadFont('https://cdn.glitch.com/5881c0e1-9576-465a-b37c-4895f6dadadd%2FQuintanar%20de%20la%20Orden.otf?v=1576906766817')
  
  //load sfx
  //move sound
  sfx[0] = loadSound('https://cdn.glitch.com/5881c0e1-9576-465a-b37c-4895f6dadadd%2Fmove.mp3?v=1576875668397')
  //descend sound
  sfx[1] = loadSound('https://cdn.glitch.com/5881c0e1-9576-465a-b37c-4895f6dadadd%2Fdescend.mp3?v=1576876722649')
  //ouch sound
  sfx[2] = loadSound('https://cdn.glitch.com/5881c0e1-9576-465a-b37c-4895f6dadadd%2Fouch.mp3?v=1576875675634')
  //lose sound
  sfx[3] = loadSound('https://cdn.glitch.com/5881c0e1-9576-465a-b37c-4895f6dadadd%2Flose.mp3?v=1576875660848')
  
  //load enemies
  enemyImg[0] = loadImage('https://cdn.glitch.com/5881c0e1-9576-465a-b37c-4895f6dadadd%2Fenemy0.png?v=1576818554798')
  enemyImg[1] = loadImage('https://cdn.glitch.com/5881c0e1-9576-465a-b37c-4895f6dadadd%2Fenemy1.png?v=1576820784029')
  enemyImg[2] = loadImage('https://cdn.glitch.com/5881c0e1-9576-465a-b37c-4895f6dadadd%2Fenemy2.png?v=1576819896623')
  enemyImg[3] = loadImage('https://cdn.glitch.com/5881c0e1-9576-465a-b37c-4895f6dadadd%2Fenemy3.png?v=1576819903944')
  enemyImg[4] = loadImage('https://cdn.glitch.com/5881c0e1-9576-465a-b37c-4895f6dadadd%2Fenemy4.png?v=1576819909915')
  enemyImg[5] = loadImage('https://cdn.glitch.com/5881c0e1-9576-465a-b37c-4895f6dadadd%2Fenemy5.png?v=1576820795552')
  enemyImg[6] = loadImage('https://cdn.glitch.com/5881c0e1-9576-465a-b37c-4895f6dadadd%2Fenemy6.png?v=1576820798272')
  enemyImg[7] = loadImage('https://cdn.glitch.com/5881c0e1-9576-465a-b37c-4895f6dadadd%2Fplayer7.png?v=1576820802832')
  enemyImg[8] = loadImage('https://cdn.glitch.com/5881c0e1-9576-465a-b37c-4895f6dadadd%2Fplayer8.png?v=1576820811233')
  enemyImg[9] = loadImage('https://cdn.glitch.com/5881c0e1-9576-465a-b37c-4895f6dadadd%2Fenemy9.png?v=1576820814103')

  //load stairs
  stairImg = loadImage('https://cdn.glitch.com/5881c0e1-9576-465a-b37c-4895f6dadadd%2Fstairs.png?v=1576871358168')
  //load heart
  heartImg = loadImage('https://cdn.glitch.com/5881c0e1-9576-465a-b37c-4895f6dadadd%2Fheart.png?v=1576907981105')
  //load trophy
  trophyImg = loadImage('https://cdn.glitch.com/5881c0e1-9576-465a-b37c-4895f6dadadd%2Ftrophy.png?v=1576907985799')
}

function setup(){
  createCanvas(windowWidth,windowHeight)
  
  //is screen wider or taller
  /*
  if (width > height){
      boardStep = height/boardW
  } else {
      boardStep = width/boardW
  }
  */
  boardStep = 100
  //now that we know screen is wider or taller, set boardwidth
  boardwidth = boardStep*boardW
  
  //set up text
  textAlign(LEFT, TOP)
  
  createLevel()
  loadScreen()
}

function loadScreen(){
  background(200)
  background(bImgs[2])
  background(bImgs[1])

  fill(0)
  textFont(f1)
  textSize(boardStep/1.75)
  text("Welcome to Hellth",boardStep/3,boardStep/3)
  textSize(boardStep/3)
  text("<<PRESS ANY KEY TO CONTINUE>>",boardStep/3,boardStep)
  text("Controls:",boardStep/3,boardStep*1.5)
  text("MOVE : ARROWS  /  WASD  /  hjkl",boardStep/3,boardStep*2)
  text("wait: .  descend: >/SPACE/RETURN",boardStep/3,boardStep*2.25)
  
  text('Commands:',boardStep/3,boardStep*3)
  text('(?) bring up this page',boardStep/3,boardStep*3.5)
  text('(r) reset game',boardStep/3,boardStep*3.75)
  text('(m) toggle mute on/off',boardStep/3,boardStep*4)
  
  text("lee2sman GPLv3 2019",boardStep/3,boardStep*4.5)
  
  //reset font size
  textFont(f2)
  textSize(boardStep)
}

function update(){
  //move player
  checkKeys()  
  
 if (!showHelp){
   noTint()
   background(255)
   image(bImgs[1],0,0,windowWidth,windowHeight)
   displayBoard()
   displayEnemies()
   displayStairs()
   displayPlayer()
   displayStats()
 } else {
   loadScreen()
   showHelp = false
 }

}

function createLevel(){
  eCounter = 0
  createBoard()
  for (let i = 0; i < level; i++){
    createEnemy()
  }
}

function displayBoard(){
  //first draw board
  fill(255)
  for (let x = 0; x < boardW; x++)
    {
      //for (let y = 0; y < boardH; y++){
        //image(bImgs[0], x*boardStep, 0*boardStep, boardStep, boardStep, offset[0],offset[x], 400, 400)
        image(bImgs[0], x*boardStep, height/2+pY*boardStep, boardStep, boardStep, offset[0],offset[x], 400, 400)
      //}
    }
}

function displayPlayer(){
  tint(200,0,200)
  image(pImg,pX*boardStep,height/2+pY*boardStep,boardStep,boardStep)
  noTint()
}

function displayEnemies(){
  for (let i = 0; i < enemy.length; i++){
    enemy[i].display()
  }
}

//this is the MOVE PLAYER function
function checkKeys(){
  //toggle mute / volume
  if (key === 'm'){
    if (getMasterVolume() == 1){
      masterVolume(0)
    } else {
      masterVolume(1)
    }
  }
  
  if (key === '?'){
    showHelp = true
  }
  
  //exit level
  if ((pX == stairX) && (pY == stairY)){
    if ((key === '>') || (keyCode === RETURN) || (keyCode === ENTER) || (key === ' ')){
      sfx[1].play()
      level++
      createLevel()
    }
  }
  
  //reset game
  if (key === 'r'){
    resetGame()
  }
  
  if ((keyCode === LEFT_ARROW || key === 'h' || key === 'a') && (pX > 0)){
    pX--
    moveSound()
    moveEnemies()
  } else if ((keyCode === RIGHT_ARROW || key === 'l' || key === 'd') && (pX < boardW-1)){
    pX++
    moveSound()
    moveEnemies()
  } else if ((keyCode === UP_ARROW || key === 'k' || key === 'w') && (pY > 0)){
    pY--
    moveSound()
    moveEnemies()
  } else if ((keyCode == DOWN_ARROW || key === 'j' || key === 's') && (pY < boardW-1)){
    pY++
    moveSound()
    moveEnemies()
  }  else if (key === '.'){
    moveSound()
    moveEnemies()
  }
}

function keyPressed() {
  update()
}

function resetGame(){
  level = 0
  pHealth = 3
  enemy = []
  createLevel()
}

function createBoard(){
  //pick offsets
  for (let i = 0; i < 10; i++){
    offset[i] = random(400)
  }
  //choose stairs location
  do {
      stairX = int(random(boardW))
      stairY = 0;//int(random(boardH))
    }
  while ((stairX == pX) && (stairY == pY))
}

function moveSound(){
  sfx[0].play()
}
  
function createEnemy(){
  enemy[eCounter] = new Enemy()
  eCounter++
}
  
function moveEnemies(){
 for (let i = 0; i < enemy.length; i++){
   enemy[i].move()
   enemy[i].checkCollision()
 }
}

function displayStairs(){
  image(stairImg,stairX*boardStep,height/2+stairY*boardStep,boardStep,boardStep)
}
  
function displayStats(){
  fill(0)
  noTint()
  if (width > height){
    //display hellth
    image(heartImg,boardwidth,0,boardStep,boardStep)
    text(pHealth,boardwidth,0)
    //display score
    image(trophyImg,boardwidth,boardwidth/2+boardStep,boardStep,boardStep)
    text(level,boardwidth,boardwidth/2)
  } else {
    //display hellth
    image(heartImg,boardStep,boardwidth,boardStep,boardStep)
    text(pHealth,0,boardwidth)

    //display score
    image(trophyImg,boardwidth/2+boardStep,boardwidth,boardStep,boardStep)
    text(level,boardwidth/2,boardwidth)
  }
}

function windowResized(){
  resizeCanvas(windowWidth,windowHeight)
  
  //run everything except checkKeys . essentially, redraw screen
  if (!showHelp){
   noTint()
   background(255)
   image(bImgs[1],0,0,windowWidth,windowHeight)
   displayBoard()
   displayEnemies()
   displayStairs()
   displayPlayer()
   displayStats()
 } else {
   loadScreen()
   showHelp = false
 }
}


class Enemy{
  constructor(){
    do {
      this.x = int(random(boardW))
      this.y = 0;//int(random(boardH))
    }
    while ((this.x == pX) && (this.y == pY))
   
    this.eImgNum = int(random(10))
  }
  
  display(){
    image(enemyImg[this.eImgNum],this.x*boardStep,height/2+this.y*boardStep,boardStep,boardStep)
  }
  
  move(){
    //only do each of these 1 out of 3 times!
    if (pX < this.x){
      if (random()<0.3){
        this.x--
      }
    }
    if (pX > this.x){
      if (random()<0.3){
        this.x++
      }
    }
    /*
    if (pY < this.y){
      if (random()<0.3){
        this.y--
      }
    }
    if (pY > this.y){
      if (random()<0.3){
        this.y++
      }
    }
    */
  }
  
  checkCollision(){
    if ((pX == this.x) && (pY == this.y)){
      if (pHealth < 1){
        //you're dead
        sfx[3].play()
        resetGame()
      } else {  //not dead yet
        sfx[2].play()
        pHealth--
      }
    }
  }
}
