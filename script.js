var clickCount = 0;
function check(playerChoice){
    const choices = ['rock', 'paper', 'scissors'];
    const computerChoice = choices[Math.floor(Math.random() * 3)];

    if (playerChoice === computerChoice) {
        document.getElementById('winner').innerText = "It's a tie! :/ try again by clicking any choice again";
    } 
    
    else if (playerChoice === 'rock') {
        if (computerChoice === 'scissors') {
            document.getElementById('winner').innerText = 'You win! :) Rock beats scissors, try again by clicking any choice again.';
        } else {
            document.getElementById('winner').innerText = 'You lose! :( Paper beats rock try again by clicking any choice again.';
            disableButtons();
        }
    } 

    else if (playerChoice === 'paper') {
        if (computerChoice === 'rock') {
            document.getElementById('winner').innerText = 'You win! :) Paper beats rock try again by clicking any choice again.';
        } else {
            document.getElementById('winner').innerText = 'You lose! :( Scissors beats paper try again by clicking any choice again.';
            disableButtons();
        }
    } 

    else if (playerChoice === 'scissors') {
        if (computerChoice === 'paper') {
            document.getElementById('winner').innerText = 'You win! :) Scissors beats paper try again by clicking any choice again.';
        } else {
            document.getElementById('winner').innerText = 'You lose! :( Rock beats scissors try again by clicking any choice again.';
            disableButtons();
        }
    }
        clickCount++;
        function disableButtons() {
            var buttons = document.getElementsByTagName('button');
            for (var i = 0; i < buttons.length; i++) {
                buttons[i].disabled = true;
            }
        }
        if (clickCount === 3) {
            disableButtons();
        } 
}