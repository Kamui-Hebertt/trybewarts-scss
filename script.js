function login() {
  const x = document.querySelector('.trybewarts-login');
  if (x.email.value === 'tryber@teste.com' && x.password.value === '123456') {
    return alert('Olá, Tryber!');
  }
  return alert('Email ou senha inválidos.');
}

const senha = document.querySelector('#login');
senha.addEventListener('click', login);

const submitBtn = document.querySelector('#submit-btn');
const agreement = document.querySelector('#agreement');

function disable() {
  if (agreement.checked) {
    submitBtn.disabled = false;
  } else {
    submitBtn.disabled = true;
  }
}
agreement.addEventListener('click', disable);
