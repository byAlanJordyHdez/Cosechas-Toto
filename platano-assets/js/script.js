/* originally authored by AlexCGDesign - https://github.com/AlexCGDesign/MODAL */

/* M - Plátano bolsa */

const openModalPlatanoBolsa = document.querySelector(".platano__bolsa__cta");
const modalPlatanoBolsa = document.querySelector(".modal__platano__bolsa");
const closeModalPlatanoBolsa = document.querySelector(
  ".modal__close__platano__bolsa"
);

openModalPlatanoBolsa.addEventListener("click", (e) => {
  e.preventDefault();
  modalPlatanoBolsa.classList.add("modal--show");
});

closeModalPlatanoBolsa.addEventListener("click", (e) => {
  e.preventDefault();
  modalPlatanoBolsa.classList.remove("modal--show");
});

/* M - Plátano macho */

const openModalPlatanoMacho = document.querySelector(".platano__macho__cta");
const modalPlatanoMacho = document.querySelector(".modal__platano__macho");
const closeModalPlatanoMacho = document.querySelector(
  ".modal__close__platano__macho"
);

openModalPlatanoMacho.addEventListener("click", (e) => {
  e.preventDefault();
  modalPlatanoMacho.classList.add("modal--show");
});

closeModalPlatanoMacho.addEventListener("click", (e) => {
  e.preventDefault();
  modalPlatanoMacho.classList.remove("modal--show");
});

/* M - Plátano manzano */

const openModalPlatanoManzano = document.querySelector(
  ".platano__manzano__cta"
);
const modalPlatanoManzano = document.querySelector(".modal__platano__manzano");
const closeModalPlatanoManzano = document.querySelector(
  ".modal__close__platano__manzano"
);

openModalPlatanoManzano.addEventListener("click", (e) => {
  e.preventDefault();
  modalPlatanoManzano.classList.add("modal--show");
});

closeModalPlatanoManzano.addEventListener("click", (e) => {
  e.preventDefault();
  modalPlatanoManzano.classList.remove("modal--show");
});

/* M - Plátano roatán */

const openModalPlatanoRoatan = document.querySelector(".platano__roatan__cta");
const modalPlatanoRoatan = document.querySelector(".modal__platano__roatan");
const closeModalPlatanoRoatan = document.querySelector(
  ".modal__close__platano__roatan"
);

openModalPlatanoRoatan.addEventListener("click", (e) => {
  e.preventDefault();
  modalPlatanoRoatan.classList.add("modal--show");
});

closeModalPlatanoRoatan.addEventListener("click", (e) => {
  e.preventDefault();
  modalPlatanoRoatan.classList.remove("modal--show");
});
