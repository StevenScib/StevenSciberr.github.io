let userGuesses = [];
let gameCount = 0;
var clickCount = 0;

function check(playerChoice) {
    const choices = ['rock', 'paper', 'scissors'];
    const computerChoice = choices[Math.floor(Math.random() * 3)];

    userGuesses.push(playerChoice); 

    if (playerChoice === computerChoice) {
        document.getElementById('result').innerText = "It's a tie!";
    } else if (playerChoice === 'rock') {
        if (computerChoice === 'scissors') {
            document.getElementById('result').innerText = 'You win! Rock beats scissors.';
        } else {
            document.getElementById('result').innerText = 'You lose! Paper beats rock.';
        }
    } else if (playerChoice === 'paper') {
        if (computerChoice === 'rock') {
            document.getElementById('result').innerText = 'You win! Paper beats rock.';
        } else {
            document.getElementById('result').innerText = 'You lose! Scissors beats paper.';
        }
    } else if (playerChoice === 'scissors') {
        if (computerChoice === 'paper') {
            document.getElementById('result').innerText = 'You win! Scissors beats paper.';
        } else {
            document.getElementById('result').innerText = 'You lose! Rock beats scissors.';
        }
    } else {
        document.getElementById('result').innerText = 'Invalid choice. Please choose rock, paper, or scissors.';
    }

    gameCount++;

    if (gameCount === 5) {
        endGame();
    }
    clickCount++;
    if (clickCount === 6) {
        disableButtons();
    } 
}

function endGame() {
    document.getElementById('guesses').innerText += userGuesses.join(', ');
    userGuesses = [];
    gameCount = 0;
}

clickCount++;
        function disableButtons() {
            var buttons = document.getElementsByTagName('button');
            for (var i = 0; i < buttons.length; i++) {
                buttons[i].disabled = true;
            }
        }
