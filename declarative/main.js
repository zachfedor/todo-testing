let list = [];


const addItem = (item, list) => {
  list.push({
    name: item,
    done: false,
  });

  return list;
};

const completeItem = (index, list) => {
  list[index].done = true;

  return list;
};

const showList = (list) => {
  const ulEl = document.querySelector('ul');

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

if (typeof module !== 'undefined') {
  module.exports = {
    addItem,
    completeItem,
    showList,
  };
}

