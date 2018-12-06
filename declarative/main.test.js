const {
  addItem,
  completeItem,
  showList,
} = require('./main');

describe('Todo Item', () => {
  test('should be appended to existing items', () => {
    // list should have one thing
    let list = [{ name: 'do homework', done: false }];
    // run the function
    const item = "do chores";

    list = addItem(item, list);

    // list should have two and in proper order
    expect(list.length).toBe(2);
    expect(list[1].name).toBe(item);
    expect(list[1].done).toBe(false);
  });

  // sanitize input
});

describe('Completing Items', () => {
  test('an undone item should be marked as complete', () => {
    let list = [{ name: 'do homework', done: false }];

    list = completeItem(0, list);

    expect(list[0].done).toBe(true);
  });

  test('an already completed item shouldn\'t change', () => {
    let list = [{ name: 'do homework', done: true }];

    list = completeItem(0, list);

    expect(list).toEqual(list);
  });
});

describe('Rendering Todos', () => {
  test('given a list, change the DOM to show the list', () => {
    // create unordered list
    const ulEl = document.createElement('ul');
    document.body.appendChild(ulEl);

    const list = [{
      name: 'do homework', done: false,
    }, {
      name: 'do chores', done: true,
    }]
    // render the list
    showList(list);

    // should see two list item elements
    const liEls = document.querySelectorAll('li');
    expect(liEls.length).toBe(2);
    // the first should not be done
    expect(liEls[0].className).toBe('');
    // the second should be done
    expect(liEls[1].className).toBe('completed');
  });
});












