let dayNight = document.querySelector('.dayNight')
let menuToggle = document.querySelector('.menuToggle')
let body = document.querySelector('body')
let navigation = document.querySelector('.navigation')

dayNight.onclick = function(){
    body.classList.toggle('dark')
    dayNight.classList.toggle('active')
}

menuToggle.onclick = function(){
    menuToggle.classList.toggle('active')
    navigation.classList.toggle('active')
}

//typing effect
function autoType(elementClass, typingSpeed){
    var thhis = $(elementClass);
    thhis.css({
      "position": "relative",
      "display": "inline-block"
    });
    thhis.prepend('<div class="cursor" style="right: initial; left:0;"></div>');
    thhis = thhis.find(".text-js");
    var text = thhis.text().trim().split('');
    var amntOfChars = text.length;
    var newString = "";
    thhis.text("|");
    setTimeout(function(){
      thhis.css("opacity",1);
      thhis.prev().removeAttr("style");
      thhis.text("");
      for(var i = 0; i < amntOfChars; i++){
        (function(i,char){
          setTimeout(function() {        
            newString += char;
            thhis.text(newString);
          },i*typingSpeed);
        })(i+1,text[i]);
      }
    },1500);
  }
  
  
