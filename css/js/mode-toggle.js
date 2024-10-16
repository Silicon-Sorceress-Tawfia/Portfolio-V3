const modeToggleBtn = document.getElementById('mode-toggle');
const body = document.body;

modeToggleBtn.addEventListener('click', () => {
  body.classList.toggle('night-mode');
  
  if (body.classList.contains('night-mode')) {
    modeToggleBtn.textContent = '🌙';  // Switch to moon emoji
  } else {
    modeToggleBtn.textContent = '☀️';  // Switch to sun emoji
  }
});
