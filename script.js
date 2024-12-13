const openMenu = document.querySelector('.open-menu-svg');
const closeMenu = document.querySelector('.close-menu-svg'); 
const nav = document.querySelector('nav');

openMenu.addEventListener('click', () => {
  nav.classList.add('active');
  openMenu.classList.add('hidden');
  document.body.classList.add('dark');
});

closeMenu.addEventListener('click', () => { 
  nav.classList.remove('active');
  openMenu.classList.remove('hidden'); 
  document.body.classList.remove('dark');
});
