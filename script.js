// Wait until the page is fully loaded
document.addEventListener("DOMContentLoaded", function () {
  const ctaButton = document.querySelector('.cta');
  if (ctaButton) {
    ctaButton.addEventListener('click', function (event) {
      event.preventDefault(); // prevents page jump from "#"
      alert("Thanks for your interest! You're on the waitlist radar.");
    });
  }
});
