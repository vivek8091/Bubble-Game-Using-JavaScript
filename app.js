let timer = 30;
let score = 0;

// Make Bubbles...
function makeBubble() {
    let clutter = "";
    for (let i = 1; i <= 70; i++) {
        let rn = Math.floor(Math.random() * 10);
        clutter += `<div class="bubble">${rn}</div>`;
    }
    document.querySelector("#pbtm").innerHTML = clutter;
}

// Run Timer...
function runTimer() {
    let timerInt = setInterval(function () {
        if (timer > 0) {
            timer--;
            document.querySelector("#timerValue").textContent = timer;
        } else {
            clearInterval(timerInt);
            document.querySelector("#pbtm").innerHTML = `<h1>Game Over<br>Score Is :- ${scoreVal.textContent}</h1>`;

        }
    }, 1000);
}

// To get random hit very time...
function getNewHit() {
    let rn = Math.floor(Math.random() * 10);
    document.querySelector("#hitVal").textContent = rn;
}

// To increase score after every click...
function increaseScore() {
    score += 10;
    document.querySelector("#scoreVal").textContent = score;
}

document.querySelector("#pbtm").addEventListener("click", function (details) {
    let clickNum = Number(details.target.textContent);
    if(clickNum == document.querySelector("#hitVal").textContent){
        increaseScore();
        makeBubble();
        getNewHit();
        // timer = 30; // If you want to restart timer after every click...
    }
})
makeBubble();
runTimer();
getNewHit();