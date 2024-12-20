let lastScrollTop = 0;
const navbar = document.querySelector('.navbar');
window.addEventListener('scroll', function() {
  const scrollTop =  document.documentElement.scrollTop;
  if (scrollTop > lastScrollTop) {
    navbar.classList.add('navbar-hide');
  } else {
    navbar.classList.remove('navbar-hide');
  }
  lastScrollTop = scrollTop <= 0 ? 0 : scrollTop; 
});