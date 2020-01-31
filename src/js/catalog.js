import {openModal} from './modal';
(function() {

const filterBtn = document.querySelector(`.js-filter-button`);

if(filterBtn) {
  filterBtn.addEventListener(`click`, () => {
    openModal();
    changeSize(searchInput, filterBtn);
  });


  const searchInput = document.querySelector(`.js-button-search`);

  searchInput.addEventListener(`click`, () => {
    const input = searchInput.querySelector(`.search-block__input`);
    input.focus()
    // input.addEventListener(`blur`, changeSize);
    searchInput.classList.add(`search-block--active`);
    filterBtn.classList.add(`button--filter-active`);
  });

  document.addEventListener(`click`, (evt) => {
    if((!evt.target.classList.contains(`js-button-search`)) && (!evt.target.classList.contains(`button-search`))) {
      changeSize(searchInput, filterBtn);
    }
  })

  const changeSize = () => {
    const input = searchInput.querySelector(`.search-block__input`);
    input.value=``
    searchInput.classList.remove(`search-block--active`);
    filterBtn.classList.remove(`button--filter-active`);
  }

  const filterList = document.querySelectorAll(`.filter-list-js`);
  console.log(filterList)


  const resetInput = (container) => {
    const resetBtn = container.querySelector('.filter-list__reset');
    const input = container.querySelectorAll('.filter-list__input');

    resetBtn.addEventListener(`click`, () => {
      console.log(`click`)
      input.forEach((item) => {
        item.checked = false;
      })
    })

  }

  filterList.forEach((filter) => {
    resetInput(filter)
    console.log(filter)
  })
}

const catalogContainer = document.querySelector(`.js-catalog`);

if(catalogContainer) {
  const dataInsert = catalogContainer.innerHTML;
  
  const toAddBtn = document.querySelector(`.js-more`);
  toAddBtn.addEventListener(`click`, () => {
    catalogContainer.insertAdjacentHTML(`beforeEnd` , dataInsert);
  });
}

})()

