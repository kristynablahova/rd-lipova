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

  document.querySelectorAll('[data-bs-toggle="modal"]').forEach((element) => {
    element.addEventListener('click', function() {
      var imageUrl = this.getAttribute('data-bs-img-src');
      document.getElementById('modalImage').src = imageUrl;
    });
  });

  // Seznam obrázků pro přepínání
  const images = [
    { src: "pictures/2_IMG_9598.jpg", caption: "Čelní pohled na vilu ze zahrady" },
    { src: "pictures/3_IMG_9579.jpg", caption: "Hlavní vstup" },
    { src: "pictures/4_IMG_9635.jpg", caption: "Zadní pohled na vilu ze zahrady" },
    { src: "pictures/5_IMG_9541.jpg", caption: "Veranda" },
    { src: "pictures/6_IMG_9619.jpg", caption: "Vstupní dveře" },
    { src: "pictures/7_IMG_9604.jpg", caption: "Vstupní hala" },
    { src: "pictures/8_IMG_9606.jpg", caption: "Vstupní hala" },
    { src: "pictures/9_IMG_9610.jpg", caption: "Vstup do 2. NP" },
    { src: "pictures/10_IMG_9539.jpg", caption: "Obývací pokoj v 1. NP" },
    { src: "pictures/11_IMG_9533.jpg", caption: "Ložnice v 1. NP" },
    { src: "pictures/12_IMG_9567.jpg", caption: "Kuchyně v 2.NP" },
    { src: "pictures/13_IMG_9571.jpg", caption: "Jídelna v 2. NP" },
    { src: "pictures/14_IMG_9613.jpg", caption: "Obývací pokoj v 2. NP" },
    { src: "pictures/15_IMG_9617.jpg", caption: "Koupelna a toaleta v 2. NP" },
    { src: "pictures/16_IMG_9629.jpg", caption: "Toaleta v 1. NP" },
    { src: "pictures/IMG_9620.jpg", caption: "Sklep" },
    { src: "pictures/IMG_9621.jpg", caption: "Kotelna" },
    { src: "pictures/IMG_9624.jpg", caption: "Sklep" },
    { src: "pictures/IMG_9626.jpg", caption: "Půdní prostor" },
    { src: "pictures/IMG_9632.jpg", caption: "Garáž" },
  ];

  let currentImageIndex = 0;

  // Otevření modálního okna s odpovídajícím obrázkem a popiskem
  document.querySelectorAll('[data-bs-toggle="modal"]').forEach((link, index) => {
    link.addEventListener('click', () => {
      currentImageIndex = index;
      const modalImage = document.getElementById('modalImage');
      const modalCaption = document.getElementById('modalCaption');
      modalImage.src = images[currentImageIndex].src;
      modalCaption.textContent = images[currentImageIndex].caption;
    });
  });

  // Funkce pro přepínání obrázků
  document.getElementById('prevBtn').addEventListener('click', () => {
    currentImageIndex = (currentImageIndex === 0) ? images.length - 1 : currentImageIndex - 1;
    updateModalImage();
  });

  document.getElementById('nextBtn').addEventListener('click', () => {
    currentImageIndex = (currentImageIndex === images.length - 1) ? 0 : currentImageIndex + 1;
    updateModalImage();
  });

  // Funkce pro aktualizaci obrázku v modálním okně
  function updateModalImage() {
    const modalImage = document.getElementById('modalImage');
    const modalCaption = document.getElementById('modalCaption');
    modalImage.src = images[currentImageIndex].src;
    modalCaption.textContent = images[currentImageIndex].caption;
  }