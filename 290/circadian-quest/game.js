//initialize hero
let xp = 0;
let hero = document.createElement("img");
hero.setAttribute("src", "../assets/hero.gif");
document.body.prepend(hero);

//initialize map/days
//set as trash
for (let day=1;day<=30;day++){
  const newDay = document.createElement("div");
  newDay.innerHTML = '<div><p>'+day+'</p><img src="../assets/trash.gif"></div>';
  document.getElementsByTagName("main")[0].appendChild(newDay);
}

//add successful day imgs
let successfulDay = document.querySelector('main :nth-child(16)');
successfulDay.style.backgroundColor = "green";

let dayImg = successfulDay.getElementsByTagName("img")[0];
dayImg.setAttribute("src","../assets/16.gif");
xp++;

//add text logs
const daylog = document.createElement("p");
daylog.innerText = "16: Walked around neighborhood a long while enjoying warm weather and seeing leaves changed color. Enjoyed this japanese maple.";
document.body.appendChild(daylog);
