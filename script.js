document.addEventListener("DOMContentLoaded", function () {
    const app = document.getElementById("app");

    const loading = document.getElementById("loading");

    setTimeout(() => {
        if (loading) loading.remove();

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

            const scoreboard = document.createElement("div");
            scoreboard.id = "scoreboard";
            app.appendChild(scoreboard);

            const playerScoreDiv = document.createElement("div");
            playerScoreDiv.classList.add("score");
            playerScoreDiv.innerHTML = `player: <span id="player-score">0</span>`;
            scoreboard.appendChild(playerScoreDiv);

            const computerScoreDiv = document.createElement("div");
            computerScoreDiv.classList.add("score");
            computerScoreDiv.innerHTML = `computer: <span id="computer-score">0</span>`;
            scoreboard.appendChild(computerScoreDiv);
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
                updateScoreboard(result);

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

        let playerScore = 0;
        let computerScore = 0;

        function updateScoreboard(result) {
            const playerScoreSpan = document.getElementById("player-score");
            const computerScoreSpan = document.getElementById("computer-score");
            if (result === "You win! 🎉") {
                playerScore++;
                playerScoreSpan.textContent = playerScore;
            } else if (result === "Computer wins 😈") {
                computerScore++;
                computerScoreSpan.textContent = computerScore;
            }
            const playerRow = playerScoreSpan.parentElement;
            const computerRow = computerScoreSpan.parentElement;

            playerRow.classList.remove("leader", "loser");
            computerRow.classList.remove("leader", "loser");

            if (playerScore > computerScore) {
                playerRow.classList.add("leader");
                computerRow.classList.add("loser");
            } else if (computerScore > playerScore) {
                computerRow.classList.add("leader");
                playerRow.classList.add("loser");
            }
        }
    }, 800); // Delay for 800ms to demonstrate the loading effect
});
