function handSweep(){
  var hand = document.getElementsByTagName("img")[0]//.style.display = 'block';
  if (hand.style.display !== 'block'){
    hand.style.display = 'block';
  }

  setTimeout(function(){
  
     hand.style.display = 'none';
  
  },1000);

}
