import $ from "jquery";

(function() {
  
$(document).ready(function(){
  $('.owl-carousel-img').owlCarousel({
    items: 1,
    dotsEach: true,
    dotData: true,
    pagination : true,
    dots: false,
  });
});
  
$(document).ready(function(){
  $('.owl-carousel-look').owlCarousel({
    // items: 4,
    dotsEach: true,
    dotData: true,
    pagination : true,
    dots: false,
    responsive: {
      0: {
        items: 1
      },
      992: {
        items: 3
      }
    }
  });
});
  
$(document).ready(function(){
  $('.owl-carousel-look__product').owlCarousel({
    // items: 4,
    loop:true, 
    dotsEach: true,
    dotData: true,
    pagination : true,
    dots: true,
    responsive: {
      0: {
        items: 2
      },
      992: {
        items: 5
      }
    }
  });
});


  const addToBasket = document.querySelector(`.card__button .button`);
  const basketIcon = document.querySelector(`.main-nav__count`);
  const offers = document.querySelectorAll(`.offer-btn__item`);
  const alert = document.querySelector(`.window-alert`);
  
  
  function selected(node) {
    return node.classList.contains(`select`);
  }
  
  if(addToBasket) {
    addToBasket.addEventListener(`click`, () => {
      let selected = false;
      offers.forEach((offer) => {
        if(offer.classList.contains(`select`))
        selected = true;
      });
      if(!selected) {
        alert.classList.remove(`d-none`);
      } else {
        basketIcon.innerHTML=3
        addToBasket.innerHTML='В корзине'
      }
    })
  }

  
  offers.forEach((offer) => {
    offer.addEventListener(`click`, () => {
      alert.classList.add(`d-none`);
    })
  })


  const owlCarouselLook = document.querySelector(`.owl-carousel-look`);
  if(owlCarouselLook) {
    const product = owlCarouselLook.querySelectorAll(`.col-12`);

    product.forEach((item) => {
      const triangle = document.querySelector(`.look__triangle`);
      item.addEventListener(`click`, () => {
        item.append(triangle)
      });
    })
  }
})()
