const rps = ["rock", "paper", "scissor"];

const rock = document.querySelector(".rock");
const paper = document.querySelector(".paper");
const scissor = document.querySelector(".scissor");
const result = document.querySelector(".result");

rock.addEventListener("click", rockHandler);
paper.addEventListener("click", paperHandler);
scissor.addEventListener("click", scissorHandler);

function rockHandler(){
    const randomNum = Math.floor(Math.random() * rps.length)
    const rockHandlerNum = 0
    if (rps[rockHandlerNum] == rps[randomNum]) {
        console.log("draw")
        result.innerHTML = `<h2 class="draw">Draw!</h2>`
    } else if (randomNum == 1) {
        console.log("lost")
        result.innerHTML = `<h2 class="lost">Lost!</h2>`
    } else {
        console.log("win!")
        result.innerHTML = `<h2 class="win">Win!</h2>`
    }
}
function paperHandler(){
    const randomNum = Math.floor(Math.random() * rps.length)
    const paperHandlerNum = 1
    if (rps[paperHandlerNum] == rps[randomNum]) {
        console.log("draw")
        result.innerHTML = `<h2 class="draw">Draw!</h2>`
    } else if (randomNum == 2) {
        console.log("lost")
        result.innerHTML = `<h2 class="lost">Lost!</h2>`
    } else {
        console.log("win!")
        result.innerHTML = `<h2 class="win">Win!</h2>`
    }
}
function scissorHandler(){
    const randomNum = Math.floor(Math.random() * rps.length)
    const scissorHandlerNum = 2
    if (rps[scissorHandlerNum] == rps[randomNum]) {
        console.log("draw")
        result.innerHTML = `<h2 class="draw">Draw!</h2>`
    } else if (randomNum == 0) {
        console.log("lost")
        result.innerHTML = `<h2 class="lost">Lost!</h2>`
    } else {
        console.log("win!")
        result.innerHTML = `<h2 class="win">Win!</h2>`
    }
}