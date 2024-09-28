window.addEventListener("scroll", function () {
  const navbar = document.querySelector(".navbar");
  
  if (window.scrollY > 50) {
    navbar.classList.add("navbar-scrolled");
  } else {
    navbar.classList.remove("navbar-scrolled");
  }
});

const toggleButton = document.querySelector('.navbar-toggler');
toggleButton.addEventListener('click', function () {
  const navbar = document.querySelector('.navbar');

  // Periksa apakah navbar collapse terbuka (toggle diaktifkan)
  if (navbar.classList.contains('navbar-toggled')) {
    navbar.classList.remove('navbar-toggled');
  } else {
    navbar.classList.add('navbar-toggled');
  }
});
