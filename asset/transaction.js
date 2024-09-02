const depositBtn = document.querySelector('.js-deposit-btn');
const depositInput = document.querySelector('.js-deposit-input');
const depositOutput = document.querySelector('.js-deposit-output');

const withdrawBtn = document.querySelector('.js-withdraw-btn');
const withdrawInput = document.querySelector('.js-withdraw-input');
const withdrawOutput = document.querySelector('.js-withdraw-output');

const balance = document.querySelector('.js-balance');


depositBtn.addEventListener('click', () => {
    const value = depositInput.value;
    if (Number(value) <= 0) {
        alert('Invalid input.')
    } else {
        const depositValue = Number(depositOutput.innerText) + Number(value);
        const balanceValue = Number(balance.innerText) + Number(value);
        depositOutput.innerText = depositValue;
        balance.innerText = balanceValue;
        depositInput.value = '';
    }
});

withdrawBtn.addEventListener('click', () => {
    const value = withdrawInput.value;

    if (Number(value) <= 0) {
        alert("Invalid input.");
    } else if (Number(value) > Number(balance.innerText)) {
        alert("Insufficient funds.");
    } else {
        const withdrawValue = Number(withdrawOutput.innerText) + Number(value);
        const balanceValue = Number(balance.innerText) - Number(value);
        withdrawOutput.innerText = withdrawValue;
        balance.innerText = balanceValue;
        withdrawInput.value = '';
    }
});


const showBalance = document.querySelector('.js-show-balance');
const showhideBalance = document.querySelector('.js-show-hide-balance');
const hideAmount = document.querySelector('.js-hide-amount');

showBalance.addEventListener('click', () => {
    if (showBalance.innerText === "Show Balance") {
        showBalance.innerText = "Balance";
        showhideBalance.style.display = 'block';
        hideAmount.style.display = 'none';
    } else if (showBalance.innerText === 'Balance') {
        showBalance.innerText = "Show Balance";
        showhideBalance.style.display = 'none';
        hideAmount.style.display = 'block';
    }
});