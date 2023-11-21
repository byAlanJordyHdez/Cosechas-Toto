/* originally authored by AlexCGDesign - https://github.com/AlexCGDesign/MODAL */

const openModalCruceta = document.querySelector(".cruceta__cta");
const modalCruceta = document.querySelector(".modal__cruceta");
const closeModalCruceta = document.querySelector(".modal__close__cruceta");

openModalCruceta.addEventListener("click", (e) => {
  e.preventDefault();
  modalCruceta.classList.add("modal--show");
});

closeModalCruceta.addEventListener("click", (e) => {
  e.preventDefault();
  modalCruceta.classList.remove("modal--show");
});
