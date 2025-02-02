let crackle, radio_static, songs, polish, farm
let started = false
let radio_image
let depressed = false
function preload() {
  crackle=loadSound("crackle.mp3")
  radio_static=loadSound("static.mp3")
  songs=loadSound("yiddish-songs.mp3")
  polish=loadSound("polish.mp3")
  farm=loadSound("farm.mp3")
}

function setup() {
  createCanvas(windowWidth, windowHeight)
  textFont('serif')
  songs.playMode('restart');
  polish.playMode('restart');
  farm.playMode('restart');

  select('#autoplay').mouseClicked(selfPlay)
  select('#tuner1').mouseClicked(dial1)
  select('#tuner2').mouseClicked(dial2)
  select('#tuner3').mouseClicked(dial3)
}

function draw() {
  if (!started){
    fill(255,20)
  } else {
    background(0);
  }

}

function changeAll() {
		crackle.loop()
		radio_static.loop()
		songs.play()
  polish.play()
  farm.play()
  let songsvol = random()
  songs.setVolume(songsvol)
  let polvol = random()
  polish.setVolume(polvol)
  let farmvol = random()
  farm.setVolume(farmvol)

  let startpoint = random(songs.duration())
  let songlength = songs.duration() - startpoint
  songs.jump(startpoint,songlength)
  
let polishstart=random(polish.duration())
let polishlength=polish.duration() - polishstart
polish.jump(polishstart,polishlength)

let farmstart=random(farm.duration())
let farmlength = farm.duration() - farmstart
farm.jump(farmstart,farmlength)

  started = true

  select('#tuner1').attribute('src','snd/knob.png').style('transform', 'rotate('+random(-75,75)+'deg');
  select('#tuner2').attribute('src','snd/knob.png').style('transform', 'rotate('+random(-75,75)+'deg');
  select('#tuner3').attribute('src','snd/knob.png').style('transform', 'rotate('+random(-75,75)+'deg');

  select('#channel1').style('opacity',songsvol)
  select('#channel2').style('opacity',polvol)
  select('#channel3').style('opacity',farmvol)
}

function dial1(){
  songs.play()
  let songsvol = random()
  songs.setVolume(songsvol)

  let startpoint = random(songs.duration())
  let songlength = songs.duration() - startpoint
  songs.jump(startpoint,songlength)

  select('#tuner1').attribute('src','snd/knob.png').style('transform', 'rotate('+random(-75,75)+'deg');
  select('#channel1').style('opacity',songsvol)
}
function dial2(){
  polish.play()
  let polvol = random()
  polish.setVolume(polvol)

  let polishstart=random(polish.duration())
  let polishlength=polish.duration() - polishstart
  polish.jump(polishstart,polishlength)

  select('#tuner2').attribute('src','snd/knob.png').style('transform', 'rotate('+random(-75,75)+'deg');
  select('#channel2').style('opacity',polvol)
}
function dial3(){
  farm.play()
  let farmvol = random()
  farm.setVolume(farmvol)

  let farmstart=random(farm.duration())
  let farmlength = farm.duration() - farmstart
  farm.jump(farmstart,farmlength)

  select('#tuner3').attribute('src','snd/knob.png').style('transform', 'rotate('+random(-75,75)+'deg');
  select('#channel3').style('opacity',farmvol)
}

function selfPlay(){
  if (!(depressed)){
    select('#autoplay').attribute('src','snd/button-on.png')
    dial1()
    dial2()
    dial3()
  } else {
    select('#autoplay').attribute('src','snd/button-off.png')
    songs.stop()
    polish.stop()
    farm.stop()
songsvol = 0;
polvol = 0;
farmvol = 0;

  select('#channel1').style('opacity',farmvol)
  select('#channel2').style('opacity',farmvol)
  select('#channel3').style('opacity',farmvol)
  }
    depressed=!depressed
}

function windowResized() {
	resizeCanvas(windowWidth, windowHeight)
}

