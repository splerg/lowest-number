// Game Vars
let rolls = parseInt(localStorage.getItem('rolls'));
let currentNumber = parseFloat(localStorage.getItem('currentNum'));
let rolledNumber = null;

// System Vars
const rollBtn = document.getElementById('roll-btn');
const lowestTxt = document.getElementById('current-lowest-txt');

const saveBtn = document.getElementById('save-btn');

// System Functions
document.addEventListener('DOMContentLoaded', () => {
    lowestTxt.textContent = currentNumber;
    rollBtn.onclick = () => {
        rolledNumber = Math.random();

        rolls++;

        console.log(rolledNumber);

        if (currentNumber === null || rolledNumber < currentNumber) {
            currentNumber = rolledNumber;
        };

        lowestTxt.textContent = currentNumber;
    };

    saveBtn.onclick = () => {
        autosave();
    }
});

autosave = () => {
    localStorage.setItem('rolls', rolls);
    localStorage.setItem('currentNum', currentNumber);

    alert('Game has autosaved.')
}

setInterval(autosave, 30000); // Autosave every 30 seconds.