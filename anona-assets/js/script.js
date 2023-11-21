/* originally authored by AlexCGDesign - https://github.com/AlexCGDesign/MODAL */

const openModalAnona = document.querySelector(".anona__cta");
const modalAnona = document.querySelector(".modal__anona");
const closeModalAnona = document.querySelector(".modal__close__anona");

openModalAnona.addEventListener("click", (e) => {
  e.preventDefault();
  modalAnona.classList.add("modal--show");
});

closeModalAnona.addEventListener("click", (e) => {
  e.preventDefault();
  modalAnona.classList.remove("modal--show");
});
