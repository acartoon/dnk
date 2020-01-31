const selectedBtn = (node) => {
  node.classList.add(`select`);
}

const offerBtn = document.querySelectorAll(`.offer-btn__item`);

offerBtn.forEach((btn) => {
  btn.addEventListener(`click`, () => {
    offerBtn.forEach((btn) => btn.classList.remove(`select`));
    selectedBtn(btn)
  });
});