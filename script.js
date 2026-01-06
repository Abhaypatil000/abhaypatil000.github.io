



// Mobile nav toggle
const navToggle = document.querySelector('.nav-toggle');
const menu = document.querySelector('.menu');

if (navToggle && menu) {
  // Toggle open/close
  navToggle.addEventListener('click', () => {
    menu.classList.toggle('show');
  });

  // Auto-close menu when a link is clicked
  document.querySelectorAll('.menu a').forEach(link => {
    link.addEventListener('click', () => {
      menu.classList.remove('show');
    });
  });
}




