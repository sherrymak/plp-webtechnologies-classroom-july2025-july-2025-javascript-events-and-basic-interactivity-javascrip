// ========== Mutonya Church Interactive Script ==========

// 1. Interactive Feature: Blessing Message
// When the "Click for a Blessing Message" button is clicked, display a random blessing message
const welcomeBtn = document.getElementById('welcomeBtn');
const welcomeMessage = document.getElementById('welcomeMessage');

const blessings = [
  "May God's grace shine upon you today!",
  "The Lord is your shepherd; you shall not want.",
  "You are blessed and highly favored!",
  "May peace and joy fill your heart always."
];

welcomeBtn.addEventListener('click', () => {
  const randomBlessing = blessings[Math.floor(Math.random() * blessings.length)];
  welcomeMessage.textContent = randomBlessing;
  welcomeMessage.classList.remove('hidden');
});

// 2. Interactive Feature: Bible Verse Generator
// When the "Show Random Verse" button is clicked, a random verse appears
const verseBtn = document.getElementById('verseBtn');
const verseDisplay = document.getElementById('verseDisplay');

const verses = [
  "Philippians 4:13 - I can do all things through Christ who strengthens me.",
  "Psalm 23:1 - The Lord is my shepherd; I shall not want.",
  "Isaiah 41:10 - Fear not, for I am with you.",
  "John 3:16 - For God so loved the world..."
];

verseBtn.addEventListener('click', () => {
  const randomVerse = verses[Math.floor(Math.random() * verses.length)];
  verseDisplay.textContent = randomVerse;
});

// 3. Custom Form Validation for Prayer Requests
// Prevents form submission if fields are empty or invalid
const prayerForm = document.getElementById('prayerForm');
const formMessage = document.getElementById('formMessage');

prayerForm.addEventListener('submit', (e) => {
  e.preventDefault(); // Stop form from refreshing page

  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const request = document.getElementById('request').value.trim();

  // Basic validation logic
  if (name === "" || email === "" || request === "") {
    formMessage.textContent = "⚠️ Please fill in all fields.";
    formMessage.style.color = "red";
    return;
  }

  // Custom email validation (not HTML5)
  const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  if (!emailPattern.test(email)) {
    formMessage.textContent = "⚠️ Please enter a valid email address.";
    formMessage.style.color = "red";
    return;
  }

  // If all validations pass
  formMessage.textContent = "✅ Thank you! Your prayer request has been received.";
  formMessage.style.color = "green";
  prayerForm.reset();
});
