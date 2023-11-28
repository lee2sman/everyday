//initialize hero
let xp = 0;
let hero = document.createElement("img");
hero.setAttribute("src", "../assets/hero.gif");
document.body.prepend(hero);

//initialize cal
const d = new Date();
const year = d.getFullYear();
const month = d.getMonth();

const date = new Date(year, month, 1);
const firstDay = date.getDay()

//add blank divs
for (let day=1;day<=firstDay;day++){
  const newDay = document.createElement("div");
  newDay.style.backgroundColor = "darkseagreen";
  newDay.innerHTML = "<div></div>";
  document.getElementsByTagName("main")[0].appendChild(newDay);
}

//initialize map/days
//set as trash
for (let day=1;day<=30;day++){
  const newDay = document.createElement("div");
  newDay.innerHTML = '<div><p>'+day+'</p><img src="../assets/trash.gif"></div>';
  document.getElementsByTagName("main")[0].appendChild(newDay);
}

//add successful day imgs
let fixDay = 16 + firstDay;
let successfulDay = document.querySelector("main :nth-child("+fixDay+")");
successfulDay.style.backgroundColor = "green";

let dayImg = successfulDay.getElementsByTagName("img")[0];
dayImg.setAttribute("src","../assets/16.gif");
xp++;

//add text logs
const daylog = document.createElement("p");
daylog.innerText = "16: Took a long walk around Ditmas Park this afternoon as I practice building my lung capacity post-covid, enjoying the warm weather and seeing gorgeous leaves of many colors. My favorite was this japanese maple.";
document.body.appendChild(daylog);
