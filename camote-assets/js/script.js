/* originally authored by AlexCGDesign - https://github.com/AlexCGDesign/MODAL */

/* M - Camote amarillo */

const openModalCamoteAmarillo = document.querySelector(
  ".camote__amarillo__cta"
);
const modalCamoteAmarillo = document.querySelector(".modal__camote__amarillo");
const closeModalCamoteAmarillo = document.querySelector(
  ".modal__close__camote__amarillo"
);

openModalCamoteAmarillo.addEventListener("click", (e) => {
  e.preventDefault();
  modalCamoteAmarillo.classList.add("modal--show");
});

closeModalCamoteAmarillo.addEventListener("click", (e) => {
  e.preventDefault();
  modalCamoteAmarillo.classList.remove("modal--show");
});

/* M - Camote blanco */

const openModalCamoteBlanco = document.querySelector(".camote__blanco__cta");
const modalCamoteBlanco = document.querySelector(".modal__camote__blanco");
const closeModalCamoteBlanco = document.querySelector(
  ".modal__close__camote__blanco"
);

openModalCamoteBlanco.addEventListener("click", (e) => {
  e.preventDefault();
  modalCamoteBlanco.classList.add("modal--show");
});

closeModalCamoteBlanco.addEventListener("click", (e) => {
  e.preventDefault();
  modalCamoteBlanco.classList.remove("modal--show");
});

/* M - Camote morado */

const openModalCamoteMorado = document.querySelector(".camote__morado__cta");
const modalCamoteMorado = document.querySelector(".modal__camote__morado");
const closeModalCamoteMorado = document.querySelector(
  ".modal__close__camote__morado"
);

openModalCamoteMorado.addEventListener("click", (e) => {
  e.preventDefault();
  modalCamoteMorado.classList.add("modal--show");
});

closeModalCamoteMorado.addEventListener("click", (e) => {
  e.preventDefault();
  modalCamoteMorado.classList.remove("modal--show");
});
