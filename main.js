const form = document.getElementById("form");
const usernames = document.querySelectorAll(".username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const password2 = document.getElementById("password2");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  checkInputs();
});

function checkInputs() {
  // trim to remove the whitespaces

  const emailValue = email.value.trim();
  const passwordValue = password.value.trim();
  const password2Value = password2.value.trim();

  usernames.forEach(input => {
    const value = input.value.trim();

    if (value === '') {
      setErrorFor(input, 'This field cannot be blank');
    } else {
      setSuccessFor(input);
    }
  });

  if (emailValue === "") {
    setErrorFor(email, "Email cannot be blank");
  } else if (!isEmail(emailValue)) {
    setErrorFor(email, "Not a valid email");
  } else {
    setSuccessFor(email);
  }

  if (passwordValue === "") {
    setErrorFor(password, "Password cannot be blank");
  } else {
    setSuccessFor(password);
  }

  if (password2Value === "") {
    setErrorFor(password2, "Password cannot be blank");
  } else if (passwordValue !== password2Value) {
    setErrorFor(password2, "Passwords does not match");
  } else {
    setSuccessFor(password2);
  }
}

function setErrorFor(input, message) {
  const feedback = input.nextElementSibling; 
  input.classList.add('is-invalid');
  input.classList.remove('is-valid');
  feedback.innerText = message;
}

function setSuccessFor(input) {
  input.classList.remove('is-invalid');
  input.classList.add('is-valid');
}


function isEmail(email) {
  return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
    email,
  );
}
