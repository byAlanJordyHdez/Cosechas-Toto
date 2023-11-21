/* originally authored by AlexCGDesign - https://github.com/AlexCGDesign/MODAL */

const openModalCiruela = document.querySelector(".ciruela__cta");
const modalCiruela = document.querySelector(".modal__ciruela");
const closeModalCiruela = document.querySelector(".modal__close__ciruela");

openModalCiruela.addEventListener("click", (e) => {
  e.preventDefault();
  modalCiruela.classList.add("modal--show");
});

closeModalCiruela.addEventListener("click", (e) => {
  e.preventDefault();
  modalCiruela.classList.remove("modal--show");
});
