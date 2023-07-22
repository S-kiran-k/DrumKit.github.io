"use strict";

var _loop = function _loop() {
  // This funciton says weather the button is pressed 
  document.querySelectorAll(".drum")[i].addEventListener("click", function () {
    var inner = this.innerHTML;
    keyboards(inner);
    animation(inner);
  }); // This funciton says weather the key is pressed in keyboard

  document.addEventListener("keydown", function (a) {
    keyboards(a.key);
    animation(a.key);
  });

  function keyboards(key) {
    switch (key) {
      case "w":
        var tom_1 = new Audio("sounds/tom-1.mp3");
        tom_1.play(); //  play    

        break;

      case "a":
        var tom_2 = new Audio("sounds/tom-2.mp3");
        tom_2.play();
        break;

      case "s":
        var tom_3 = new Audio("sounds/tom-3.mp3");
        tom_3.play();
        break;

      case "d":
        var tom_4 = new Audio("sounds/tom-4.mp3");
        tom_4.play();
        break;

      case "j":
        var snare = new Audio("sounds/snare.mp3");
        snare.play();
        break;

      case "k":
        var crash = new Audio("sounds/crash.mp3");
        crash.play();
        break;

      case "l":
        var kick = new Audio("sounds/kick-bass.mp3");
        kick.play();
        break;

      default:
        break;
    }
  }

  function animation(anime) {
    var b = document.querySelector("." + anime);
    b.classList.add("pressed");
    setTimeout(function () {
      b.classList.remove("pressed");
    }, 100);
  }

  function myfun() {
    location.href = "https://www.youtube.com/watch?v=dQw4w9WgXcQ";
  }
};

for (var i = 0; i < document.querySelectorAll(".drum").length; i++) {
  _loop();
} // var audio = new Audio("sounds/tom-1.mp3");
// audio.play();   //  play