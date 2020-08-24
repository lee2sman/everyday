//lee's addon for more p5dom elements
function createBr(){
 createElement('br') 
}

function createUl(list=[]){
  let ul = createElement('ul')
  
  for (let i = 0; i < list.length; i++){
    let li = createElement('li',list[i])
    li.parent(ul)
  }
}


function createOl(list=[]){
   let ol = createElement('ol')
  
  for (let i = 0; i < list.length; i++){
    let li = createElement('li',list[i])
    li.parent(ol)
  }
}

function createH1(arg){
 createElement('h1',arg) 
}

function createH2(arg){
 createElement('h2',arg) 
}

function createH3(arg){
 createElement('h3',arg) 
}

function createH4(arg){
 createElement('h4',arg) 
}

function createH5(arg){
 createElement('h5',arg) 
}

function createH6(arg){
 createElement('h6',arg) 
}

function createHr(){
 createElement('hr') 
}
