document.addEventListener("DOMContentLoaded", function () {
    const app = document.getElementById("app");

    if (app.children.length === 0) {

        const title = document.createElement("h1");
        title.textContent = "Rock-Paper-Scissors";
        app.appendChild(title);

        const subtitle = document.createElement("h2");
        subtitle.textContent = "Choose!";
        app.appendChild(subtitle);

        const choicesDiv = document.createElement("div");
        choicesDiv.id = "choices";
        app.appendChild(choicesDiv);

        const rockBtn = document.createElement("button");
        rockBtn.textContent = "🤜";
        choicesDiv.appendChild(rockBtn);

        const paperBtn = document.createElement("button");
        paperBtn.textContent = "📄";
        choicesDiv.appendChild(paperBtn);

        const scissorsBtn = document.createElement("button");
        scissorsBtn.textContent = "✂️";
        choicesDiv.appendChild(scissorsBtn);

        const playerDiv = document.createElement("p");
        playerDiv.id = "player-choice";
        playerDiv.textContent = "PLAYER:";
        app.appendChild(playerDiv);

        const computerDiv = document.createElement("p");
        computerDiv.id = "computer-choice";
        computerDiv.textContent = "COMPUTER:";
        app.appendChild(computerDiv);

        const resultDiv = document.createElement("div");
        resultDiv.id = "result";
        resultDiv.textContent = "RESULT";
        app.appendChild(resultDiv);
    }


    //version 2:
    // document.addEventListener("DOMContentLoaded", function () {

    //   const app = document.getElementById("app");

    //   if (app) {
    //     app.innerHTML = `
    //       <h1>Rock-Paper-Scissors</h1>
    //       <h2>Choose!</h2>
    //       <div id="choices">
    //         <button data-choice="rock">🤜</button>
    //         <button data-choice="paper">📄</button>
    //         <button data-choice="scissors">✂️</button>
    //       </div>
    //       <div id="player-choice">PLAYER:</div>
    //       <div id="computer-choice">COMPUTER:</div>
    //       <div id="result">RESULT</div>
    //     `;
    //   }
    // });

    const buttons = document.querySelectorAll("#choices button");
    const playerDiv = document.getElementById("player-choice");
    const computerDiv = document.getElementById("computer-choice");
    const resultDiv = document.getElementById("result");

    const choices = ["rock", "paper", "scissors"];

    function getComputerChoice() {
        const randomIndex = Math.floor(Math.random() * choices.length);
        return choices[randomIndex];
    }

    function getResult(playerChoice, computerChoice) {
        if (playerChoice === computerChoice) {
            return "It's a tie! 🤝";
        } else if (
            (playerChoice === "rock" && computerChoice === "scissors") ||
            (playerChoice === "paper" && computerChoice === "rock") ||
            (playerChoice === "scissors" && computerChoice === "paper")
        ) {
            return "You win! 🎉";
        } else {
            return "Computer wins 😈";
        }
    }


    buttons.forEach(button => {
        button.addEventListener("click", function () {
            const playerChoice = button.textContent === "🤜" ? "rock" : button.textContent === "📄" ? "paper" : "scissors";
            const computerChoice = getComputerChoice();
            const result = getResult(playerChoice, computerChoice);

            playerDiv.textContent = "PLAYER: " + playerChoice;
            computerDiv.textContent = "COMPUTER: " + computerChoice;
            resultDiv.textContent = result;

            resultDiv.classList.remove("win", "lose", "draw", "shake");
            if (result === "You win! 🎉") {
                resultDiv.classList.add("win");
            } else if (result === "Computer wins 😈") {
                resultDiv.classList.add("lose");
            } else {
                resultDiv.classList.add("draw");
            }

            void resultDiv.offsetWidth;
            resultDiv.classList.add("shake");
        });
    });
});
