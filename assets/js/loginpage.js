// Show and hide login and register forms
function showForm(formType) {
  const loginForm = document.getElementById("login-form");
  const registerForm = document.getElementById("register-form");
  const loginTab = document.getElementById("login-tab");
  const registerTab = document.getElementById("register-tab");

  if (formType === "login") {
    loginForm.classList.remove("hidden");
    registerForm.classList.add("hidden");
    loginTab.classList.add("border-b-2", "border-yellow-500");
    registerTab.classList.remove("border-b-2", "border-yellow-500");
  } else {
    registerForm.classList.remove("hidden");
    loginForm.classList.add("hidden");
    registerTab.classList.add("border-b-2", "border-yellow-500");
    loginTab.classList.remove("border-b-2", "border-yellow-500");
  }
}

// Forgot password modal open
function openModal() {
  document.getElementById("forgot-password-modal").classList.remove("hidden");
}

// Forgot password modal close
function closeModal() {
  document.getElementById("forgot-password-modal").classList.add("hidden");
}

// Close modal when clicking outside the modal content
document
  .getElementById("forgot-password-modal")
  .addEventListener("click", function (event) {
    if (event.target === this) {
      closeModal();
    }
  });

// Toggle password visibility
function togglePasswordVisibility(passwordFieldId, toggleButton) {
  const passwordField = document.getElementById(passwordFieldId);
  const type = passwordField.type === "password" ? "text" : "password";
  passwordField.type = type;

  // Change the button icon based on visibility
  if (type === "password") {
    toggleButton.textContent = "👁";
  } else {
    toggleButton.textContent = "🙈";
  }
}

// Initialize the page to show the login form by default
window.addEventListener("DOMContentLoaded", function () {
  showForm("login");
});
