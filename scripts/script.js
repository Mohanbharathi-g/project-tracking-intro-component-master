// creating element

const mobileEl = document.getElementById('mobile-menu');
const mobileView = document.getElementById('navbar-mobile');
const openMenu = document.getElementById('mobile-menu');
const closeMenu = document.getElementById('mobile-open');

//evenlistener
mobileEl.addEventListener('click', function () {
  if (mobileView.classList.contains('close')) {
    // mobileEl.classList.add('close');
    mobileView.classList.remove('close');
    mobileEl.classList.add('close');
    openMenu.classList.remove('close');
  } else {
    mobileView.classList.add('close');
  }
});
