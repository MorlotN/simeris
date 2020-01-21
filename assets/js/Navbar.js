$(document).ready(function() {
  const navbar = $('.Navbar-links');
  $('.Navbar-hamburger').click(function() {
    navbar.addClass('Navbar-links--open');
  })
  $('.Navbar-close').click(function() {
    navbar.removeClass('Navbar-links--open')
  })
});
