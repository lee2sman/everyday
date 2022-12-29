let colors = ['#fec900','#2265f6','#00d17f','#f46c3d']
let names = ['solve','selve','sieve','soon','sloop','slough','slop','sleep','slate','slick','slump','sleet','spout','sprout','spunk','spoof','spill','script','scrimp','scrunch','salt','sail','sample','sunk','sank','snout','scamp','school','seer','seal','self','sell','seldom','selfless','sold','shot','shop','ship','shape','shack','shame','shav','sham','share','slam','snark','seer','space','spackle','spank','spot','spoof','spill','spain','span','spill','spun','spin','squeak','squint','still','spiff','splint','stint','stick','stiff','stim','stink','stir','stink','stiff','swift','swim','swill','swig']
let block = 40

function setup(){
 createCanvas(240,360); 

  //outer black
 background(0)
  //inner white rect
 fill(255)
 rectMode(CENTER)
 rect(width/2,height/2,width-2*block,height-2*block)

 noStroke()
 rectMode(CORNER)
 push()
 translate(block/2,block/2)

  //random small ones
 for (let i=0;i<15;i++){
   fill(random(colors))
   rect(floor(random(5))*block,floor(random(5))*block*2,block,block)
 }
  //2 big uns
 for (let i=0;i<2;i++){
   fill(random(colors))
   _scale = round(random(3))
   rect(floor(random(5))*block,0,_scale*block,_scale*block)
 } 
  
 pop()

  //right wall
 fill(0)
 rect(width-block/2,0,block,height)
  //bottom wall
 rect(0,height-block/2,width,block)

 createElement('h1',('un'+random(names)+'able').toUpperCase())
}
