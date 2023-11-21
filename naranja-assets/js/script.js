/* originally authored by AlexCGDesign - https://github.com/AlexCGDesign/MODAL */

const openModalNaranja = document.querySelector(".naranja__cta");
const modalNaranja = document.querySelector(".modal__naranja");
const closeModalNaranja = document.querySelector(".modal__close__naranja");

openModalNaranja.addEventListener("click", (e) => {
  e.preventDefault();
  modalNaranja.classList.add("modal--show");
});

closeModalNaranja.addEventListener("click", (e) => {
  e.preventDefault();
  modalNaranja.classList.remove("modal--show");
});
