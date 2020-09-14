let buttonColours = ["red", "blue", "green", "yellow"];
let gamePattern = [];
let userClickedPattern = [];

let level = 0;

$(".btn").click(function(){
  let userChosenColour = $(this).attr('id');
  userClickedPattern.push(userChosenColour);
  // console.log(userClickedPattern)
  playSound(userChosenColour);
  animatePress(userChosenColour);
  checkAnswer(userClickedPattern.length - 1)
});

let start = true;

$(document).keypress( function(){
  if (start == true) {
    $('h1').text("Level " + level);
    nextSequence();
      start = false;
  }

})


function startOver() {
start = true;
level = 0;
gamePattern = [];
}



function checkAnswer(currentLevel) {
  if (userClickedPattern[currentLevel] === gamePattern[currentLevel]) {
    // console.log("success")
    if (userClickedPattern.length === gamePattern.length) {
      setTimeout(function () {
        nextSequence()
      }, 1000);
    }
  } else {
    // console.log ('FALSE')
    playSound("wrong");

    $('h1').text("Game Over, Press Any Key to Restart")

    $('body').addClass('game-over');
    setTimeout( function() {
      $('body').removeClass('game-over');
    }, 200)

    startOver();
  }
}



function nextSequence() {
  userClickedPattern = [];

  level++;
  $('h1').text("Level " + level);

let randomNumber = Math.floor(Math.random()*4);
let randomChoseColour = buttonColours[randomNumber];
gamePattern.push(randomChoseColour);

playSound(randomChoseColour);
// $('#'+randomChoseColour).animate({opacity: '0.5'}, 200).animate({opacity:'1'}, 200);
$("#" + randomChoseColour).fadeIn(100).fadeOut(100).fadeIn(100);



}


function playSound(name) {
  let audio = new Audio('sounds/'+name+'.mp3');
  audio.play();
}

function animatePress(currentColour) {
  $('#'+currentColour).addClass("pressed");
  setTimeout(function(){
    $('#'+currentColour).removeClass("pressed");
  }, 100)
}
