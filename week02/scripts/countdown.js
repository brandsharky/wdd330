


const timer = document.getElementById("countdown")
const startBtn = document.querySelector("button")
let timeLeft = 10

startBtn.addEventListener("click", () => {
  setInterval(() => {
    if (timeLeft >= 0) {
      timer.innerHTML = timeLeft;
      timeLeft--;
    } else {
      setTimeout(() => {
        timer.innerHTML = "Time's Up!";
      }, 0);
    }
  }, 1000);
})