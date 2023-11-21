/* originally authored by AlexCGDesign - https://github.com/AlexCGDesign/MODAL */

const openModalPitahaya = document.querySelector(".pitahaya__cta");
const modalPitahaya = document.querySelector(".modal__pitahaya");
const closeModalPitahaya = document.querySelector(".modal__close__pitahaya");

openModalPitahaya.addEventListener("click", (e) => {
  e.preventDefault();
  modalPitahaya.classList.add("modal--show");
});

closeModalPitahaya.addEventListener("click", (e) => {
  e.preventDefault();
  modalPitahaya.classList.remove("modal--show");
});
