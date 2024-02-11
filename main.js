
//Funcion del menu hamburguesa
document.addEventListener('DOMContentLoaded', function() {
    const menuBtn = document.querySelector('.menu-btn');
    const menu = document.querySelector('.main-menu');
  
    menuBtn.addEventListener('click', () => {
      menu.classList.toggle('active');
    });
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




