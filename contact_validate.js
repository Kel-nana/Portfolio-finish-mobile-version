const form = document.querySelector('form');
const email = document.querySelector('#email');
const popUp = document.querySelector('.popup');
const test = document.querySelector('.test');
form.addEventListener('submit', (e) => {
  const emailRegex = /[A-Z]+/;
  const emailValue = email.value;
  if (emailRegex.test(emailValue)) {
    popUp.querySelector('p').innerHTML = 'Please ensure your email is in lowercase';
    test.style.display = 'block';
    setTimeout(() => {
      test.style.display = 'none';
      popUp.querySelector('p').innerHTML = '';
    }, 4000);
    e.preventDefault();
  }
});
