const rps = ["rock", "paper", "scissor"];


const rock = document.querySelector(".rock");
const paper = document.querySelector(".paper");
const scissor = document.querySelector(".scissor");

rock.addEventListener("click", rockHandler);
paper.addEventListener("click", paperHandler);
scissor.addEventListener("click", scissorHandler);

function randomRPS(){
    // Use Math. random() function to get the random number between(0-1, 1 exclusive).
    // Multiply it by the array length to get the numbers between(0-arrayLength).
    // Use Math. floor() to get the index ranging from(0 to arrayLength-1).

    // I'll try to do this. Let me see if I can or

    const randomNum = Math.floor(Math.random() * rps.length)
    console.log(randomNum)
}

// Now I'm getting a number, what can I do now??
// I'll try to give a number to each button which is my rock, my paper and my scissor

// Also I want to talk right now to explain but I can't because there are things going on house
// It'll intrupt the audio

// BTW let's code
// I'm not getting what should I do here

randomRPS()

function rockHandler(){
    // console.log("rock");
    const rockHandlerRandom = Math.floor(Math.random() * rps.length)
    if (rockHandlerRandom == randomRPS()){
        console.log(randomRPS())
        console.log("win!")
    } else {
        console.log(randomRPS())
        console.log("lose")
    }
}
function paperHandler(){
    // console.log("paper");
    const paperHandlerRandom = Math.floor(Math.random() * rps.length)
    if (paperHandlerRandom == randomRPS()){
        console.log(randomRPS())
        console.log("win!")
    } else {
        console.log(randomRPS())
        console.log("lose")
    }
}
function scissorHandler(){
    // console.log("scissor");
    const scissorHandlerRandom = Math.floor(Math.random() * rps.length)
    if (scissorHandlerRandom == randomRPS()){
        console.log(randomRPS())
        console.log("win!")
    } else {
        console.log(randomRPS())
        console.log("lose")
    }
}

// let me comment out extra logs

//  I think I've done all the code wrong
// Even thought the game wrong
// Let me figure it out