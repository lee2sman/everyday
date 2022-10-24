let crackle, radio_static, songs
let started = false
let radio_image
let radio_video
function preload() {
  crackle=loadSound("crackle.mp3")
  radio_static=loadSound("static.mp3")
  songs=loadSound("yiddish-songs.mp3")
  //radio_image = loadImage('radio.jpg')
}

function setup() {
  createCanvas(windowWidth, windowHeight)
  radio_video = createVideo('output.mp4',loadVid)
  textFont('serif')
}

function draw() {
  if (!started){
    fill(255,20)
  } else {
    background(0);
    //image(radio_image,0,0,width,height)
   // video(radio_video,0,0,width,height)
  }

}

function loadVid(){
  radio_video.pause()
  radio_video.volume(0)

  radio_video.size(windowWidth,windowHeight)
  radio_video.position(0,0)
}

function mousePressed() {
  //print('start cracklin')
		crackle.loop()
		radio_static.loop()
		songs.play()

  let startpoint = random(songs.duration())
  let songlength = songs.duration() - startpoint
  songs.jump(startpoint,songlength)


  radio_video.loop()

  started = true
	//	songs.loop()
  select('#tuner').attribute('src','tune.png').style('transform', 'rotate('+random(-75,75)+'deg');
}



function windowResized() {
	resizeCanvas(windowWidth, windowHeight)
}
