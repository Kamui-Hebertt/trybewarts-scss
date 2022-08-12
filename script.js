const senha = document.querySelector('#login');
senha.addEventListener('click', function login(event) {
  const x = document.querySelector(".trybewarts-login")
  if (x['email'].value === 'tryber@teste.com' && x['password'].value === '123456') {
   return alert('Olá, Tryber!');
  }else {
    return alert('Email ou senha inválidos.');
  }
});


let submitBtn = document.querySelector("#submit-btn");
let agreement = document.querySelector("#agreement");



function disable (){
  if (agreement.checked) {
    submitBtn.disabled = false;
  }else {
    submitBtn.disabled = true;
  }
};
agreement.addEventListener('click', disable);