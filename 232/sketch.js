//broke brain 2022
//sitting on the couch 12:30am ok
//gettin through it
//
let txt = "head hurts sitting here i shouldn't be typing using a screen it's been 8 days i am waiting for the concussion to grow milder and milder and milder til it's no more til it's away when it is hard to be patient i am feeling okay but not great then okay then i remember my head doesn't stay still it is wobbly pain in weird places on the top the side the back my neck is constantly sore fear i've broken myself broken my brain that i'll get worse as i get older that it's permanent or i don't know what"
let txtArr,st;
let skin, eyeball1,eyeball2,nose,lips

function setup(){
    createCanvas(windowWidth,windowHeight,WEBGL);
    skin = createGraphics(200, 200);
    eyeball1 = createGraphics(100,100);
    eyeball2 = createGraphics(100,100);
    nose = createGraphics(100,100)
    lips = createGraphics(100,100)
    txtArr = txt.split(' ');
   textAlign(CENTER, CENTER)
  frameRate(1.5)
  noStroke()
}
function draw(){
  textSize(14)
  st="";
  for (let i = 0; i < 120; i++){
    st = st+" " +random(txtArr)
  }
  
  skin.clear()
  skin.fill('#FFCC33')
  skin.text(st,0,0,200,200);
    //rect(-width/2,-height/2,width,height)
  eyeball1.clear()
  eyeball2.clear()
  eyeball1.noStroke()
  eyeball2.noStroke()
  eyeball1.textSize(80)
  eyeball2.textSize(80)
  eyeball1.fill('#669966')
  eyeball2.fill('#669966')
  eyeball1.text(random(txtArr),0,0,windowWidth/8,windowWidth/8)
  eyeball2.text(random(txtArr),0,0,windowWidth/8,windowWidth/8)
  nose.clear()
  nose.noStroke()
  nose.textSize(80)
  nose.fill('#FFCC33')
  nose.text(random(txtArr),0,0,windowWidth/8,windowWidth/8)
  lips.clear()
  lips.noStroke()
  lips.textSize(50)
  lips.fill('#CC6666')
  lips.text(random(txtArr),0,0,windowWidth/8,windowWidth/8)
  
  
  
  
  background('black')
  //skin
  texture(skin);
  ellipse(0,0,windowWidth/2,windowWidth/1.5)
  //left eye
  texture(eyeball1)
  ellipse(0-windowWidth/8,0-windowWidth/8,windowWidth/10,windowWidth/10)
  //right eye
  texture(eyeball2)
  ellipse(0+windowWidth/16,0-windowWidth/8,windowWidth/10,windowWidth/10)
  //nose
  texture(nose)
  ellipse(0,0+windowWidth/16,windowWidth/10,windowWidth/10)
  //lips
  texture(lips)
  ellipse(0,0+windowWidth/6,windowWidth/6,windowWidth/8)
  
  //ellipsoid(100,100,100)
}
