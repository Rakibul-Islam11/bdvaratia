// main menu search Modal open & close functionality
document
  .getElementById("searchModalButton")
  .addEventListener("click", function () {
    document.getElementById("searchModal").classList.remove("hidden"); // Open modal
  });

document
  .getElementById("closeModalButton")
  .addEventListener("click", function () {
    document.getElementById("searchModal").classList.add("hidden"); // Close modal
  });

// Optional: Close modal when clicking outside the modal content
document
  .getElementById("searchModal")
  .addEventListener("click", function (event) {
    if (event.target === this) {
      this.classList.add("hidden");
    }
  });

// Show/Hide Back to Top Button
const backToTopButton = document.getElementById("back-to-top");

window.addEventListener("scroll", () => {
  if (window.scrollY > 200) {
    backToTopButton.classList.remove("hidden");
  } else {
    backToTopButton.classList.add("hidden");
  }
});

// Langage change

const languageButton = document.getElementById("languageButton");
languageButton.addEventListener("click", function () {
  if (languageButton.textContent === "English") {
    languageButton.textContent = "বাংলা"; // Change to Bengali
  } else {
    languageButton.textContent = "English"; // Change back to English
  }
});
