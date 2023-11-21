/* originally authored by AlexCGDesign - https://github.com/AlexCGDesign/MODAL */

const openModalNopal = document.querySelector(".nopal__cta");
const modalNopal = document.querySelector(".modal__nopal");
const closeModalNopal = document.querySelector(".modal__close__nopal");

openModalNopal.addEventListener("click", (e) => {
  e.preventDefault();
  modalNopal.classList.add("modal--show");
});

closeModalNopal.addEventListener("click", (e) => {
  e.preventDefault();
  modalNopal.classList.remove("modal--show");
});
