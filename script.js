const form = document.getElementById("form");
const email = document.getElementById("email");
const feedback = document.getElementById("feedback");

const emaillRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

email.addEventListener("input", () => {
  let value = email.value.trim();
  email.classList.remove("valid", "invalid");
  if (value === "") {
    feedback.classList.add("hidden");
  } else if (emaillRegex.test(value)) {
    email.classList.add("valid");
  } else {
    email.classList.add("invalid");
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
