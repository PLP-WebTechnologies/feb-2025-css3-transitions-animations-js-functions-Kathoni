// Apply saved theme on load
document.addEventListener('DOMContentLoaded', () => {
    const savedTheme = localStorage.getItem('theme') || 'light';
    setTheme(savedTheme);
  });
  
  function setTheme(themeName) {
    // Remove all theme classes
    document.body.className = ''; 
    document.body.classList.add(themeName);
    
    // Save to localStorage
    localStorage.setItem('theme', themeName);
  }
  