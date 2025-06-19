// Toggle mobile nav
document.getElementById('menuToggle').addEventListener('click', () => {
  document.getElementById('navList').classList.toggle('open');
});

// Toggle dark mode
document.getElementById('themeToggle').addEventListener('click', () => {
  document.body.classList.toggle('dark');
  const icon = document.querySelector('#themeToggle i');
  icon.classList.toggle('fa-sun');
  icon.classList.toggle('fa-moon');
});