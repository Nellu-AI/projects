let randomNumber1 = Math.floor(Math.random() * 6) + 1; // 1 - 6

document.querySelector(".img1").setAttribute('src',('images/dice'+randomNumber1+'.png'))

let randomNumber2 = Math.floor(Math.random() * 6) + 1;

document.querySelector(".img2").setAttribute('src','images/dice'+randomNumber2+'.png')

if (randomNumber1 > randomNumber2) {
  document.querySelector('h1').innerHTML = " 🚩Player 1 WINS"
} else if (randomNumber1 < randomNumber2) {
  document.querySelector('h1').innerHTML = "Player 2 WINS 🚩"
} else {
    document.querySelector('h1').innerHTML = "DRAW"
}

// 2 way:     randomImage = 'dice' + randomNumber1 + '.png';

// randomImageSource = "images/" + randomImage;
