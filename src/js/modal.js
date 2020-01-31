export const openModal = () => {
  const modal = document.querySelector(`.modal`);
  modal.classList.add(`modal--open`);
  const btnClose = modal.querySelector(`.close`);
  const btnApply = modal.querySelector(`.js-apply-modal`);
  btnClose.addEventListener(`click`, closeModal);
  btnApply.addEventListener(`click`, closeModal);
}

export const closeModal = () => {
  const modal = document.querySelector(`.modal`);
  modal.classList.remove('modal--open');
}