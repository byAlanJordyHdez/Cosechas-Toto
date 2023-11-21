/* originally authored by AlexCGDesign - https://github.com/AlexCGDesign/MODAL */

const openModalCalabaza = document.querySelector(".calabaza__cta");
const modalCalabaza = document.querySelector(".modal__calabaza");
const closeModalCalabaza = document.querySelector(".modal__close__calabaza");

openModalCalabaza.addEventListener("click", (e) => {
  e.preventDefault();
  modalCalabaza.classList.add("modal--show");
});

closeModalCalabaza.addEventListener("click", (e) => {
  e.preventDefault();
  modalCalabaza.classList.remove("modal--show");
});
