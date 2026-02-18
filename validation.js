/*
const form = document.getElementById("form");
const formInputs = document.querySelectorAll(".form-input");
const number = document.getElementById("number");
const gender = document.getElementById("gender");
const country = document.getElementById("countries");
const date = document.getElementById("date");
const email = document.getElementById("email");
const password = document.getElementById("password");
const password2 = document.getElementById("password2");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  checkInputs();
});

function checkInputs() {
  formInputs.forEach((input) => {
    const value = input.value.trim();
    const msg = input.name;

    if (value === "") {
      setErrorFor(input, msg + " cannot be blank");
    } else {
      setSuccessFor(input);
    }
  });

  const emailValue = email.value.trim();
  if (emailValue === "") {
    setErrorFor(email, "Email cannot be blank");
  } else if (!isEmail(emailValue)) {
    setErrorFor(email, "Not a valid email");
  } else {
    setSuccessFor(email);
  }

  const passwordValue = password.value.trim();
  const password2Value = password2.value.trim();

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

  if (gender.value === "")
  {
     setErrorFor(gender, "Password cannot be blank");
  }
  else {
    setSuccessFor(gender);
  }

  if (country.value === "")
    {
     setErrorFor(country, "Password cannot be blank");
  }
  else {
    setSuccessFor(country);
    
  if (date.value === "")
    {
     setErrorFor(date, "Password cannot be blank");
  }
  else {
    setSuccessFor(date);
  }
  }
}

function setErrorFor(input, message) {
  const feedback = input.parentElement.querySelector(".invalid-feedback");
  input.classList.add("is-invalid");
  input.classList.remove("is-valid");
  feedback.innerText = message;
}

function setSuccessFor(input) {
  input.classList.remove("is-invalid");
  input.classList.add("is-valid");
}

function isEmail(email) {
  return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
    email,
  );
}

*/