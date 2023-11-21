/* originally authored by AlexCGDesign - https://github.com/AlexCGDesign/MODAL */

const openModalZapote = document.querySelector(".zapote__cta");
const modalZapote = document.querySelector(".modal__zapote");
const closeModalZapote = document.querySelector(".modal__close__zapote");

openModalZapote.addEventListener("click", (e) => {
  e.preventDefault();
  modalZapote.classList.add("modal--show");
});

closeModalZapote.addEventListener("click", (e) => {
  e.preventDefault();
  modalZapote.classList.remove("modal--show");
});
