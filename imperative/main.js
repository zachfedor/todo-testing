/**
 * Imperative ToDo App
 */

const completeItem = (event) => {
  // get element
  const itemEl = event.target.parentNode;
  // remove Complete button
  itemEl.removeChild(itemEl.lastElementChild);
  // add checkmark
  itemEl.appendChild(document.createTextNode(' √'));
  // style element
  itemEl.classList.add('complete');
};

// const deleteItem = () => {};

const addItem = (event) => {
  event.preventDefault();
  const submission = event.target[0].value;

  const itemEl = document.createElement('li');
  const itemTxt = document.createTextNode(submission);
  itemEl.appendChild(itemTxt);

  // add button that runs completeItem()
  const completeEl = document.createElement('button');
  const completeTxt = document.createTextNode('Complete');
  completeEl.appendChild(completeTxt);
  completeEl.addEventListener('click', completeItem);

  itemEl.appendChild(completeEl);
  const listEl = document.querySelector('ul');
  listEl.appendChild(itemEl);

  // add button that runs deleteItem()
};

const init = () => {
  // add submit event listener
  const formEl = document.querySelector('form');
  formEl.addEventListener('submit', addItem);
};

window.onload = init;




















