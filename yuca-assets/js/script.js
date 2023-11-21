/* originally authored by AlexCGDesign - https://github.com/AlexCGDesign/MODAL */

const openModalYuca = document.querySelector(".yuca__cta");
const modalYuca = document.querySelector(".modal__yuca");
const closeModalYuca = document.querySelector(".modal__close__yuca");

openModalYuca.addEventListener("click", (e) => {
  e.preventDefault();
  modalYuca.classList.add("modal--show");
});

closeModalYuca.addEventListener("click", (e) => {
  e.preventDefault();
  modalYuca.classList.remove("modal--show");
});
