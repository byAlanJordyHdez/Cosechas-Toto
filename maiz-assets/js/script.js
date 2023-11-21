/* originally authored by AlexCGDesign - https://github.com/AlexCGDesign/MODAL */

const openModalMaiz = document.querySelector(".maiz__cta");
const modalMaiz = document.querySelector(".modal__maiz");
const closeModalMaiz = document.querySelector(".modal__close__maiz");

openModalMaiz.addEventListener("click", (e) => {
  e.preventDefault();
  modalMaiz.classList.add("modal--show");
});

closeModalMaiz.addEventListener("click", (e) => {
  e.preventDefault();
  modalMaiz.classList.remove("modal--show");
});
