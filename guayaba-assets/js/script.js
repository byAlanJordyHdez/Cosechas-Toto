/* originally authored by AlexCGDesign - https://github.com/AlexCGDesign/MODAL */

const openModalGuayaba = document.querySelector(".guayaba__cta");
const modalGuayaba = document.querySelector(".modal__guayaba");
const closeModalGuayaba = document.querySelector(".modal__close__guayaba");

openModalGuayaba.addEventListener("click", (e) => {
  e.preventDefault();
  modalGuayaba.classList.add("modal--show");
});

closeModalGuayaba.addEventListener("click", (e) => {
  e.preventDefault();
  modalGuayaba.classList.remove("modal--show");
});
