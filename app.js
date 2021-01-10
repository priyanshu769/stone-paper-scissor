const rps = ["rock", "paper", "scissor"];

const rock = document.querySelector(".rock");
const paper = document.querySelector(".paper");
const scissor = document.querySelector(".scissor");
const result = document.querySelector(".result");
const chosen = document.querySelector(".chosen")

rock.addEventListener("click", rockHandler);
paper.addEventListener("click", paperHandler);
scissor.addEventListener("click", scissorHandler);

function rockHandler(){
    chosen.innerHTML = "";
    result.innerHTML = "";
    const randomNum = Math.floor(Math.random() * rps.length)
    const rockHandlerNum = 0
    let i =0,chose;
    function animateChose () {
        chose = `You chose rock and the computer chose ${rps[randomNum]}.`
        if(i<chose.length){
            chosen.innerHTML += chose.charAt(i)
            i++;
            setTimeout(animateChose,50);
        }
    }
    setTimeout(animateChose,25)
    function game () {
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
    setTimeout(game,2200)
}
function paperHandler(){
    chosen.innerHTML = "";
    result.innerHTML = "";
    const randomNum = Math.floor(Math.random() * rps.length)
    const paperHandlerNum = 1
    let i =0,chose;
    function animateChose () {
        chose = `You chose paper and the computer chose ${rps[randomNum]}.`
        if(i<chose.length){
            chosen.innerHTML += chose.charAt(i)
            i++;
            setTimeout(animateChose,50);
        }
    }
    setTimeout(animateChose,25)
    function game () {
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
    setTimeout(game,2200)
}
function scissorHandler(){
    chosen.innerHTML = "";
    result.innerHTML = "";
    const randomNum = Math.floor(Math.random() * rps.length)
    const scissorHandlerNum = 2
    let i =0,chose;
    function animateChose () {
        chose = `You chose scissor and the computer chose ${rps[randomNum]}.`
        if(i<chose.length){
            chosen.innerHTML += chose.charAt(i)
            i++;
            setTimeout(animateChose,50);
        }
    }
    setTimeout(animateChose,25)
    function game () {
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
    setTimeout(game,2200)
}