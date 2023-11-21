/* originally authored by AlexCGDesign - https://github.com/AlexCGDesign/MODAL */

/* M - Tomate rojo */

const openModalTomateRojo = document.querySelector(".tomate__rojo__cta");
const modalTomateRojo = document.querySelector(".modal__tomate__rojo");
const closeModalTomateRojo = document.querySelector(
  ".modal__close__tomate__rojo"
);

openModalTomateRojo.addEventListener("click", (e) => {
  e.preventDefault();
  modalTomateRojo.classList.add("modal--show");
});

closeModalTomateRojo.addEventListener("click", (e) => {
  e.preventDefault();
  modalTomateRojo.classList.remove("modal--show");
});

/* M - Tomate ojo de venado */

const openModalTomateOjoDeVenado = document.querySelector(
  ".tomate__ojo__de__venado__cta"
);
const modalTomateOjoDeVenado = document.querySelector(
  ".modal__tomate__ojo__de__venado"
);
const closeModalTomateOjoDeVenado = document.querySelector(
  ".modal__close__tomate__ojo__de__venado"
);

openModalTomateOjoDeVenado.addEventListener("click", (e) => {
  e.preventDefault();
  modalTomateOjoDeVenado.classList.add("modal--show");
});

closeModalTomateOjoDeVenado.addEventListener("click", (e) => {
  e.preventDefault();
  modalTomateOjoDeVenado.classList.remove("modal--show");
});
