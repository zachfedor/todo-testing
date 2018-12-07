const {
  addItem,
  completeItem,
  addItemHandler,
  showList,
  init,
} = require('./main');

beforeEach(() => {
  // reset the document
  document.body.innerHTML = '';
});

/**
 * Unit Tests
 */
describe('addItem', () => {
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
});

describe('completeItem', () => {
  test('should mark a single item as complete', () => {
    let list = [{ name: 'do homework', done: false }];

    list = completeItem(0, list);

    expect(list[0].done).toBe(true);
  });

  test('should not change a completed item', () => {
    let list = [{ name: 'do homework', done: true }];

    list = completeItem(0, list);

    expect(list).toEqual(list);
  });
});


/**
 * Integration Tests
 */
describe('showList', () => {
  test('should render an <li> for each todo item', () => {
    // setup
    const ulEl = document.createElement('ul');
    document.body.appendChild(ulEl);
    const list = [{
      name: 'do homework', done: false,
    }, {
      name: 'do chores', done: true,
    }];

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

describe('addItemHandler', () => {
  test('should get text from a form input, update state, and run showList', () => {
    // setup
    const mockEvent = {
      preventDefault: () => {},
      target: [{ value: 'go get milk' }],
    };
    const ulEl = document.createElement('ul');
    document.body.appendChild(ulEl);
    expect(document.querySelectorAll('li').length).toBe(0);

    // call the event handler with a fake event object
    addItemHandler(mockEvent);

    expect(document.querySelectorAll('li').length).toBe(1);
  });
})

describe('init', () => {
  test('should add form and initial empty ul', () => {
    // document should be empty
    expect(document.body.firstChild).toBeNull();

    // run the setup function
    init();

    // check todo list
    const ulEl = document.querySelector('ul');
    expect(ulEl).not.toBeNull();
    expect(ulEl.firstChild).toBeNull();

    // check form
    expect(document.querySelector('form')).not.toBeNull();

    // check form inputs
    const inputEls = document.querySelectorAll('input');
    expect(inputEls.length).toBe(2);
    expect(inputEls[0].type).toBe('text');
    expect(inputEls[1].type).toBe('submit');
  });
})
