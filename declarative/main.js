/**
 * App State
 */
let list = [];

/**
 * Pure Functions, easily testable
 */
const addItem = (item, list) => {
  return [...list, {
    name: item,
    done: false,
  }];
};

const completeItem = (index, list) => {
  list[index].done = true; // technically not pure, but it's the easy way
  return list;
};


/**
 * Impure Functions, requires mocking and DOM integration
 */
const addItemHandler = (event) => {
  event.preventDefault();
  list = addItem(event.target[0].value, list);
  event.target[0].value = "";
  showList(list);
};

const showList = (list) => {
  const ulEl = document.querySelector('ul');
  ulEl.innerHTML = "";

  for(let item of list) {
    const liEl = document.createElement('li');
    const liTxt = document.createTextNode(item.name);
    liEl.appendChild(liTxt);

    if (item.done) {
      liEl.classList.add('completed');
    }

    ulEl.appendChild(liEl);
  }
};

const init = () => {
  const ulEl = document.createElement('ul');
  document.body.appendChild(ulEl);

  const formEl = document.createElement('form');
  formEl.addEventListener('submit', addItemHandler);
  document.body.appendChild(formEl);

  const inputEl = document.createElement('input');
  inputEl.setAttribute('type', 'text');
  formEl.appendChild(inputEl);

  const submitEl = document.createElement('input');
  submitEl.setAttribute('type', 'submit');
  submitEl.value = 'Add Item';
  formEl.appendChild(submitEl);
};


/**
 * Onload function and exports
 */
window.onload = init;

if (typeof module !== 'undefined') {
  module.exports = {
    addItem,
    completeItem,
    addItemHandler,
    showList,
    init,
  };
}

