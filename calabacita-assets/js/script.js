/* originally authored by AlexCGDesign - https://github.com/AlexCGDesign/MODAL */

/* M - Calabacita criolla */

const openModalCalabacitaCriolla = document.querySelector(
  ".calabacita__criolla__cta"
);
const modalCalabacitaCriolla = document.querySelector(
  ".modal__calabacita__criolla"
);
const closeModalCalabacitaCriolla = document.querySelector(
  ".modal__close__calabacita__criolla"
);

openModalCalabacitaCriolla.addEventListener("click", (e) => {
  e.preventDefault();
  modalCalabacitaCriolla.classList.add("modal--show");
});

closeModalCalabacitaCriolla.addEventListener("click", (e) => {
  e.preventDefault();
  modalCalabacitaCriolla.classList.remove("modal--show");
});

/* M - Calabacita italiana */

const openModalCalabacitaItaliana = document.querySelector(
  ".calabacita__italiana__cta"
);
const modalCalabacitaItaliana = document.querySelector(
  ".modal__calabacita__italiana"
);
const closeModalCalabacitaItaliana = document.querySelector(
  ".modal__close__calabacita__italiana"
);

openModalCalabacitaItaliana.addEventListener("click", (e) => {
  e.preventDefault();
  modalCalabacitaItaliana.classList.add("modal--show");
});

closeModalCalabacitaItaliana.addEventListener("click", (e) => {
  e.preventDefault();
  modalCalabacitaItaliana.classList.remove("modal--show");
});
