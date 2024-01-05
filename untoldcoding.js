const buttons = document.querySelectorAll(".card-buttons button");
const sections = document.querySelectorAll(".card-section");
const card = document.querySelector(".card");

const handleButtonClick = (e) => {
  const targetSection = e.target.getAttribute("data-section");
  const section = document.querySelector(targetSection);
  
  // Check if the target section is "#about" and remove "is-active" class accordingly
  targetSection !== "#about"
    ? card.classList.add("is-active")
    : card.classList.remove("is-active");
  
  card.setAttribute("data-state", targetSection);
  sections.forEach((s) => s.classList.remove("is-active"));
  buttons.forEach((b) => b.classList.remove("is-active"));
  e.target.classList.add("is-active");
  section.classList.add("is-active");

  // Open the link when the "Feedback" button is clicked
  if (targetSection === "#certificate") {
    window.location.href = "https://forms.gle/515Bb7owo6hmrPKt5";
  }
};

// Function to create a snowflake
function createSnowflake() {
  const snowflake = document.createElement("div");
  snowflake.className = "snowflake";

  // Randomize the position and animation duration of each snowflake
  const randomX = Math.random() * window.innerWidth;
  const randomDuration = Math.random() * 2 + 1; // Adjust the duration range as needed

  snowflake.style.left = `${randomX}px`;
  snowflake.style.animationDuration = `${randomDuration}s`;

  document.body.appendChild(snowflake);

  // Remove the snowflake after it reaches the bottom
  snowflake.addEventListener("animationiteration", () => {
    document.body.removeChild(snowflake);
  });
}

// Function to create multiple snowflakes
function createSnowfall() {
  setInterval(createSnowflake, 500); // Adjust the interval as needed
}

// Start the snowfall when the window has loaded
window.onload = createSnowfall;
