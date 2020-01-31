const toggleAccordion = (elem) => {
  // reset(elem);
  const button = elem.querySelector(`.accordion__head`);
  button.addEventListener(`click`, () => {
    if(elem.classList.contains(`accordion--open`)) {
      elem.classList.remove(`accordion--open`)
    } else {
      elem.classList.add(`accordion--open`);
    }
  });
}

const reset = (elem) => {
  const resetBtn = elem.querySelector(`.filter-list__reset`);
  const inputs = elem.querySelectorAll(`.filter-list__input`);
  resetBtn.addEventListener(`click`, () => {
    console.log(`click`)
    inputs.forEach((input) => resetChecked(input))
  });
}

const resetChecked = (input) => {
  if(input.checked) {
    input.checked = false;
  };
}


const accordionAll = document.querySelectorAll(`.accordion`);
accordionAll.forEach((item) => toggleAccordion(item));