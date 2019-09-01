//still procrastinating getting work done
//so here's some self-portraits randomly placed

let me = [], howManyMe = 9

function setup(){
  noCanvas()
  for (let i = 0; i < howManyMe; i++){
    me[i] = createImg('assets/'+i+'.png')
    me[i].position(random(windowWidth),i*windowHeight+50)
  }
}
