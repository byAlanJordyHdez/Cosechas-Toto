/* originally authored by AlexCGDesign - https://github.com/AlexCGDesign/MODAL */

const openModalCoco = document.querySelector(".coco__cta");
const modalCoco = document.querySelector(".modal__coco");
const closeModalCoco = document.querySelector(".modal__close__coco");

openModalCoco.addEventListener("click", (e) => {
  e.preventDefault();
  modalCoco.classList.add("modal--show");
});

closeModalCoco.addEventListener("click", (e) => {
  e.preventDefault();
  modalCoco.classList.remove("modal--show");
});
