//test for nanogenmo
subjects = ["bearings", "shaft", "cam", "bit", "head", "chuck", "bearing", "belt", "bucket", "camshaft", "carriage", "chamber", "claw", "clockwork", "cog", "collar", "combustion chamber", "component", "compression chamber", "connector", "controller", "crank", "cutout", "dial", "drum", "dynamo", "feed", "feeder", "flywheel", "gasket", "gear", "guard", "guts", "heat pump", "housing", "hydraulics", "inlet", "innards", "instrumentation", "intake", "jacket", "jaws", "linkup", "lock", "machinery", "mechanism", "module", "motor", "moving part", "part", "pedal", "photoelectric cell", "pinion", "piston", "plunger", "radiator", "ratchet", "regulator", "remote", "remote control", "reservoir", "roller", "seal", "shaft", "shovel", "skirt", "skirting", "sleeve", "spare", "spindle", "spare part", "sprocket", "stabilizer", "starter", "starter motor", "sump", "supercharger", "timer", "tooth", "treadle", "tripwire", "unit", "valve", "vane", "wheel", "workings"]
let letters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'
let merzbau = []
let totalImg = 12
function preload(){
  for (let i = 0; i < totalImg; i++){
    merzbau[i] = loadImage('assets/'+i+'.png')
  }
}
function setup(){
  //createCanvas(windowWidth,windowHeight)
		//createCanvas(4921, 7360); //resize for 300dpi!
  createCanvas(1500,900) // 5 in wide x 3 in high, 300dpi
  imageMode(CENTER)
  textFont('Georgia');
  textAlign(LEFT, BOTTOM)
  background(255)
  screenprint()
}
function screenprint(){
  for (let i = 0; i < 4; i++){
    push()
    let w = random(width/3,2*width)
    translate(random(width),random(height))
    scale(random(1,5))
    rotate(radians(random(-25,25)))
    image(random(merzbau),0,0,w,w)
    pop()
    filter(THRESHOLD)
    fill(255)
    rect(0,height-120,width/3,120, 12)
    fill(0)
    textSize(40)
    text(random(subjects) + " " + letters[floor(random(letters.length))] + ".", 20, height-40)
  }

}
function mousePressed(){
  screenprint();
}
function keyPressed(){
  if (key == 's'){
    save()
  }
}

