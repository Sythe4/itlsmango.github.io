window.addEventListener("load", () => {
  // Nothing to do right now - intro is handled via CSS
});

// You can add JS interactivity here if needed in the future

// Example: Animate progress bars on page load (optional)
window.addEventListener('DOMContentLoaded', () => {
  const fills = document.querySelectorAll('.progress-fill');
  fills.forEach(fill => {
    const width = fill.style.width;
    fill.style.width = '0%';
    setTimeout(() => {
      fill.style.width = width;
    }, 100);
  });
});
