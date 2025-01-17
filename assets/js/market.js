// মডাল ওপেন এবং ক্লোজ করার জন্য জাভাস্ক্রিপ্ট
const openModal = document.getElementById("openModal");
const modal = document.getElementById("modal");
const selectedLocation = document.getElementById("selectedLocation"); // For showing selected location

// মডাল ওপেন করা
openModal.addEventListener("click", () => {
  modal.classList.remove("hidden");
});

// যদি মডালের বাইরে ক্লিক করা হয়, মডাল ক্লোজ হবে
modal.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.classList.add("hidden");
  }
});

// ডিভিশন এবং জেলা ডাটা
const divisionData = {
  ঢাকা: ["ঢাকা", "নারায়ণগঞ্জ", "গাজীপুর"],
  চট্টগ্রাম: ["চট্টগ্রাম", "কক্সবাজার", "ফেনী"],
  রাজশাহী: ["রাজশাহী", "চাঁপাইনবাবগঞ্জ", "নওগাঁ"],
  খুলনা: ["খুলনা", "বাগেরহাট", "যশোর"],
  বরিশাল: ["বরিশাল", "পটুয়াখালী", "ভোলা"],
  সিলেট: ["সিলেট", "মৌলভীবাজার", "হবিগঞ্জ"],
  রংপুর: ["রংপুর", "ঠাকুরগাঁও", "দিনাজপুর"],
  ময়মনসিংহ: ["ময়মনসিংহ", "শেরপুর", "জামালপুর"],
};

// ডিভিশন ক্লিক করলে জেলা তালিকা দেখানো
const divisionButtons = document.querySelectorAll(".division-btn");
divisionButtons.forEach((button) => {
  button.addEventListener("click", function () {
    const division = this.textContent;
    const districts = divisionData[division];

    // জেলা তালিকা ক্লিয়ার করা
    const districtList = document.getElementById("districts");
    districtList.innerHTML = ""; // Reset the district list

    // নতুন জেলা তালিকা তৈরি
    districts.forEach((district) => {
      const li = document.createElement("li");
      li.classList.add("text-blue-300", "cursor-pointer", "text-left");
      li.textContent = district;

      // জেলা ক্লিক করলে সিলেক্ট হবে এবং "All in Bangladesh" বাটনে সেই জেলা দেখাবে
      li.addEventListener("click", () => {
        selectedLocation.textContent = district; // Update the selected location
        modal.classList.add("hidden"); // Close the modal
      });

      districtList.appendChild(li);
    });

    // জেলা তালিকা দেখানো
    document.getElementById("districtList").classList.remove("hidden");
  });
});
