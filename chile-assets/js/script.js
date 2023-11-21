/* originally authored by AlexCGDesign - https://github.com/AlexCGDesign/MODAL */

/* M - Chile chiltepín */

const openModalChileChiltepin = document.querySelector(
  ".chile__chiltepin__cta"
);
const modalChileChiltepin = document.querySelector(".modal__chile__chiltepin");
const closeModalChileChiltepin = document.querySelector(
  ".modal__close__chile__chiltepin"
);

openModalChileChiltepin.addEventListener("click", (e) => {
  e.preventDefault();
  modalChileChiltepin.classList.add("modal--show");
});

closeModalChileChiltepin.addEventListener("click", (e) => {
  e.preventDefault();
  modalChileChiltepin.classList.remove("modal--show");
});

/* M - Chile habanero */

const openModalChileHabanero = document.querySelector(".chile__habanero__cta");
const modalChileHabanero = document.querySelector(".modal__chile__habanero");
const closeModalChileHabanero = document.querySelector(
  ".modal__close__chile__habanero"
);

openModalChileHabanero.addEventListener("click", (e) => {
  e.preventDefault();
  modalChileHabanero.classList.add("modal--show");
});

closeModalChileHabanero.addEventListener("click", (e) => {
  e.preventDefault();
  modalChileHabanero.classList.remove("modal--show");
});

/* M - Chile jalapeño */

const openModalChileJalapeno = document.querySelector(".chile__jalapeno__cta");
const modalChileJalapeno = document.querySelector(".modal__chile__jalapeno");
const closeModalChileJalapeno = document.querySelector(
  ".modal__close__chile__jalapeno"
);

openModalChileJalapeno.addEventListener("click", (e) => {
  e.preventDefault();
  modalChileJalapeno.classList.add("modal--show");
});

closeModalChileJalapeno.addEventListener("click", (e) => {
  e.preventDefault();
  modalChileJalapeno.classList.remove("modal--show");
});

/* M - Chile serrano */

const openModalChileSerrano = document.querySelector(".chile__serrano__cta");
const modalChileSerrano = document.querySelector(".modal__chile__serrano");
const closeModalChileSerrano = document.querySelector(
  ".modal__close__chile__serrano"
);

openModalChileSerrano.addEventListener("click", (e) => {
  e.preventDefault();
  modalChileSerrano.classList.add("modal--show");
});

closeModalChileSerrano.addEventListener("click", (e) => {
  e.preventDefault();
  modalChileSerrano.classList.remove("modal--show");
});
