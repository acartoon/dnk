const DEFAULT_VAL = 1;
const PARAMS = {
  plus: `plus`,
  minus: `minus`,
}

const btnMin = document.querySelector(`.js-counter-min`);
const btnMax = document.querySelector(`.js-counter-max`);
const count = document.querySelector(`.counter__item--count`);
// const count = countContainer.value

if(count) {
  count.value = DEFAULT_VAL;
  btnMin.addEventListener(`click`, () => {
    counter(PARAMS.minus, count)
  });
  
  btnMax.addEventListener(`click`, () => {
    counter(PARAMS.plus, count)
  });
  
  const counter = (param, count) => {
    let value = Number(count.value);
    if(param === PARAMS.plus) {
      value+=1; 
    } else if(param === PARAMS.minus) {
      value-=1;
      if(value < 1) {
        value = 1
      }
    }
    count.value = value;
  }
}
