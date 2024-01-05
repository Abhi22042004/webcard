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

  // Open the link when the "Submit" button is clicked
  if (targetSection === "#submit") {
    window.location.href = "https://forms.gle/515Bb7owo6hmrPKt5";
  }
};

buttons.forEach((btn) => {
  btn.addEventListener("click", handleButtonClick);
});
