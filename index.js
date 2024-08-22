const validator = require("email-validator");
// console.log(validator.validate("test@email.com"));
const emailForm = document.querySelector(".emailForm");
////////////

emailForm.addEventListener("submit", (e) => {
  e.preventDefault();
  emailForm.elements[0];
  if (validator.validate(emailForm.elements[0].value)) {
    emailForm.classList.remove("formInvalid");
    emailForm.elements[0].value = "";
  } else {
    emailForm.classList.add("formInvalid");
  }
});
