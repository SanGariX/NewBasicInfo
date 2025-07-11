const mobileMenu = () => {
  const mobileMenuButton = document.querySelector('.header-nav-mobile-button');
  const mobileMenu = document.querySelector('.header-nav-mobile');
  const mobileMenuButtonClose = document.querySelector(
    '.header-nav-mobile-button-close'
  );
  const mobileMenuItems = document.querySelectorAll('.header-nav-mobile-item');
  const header = document.querySelector('.header');
  mobileMenuButton.addEventListener('click', () => {
    mobileMenu.classList.add('is-open');
    mobileMenuButton.classList.add('active');
    mobileMenuButtonClose.classList.add('active');
  });

  mobileMenuButtonClose.addEventListener('click', () => {
    mobileMenu.classList.remove('is-open');
    mobileMenuButton.classList.remove('active');
    mobileMenuButtonClose.classList.remove('active');
  });

  mobileMenuItems.forEach(item => {
    item.addEventListener('click', () => {
      mobileMenu.classList.remove('is-open');
      mobileMenuButton.classList.remove('active');
      mobileMenuButtonClose.classList.remove('active');
    });
  });

  window.addEventListener('scroll', () => {
    header.classList.toggle('scroll', window.scrollY > 0);
  });
};

export default mobileMenu;
