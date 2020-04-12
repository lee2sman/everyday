//g-d this was a slog
//not thrilled with end result but the seder has already passed, and felt like stopping
let selectSnd;
let rot = 0;
let howMany;
let circum;
let span;

let items = [
    {
      "category_name": "bitter_herbs",
      "category_size": 5,
      "category_description": "Because the Israelites were slaves in Egypt, Jews eat bitter herbs to remind them of the harshness of servitude."
    },
    {
      "category_name": "charoset",
      "category_size": 20,
      "category_description": "Charoset is a mixture that is often made of apples, nuts, wine, and spices in the Eastern European Ashkenazic tradition. In the Sephardic tradition,  charoset is a paste made of figs, dates, and raisins. The word charoset comes from the Hebrew word cheres (חרס), meaning clay, and it represents the mortar that the Israelites were forced to use while they built structures for their Egyptian taskmasters. "
    },
    {
      "category_name": "elijahs_cup",
      "category_size": 22,
      "category_description": "laid out for the guest who may one day appear"
    },
    {
      "category_name": "matzah",
      "category_size": 26,
      "category_description": "Matzah has many aspects. It is the bread of affliction, poor mans bread, eaten by slaves. It is also the bread of liberation and freedom. "
    },
    {
      "category_name": "miriams_cup",
      "category_size": 17,
      "category_description": "representing the work of women, who have been overlooked" 
    },
    {
      "category_name": "roasted_egg",
      "category_size": 14,
      "category_description": "There are several interpretations of the symbolism of the roasted and hard-boiled egg. During the time of the Temple, a korban chagigah, or festival sacrifice, was given at the Temple and the roasted egg represents that meat offering. Also, hard boiled eggs were traditionally the first food served to mourners after a funeral, and thus the egg serves as a symbol of mourning for the loss of the two Temples (the first in 586 BCE and the second in 70 CE). "
    },
    {
      "category_name": "salt_water",
      "category_size": 14,
      "category_description": "This piece of the seder plate also symbolizes the bitterness of slavery and fulfills the requirement called korech, which is when the maror is eaten together with matzah. Romaine lettuce is usually used, which doesn’t seem very bitter but the plant has bitter tasting roots. When chazeret is not represented on the seder plate some Jews will put a small bowl of salt water in its place."
    },
    {
      "category_name": "shank_bone",
      "category_size": 21,
      "category_description": "The roasted shank bone of a lamb reminds Jews of the 10th plague in Egypt when all firstborn Egyptians were killed. During this plague, the Israelites marked the doorposts of their homes with the blood of a lamb so that when Death passed over Egypt, it would pass over the Israelite homes, as it is written in Exodus 12:12:"
    },
    {
      "category_name": "parsley",
      "category_size": 15,
      "category_description": "Throughout the year, after kiddush (the blessing over wine) is recited, the first thing that's eaten is bread. On Passover, however, at the beginning of the seder meal (after kiddush) a blessing over vegetables is recited and then a vegetable – usually parsley, celery, or a boiled potato – is dipped in salt water and eaten. This prompts the table to ask Mah Nishtanah? or, -Why is this night different from all other nights?- Likewise, the salt water represents the tears the Israelites shed during their years of enslavement in Egypt. "
    },
    {
      "category_name": "orange",
      "category_size": 13,
      "category_description": "Introduced by Susannah Heschel, a Jewish feminist, and scholar, as a symbol that represents inclusiveness in Judaism, specifically women, and the GLBT community. "
    },
    {
      "category_name": "new_symbols",
      "category_size": 8,
      "category_description": "new symbol"
    }
];

function preload(){
  selection = loadSound('assets/select.mp3');
}

function setup(){
  noCanvas();

  //"responsive" design!
  circum;
  if (windowWidth > windowHeight){
    circum = windowHeight;
  } else {
    circum = windowWidth;
  }


  howMany = int(random(5,10));
  let categoriesUsed = [];

  for (let i = 0; i < howMany; i++){

    let r = int(random(items.length));

    //only 1 of each category please
    while ( categoriesUsed.includes(r) ){
      r = int(random(items.length));
    }
    categoriesUsed.push(r);
    displayItem(r, i);
  }

  createPlate();
}

function displayItem(categoryNum, counter){

  //print('category_name: '+items[categoryNum].category_name);

  //ceil because i numbered starting at 01.jpg not 00.jpg
  let whichItem = ceil(random(items[categoryNum].category_size));

    if (whichItem < 10){
      //add extra 0 to front cause my bash script renumbers this way
      whichItem = "0" + str(whichItem);
    } 

    let img = createImg("assets/"+items[categoryNum].category_name + "/"+whichItem+".jpg");

  img.style('width',str(100/howMany)+'vmin');
  img.style('height',str(100/howMany)+'vmin');
  img.mouseClicked( function(){
      let par = select('p');
    //MOVE PARAGRAPH TO CENTER AND PUT TEXT IN IT

    if(typeof(span) != 'undefined' && span != null){
      span.remove();
      }

     span = createSpan(items[categoryNum].category_description);
    span.size(circum/2,circum/2);
    span.style('text-align','center');
    span.position(windowWidth/2-circum/4,windowHeight/2-circum/4);

     
      selection.play();
    //  audioPlayer;
    });
}

function createPlate(){
  //create plate
  let plate = createImg('assets/plate.png');

  let plateX = windowWidth/2 - circum/2;
  let plateY = windowHeight/2 - circum/2;

  plate.addClass('plate');
  plate.position(plateX, plateY);
  plate.size(circum,circum);
}

function audioPlayer(){
  selection.play();
}


