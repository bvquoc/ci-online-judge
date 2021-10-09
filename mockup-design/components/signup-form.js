let forms = document.querySelectorAll(".needs-validation");
let password = document.getElementById("password");
let confirmPassword = document.getElementById("confirm-password");
let pwMatchError = document.getElementById("pw-match-err");

Array.prototype.slice.call(forms).forEach((form) => {
  form.addEventListener(
    "submit",
    (e) => {
      if (!form.checkValidity()) {
        e.preventDefault();
        e.stopPropagation();
      }
      form.classList.add("was-validated");

      if (password.value !== confirmPassword.value) {
        e.preventDefault();
        e.stopPropagation();
        pwMatchError.innerHTML = "Confirm password did not match";
        password.classList.add("invalid-field");
        confirmPassword.classList.add("invalid-field");
      } else {
        pwMatchError.innerHTML = "";
        password.classList.remove("invalid-field");
        confirmPassword.classList.remove("invalid-field");
      }
    },
    false
  );
});
