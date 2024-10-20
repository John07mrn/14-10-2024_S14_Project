class Game {
    constructor() {
        this.numberToGuess = NaN;
        this.generateNumber();
        this.isStarted = false;
    }

    startGame() {
        console.log("Game started");
        if (!this.isStarted) {
            console.log('starting new')
            this.setup();
            this.isStarted = true;
        } else {
            this.generateNumber();
            const result = document.getElementById("result");
            result.innerHTML = '';
        }
        
    }

    generateNumber() {
        this.numberToGuess = Math.floor(Math.random() * 11);
    }

    setup() {
        const input = `
        <label for="guess">
            Introduce a number between 0 and 10! 
        </label>
        <input id="guess" type="number">
        <button id="check-answer">Check answer</button>`;
        const container = document.createElement("div");
        container.innerHTML = input;
        const gameContainer = document.querySelector(".game-container");
        gameContainer.appendChild(container);
        this.setupCheckButton();
    }

    setupCheckButton() {
        const btn = document.getElementById("check-answer");
       
        btn.addEventListener("click", () => { 
            const input = document.getElementById("guess");
            const valueAsInt = parseInt(input.value);
            this.checkAnswer(valueAsInt)
        }); 
    }

    checkAnswer(answer) {
        const result = document.getElementById("result");
        if (answer === this.numberToGuess) {
            result.textContent = "That's correct!";
            result.className = "success";
        } else {
            result.textContent = "Try again!";
            result.className = "error";
        }
    }
}

const startGameBtn = document.querySelector(".game-container > button");
const game = new Game();

startGameBtn.addEventListener("click", () => {
    game.startGame();
    console.log(game);
    startGameBtn.textContent = "Restart game!"
})