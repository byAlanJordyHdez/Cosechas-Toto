/* originally authored by AlexCGDesign - https://github.com/AlexCGDesign/MODAL */

const openModalPapayaMaradol = document.querySelector(".papaya__maradol__cta");
const modalPapayaMaradol = document.querySelector(".modal__papaya__maradol");
const closeModalPapayaMaradol = document.querySelector(
  ".modal__close__papaya__maradol"
);

openModalPapayaMaradol.addEventListener("click", (e) => {
  e.preventDefault();
  modalPapayaMaradol.classList.add("modal--show");
});

closeModalPapayaMaradol.addEventListener("click", (e) => {
  e.preventDefault();
  modalPapayaMaradol.classList.remove("modal--show");
});
