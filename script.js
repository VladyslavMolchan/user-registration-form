
document.getElementById('registrationForm').addEventListener('submit', function(event) {
  event.preventDefault(); // зупинити відправлення форми


  clearErrors();
  
  clearMessage();

  const username = document.getElementById('username').value.trim();
  const email = document.getElementById('email').value.trim();
  const password = document.getElementById('password').value;
  const confirmPassword = document.getElementById('confirmPassword').value;

  let isValid = true;

  
  if (username === '') {
      showError('usernameError', 'Ім\'я користувача є обов\'язковим');
      isValid = false;
  }

 
  if (email === '') {
      showError('emailError', 'Email є обов\'язковим');
      isValid = false;
  } else if (!validateEmail(email)) {
      showError('emailError', 'Невірний формат Email');
      isValid = false;
  }


  if (password.length < 6) {
      showError('passwordError', 'Пароль має містити мінімум 6 символів');
      isValid = false;
  }

 
  if (confirmPassword !== password) {
      showError('confirmPasswordError', 'Паролі не співпадають');
      isValid = false;
  }

  if (isValid) {
      showMessage('Реєстрація успішна!', 'success');
      this.reset();
  } else {
      showMessage('Будь ласка, виправте помилки вище.', 'error');
  }
});

function showError(elementId, message) {
  const el = document.getElementById(elementId);
  el.textContent = message;
}

function clearErrors() {
  const errorElements = document.querySelectorAll('.error-message');
  errorElements.forEach(el => el.textContent = '');
}

function showMessage(message, type) {
  const formMessage = document.getElementById('formMessage');
  formMessage.textContent = message;
  formMessage.style.color = type === 'success' ? 'green' : '#d93025';
}

function clearMessage() {
  const formMessage = document.getElementById('formMessage');
  formMessage.textContent = '';
}

function validateEmail(email) {
 
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email.toLowerCase());
}
