const formRef = document.querySelector('.login-form');

formRef.addEventListener('submit', onSubmitHandler);

function onSubmitHandler(event) {
  event.preventDefault();
  const {
    elements: { email, password },
  } = event.currentTarget;

  if (email.value === '' || password.value === '') {
    return alert('Заполните все поля');
  }

  console.log({
    email: email.value,
    password: password.value,
  });

  event.currentTarget.reset();
}
