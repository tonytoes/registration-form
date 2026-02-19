const password = document.getElementById("password");
const password2 = document.getElementById("password2");

function checkInputs() {
  if (password.value.trim() === "" || password2.value.trim() === "") {
    password2.setCustomValidity("");
    return;
  }

  if (password.value !== password2.value) {
    password2.setCustomValidity("Passwords do not match");
  } else {
    password2.setCustomValidity("");
  }
}

password.addEventListener("input", checkInputs);
password2.addEventListener("input", checkInputs);

(() => {
  "use strict";

  const forms = document.querySelectorAll(".needs-validation");

  Array.from(forms).forEach((form) => {
    form.addEventListener(
      "submit",
      (event) => {
        checkInputs();
        if (!form.checkValidity()) {
          event.preventDefault();
          event.stopPropagation();
        }

        form.classList.add("was-validated");
      },
      false,
    );
  });
})();

