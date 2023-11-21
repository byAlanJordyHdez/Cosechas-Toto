/* originally authored by AlexCGDesign - https://github.com/AlexCGDesign/MODAL */

const openModalGuanabana = document.querySelector(".guanabana__cta");
const modalGuanabana = document.querySelector(".modal__guanabana");
const closeModalGuanabana = document.querySelector(".modal__close__guanabana");

openModalGuanabana.addEventListener("click", (e) => {
  e.preventDefault();
  modalGuanabana.classList.add("modal--show");
});

closeModalGuanabana.addEventListener("click", (e) => {
  e.preventDefault();
  modalGuanabana.classList.remove("modal--show");
});
