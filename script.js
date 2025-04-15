document.addEventListener('DOMContentLoaded', function () {
    var links = document.querySelectorAll('.navbar-nav .nav-link');
    links.forEach(function (link) {
      link.addEventListener('click', function () {
        var navbarToggler = document.querySelector('.navbar-toggler');
        var navbarCollapse = document.querySelector('.navbar-collapse');
  
        if (navbarToggler.offsetParent !== null && navbarCollapse.classList.contains('show')) {
          navbarToggler.click();
        }
      });
    });
  
    var scrollToTopBtn = document.getElementById('scrollToTopBtn');
  
    window.addEventListener('scroll', function () {
      if (window.pageYOffset > 300) {
        scrollToTopBtn.style.display = 'block';
      } else {
        scrollToTopBtn.style.display = 'none';
      }
    });
  
    scrollToTopBtn.addEventListener('click', function () {
      // Safari fallback pro scrollTo s smooth
      if ('scrollBehavior' in document.documentElement.style) {
        window.scrollTo({
          top: 0,
          behavior: 'smooth'
        });
      } else {
        window.scrollTo(0, 0);
      }
    });
  
    var anchors = document.querySelectorAll('a[href^="#"]');
    anchors.forEach(function (anchor) {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
  
        var navbarHeight = document.querySelector('.navbar').offsetHeight;
        var target = document.querySelector(this.getAttribute('href'));
  
        if (target) {
          var offsetTop = target.offsetTop - navbarHeight;
  
          if ('scrollBehavior' in document.documentElement.style) {
            window.scrollTo({
              top: offsetTop,
              behavior: 'smooth'
            });
          } else {
            window.scrollTo(0, offsetTop);
          }
        }
      });
    });
  });
  