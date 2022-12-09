//prototype
let kenyaImg,brooklynImg,melbourneImg
 let stations={
  "station":[
   {
      "country":"Kenya",
      "server":"Kiambu Road",
      "name":"Creative Family Radio",
      "favicon":"",
      "stream":"http://stream.zeno.fm/as9keh14668uv",
      "homepage":""
    },
    {
      "country":"USA",
      "server":"America/New_York",
      "name":"WNYC New Standards",
      "favicon":"https://media.wnyc.org/i/300/300/c/80/1/wnyc_square_logo.png",
      "stream":"http://tjc.wnyc.org/js-stream.aac",
      "homepage":"https://www.wnyc.org/"
    },
    {
      "country":"Australia",
      "server":"America/New_York",
      "name":"ABC Radio Australia",
      "favicon":"https://musicindustryinsideout.com.au/wp-content/uploads/2020/10/ABC-Logo-2019.png",
      "stream":"http://live-radio01.mediahubaustralia.com/RAEW/aac/",
      "homepage":"https://www.abc.net.au/radio-australia/"
    }
  ]
} 
let pX,pY,player,width,height,area,startButton
let song
let loc,serverCity="http://solarprotocol.net/api/v2/opendata.php?systemInfo=city"

//debug
  let streamURL = "http://stream.zeno.fm/as9keh14668uv"

function setup() {
  noCanvas()
  width=windowWidth
  height=windowHeight
  area=windowWidth/8

  pX=windowWidth/2
  pY=windowHeight/2

  createBrooklyn()
  createNairobi()
  createMelbourne()

//create player
  player = createImg("gemini.png")
  player.position(pX,pY)
  //loc = loadJSON(serverCity,start,errAudio)
  
  start()
}

function draw(){

    if (keyIsPressed){
      if ((keyCode === LEFT_ARROW) || (key=='a')) {
	pX-=10
      } else if ((keyCode === RIGHT_ARROW)||(key=='d')) {
	pX+=10
      } else if ((keyCode === UP_ARROW) || (key=='w')){
	pY-=10
      } else if ((keyCode === DOWN_ARROW) || (key=='s')){
	pY+=10
      }

	player.position(pX,pY)
    }

}


function createBrooklyn(){
  let brooklynX=width/4,brooklynY=height/4
  for (let i=1;i<4;i++){
  let i = int(random(1,9))
    let img = createImg("assets/brooklyn"+i+".gif");
    img.size(200,200)
    img.position(brooklynX+random(-area,area), brooklynY+random(-area,area));
    img.style('opacity','0.3')
  }
}
function createNairobi(){
  let nairobiX=3*(width/4),nairobiY=height/3
  for (let i=1;i<4;i++){
  let i = int(random(1,6))
    let img = createImg("assets/kenya"+i+".gif");
    img.size(200,200)
    img.position(nairobiX+random(-area,area), nairobiY+random(-area,area))
    img.style('opacity','0.3')
  }
}
function createMelbourne(){
  let melbourneX=width/2,melbourneY=2*(height/3)
  for (let i=1;i<4;i++){
  let i = int(random(1,8))
    let img = createImg("assets/melbourne"+i+".gif");
    img.size(200,200)
    img.position(melbourneX+random(-area,area), melbourneY+random(-area,area));
    img.style('opacity','0.3')
  }
}
function start(){
  startButton = createImg("assets/artware.gif")
  startButton.size(270,100)
  startButton.position(width/2-135,height/2-50)
}
function errAudio(){
  console.log("remote data cannot be loaded")
}
function mousePressed(){
  startButton.remove()



source = document.getElementsByTagName("source");

		source.src = streamURL;

//		console.log("source is ", document.getElementsByTagName("source").src);

		snd = document.createElement("audio");

		audioSrc = document.createElement("source");
		snd.appendChild(audioSrc);

		audioSrc.src = source.src;

		snd.play();


}
