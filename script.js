var count = 0;
var num;
var body = document.querySelector("body");

const buttons = document.querySelectorAll("button");
const text = document.querySelector("p");

for (var i = 0; i < buttons.length; i ++) {
    buttons[i].addEventListener('click', function(i) {change(i);}.bind(this, i));
}

function create() {
    count = 0;
    const int1 = Math.floor(Math.random() * 9);
    const int2 = Math.floor(Math.random() * 9);
    const int3 = Math.floor(Math.random() * 9);

    num = int1 * 100 + int2 * 10 + int3;
}

function lock(state) {
    if (state == "win") {
        document.body.innerHTML = "<p style = 'color: white;'>  You succeeded! Time to enjoy your prize </p> <img src = 'coin.jpg'>";
    } else {
        document.body.innerHTML = "<p style = 'color: white;'> You failed, off to jail you go. </p> <img src = 'jail.png'>";
    }
   
}

function change(buttonNumber) {
    if (buttonNumber == 0 || buttonNumber == 1 || buttonNumber == 2) {
        var one = document.getElementById("first");
        if (buttonNumber == 1) {
            one = document.getElementById("second");
        } else if (buttonNumber == 2) {
            one = document.getElementById("third");
        }
        if (one.innerHTML == "9") {
            one.innerHTML = 0;
        } else {
            one.innerHTML = parseInt(one.innerHTML) + 1;
        }
    } else if (buttonNumber != 6) {
        var two = document.getElementById("first");
        if (buttonNumber == 4) {
            two = document.getElementById("second");
        } else if (buttonNumber == 5) {
            two = document.getElementById("third");
        }
        if (two.innerHTML == "0") {
            two.innerHTML = 9;
        } else {
            two.innerHTML = parseInt(two.innerHTML) - 1;
        }
    } else {
        count++;

        const one = document.getElementById("first");
        const two = document.getElementById("second");
        const third = document.getElementById("third");
        if (parseInt(one.innerHTML + two.innerHTML + third.innerHTML) < num) {
            text.innerHTML = "Guess Higher";
            console.log(num);
        } else if (parseInt(one.innerHTML + two.innerHTML + third.innerHTML) > num) {
            text.innerHTML = "Guess Lower";
        } else {
            count--;
            lock("win");
        }
        if (count == 7) {
            lock("lose");
        }
    }
}