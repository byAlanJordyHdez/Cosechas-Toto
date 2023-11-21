/* originally authored by AlexCGDesign - https://github.com/AlexCGDesign/MODAL */

const openModalAguacateHass = document.querySelector(".aguacate__hass__cta");
const modalAguacateHass = document.querySelector(".modal__aguacate__hass");
const closeModalAguacateHass = document.querySelector(
  ".modal__close__aguacate__hass"
);

openModalAguacateHass.addEventListener("click", (e) => {
  e.preventDefault();
  modalAguacateHass.classList.add("modal--show");
});

closeModalAguacateHass.addEventListener("click", (e) => {
  e.preventDefault();
  modalAguacateHass.classList.remove("modal--show");
});

/* M - Aguacate oloroso */

const openModalAguacateOloroso = document.querySelector(
  ".aguacate__oloroso__cta"
);
const modalAguacateOloroso = document.querySelector(
  ".modal__aguacate__oloroso"
);
const closeModalAguacateOloroso = document.querySelector(
  ".modal__close__aguacate__oloroso"
);

openModalAguacateOloroso.addEventListener("click", (e) => {
  e.preventDefault();
  modalAguacateOloroso.classList.add("modal--show");
});

closeModalAguacateOloroso.addEventListener("click", (e) => {
  e.preventDefault();
  modalAguacateOloroso.classList.remove("modal--show");
});
