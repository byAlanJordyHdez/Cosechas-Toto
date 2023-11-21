/* originally authored by AlexCGDesign - https://github.com/AlexCGDesign/MODAL */

const openModalNanche = document.querySelector(".nanche__cta");
const modalNanche = document.querySelector(".modal__nanche");
const closeModalNanche = document.querySelector(".modal__close__nanche");

openModalNanche.addEventListener("click", (e) => {
  e.preventDefault();
  modalNanche.classList.add("modal--show");
});

closeModalNanche.addEventListener("click", (e) => {
  e.preventDefault();
  modalNanche.classList.remove("modal--show");
});
