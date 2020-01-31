let state = false;

const toggle = () => {
  state = !state;
  if(state) {
    document.body.classList.add('show-main-nav');
  } else {
    document.body.classList.remove('show-main-nav');
    removeActive();
  }
};

const btn = document.querySelector(`.main-nav__btn`);

btn.addEventListener('click', toggle);


const userMenuBtn = document.querySelector(`.main-nav__icon--user`);

userMenuBtn.addEventListener(`click`, () => {
  const userMenu = document.querySelector(`.mobile-wrapper`);
  if(userMenu.classList.contains(`d-none`)) {
    userMenu.classList.remove(`d-none`);

    document.addEventListener(`click`, (evt) => {
      if(!userMenu.contains(evt.target) && evt.target !== userMenuBtn) {
        console.log(`asdfasdf`)
        userMenu.classList.add(`d-none`);
      }
    });
  } else {
    userMenu.classList.add(`d-none`);
  }
});

const catalogItem = document.querySelectorAll(`.js-main-nav`);
const btnClose = document.querySelector(`.js-close`);
btnClose.addEventListener('click', () => {
  const wrapper = document.querySelector(`.main-nav__wrapper-lvl2.active`);
  if(wrapper) {
    wrapper.classList.remove(`active`)
  } 
  toggle();
});

catalogItem.forEach((item) => {
  item.addEventListener(`click`, (evt) => {
    evt.preventDefault();
    openMobile(item);
  })
})

const openMobile = (catalogItem) => {
  if(catalogItem.nextElementSibling) {
    const submenu = catalogItem.nextElementSibling;
    submenu.classList.add(`active`);
    const back = submenu.querySelector(`.main-nav__back`);
    back.addEventListener(`click`, () => {
      submenu.classList.remove(`active`)
    });
  }
}