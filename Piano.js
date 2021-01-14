var x = document.querySelectorAll(".piano");
n = x.length;

// Click Event //

for (var i = 0; i < n; i++) {
  document.querySelectorAll(".piano")[i].addEventListener("click", function() {
    var buttonInnerHTML = this.innerHTML;
    makeSnd(buttonInnerHTML);
    btnAnimation(buttonInnerHTML);
  });
}

// Keypress event //

document.addEventListener("keypress", function(event) {
  makeSnd(event.key);
  btnAnimation(event.key);
});


function makeSnd(key) {
  switch (key) {
    case "a":
      var dosa = new Audio('sounds/piano/do.wav');
      dosa.play();
      break;

    case "s":
      var dosa = new Audio('sounds/piano/re.wav');
      dosa.play();
      break;

    case "d":
      var dosa = new Audio('sounds/piano/mi.wav');
      dosa.play();
      break;

    case "f":
      var dosa = new Audio('sounds/piano/fa.wav');
      dosa.play();
      break;

    case "h":
      var dosa = new Audio('sounds/piano/sol.wav');
      dosa.play();
      break;

    case "j":
      var dosa = new Audio('sounds/piano/la.wav');
      dosa.play();
      break;

    case "k":
      var dosa = new Audio('sounds/piano/ti.mp3');
      dosa.play();
      break;

    case "l":
      var dosa = new Audio('sounds/piano/doct.wav');
      dosa.play();
      break;
    default:
      console.log();

  }
}

function btnAnimation(currentKey){
  var atvBtn = document.querySelector("." + currentKey);
  atvBtn.classList.add("pressed");

  setTimeout(function(){
    atvBtn.classList.remove("pressed");
  },50);

}
