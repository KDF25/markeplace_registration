const user = {
    email: 'damirk355@gmail.com',
    password: "1111"
  }

  const loginForm = document.getElementById('loginForm');
  const forgotForm = document.getElementById('forgotForm');
  const codeForm = document.getElementById('codeForm');
  const passwordForm = document.getElementById('passwordForm');
  
  const email = document.getElementById('email');
  const myEmail = document.getElementById('my-email');
  const code = document.getElementById('code');
  const newPassword = document.getElementById('new-password');
  const confirmPassword = document.getElementById('confirm-password');
  
  const emailError = document.getElementById('email-error');
  const myEmailError = document.getElementById('my-email-error');
  const codeError = document.getElementById('code-error');
  const newPasswordError = document.getElementById('new-password-error');
  const confirmPasswordError = document.getElementById('confirm-password-error');


  let userEmail = "";

  loginForm.addEventListener("submit", (e) => {
    e.preventDefault();
    email.parentElement.className='input-field';
    password.parentElement.className='input-field';
    
    if(email.value.trim() ===""){
          email.parentElement.className='input-field error';
          emailError.innerHTML='Email is required'
      }else if(email.value.trim() !== user.email){
        email.parentElement.className='input-field error';
        emailError.innerHTML='Email is invalid'
      }else
    
    if(password.value.trim() ===""){
      password.parentElement.className='input-field error';
      passwordError.innerHTML='password is required'
    }else if(password.value.trim() !== user.password){
      password.parentElement.className='input-field error';
      passwordError.innerHTML='password invalidr'
    }
    });

forgotForm.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log(myEmail.value.trim())
  myEmail.parentElement.className='input-field';
  
  if(myEmail.value.trim() ===""){
        myEmail.parentElement.className='input-field error';
        myEmailError.innerHTML='Email is required'

    }else{
      userEmail = myEmail.value.trim()
      document.getElementById('my-email').value = '';
      navigateForms('forgot_password', 'code_recieve');
    }
  });

  codeForm.addEventListener("submit", (e) => {
    e.preventDefault();
    console.log(4444)

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
  
  passwordForm.addEventListener("submit", (e) => {
    e.preventDefault();

    newPassword.parentElement.className='input-field'
    confirmPassword.parentElement.className='input-field'
  
    if (newPassword.value.trim() === "" || confirmPassword.value.trim() === ""){
      if(newPassword.value.trim() === ""){
        newPassword.parentElement.className='input-field error';
        newPasswordError.innerHTML='password is required'
      } 
      if(confirmPassword.value.trim() === ""){
        confirmPassword.parentElement.className='input-field error';
        confirmPassword.innerHTML='confirm password is required'
    }} else
    if(newPassword.value.trim().length < 3){
      newPassword.parentElement.className='input-field error';
      newPasswordError.innerHTML='password must be at least 3 chr'
    }else if (newPassword.value.trim().length > 15){
      newPassword.parentElement.className='input-field error';
      newPasswordError.innerHTML='password must be less then 15 chr'
    }else if (newPassword.value.trim() !== confirmPassword.value.trim()){
      confirmPassword.parentElement.className='input-field error';
      confirmPasswordError.innerHTML='password does not match'
    }else{
      email.parentElement.className='input-field';
      password.parentElement.className='input-field';
      document.getElementById('email').value = userEmail;
      document.getElementById('password').value = newPassword.value.trim();
      navigateForms('form_confirm', 'login');
    }
  }
  );

  
function navigateForms(current, direction) {
  document.getElementById(current).style.display = 'none';
  document.getElementById(direction).style.display = 'grid';
}
    