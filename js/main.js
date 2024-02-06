const user = {
  email: 'damirk355@gmail.com',
  password: "1111"
}

const emailForm = document.getElementById('emailForm');
const codeForm = document.getElementById('codeForm');
const loginForm = document.getElementById('loginForm');

const email = document.getElementById('email');
const code = document.getElementById('code');
const password = document.getElementById('password');
const confirmPassword = document.getElementById('confirm-password');

const emailError = document.getElementById('email-error');
const codeError = document.getElementById('code-error');
const passwordError = document.getElementById('password-error');
const confirmPasswordError = document.getElementById('confirm-password-error');


const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-z]{2,4}$/;

emailForm.addEventListener("submit", (e)=> {
  e.preventDefault();

  if(email.value.trim() ===""){
    email.parentElement.className='input-field error';
    emailError.innerHTML='Email is required'
  }else if(emailRegex.test(email.value.trim())){
    email.parentElement.className='input-field';
    document.getElementById('emailStep3').value = email.value.trim();
    navigateForms('login', 'code_recieve')
  }else{
    email.parentElement.className='input-field error';
    emailError.innerHTML='Email is invalid'
  }

})


codeForm.addEventListener("submit", (e) => {
    e.preventDefault();

    if (code.value.trim() === "") {
        code.parentElement.className = 'input-field error';
        codeError.innerHTML = 'Code is required';
    } else if (code.value.trim() === user.password) {
        code.parentElement.className = 'input-field';
        document.getElementById('code').value = '';
        document.getElementById('password').value = '';
        document.getElementById('confirm-password').value = '';
        password.parentElement.className='input-field'
        confirmPassword.parentElement.className='input-field'
        navigateForms('code_recieve', 'form_confirm');
    } else {
        code.parentElement.className = 'input-field error';
        codeError.innerHTML = 'Code is invalid';
    }
});


loginForm.addEventListener("submit", (e) => {
  e.preventDefault();

  password.parentElement.className='input-field'
  confirmPassword.parentElement.className='input-field'

  if (password.value.trim() === "" || confirmPassword.value.trim() === ""){
    if(password.value.trim() === ""){
      password.parentElement.className='input-field error';
      passwordError.innerHTML='password is required'
    } 
    if(confirmPassword.value.trim() === ""){
      confirmPassword.parentElement.className='input-field error';
      confirmPassword.innerHTML='confirm password is required'
  }} else
  if(password.value.trim().length < 3){
    password.parentElement.className='input-field error';
    passwordError.innerHTML='password must be at least 3 chr'
  }else if (password.value.trim().length > 15){
    password.parentElement.className='input-field error';
    passwordError.innerHTML='password must be less then 15 chr'
  }else if (password.value.trim() !== confirmPassword.value.trim()){
    confirmPassword.parentElement.className='input-field error';
    confirmPasswordError.innerHTML='password does not match'
  }
}
);


function navigateForms(current, direction) {
  document.getElementById(current).style.display = 'none';
  document.getElementById(direction).style.display = 'grid';
}

function loginWithGoogle() {
    console.log("Logging in with Google...");
}