const choices = ["rock", "paper", "scissors"];

async function playGame() {
    const NUM_ROUNDS = 5;
    let humanScore = 0;
    let computerScore = 0;

    for (let i = 0; i<NUM_ROUNDS; ++i) {
        const hc = await getHumanChoice();
        const cc = getComputerChoice();
        [hS, cS] = playRound(cc, hc);
        humanScore += hS, computerScore += cS;
        console.log(`You played ${hc}. Computer played ${cc}`)
        console.log(`You - Computer: ${humanScore} - ${computerScore}`)
    }

    if (humanScore === computerScore) console.log("TIE!")
    else if (computerScore > humanScore) console.log("Computer wins!")
    else console.log("You win!")
}
function playRound(cc, hc) {
    if (hc === "ERROR" || cc === hc) {
        // tie
        return [0, 0]
    } else if (choices.indexOf(cc) == (choices.indexOf(hc) + 1) % 3) {
        // computer win
        return [0, 1]
    } 
    // human win
    return [1, 0]
   

}

function getComputerChoice() {
    return choices[Math.floor(Math.random() * 3)];
}

async function getHumanChoice() {
    let choice = prompt("rock, paper, scissors?", "rock");
    choice = choice.toLowerCase();

    if (!choices.includes(choice)) {
        let errorStr = "You must choose one of rock, paper, scissors"
        console.error(errorStr)
        alert(errorStr)
        return "ERROR"
    }
    return choice
}
