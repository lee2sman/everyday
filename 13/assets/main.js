var autoSizeText = function() {
  var element = document.querySelector('body');

  element.style.fontSize = '400px';

  while(element.scrollHeight > element.offsetHeight) {
    var newFontSize = (parseFloat(element.style.fontSize.slice(0, -2)) - 1) + 'px';

    element.style.fontSize = newFontSize;
  }
};

document.fonts.ready.then((fontFaceSet) => {
  autoSizeText();
});

window.addEventListener("resize", autoSizeText);

