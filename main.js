
//Funcion del menu hamburguesa
document.addEventListener('DOMContentLoaded', function() {
    const menuBtn = document.querySelector('.menu-btn');
    const menu = document.querySelector('.main-menu');
  
    menuBtn.addEventListener('click', () => {
      menu.classList.toggle('active');
    });
    function scrollGallery() {
      const gallery = document.querySelector('.gallery-container');
      const galleryWidth = gallery.scrollWidth;
      const viewportWidth = gallery.clientWidth;
      const scrollLeft = gallery.scrollLeft;
    
      // Calcula la posición después de desplazar
      let newPosition = scrollLeft + viewportWidth;
    
      // Si llega al final, vuelve al principio
      if (newPosition >= galleryWidth) {
          newPosition = 0;
      }
    
      // Desplaza la galería
      gallery.scroll({
          left: newPosition,
          behavior: 'smooth'
      });
    }
    
    setInterval(scrollGallery, 3000); // Desplaza la galería cada 3 segundos (3000 milisegundos)
    
  });

// Mostrar u ocultar el botón cuando el usuario hace scroll
window.addEventListener('scroll', () => {
  const btnScrollToTop = document.getElementById('btnScrollToTop');
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      btnScrollToTop.style.display = 'block';
  } else {
      btnScrollToTop.style.display = 'none';
  }
});

// Desplazarse hacia arriba cuando se hace clic en el botón
btnScrollToTop.addEventListener('click', () => {
  document.body.scrollTop = 0; // Para navegadores que no soportan document.documentElement.scrollTop
  document.documentElement.scrollTop = 0; // Para navegadores compatibles
});


