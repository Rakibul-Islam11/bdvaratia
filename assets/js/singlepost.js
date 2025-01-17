// Modal Toggle
document.querySelectorAll("[data-modal-toggle]").forEach((btn) => {
  btn.addEventListener("click", function () {
    const modalId = btn.getAttribute("data-modal-target");
    const modal = document.getElementById(modalId);
    modal.classList.toggle("hidden");
    modal.classList.toggle("flex");
  });
});

// Modal Hide
document.querySelectorAll("[data-modal-hide]").forEach((btn) => {
  btn.addEventListener("click", function () {
    const modalId = btn.closest(".fixed").id;
    const modal = document.getElementById(modalId);
    if (modal) {
      modal.classList.add("hidden");
      modal.classList.remove("flex");
    }
  });
});

// Chat Message Send
document.getElementById("sendMessage").addEventListener("click", sendMessage);
document.getElementById("chatInput").addEventListener("keypress", function (e) {
  if (e.key === "Enter") {
    sendMessage();
  }
});

function sendMessage() {
  const chatInput = document.getElementById("chatInput");
  const chatMessages = document.getElementById("chatMessages");

  // Get user input message
  const userMessage = chatInput.value.trim();

  if (userMessage !== "") {
    // Display user message on the right
    const userMessageElement = document.createElement("div");
    userMessageElement.classList.add("mb-4", "text-right");
    userMessageElement.innerHTML = `
      <p class="inline-block bg-yellow-500 text-white py-2 px-3 rounded-lg">
        <strong>You:</strong> ${userMessage}
      </p>
    `;
    chatMessages.appendChild(userMessageElement);
    chatMessages.scrollTop = chatMessages.scrollHeight; // Scroll to the latest message

    // Clear input field
    chatInput.value = "";

    // Seller response (demo)
    setTimeout(() => {
      const sellerMessageElement = document.createElement("div");
      sellerMessageElement.classList.add("mb-4", "text-left");
      sellerMessageElement.innerHTML = `
        <p class="inline-block bg-gray-300 text-gray-700 dark:bg-gray-700 dark:text-gray-300 py-2 px-3 rounded-lg">
          <strong>Seller:</strong> Thank you for your message. I will get back to you shortly.
        </p>
      `;
      chatMessages.appendChild(sellerMessageElement);
      chatMessages.scrollTop = chatMessages.scrollHeight;
    }, 1000);
  }
}

// উদাহরণস্বরূপ, অনলাইন স্ট্যাটাস চেক করার জন্য একটি ভেরিয়েবল
let isOnline = true; // এটি পরিবর্তন করতে পারেন, যদি ব্যবহারকারী অনলাইন থাকে।

// স্ট্যাটাস আপডেট করা
const statusElement = document.getElementById("status");

if (isOnline) {
  statusElement.textContent = "Online"; // যদি অনলাইন থাকে
  statusElement.classList.add("text-green-500"); // সবুজ রঙ
  statusElement.classList.remove("text-green-500"); // ধূসর রঙ সরানো
} else {
  statusElement.textContent = "Active 2 hours ago"; // যদি অফলাইন থাকে
  statusElement.classList.add("text-green-500"); // ধূসর রঙ
  statusElement.classList.remove("text-green-500"); // সবুজ রঙ সরানো
}

document.addEventListener("DOMContentLoaded", function () {
  const phoneLink = document.getElementById("number");
  const preNumber = phoneLink.querySelector(".pre");
  const postNumber = phoneLink.querySelector(".post");

  phoneLink.addEventListener("click", function (e) {
    e.preventDefault(); // Prevent the default action
    preNumber.style.display = "none"; // Hide the placeholder
    postNumber.style.display = "inline"; // Show the actual number
    window.location.href = phoneLink.href; // Make the call
  });
});

function togglePasswordVisibility(fieldId, button) {
  const passwordField = document.getElementById(fieldId);
  if (passwordField.type === "password") {
    passwordField.type = "text";
    button.textContent = "🙈";
  } else {
    passwordField.type = "password";
    button.textContent = "👁";
  }
}
