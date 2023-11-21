/* originally authored by AlexCGDesign - https://github.com/AlexCGDesign/MODAL */

/* M - Mango de clase */

const openModalMangoDeClase = document.querySelector(".mango__de__clase__cta");
const modalMangoDeClase = document.querySelector(".modal__mango__de__clase");
const closeModalMangoDeClase = document.querySelector(
  ".modal__close__mango__de__clase"
);

openModalMangoDeClase.addEventListener("click", (e) => {
  e.preventDefault();
  modalMangoDeClase.classList.add("modal--show");
});

closeModalMangoDeClase.addEventListener("click", (e) => {
  e.preventDefault();
  modalMangoDeClase.classList.remove("modal--show");
});

/* M - Mango manila */

const openModalMangoManila = document.querySelector(".mango__manila__cta");
const modalMangoManila = document.querySelector(".modal__mango__manila");
const closeModalMangoManila = document.querySelector(
  ".modal__close__mango__manila"
);

openModalMangoManila.addEventListener("click", (e) => {
  e.preventDefault();
  modalMangoManila.classList.add("modal--show");
});

closeModalMangoManila.addEventListener("click", (e) => {
  e.preventDefault();
  modalMangoManila.classList.remove("modal--show");
});
