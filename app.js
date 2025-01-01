let userCount = 0;
let compCount = 0;
let msg = document.querySelector("#msg");
let choices = document.querySelectorAll(".choice");
let compCountMsg = document.querySelector("#comp-count");
let userCountMsg = document.querySelector("#user-count");
let resetBtn = document.querySelector("#reset-btn");

const genCompChoice = () => {
    const options = ["rock", "paper", "scissors"];
    randIdx = Math.floor(Math.random() * 3);
    return options[randIdx];
}

const drawGame = () => {
    msg.innerText = "Game was draw!. Play again";
    msg.style.backgroundColor = "pink";
    msg.style.color="black";
}

const showWinner = (userWin, userChoice, compChoice) => {
    if (userWin) {
        userCount++;
        userCountMsg.innerText = userCount;
        msg.innerText = `You Won! Your ${userChoice} beats ${compChoice} `;
        msg.style.backgroundColor = "green";
        msg.style.color = "white";
    } else {
        compCount++;
        compCountMsg.innerText = compCount;
        msg.innerText = `You Lost! Comp ${compChoice} beats your ${userChoice} `;
        msg.style.backgroundColor = "red";
        msg.style.color = "white";
    }
}

const playGame = (userChoice) => {
    const compChoice = genCompChoice();
    let userWin = true;
    if (compChoice == userChoice) {
        drawGame();
    } else {
        let userWin = true;
        if (userChoice === "rock") {
            //scissors, paper
            userWin = compChoice === "paper" ? false : true;
        } else if (userChoice === "paper") {
            //rock, scissors
            userWin = compChoice === "scissors" ? false : true;
        } else {
            //rock, paper
            userWin = compChoice === "rock" ? false : true;
        }
        showWinner(userWin, userChoice, compChoice);
    }
}
choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        console.log("choice was clicked!", choice.getAttribute("id"));
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    })
})

resetBtn.addEventListener("click",()=>{
    userCount=0;
    compCount=0;
    userCountMsg.innerText = userCount;
    compCountMsg.innerText = compCount;
    msg.innerText = `Play your Move`;
    msg.style.backgroundColor="pink";
    msg.style.color="black";

})