const secretNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 10;

function checkGuess() {
    const userGuess = parseInt(document.getElementById("userGuess").value);

    if (isNaN(userGuess) || userGuess < 1 || userGuess > 100) {
        showMessage("Please enter a valid number between 1 and 100.");
        return;
    }

    attempts++;

    if (userGuess === secretNumber) {
        showMessage(`Congratulations! You guessed the number ${secretNumber} in ${attempts} attempts.`);
    } else if (userGuess < secretNumber) {
        showMessage("Try a higher number.");
    } else {
        showMessage("Try a lower number.");
    }
}

function showMessage(message) {
    const messageElement = document.getElementById("message");
    messageElement.textContent = message;
}