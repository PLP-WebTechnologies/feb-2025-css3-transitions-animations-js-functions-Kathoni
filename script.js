// Load theme from localStorage
document.addEventListener('DOMContentLoaded', () => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
      document.body.classList.add('dark');
    }
  });
  
  // Toggle theme + store in localStorage
  document.getElementById('toggleBtn').addEventListener('click', () => {
    document.body.classList.toggle('dark');
  
    const currentTheme = document.body.classList.contains('dark') ? 'dark' : 'light';
    localStorage.setItem('theme', currentTheme);
  });
  