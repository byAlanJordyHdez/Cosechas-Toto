/* originally authored by AlexCGDesign - https://github.com/AlexCGDesign/MODAL */

const openModalHojaDePlatano = document.querySelector(
  ".hoja__de__platano__cta"
);
const modalHojaDePlatano = document.querySelector(".modal__hoja__de__platano");
const closeModalHojaDePlatano = document.querySelector(
  ".modal__close__hoja__de__platano"
);

openModalHojaDePlatano.addEventListener("click", (e) => {
  e.preventDefault();
  modalHojaDePlatano.classList.add("modal--show");
});

closeModalHojaDePlatano.addEventListener("click", (e) => {
  e.preventDefault();
  modalHojaDePlatano.classList.remove("modal--show");
});
