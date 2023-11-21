/* originally authored by AlexCGDesign - https://github.com/AlexCGDesign/MODAL */

const openModalMandarina = document.querySelector(".mandarina__cta");
const modalMandarina = document.querySelector(".modal__mandarina");
const closeModalMandarina = document.querySelector(".modal__close__mandarina");

openModalMandarina.addEventListener("click", (e) => {
  e.preventDefault();
  modalMandarina.classList.add("modal--show");
});

closeModalMandarina.addEventListener("click", (e) => {
  e.preventDefault();
  modalMandarina.classList.remove("modal--show");
});
