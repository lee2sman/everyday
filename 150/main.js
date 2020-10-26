//gobi by lee2sman 2020
//an attempt at recreating a lost favorite 90s Mac system 9 shareware game, original title unknown

let progress = 1, goal = 50, water = 20, food = 20, camelHealth = 5
let currentScene, nextScene
let oasisCount = 11, nomadsCount = 8, ruinsCount = 8, desertCount = 14
let oasisImg = [], nomadsImg = [], ruinsImg = [], desertImg = [], cityImg
let soundtrack, insects


function setup(){
  noCanvas()

  currentScene = chooseScene()
  nextScene = chooseScene()
  debug()

  start()

  //load soundtrack
  soundFormats('mp3');
  soundtrack = loadSound('assets/sound/bg.mp3')
  insects = loadSound('assets/sound/insects.mp3')


    //event loop
  select('#advance').mousePressed(advance)
  select('#rush').mousePressed(rush)
  select('#rest').mousePressed(rest)
  select('#search').mousePressed(search)

  //nav
  select('#soundtrack').mousePressed(soundtrackToggle)
}
/*
function keyPressed(){

  if (key == ' '){ //rush
    rush()
  } else if (key == 'r'){ //rest
    rest()  
  } else if (key =='s'){ //search
    search()
  } else {
    advance()
  }

  main()
}
*/
function main(){

  select('#console').html(food+' <em>meals</em> | '+water+' <em>canteens</em> | '+progress+' <em>days</em><br><br>')

  select('#console').html('<strong>'+currentScene.name.charAt(0).toUpperCase()+ currentScene.name.slice(1)+ '</strong><br><br>',true)

  background(255)
  if (currentScene.name == 'oasis'){
    oasis()
  } else if (currentScene.name == 'nomads'){
     nomads()
  } else if (currentScene.name == 'ruins'){
     ruins()
  } else if (currentScene.name == 'desert'){
     desert()
  } else {
    print('error')
  }


  //decrease food
  food--
  //decrease water
  water--

  checkHealth()
  checkProgress()

  printInfo()

  debug()
}

function chooseScene(){
  let sceneProb = random()
    if (sceneProb > 0.9) { //10% chance of oasis
      return {
	name: 'oasis',
	imgNum: int(random(oasisCount))
      }
    } else if (sceneProb > 0.8){ //10% chance of nomads
      return {
	name: 'nomads',
	imgNum: int(random(nomadsCount))
      }
    } else if (sceneProb > 0.7){ //10% chance of ruins
      return {
	name: 'ruins',
	imgNum: int(random(ruinsCount))
      }
    } else {
      return {
	name: 'desert',
	imgNum: int(random(desertCount))
      }
    }
}

function start(){
  select('#photo').attribute('src','assets/fort.jpg')
  select('#console').html("You are a trader, having traveled far and wide along the silk road to buy and sell wares. Now far from home as the season starts to turn you begin the long journey back home, through the Gobi desert.<br><br>You'll need your supplies to hold out, and a little luck, to make it home in 50 days.")
}
function oasis(){
  select('#photo').attribute('src','assets/oasis/'+currentScene.imgNum+'.jpg')

  select('#console').html("You refill your water and rest your camel. ") 
  if (camelHealth < 5){
    camelHealth++
  }

  //refill water
  water = 20

  progress++
}
function nomads(){
  select('#photo').attribute('src','assets/nomads/'+currentScene.imgNum+'.jpg')

  let event = random()
  if (event < 0.03){        //3% chance

  select('#console').html("The nomads attack you to get your supplies. They steal all your food and water. ",true)
    food = 0
    water = 0

  } else if (event < 0.3){  //27% chance

  select('#console').html("The nomads attack and steal some of your food and water. ",true)
    food-=int(random(2,5))
    water-=int(random(2,5))

  } else if (event < 0.5) { //20% chance
  select('#console').html("This looks like a rough group. You steer wide around their party, hoping they will ignore you. ",true)
  } else {                  //50% chance
  select('#console').html("The nomads are a friendly group. You travel together for a bit and they give you some food and drink. ",true)
    water+=int(random(2,8)) //increase water
    if (water>20)(water= 20) //but there are limits! 
    food+=int(random(2,8)) //increase food
    if (food>24)(food = 24) //but there are limits! 

    progress++
  }

}
function ruins(){
  select('#photo').attribute('src','assets/ruins/'+currentScene.imgNum+'.jpg')

  select('#console').html("You come across some ruins and search for supplies.",true)

  let event = random()

  if (event < 0.3){
  select('#console').html(" You find the remains of some leftover meal abandoned in an old firepit. ",true)

    food+=int(random(2,8)) //increase food
    if (food>24)(food = 24) //but there are limits! 
  } else if (event <0.5){
  select('#console').html(" You find a canteen with some water. ",true)

    water+=int(random(2,8)) //increase water
    if (water>20)(water= 20) //but there are limits! 
  } else {
  select('#console').html(" You don't find anything. ",true)
  }
     
    progress++
}
function desert(){
  select('#photo').attribute('src','assets/desert/'+currentScene.imgNum+'.jpg')

    progress++
}

