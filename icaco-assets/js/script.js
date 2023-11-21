/* originally authored by AlexCGDesign - https://github.com/AlexCGDesign/MODAL */

const openModalIcaco = document.querySelector(".icaco__cta");
const modalIcaco = document.querySelector(".modal__icaco");
const closeModalIcaco = document.querySelector(".modal__close__icaco");

openModalIcaco.addEventListener("click", (e) => {
  e.preventDefault();
  modalIcaco.classList.add("modal--show");
});

closeModalIcaco.addEventListener("click", (e) => {
  e.preventDefault();
  modalIcaco.classList.remove("modal--show");
});
