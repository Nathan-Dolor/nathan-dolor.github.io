const openButton1 = document.querySelector("[project-open-modal-1]");
const closeButton1 = document.querySelector("[project-close-modal-1]");
const modal1 = document.querySelector("[project-modal-1]");

const openButton2 = document.querySelector("[project-open-modal-2]");
const closeButton2 = document.querySelector("[project-close-modal-2]");
const modal2 = document.querySelector("[project-modal-2]");

const openButton3 = document.querySelector("[project-open-modal-3]");
const closeButton3 = document.querySelector("[project-close-modal-3]");
const modal3 = document.querySelector("[project-modal-3]");

openButton1.addEventListener("click", () => {
  modal1.showModal();
  modal1.focus();
  modal1.blur();
});

closeButton1.addEventListener("click", () => {
  modal1.close();
});

openButton2.addEventListener("click", () => {
  modal2.showModal();
  modal2.focus();
  modal2.blur();
});

closeButton2.addEventListener("click", () => {
  modal2.close();
});

openButton3.addEventListener("click", () => {
  modal3.showModal();
  modal3.focus();
  modal3.blur();
});

closeButton3.addEventListener("click", () => {
  modal3.close();
});
