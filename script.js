function toggleNav() {
    const navLinks = document.querySelector('.nav-links');
    const navIcons = document.querySelector('.nav-icons');
    const burgerIcon = document.querySelector('.burger-icon');
  
    navLinks.style.display = (navLinks.style.display === 'block') ? 'none' : 'block';
    navIcons.style.display = (navIcons.style.display === 'block') ? 'none' : 'block';
  }
  