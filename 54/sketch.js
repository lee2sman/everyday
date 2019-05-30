var illoElem = document.querySelector('.illo');
var sceneSize = 48;
var minWindowSize = Math.min( window.innerWidth - 20 , window.innerHeight - 20 );
var zoom = Math.floor( minWindowSize / sceneSize );
var illoSize = sceneSize * zoom;
illoElem.setAttribute( 'width', illoSize );
illoElem.setAttribute( 'height', illoSize );
var isSpinning = true;
var TAU = Zdog.TAU;

var illo = new Zdog.Illustration({
  element: illoElem,
  zoom: zoom,
  dragRotate: true,
  onDragStart: function() {
    isSpinning = false;
  },
});

// ----- model ----- //
//half sphere head
let dome = new Zdog.Hemisphere({
  addTo: illo,
  diameter: 40,
  // fill enabled by default
  // disable stroke for crisp edge
  stroke: false,
  color: '#C25',
  backface: 'pink',
});

//nose cone
//
let partyHat = new Zdog.Cone({
  addTo: illo,
  diameter: 13,
  length: 10,
  /* rotate: {y: 6}, */
rotate: { y: Zdog.TAU/2 },
	translate: {z: -2},
  /* stroke: false, */
  color: 'orange',
  backface: 'pink',
});

//lefteye
new Zdog.Shape({
	translate: { x: 10, y: -5, z: -4 },
  addTo: illo,
  stroke: 7,
  color: '#246',
});

//righteye
new Zdog.Shape({
	translate: { x: -10, y: -5, z: -4 },
  addTo: illo,
  stroke: 7,
  color: '#246',
});
//
//mouth
let roundedRect = new Zdog.RoundedRect({
  addTo: illo,
  width: 6,
  height: 1,
  translate: {y: 12, z: -3},
  cornerRadius: 30,
  stroke: 7,
  color: 'red',
});


// ----- animate ----- //
function animate() {
  illo.rotate.y += isSpinning ? +TAU/250 : 0;
  illo.updateRenderGraph();
  requestAnimationFrame( animate );
}

animate();


