const blockSize=5
const terrain=['╨','╤','╥'];
function setup(){
  noCanvas()

  const location = ['zone','block','territory','area','place','land']
  createElement("h1","map of "+random(location)+"s")

  for (let k=0;k<5;k++){

      let letters = 'abcdefghijklmnopqrstuvwxyz'.split("");
      createElement("h1",random(location)+" "+random(letters))

      let w = floor(random(2,20))
      let line

      for (let i=0;i<w;i++){
	line=''
	for (let j=0;j<w;j++){
	  line=line+random(terrain)
	}
	  createP(line)
      }

   }
}

