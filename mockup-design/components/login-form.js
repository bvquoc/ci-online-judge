let forms = document.querySelectorAll(".needs-validation");
let password = document.getElementById("password");
let confirmPassword = document.getElementById("confirm-password");
let pwRequiredError = document.getElementById("pw-required-err");
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
    },
    false
  );
});
