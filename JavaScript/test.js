const startBtn = document.querySelector(".btn");
const text2 = document.querySelector(".text2");
const stopBtn = document.querySelector(".btn1");
const container = document.getElementById("box2");
const score = document.getElementById("score");
const resetv = document.querySelector(".btn2");
let count = 0;
let isPaused = false;
let game = false;

startBtn.addEventListener("click", () => {
    startBtn.classList.add("hide");
    text2.classList.add("hide");
    stopBtn.classList.remove("hide");
    game = true;
    count = 0;
    score.innerHTML = count;
});

stopBtn.addEventListener("click", () => {
    stopBtn.classList.add("paused");
    score.innerHTML = "You clicked the stop button in " + count + " times!";
    game = false;
    resetv.classList.remove("hide");
});

container.addEventListener("click", () => {
    if (game) {
        count += 1;
        score.innerHTML = count;
    }
});
resetv.addEventListener("click", ()=>{
    reset();
});
function reset(){
    startBtn.classList.remove("hide");
    text2.classList.remove("hide");
    stopBtn.classList.add("hide");
    score.innerHTML = "";
    resetv.classList.add("hide");
    stopBtn.classList.remove("paused");
}
