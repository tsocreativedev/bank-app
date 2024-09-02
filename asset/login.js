const inputEmail = document.querySelector('.js-input-email');
const inputPassword = document.querySelector('.js-input-password');
const submitBtn = document.querySelector('.js-submit-btn');


submitBtn.addEventListener('click', () => {
    event.preventDefault();
    if (inputEmail.value === 'tso@gmail.com' && inputPassword.value === 'pass') {
        window.location.href = 'transaction.html';
        alert('Welcome!');
    } else {
        alert('Wrong details!');
    }
});