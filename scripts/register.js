const passwordInput = document.querySelector('#password');
const togglePasswordIcon = document.querySelector('.toggle-password');
const form = document.querySelector('form');

form.addEventListener('submit', (e) => {
  e.preventDefault();
});

const togglePassword = () => {
  const inputType = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
  passwordInput.setAttribute('type', inputType);
  passwordInput.getAttribute('type') === 'password' ? (togglePasswordIcon.src = './assets/icons/eyes.svg') : (togglePasswordIcon.src = './assets/icons/close-eyes.svg');
};

togglePasswordIcon.addEventListener('click', togglePassword);
