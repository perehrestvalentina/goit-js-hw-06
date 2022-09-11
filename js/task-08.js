
const form = document.querySelector(".login-form");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const {
    elements: { email, password }
  } = event.currentTarget;
  if (email.value === '' || password.value === ''){return alert('Not all fields are filled')};

  console.log(`Email: ${email.value},\n Password: ${password.value}`);
  event.currentTarget.reset();
});