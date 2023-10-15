const loginForm = document.querySelector(".login-form");
loginForm.addEventListener("submit", formProcessing);

function formProcessing(e) {
  e.preventDefault();
  const { email, password } = event.currentTarget.elements;

  const data = {
    email: email.value,
    password: password.value,
  };

  if (email.value.length && password.value.length) {
    console.log(data);
  }else{
    alert("Всі поля повинні бути заповнені!!!")
  }

  e.currentTarget.reset()
}
