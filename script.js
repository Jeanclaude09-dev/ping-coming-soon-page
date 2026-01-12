const form = document.getElementById("form");
const email = document.getElementById("email");
const feedback = document.getElementById("feedback");

const emaillRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

email.addEventListener("input", () => {
  let value = email.value.trim();
  if (value === "") {
    console.log("enter email");
    email.classList.remove("valid");
    email.classList.remove("invalid");
    feedback.classList.add("hidden");
  } else if (emaillRegex.test(value)) {
    console.log("valid");
  } else {
    console.log("invalid");
  }
});

form.addEventListener("submit", (e) => {
  let value = email.value.trim();
  if (!emaillRegex.test(value)) {
    e.preventDefault();
    email.classList.add("invalid");
    feedback.classList.remove("hidden");
  } else {
    email.classList.add("valid");
  }
});

// function validateEmail(email) {
//   const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
//   return emailPattern.test(email);
// }

// // Usage example:
// console.log(validateEmail(email)); // true
// console.log(validateEmail("invalid-email")); // false
