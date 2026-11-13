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
  setTheme(localStorage.getItem('theme') === 'light' ? 'light' : 'dark');
} catch {
  setTheme('dark');
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

const motionButton = document.querySelector('.motion-toggle');
motionButton.hidden = false;
motionButton.addEventListener('click', () => {
  const paused = document.documentElement.classList.toggle('motion-paused');
  motionButton.setAttribute('aria-pressed', String(paused));
  motionButton.textContent = paused ? 'Resume animations' : 'Pause animations';
});

// Native dialog keeps focus inside the viewer and supports Escape to close.
const photoLinks = [...document.querySelectorAll('img[data-photo-title]')].map(image => image.closest('a'));
if (photoLinks.length && typeof HTMLDialogElement !== 'undefined'
    && typeof HTMLDialogElement.prototype.showModal === 'function') {
  const viewer = document.createElement('dialog');
  viewer.className = 'photo-viewer';
  viewer.setAttribute('aria-labelledby', 'photo-viewer-title');
  viewer.innerHTML = `
    <div class="viewer-toolbar">
      <span class="eyebrow">Field notes / Photo details</span>
      <button type="button" class="viewer-close" autofocus>Close ×</button>
    </div>
    <img class="viewer-image" alt="">
    <div class="viewer-copy">
      <h2 id="photo-viewer-title"></h2>
      <p class="viewer-description"></p>
      <div class="viewer-navigation">
        <button type="button" class="viewer-previous">← Previous photo</button>
        <span class="viewer-count" role="status"></span>
        <button type="button" class="viewer-next">Next photo →</button>
      </div>
    </div>`;
  document.body.append(viewer);
  const viewerImage = viewer.querySelector('.viewer-image');
  const previous = viewer.querySelector('.viewer-previous');
  const next = viewer.querySelector('.viewer-next');
  let photoIndex = 0;
  let openingLink;

  function displayPhoto(index) {
    photoIndex = (index + photoLinks.length) % photoLinks.length;
    const image = photoLinks[photoIndex].querySelector('img');
    viewerImage.src = image.src;
    viewerImage.alt = image.alt;
    viewer.querySelector('h2').textContent = image.dataset.photoTitle;
    viewer.querySelector('.viewer-description').textContent = image.dataset.photoDescription;
    viewer.querySelector('.viewer-count').textContent = `Photo ${photoIndex + 1} of ${photoLinks.length}`;
    previous.hidden = next.hidden = photoLinks.length < 2;
  }

  photoLinks.forEach((link, index) => {
    link.setAttribute('aria-haspopup', 'dialog');
    link.addEventListener('click', (event) => {
      if (event.ctrlKey || event.metaKey || event.shiftKey || event.altKey) return;
      event.preventDefault();
      openingLink = link;
      displayPhoto(index);
      viewer.showModal();
      document.body.classList.add('photo-viewer-open');
    });
  });
  viewer.querySelector('.viewer-close').addEventListener('click', () => viewer.close());
  previous.addEventListener('click', () => displayPhoto(photoIndex - 1));
  next.addEventListener('click', () => displayPhoto(photoIndex + 1));
  viewer.addEventListener('keydown', (event) => {
    if (event.key === 'ArrowLeft' || event.key === 'ArrowRight') {
      event.preventDefault();
      displayPhoto(photoIndex + (event.key === 'ArrowRight' ? 1 : -1));
    }
  });
  viewer.addEventListener('click', (event) => {
    const bounds = viewer.getBoundingClientRect();
    if (event.target === viewer && (event.clientX < bounds.left || event.clientX > bounds.right
        || event.clientY < bounds.top || event.clientY > bounds.bottom)) viewer.close();
  });
  viewer.addEventListener('close', () => {
    document.body.classList.remove('photo-viewer-open');
    openingLink?.focus();
  });
}
