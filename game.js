const choices = ["rock", "paper", "scissors"];
let humanScore = 0;
let computerScore = 0;
const moves = document.querySelector("#moves");
const score = document.querySelector("#score");
const buttons =  document.querySelectorAll("#buttons button");
const boxScore = document.querySelector(".box-score");
const restart = document.querySelector("#restart");

buttons.forEach(button => {
    button.addEventListener("click", () => {
        if (humanScore === 5 || computerScore === 5) return;
        const hc = button.id;
        const cc = getComputerChoice();

        [hS, cS] = playRound(cc, hc);
        humanScore += hS, computerScore += cS;
        moves.textContent = `You: ${hc}. Computer: ${cc}`
        score.textContent = `You - Computer: ${humanScore} - ${computerScore}`

        if (humanScore === 5 || computerScore === 5) {
            const result = document.createElement('p')
            result.textContent = humanScore === 5? "You win!" : "Computer wins!";
            boxScore.appendChild(result);
        }
    })
});

restart.addEventListener("click", () => {
    humanScore = 0, computerScore = 0;
    moves.textContent = null;
    score.textContent = `You - Computer: ${humanScore} - ${computerScore}`
    if (boxScore.childElementCount === 3) boxScore.removeChild(boxScore.lastChild);
});

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
