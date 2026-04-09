const resumeToggle = document.getElementById("showResume");
const resumeSection = document.getElementById("resumeSection");
if (resumeToggle && resumeSection) {
  resumeToggle.addEventListener("click", () => {
    resumeSection.classList.toggle("hidden");
  });
}

const yearSpan = document.getElementById("year");
if (yearSpan) {
  yearSpan.textContent = new Date().getFullYear();
}