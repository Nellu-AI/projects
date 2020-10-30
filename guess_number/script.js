let secretNumber = getRandomInt(1, 10);
let attempts = 3;
let finish = false;

document.querySelector(".content").onclick = function () {
    let target = event.target;

    if (target.classList.contains("number")) {
        let userNumber = target.innerHTML;

        check(userNumber);
    }
    if (target.classList.contains("new")) {
        attempts = 3;
        secretNumber = getRandomInt(1, 10);
        finish = false;

        document.querySelector(".hint").innerHTML = "Чего ждешь? Ткни кнопку!";
        document.querySelector("span").innerHTML = attempts;

        document.querySelector(".new").onmouseover = function () {
            document.querySelector(".new").style.backgroundColor = "#8f9fff";
        };
        document.querySelector(".new").onmouseout = function () {
            document.querySelector(".new").style.backgroundColor = "#6f7fdf";
        }
    }
};


function check(userNumber) {
    if (!finish) {
        if (userNumber > secretNumber) {
            document.querySelector(".hint").innerHTML = "Мимо! Попробуй поменьше";
            attempts -= 1;
        }
        if (userNumber < secretNumber) {
            document.querySelector(".hint").innerHTML = "Маловато будет...";
            attempts -= 1;
        }
        if (userNumber == secretNumber) {
            document.querySelector(".hint").innerHTML = "О! Угадал! Еще?";
            document.querySelector(".new").style.backgroundColor = "#f44336";
            finish = true;
        }

        document.querySelector("span").innerHTML = attempts;
        if (attempts == 0) {
            document.querySelector(".hint").innerHTML = "Все, финиш! Начинай заново!";
            document.querySelector(".new").style.backgroundColor = "#f44336";
            finish = true;
        }
    }
}

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