function printInfo(){
  if (nextScene.name == 'nomads'){
      if (random()<0.7){ //70% chance of spotting nomads in advance
  select('#console').html('You see nomads ahead.',true)
      } 
  } else if (nextScene.name == 'ruins'){
      if (random()<0.5){ //50% chance of spotting ruins in advance
  select('#console').html('You see ruins ahead.',true)
      } 
  } else if (nextScene.name == 'oasis'){
  select('#console').html('You see an oasis ahead!',true)
  }

}

function checkHealth(){
  if (food < 0){
  select('#console').html('You die of starvation.',true)
    die()
  } else if (food < 3){

  select('#console').html('You are hungry. ',true)
  } 

  if (water < 0){
  select('#console').html('You die of thirst.',true)
    die()
  } else if (water < 3){
  select('#console').html('You are thirsty. ',true)
  }

  if (camelHealth < 0){
  select('#console').html('Your camel is lame and cannot continue. You set out on foot but soon succumb to the heat. You die of heat stroke.')
    die()
  } else if (camelHealth < 3){

  select('#console').html('Your camel is very sick. ',true)
  } else if (camelHealth < 5){
  select('#console').html('Your camel is sick. ',true)
  }
}

function checkProgress(){
   if (progress > goal){
  select('#console').html("You crest a dune and see the outskirts of a city with hundreds of tents, market stalls and houses. In the distance is a great body of water. You can't wait to get home with your supplies and fortune. Your friends and family will certainly be pleased to see you. ")

  select('#photo').attribute('src','assets/city.jpg')
   }
}

function die(){
  select('#photo').attribute('src','assets/bluff.jpg')
  select('#console').html("The high desert air dries out your body. Wild animals soon come across your corpse, reducing you to bone. Over the weeks and years your remains scatter in the wind, blown up the bluffs, another nomad lost to the desert.")

  select('.actions').hide()

  insects.play()
}

function rush(){

  select('#console').html("") //reset text in console

  select('#console').html('You rush ahead, pushing your camel to its limit. It injures it slightly.')

    currentScene = nextScene
    nextScene = chooseScene()
    //we do this twice! we are advancing fast!
    currentScene = nextScene
    nextScene = chooseScene()

    progress++
    camelHealth-=2

  main()
}

function rest(){
  select('#console').html("") //reset text in console

    if (camelHealth<5){
      camelHealth++
      select('#console').html("You and your camel take a much needed rest.",true)
    }
    //we do not advance when resting
  //
  main()
}

function search(){

  select('#console').html("") //reset text in console

     //we do not advance when searching
    let foodProb = random()
    if (foodProb < 0.5){

  select('#console').html("You search for food and find some berries that will sustain you for a while.",true)
      food+=int(random(2,4))
    } else {
  select('#console').html("You search but don't come across anything you can eat.",true)
    }

  main()
}

function advance(){

  select('#console').html("") //reset text in console

    //important! 
      currentScene = nextScene 
      nextScene = chooseScene()

  main()
}

function soundtrackToggle(){
  if(soundtrack.isPlaying()){
    soundtrack.pause()
  } else {
    soundtrack.loop()
  }
}

function debug(){
  print('currentScene: '+currentScene.name+'| nextScene: '+nextScene.name)
  print('food: '+food+' | water: '+water+' | camelHealth: '+camelHealth+' progress: '+progress)
}
