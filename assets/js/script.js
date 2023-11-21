/* originally authored by Emprinnos - https://github.com/Emprinnos/menuResponsive */

/* Menú */

const ham = document.querySelector(".ham");
const enlaces = document.querySelector(".enlaces-menu");
const barras = document.querySelectorAll(".ham span");

// const menu = document.querySelector('.menu-bar');
// const cerrar = document.querySelector('.cerrar-bar');

ham.addEventListener("click", () => {
  enlaces.classList.toggle("activado");
  barras.forEach((child) => {
    child.classList.toggle("animado");
  });
  ham.classList.toggle("girar");

  // menu.classList.toggle('no-activado');
  // cerrar.classList.toggle('activado');
});

/* originally authored by Emprinnos - https://github.com/Emprinnos/nav */

const links = document.querySelectorAll(".enlaces-menu a");
links.forEach((link) => {
  link.addEventListener("click", function () {
    enlaces.classList.remove("activado");
    barras.forEach((child) => {
      child.classList.remove("animado");
    });

    // menu.classList.toggle('no-activado');
    // cerrar.classList.toggle('activado');
  });
});

/* originally authored by Magtimus - https://github.com/Magtimus/boton-ir-arriba-con-puro-javascript */

// Scroll up

// document.getElementById("button-up").addEventListener("click", scrollUp);

// function scrollUp() {
//   var currentScroll = document.documentElement.scrollTop;
//   if (currentScroll > 0) {
//     window.requestAnimationFrame(scrollUp);
//     window.scrollTo(0, currentScroll - currentScroll / 10);
//   }
// }

// Agregamos un event listener al elemento con ID "button-up" para escuchar el evento "click".
document.getElementById("button-up").addEventListener("click", function () {
  // Cuando se hace clic en el botón, llamamos a la función scrollToTop con una duración de 0 milisegundos.
  scrollToTop(0); // 0 es la duración de la animación de desplazamiento en milisegundos
});

// Definición de la función scrollToTop que realiza el desplazamiento suave hacia arriba.
function scrollToTop(scrollDuration) {
  // Obtenemos la posición actual de desplazamiento vertical de la página, compatible con diferentes navegadores.
  var scrollHeight =
    document.documentElement.scrollTop || document.body.scrollTop;

  // Calculamos la cantidad de pasos que se deben tomar durante la animación.
  var scrollStep = Math.PI / (scrollDuration / 15);

  // Calculamos un parámetro coseno que se utilizará en la animación, basado en la mitad de la altura actual de desplazamiento.
  var cosParameter = scrollHeight / 2;

  // Inicializamos una variable para realizar un seguimiento del progreso de la animación.
  var scrollCount = 0;

  // Definición de la función que realiza la animación de desplazamiento suave.
  function scrollAnimation() {
    // Configuramos una función para ejecutarse cada 15 milisegundos.
    setTimeout(function () {
      // Cambiamos la posición de desplazamiento vertical de la página utilizando una fórmula trigonométrica.
      window.scrollTo(0, scrollHeight - cosParameter * Math.cos(scrollCount));

      // Incrementamos el contador de desplazamiento para seguir el progreso de la animación.
      scrollCount += scrollStep;

      // Si el contador no ha alcanzado el valor de Math.PI, programamos otra iteración de la animación utilizando requestAnimationFrame.
      if (scrollCount < Math.PI) {
        requestAnimationFrame(scrollAnimation);
      } else {
        // Una vez que la animación llega a su fin, la página se desplaza nuevamente al principio (0) para asegurarse de que esté en la parte superior.
        window.scrollTo(0, 0);
      }
    }, 15);
  }

  // Iniciamos la animación llamando a la función scrollAnimation.
  scrollAnimation();
}

///

buttonUp = document.getElementById("button-up");

window.onscroll = function () {
  var scroll = document.documentElement.scrollTop;
  if (scroll > 500) {
    buttonUp.style.transform = "scale(1)";
  } else if (scroll < 500) {
    buttonUp.style.transform = "scale(0)";
  }
};
