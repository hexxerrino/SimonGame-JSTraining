$(document).keypress(function() {
  $("h1").html("Level 1");
  var num = 0;
  var level = 1;
  $(".btn").click(function(){
    if ($(this).hasClass("" + keyRegister[num])) {
      correctClick(this);
      if (num < keyRegister.length - 1) {
        num++;
      }
      else {
        setTimeout(function(){
          var random = Math.floor(Math.random() * 4);
          keyRegister.push(autoClick(random));
        }, 1400);
        num = 0;
        level++;
        $("h1").html("Level " + level);
      }
    }
    else {
      wrongClick();
      $(".btn").off("click");
      $("h1").html("game over! press any key to start again!");
    }
  });
  var keyRegister = [];
  var random = Math.floor(Math.random() * 4);
  keyRegister.push(autoClick(random));
});


// When the answer is correct
function correctClick(currentElement) {
  var target = $(currentElement);
  target.addClass("pressed");
  setTimeout(function() {
    target.removeClass("pressed");
  }, 100)

  switch (target.attr("id")) {
    case "green":
      var audio = new Audio('sounds/green.mp3');
      audio.play();
      break;
    case "red":
      var audio = new Audio('sounds/red.mp3');
      audio.play();
      break;
    case "blue":
      var audio = new Audio('sounds/blue.mp3');
      audio.play();
      break;
    case "yellow":
      var audio = new Audio('sounds/yellow.mp3');
      audio.play();
      break;
    default:

  }
}

// When the answer is wrong
function wrongClick() {
  var target = $(this);
  target.addClass("pressed");
  setTimeout(function() {
    target.removeClass("pressed");
  }, 100)

  switch (target.attr("id")) {
    case "green":
      var audio = new Audio('sounds/green.mp3');
      audio.play();
      break;
    case "red":
      var audio = new Audio('sounds/red.mp3');
      audio.play();
      break;
    case "blue":
      var audio = new Audio('sounds/blue.mp3');
      audio.play();
      break;
    case "yellow":
      var audio = new Audio('sounds/yellow.mp3');
      audio.play();
      break;
    default:

  }

  $("body").addClass("red");
  setTimeout(function() {
    $("body").removeClass("red");
  }, 300)
  var audio = new Audio('sounds/wrong.mp3');
  audio.play();
}


function autoClick(number) {
  switch (number) {
    case 0:
      $("#green").addClass("pressed");
      setTimeout(function() {
        $("#green").removeClass("pressed");
      }, 100)
      var audio = new Audio('sounds/green.mp3');
      audio.play();
      return "green";
      break;
    case 1:
      $("#red").addClass("pressed");
      setTimeout(function() {
        $("#red").removeClass("pressed");
      }, 100)
      var audio = new Audio('sounds/red.mp3');
      audio.play();
      return "red";
      break;
    case 2:
      $("#blue").addClass("pressed");
      setTimeout(function() {
        $("#blue").removeClass("pressed");
      }, 100)
      var audio = new Audio('sounds/blue.mp3');
      audio.play();
      return "blue";
      break;
    case 3:
      $("#yellow").addClass("pressed");
      setTimeout(function() {
        $("#yellow").removeClass("pressed");
      }, 100)
      var audio = new Audio('sounds/yellow.mp3');
      audio.play();
      return "yellow";
      break;
    default:

  }
}
