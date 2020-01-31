// import {openModal, closeModal} from './modal';

const SHIPPING = {
  russianPost: {
    name: `Почта России`,
    price: `2 500`,
    time: `2 дня`
  },
  sdek: {
    name: `СДЭК`,
    price: `1 200`,
    time: `3 дня`
  },
  dhl: {
    name: `DHL`,
    price: `3 200`,
    time: `1 день`
  },
  box: {
    name: `боксберри`,
    price: `800`,
    time: `2 дня`
  },
}

const PAYMENTMETHOD = {
  card: `Банковская карта`,
  pay: `PayPall`,
  apple: `Apple Pay`,
  sber: `Сбербанк онлайн`,
}

const getPayment = (method) => {
  const methodBtn = document.querySelector(`.button > span`)
  methodBtn.innerHTML = PAYMENTMETHOD[method];

}
const getDelivery = (value, modal) => {
  modal.querySelector(`h3`).innerHTML = `Службы доставки`
  document.querySelector('.shipping__title').innerHTML = SHIPPING[value].name;
  document.querySelector('.shipping__price').innerHTML = SHIPPING[value].price + ' ₽'
  document.querySelector('.shipping__time').innerHTML = SHIPPING[value].time
}

const openModal = (modal, form, header) => {
  modal.querySelector(`h3`).innerHTML = header;
  modal.classList.add('modal--open');
  form.classList.remove(`d-none`);
}

const getModal = (button, modal) => {
  if(button.getAttribute(`data-payment`) === `changeDelivery`) {
    button.addEventListener(`click`, () => {
      openModal(modal, deliveryForm, `Выберете службу доставки`);
    })
  } else if(button.getAttribute(`data-payment`) === `changePayment`) {
    button.addEventListener(`click`, () => {
      openModal(modal, paymentForm, `Выберете платежную системы`);
    })
  } else if(button.getAttribute(`data-payment`) === `takeDelivery`) {
    button.addEventListener(`click`, (evt) => {
      evt.preventDefault();
      const value = deliveryForm.elements.delivery.value;
      getDelivery(value, modal);
      modal.classList.remove('modal--open');
      deliveryForm.classList.add(`d-none`);
    });
  } else if(button.getAttribute(`data-payment`) === `takePaymetn`) {
    button.addEventListener(`click`, (evt) => {
      evt.preventDefault();
      const value = paymentForm.elements.payment.value;
      getPayment(value, modal);
      modal.classList.remove('modal--open');
      paymentForm.classList.add(`d-none`);
    });
  }
};

const modal = document.querySelector('.modal');
const buttons = document.querySelectorAll('[data-payment]');
buttons.forEach((button) => {
  getModal(button, modal);
})

