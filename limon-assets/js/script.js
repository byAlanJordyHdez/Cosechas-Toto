/* originally authored by AlexCGDesign - https://github.com/AlexCGDesign/MODAL */

const openModalLimonCriollo = document.querySelector(".limon__criollo__cta");
const modalLimonCriollo = document.querySelector(".modal__limon__criollo");
const closeModalLimonCriollo = document.querySelector(
  ".modal__close__limon__criollo"
);

openModalLimonCriollo.addEventListener("click", (e) => {
  e.preventDefault();
  modalLimonCriollo.classList.add("modal--show");
});

closeModalLimonCriollo.addEventListener("click", (e) => {
  e.preventDefault();
  modalLimonCriollo.classList.remove("modal--show");
});
