document.querySelectorAll('.navbar-nav .nav-link').forEach(link => {
    link.addEventListener('click', () => {
      const navbarToggler = document.querySelector('.navbar-toggler');
      const navbarCollapse = document.querySelector('.navbar-collapse');

      if (navbarToggler.offsetParent !== null && navbarCollapse.classList.contains('show')) {
        navbarToggler.click();
      }
    });
  });

  const scrollToTopBtn = document.getElementById('scrollToTopBtn');

  window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
      scrollToTopBtn.style.display = 'block';
    } else {
      scrollToTopBtn.style.display = 'none';
    }
  });

  scrollToTopBtn.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });

 // Skript pro korekci pozice při kliknutí na navigační odkazy
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
  
      // Získání výšky navigačního baru
      var navbarHeight = document.querySelector('.navbar').offsetHeight;
  
      // Posun na konkrétní sekci s opravou o výšku navbaru
      window.scrollTo({
        top: document.querySelector(this.getAttribute('href')).offsetTop - navbarHeight,
        behavior: 'smooth'
      });
    });
  });
  
  