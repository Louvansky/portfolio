const menuButton = document.querySelector('.menu-toggle');
const navigation = document.querySelector('#navigation');
const mobileScreen = window.matchMedia('(max-width: 699px)');

function closeMenu() {
  menuButton.setAttribute('aria-expanded', 'false');
  navigation.hidden = mobileScreen.matches;
}

menuButton.hidden = false;
closeMenu();
mobileScreen.addEventListener('change', closeMenu);
menuButton.addEventListener('click', () => {
  const isOpen = menuButton.getAttribute('aria-expanded') === 'true';
  menuButton.setAttribute('aria-expanded', String(!isOpen));
  navigation.hidden = isOpen;
});
navigation.addEventListener('click', (event) => {
  if (event.target.closest('a')) closeMenu();
});
document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && mobileScreen.matches && !navigation.hidden) {
    closeMenu();
    menuButton.focus();
  }
});

const themeButton = document.querySelector('.theme-toggle');
function setTheme(theme) {
  document.documentElement.dataset.theme = theme;
  themeButton.setAttribute('aria-pressed', String(theme === 'dark'));
}
themeButton.hidden = false;
try {
  setTheme(localStorage.getItem('theme') === 'dark' ? 'dark' : 'light');
} catch {
  setTheme('light');
}
themeButton.addEventListener('click', () => {
  const theme = document.documentElement.dataset.theme === 'dark' ? 'light' : 'dark';
  setTheme(theme);
  try {
    localStorage.setItem('theme', theme);
  } catch {
    // Theme switching still works when the browser blocks local storage.
  }
});
